type GHLFormType = "reserve_seat" | "workshop_outline" | "crm_waitlist";

type GHLSubmitResult =
  | { delivered: true; status: number }
  | { delivered: false; reason: "missing_webhook" | "network_error" | "http_error"; status?: number };

const WEBHOOK_KEYS: Record<GHLFormType, string> = {
  reserve_seat: "VITE_GHL_RESERVE_WEBHOOK_URL",
  workshop_outline: "VITE_GHL_OUTLINE_WEBHOOK_URL",
  crm_waitlist: "VITE_GHL_CRM_WAITLIST_WEBHOOK_URL",
};

const readEnv = (key: string) => {
  const value = import.meta.env[key];
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
};

const submitViaSupabaseFunction = async (
  formType: GHLFormType,
  payload: Record<string, unknown>,
): Promise<GHLSubmitResult | null> => {
  const supabaseUrl = readEnv("VITE_SUPABASE_URL");
  const supabasePublishableKey = readEnv("VITE_SUPABASE_PUBLISHABLE_KEY");

  if (!supabaseUrl || !supabasePublishableKey) {
    return null;
  }

  try {
    const response = await fetch(`${supabaseUrl}/functions/v1/submit-ghl-lead`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: supabasePublishableKey,
      },
      body: JSON.stringify({ formType, payload }),
    });

    if (!response.ok) {
      return { delivered: false, reason: "http_error", status: response.status };
    }

    const result = (await response.json()) as GHLSubmitResult;
    return result;
  } catch (error) {
    console.error("GHL submission via Supabase failed", error);
    return { delivered: false, reason: "network_error" };
  }
};

export const submitLeadToGHL = async (
  formType: GHLFormType,
  payload: Record<string, unknown>,
): Promise<GHLSubmitResult> => {
  const supabaseResult = await submitViaSupabaseFunction(formType, payload);
  if (supabaseResult) return supabaseResult;

  const webhookUrl = readEnv(WEBHOOK_KEYS[formType]) ?? readEnv("VITE_GHL_WEBHOOK_URL");
  if (!webhookUrl) {
    return { delivered: false, reason: "missing_webhook" };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        source: "realtor-ai-accelerator",
        formType,
        submittedAt: new Date().toISOString(),
        pageUrl: window.location.href,
        ...payload,
      }),
    });

    if (!response.ok) {
      return { delivered: false, reason: "http_error", status: response.status };
    }

    return { delivered: true, status: response.status };
  } catch (error) {
    console.error("GHL submission failed", error);
    return { delivered: false, reason: "network_error" };
  }
};

