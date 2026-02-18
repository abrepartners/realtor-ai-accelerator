type GHLFormType = "reserve_seat" | "workshop_outline" | "crm_demo" | "crm_waitlist";

type GHLSubmitResult =
  | { delivered: true; status: number }
  | { delivered: false; reason: "missing_webhook" | "network_error" | "http_error"; status?: number };

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;

export const submitLeadToGHL = async (
  formType: GHLFormType,
  payload: Record<string, unknown>,
): Promise<GHLSubmitResult> => {
  try {
    const response = await fetch(
      `${SUPABASE_URL}/functions/v1/submit-ghl-lead`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": SUPABASE_ANON_KEY,
        },
        body: JSON.stringify({ formType, payload }),
      },
    );

    if (!response.ok) {
      return { delivered: false, reason: "http_error", status: response.status };
    }

    const result = await response.json() as GHLSubmitResult;
    return result;
  } catch (error) {
    console.error("GHL submission failed", error);
    return { delivered: false, reason: "network_error" };
  }
};
