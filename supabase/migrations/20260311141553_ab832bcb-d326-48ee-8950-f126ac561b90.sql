
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
  team_size text,
  current_crm text,
  variant text,
  ghl_delivered boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- No public access — only the edge function (service role) can insert/read
CREATE POLICY "Service role only" ON public.leads FOR ALL USING (false);
