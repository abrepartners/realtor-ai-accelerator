

# Fix: Where Do Registrations Go?

## Current Problem
Form submissions hit the backend edge function but are **silently dropped** because no GHL webhook URLs are configured. Data is not persisted anywhere.

## Proposed Solution

### 1. Store leads in a database table (recommended safety net)
Create a `leads` table so every submission is saved regardless of whether the GHL webhook succeeds.

```sql
CREATE TABLE public.leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  form_type text NOT NULL,
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  brokerage text,
  city text,
  role text,
  attendance_preference text,
  outline_document_url text,
  requested_delivery text,
  ghl_delivered boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- No public read/write — only the edge function (service role) inserts
CREATE POLICY "Service role only" ON public.leads FOR ALL USING (false);
```

### 2. Update the edge function
- Insert every validated submission into the `leads` table using the service role key
- Then attempt GHL webhook delivery
- Update `ghl_delivered` to `true` on success

### 3. Configure GHL webhook secrets
You'll need to add these secrets from your GoHighLevel account:
- `GHL_RESERVE_WEBHOOK_URL`
- `GHL_OUTLINE_WEBHOOK_URL`  
- `GHL_CRM_WAITLIST_WEBHOOK_URL`

Without these, data still won't reach GHL — but with the database table, **no lead will be lost**.

## Summary
- **Database table** = permanent record of every registration (viewable in your backend)
- **GHL webhooks** = real-time forwarding to GoHighLevel for automations/email
- Both work independently so you have a safety net

