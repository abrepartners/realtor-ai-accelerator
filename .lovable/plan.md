

## Setting GHL Webhook Secrets

I need to switch to implementation mode to store these three backend secrets so the edge function can forward leads to GoHighLevel:

| Secret Name | Value |
|---|---|
| `GHL_RESERVE_WEBHOOK_URL` | `https://services.leadconnectorhq.com/hooks/iXhH37718q9nZnf4tkgF/webhook-trigger/atXwiZyBSKl4W5uyTYzQ` |
| `GHL_OUTLINE_WEBHOOK_URL` | `https://services.leadconnectorhq.com/hooks/iXhH37718q9nZnf4tkgF/webhook-trigger/1c0a2fb6-5d36-4813-85bb-012c5acad533` |
| `GHL_CRM_WAITLIST_WEBHOOK_URL` | `https://services.leadconnectorhq.com/hooks/iXhH37718q9nZnf4tkgF/webhook-trigger/ad511b2b-a256-4b2c-8a24-43c037d5d176` |

### Steps
1. Use the `add_secret` tool three times to store each webhook URL as a backend secret accessible by the `submit-ghl-lead` edge function.
2. Redeploy the edge function to pick up the new secrets.
3. Test with a curl call to confirm delivery works end-to-end.

No code changes are needed — the edge function already reads these exact secret names.

