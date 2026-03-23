

## Push 7 Pre-Webhook Leads to GoHighLevel

The leads table has records where `ghl_delivered = false` that were captured before the webhooks were configured. I'll push each one to the appropriate GHL webhook and mark them as delivered.

### Steps

1. **Query the database** for all leads with `ghl_delivered = false` to get their exact data (name, email, phone, form_type, etc.)
2. **Call the edge function** `submit-ghl-lead` for each lead using `curl`, which will forward to the correct GHL webhook based on `form_type`
3. **Update `ghl_delivered = true`** for each successfully delivered lead via a database migration (since we only have select/insert access via psql)

### Technical Details

- Use `supabase--curl_edge_functions` to invoke `submit-ghl-lead` for each lead, passing the original payload
- The edge function will re-insert a duplicate row, so after delivery I'll also need to handle deduplication or alternatively call the GHL webhooks directly via the edge function's curl capability
- Alternative cleaner approach: create a small one-off edge function or use `supabase--curl_edge_functions` to call the GHL webhooks directly, then update delivery status via migration

### Deduplication Note

Since the edge function inserts a new lead row on each call, I'll instead call the GHL webhooks directly (bypassing the edge function) to avoid duplicates, then run a migration to set `ghl_delivered = true` on the original rows.

