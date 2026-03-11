import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// Strict server-side validation rules mirroring client-side zod schemas
const FORM_SCHEMAS: Record<string, Record<string, { type: string; maxLength: number; required?: boolean; minLength?: number }>> = {
  reserve_seat: {
    name:                 { type: "string", required: true,  maxLength: 100 },
    email:                { type: "string", required: true,  maxLength: 255 },
    phone:                { type: "string", required: true,  maxLength: 20,  minLength: 7 },
    brokerage:            { type: "string", required: false, maxLength: 100 },
    city:                 { type: "string", required: false, maxLength: 100 },
    role:                 { type: "string", required: true,  maxLength: 50  },
    attendancePreference: { type: "string", required: false, maxLength: 30  },
  },
  workshop_outline: {
    name:             { type: "string", required: true,  maxLength: 100 },
    email:            { type: "string", required: true,  maxLength: 255 },
    phone:            { type: "string", required: false, maxLength: 20  },
    outlineDocumentUrl:{ type: "string", required: false, maxLength: 500 },
    requestedDelivery:{ type: "string", required: false, maxLength: 30  },
  },
  crm_demo: {
    name:       { type: "string", required: true,  maxLength: 100 },
    email:      { type: "string", required: true,  maxLength: 255 },
    phone:      { type: "string", required: true,  maxLength: 20, minLength: 7 },
    teamSize:   { type: "string", required: false, maxLength: 50  },
    currentCRM: { type: "string", required: false, maxLength: 100 },
    variant:    { type: "string", required: false, maxLength: 20  },
  },
  crm_waitlist: {
    name:    { type: "string", required: true,  maxLength: 100 },
    email:   { type: "string", required: true,  maxLength: 255 },
    phone:   { type: "string", required: false, maxLength: 20 },
    variant: { type: "string", required: false, maxLength: 20 },
  },
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED_FORM_TYPES = ["reserve_seat", "workshop_outline", "crm_demo", "crm_waitlist"] as const;
type FormType = typeof ALLOWED_FORM_TYPES[number];

const WEBHOOK_ENV_KEYS: Record<FormType, string> = {
  reserve_seat:     "GHL_RESERVE_WEBHOOK_URL",
  workshop_outline: "GHL_OUTLINE_WEBHOOK_URL",
  crm_demo:         "GHL_CRM_DEMO_WEBHOOK_URL",
  crm_waitlist:     "GHL_CRM_WAITLIST_WEBHOOK_URL",
};

// Map camelCase payload fields to snake_case DB columns
const FIELD_TO_COLUMN: Record<string, string> = {
  attendancePreference: "attendance_preference",
  outlineDocumentUrl: "outline_document_url",
  requestedDelivery: "requested_delivery",
  teamSize: "team_size",
  currentCRM: "current_crm",
};

function sanitizeString(val: unknown): string | null {
  if (val === null || val === undefined) return null;
  if (typeof val !== "string") return null;
  return val.replace(/[\x00-\x1F\x7F]/g, "").trim();
}

function validatePayload(
  formType: FormType,
  payload: Record<string, unknown>,
): { valid: true; sanitized: Record<string, string | null> } | { valid: false; error: string } {
  const schema = FORM_SCHEMAS[formType];
  const sanitized: Record<string, string | null> = {};

  for (const [field, rules] of Object.entries(schema)) {
    const raw = payload[field];
    const val = sanitizeString(raw);

    if (rules.required && (val === null || val === "")) {
      return { valid: false, error: `Field "${field}" is required.` };
    }

    if (val !== null && val !== "") {
      if (rules.minLength && val.length < rules.minLength) {
        return { valid: false, error: `Field "${field}" is too short.` };
      }
      if (val.length > rules.maxLength) {
        return { valid: false, error: `Field "${field}" exceeds max length of ${rules.maxLength}.` };
      }
      if (field === "email" && !EMAIL_RE.test(val)) {
        return { valid: false, error: `Field "email" is not a valid email address.` };
      }
    }

    sanitized[field] = val && val !== "" ? val : null;
  }

  return { valid: true, sanitized };
}

function toDbRow(formType: string, sanitized: Record<string, string | null>): Record<string, unknown> {
  const row: Record<string, unknown> = { form_type: formType };
  for (const [key, value] of Object.entries(sanitized)) {
    const col = FIELD_TO_COLUMN[key] || key;
    row[col] = value;
  }
  return row;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  if (typeof body !== "object" || body === null) {
    return new Response(JSON.stringify({ error: "Body must be a JSON object" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const { formType, payload } = body as Record<string, unknown>;

  if (!ALLOWED_FORM_TYPES.includes(formType as FormType)) {
    return new Response(JSON.stringify({ error: "Invalid formType" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  if (typeof payload !== "object" || payload === null || Array.isArray(payload)) {
    return new Response(JSON.stringify({ error: "payload must be a JSON object" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const validation = validatePayload(formType as FormType, payload as Record<string, unknown>);
  if (!validation.valid) {
    return new Response(JSON.stringify({ error: validation.error }), {
      status: 422,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  // ── Persist lead to database ──
  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const supabase = createClient(supabaseUrl, serviceRoleKey);

  const dbRow = toDbRow(formType as string, validation.sanitized);

  const { data: insertedLead, error: dbError } = await supabase
    .from("leads")
    .insert(dbRow)
    .select("id")
    .single();

  if (dbError) {
    console.error("Failed to insert lead into DB", dbError);
    // Don't block the user — still attempt GHL delivery
  }

  // ── Attempt GHL webhook delivery ──
  const webhookUrl =
    Deno.env.get(WEBHOOK_ENV_KEYS[formType as FormType]) ??
    Deno.env.get("GHL_WEBHOOK_URL");

  let ghlDelivered = false;
  let ghlStatus: number | undefined;
  let ghlReason: string | undefined;

  if (!webhookUrl) {
    console.warn(`No webhook URL configured for formType: ${formType}`);
    ghlReason = "missing_webhook";
  } else {
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "realtor-ai-accelerator",
          formType,
          submittedAt: new Date().toISOString(),
          ...validation.sanitized,
        }),
      });

      ghlStatus = response.status;
      if (response.ok) {
        ghlDelivered = true;
      } else {
        console.error(`GHL webhook returned ${response.status}`);
        ghlReason = "http_error";
      }
    } catch (err) {
      console.error("GHL webhook fetch failed", err);
      ghlReason = "network_error";
    }
  }

  // ── Update delivery status in DB ──
  if (insertedLead?.id && ghlDelivered) {
    await supabase
      .from("leads")
      .update({ ghl_delivered: true })
      .eq("id", insertedLead.id);
  }

  // ── Response ──
  const result = ghlDelivered
    ? { delivered: true, status: ghlStatus }
    : { delivered: false, reason: ghlReason, ...(ghlStatus ? { status: ghlStatus } : {}) };

  return new Response(JSON.stringify(result), {
    status: 200,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
});
