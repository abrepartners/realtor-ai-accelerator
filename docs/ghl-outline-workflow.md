# GHL Outline Workflow Setup

This guide configures the **Get the Workshop Outline** flow so leads are tagged, routed, and emailed the syllabus link from their own workflow lane.

## What the website sends

When someone submits the outline form, payload includes:

- `formType` = `workshop_outline`
- `name`
- `email`
- `phone`
- `outlineDocumentUrl`
- `requestedDelivery` (always `"email"`)
- `submittedAt`
- `source`

## Build a dedicated workflow in GoHighLevel

1. Create a new workflow named `Workshop Outline Delivery`.
2. Add trigger: `Inbound Webhook` (webhook received).
3. Copy the generated webhook URL.
4. In Supabase project secrets, set:
   - `GHL_OUTLINE_WEBHOOK_URL` = copied webhook URL
5. Save + deploy secrets.

## Configure actions inside the workflow

1. **Create/Update Contact**
   - Map name, email, phone from webhook payload.
2. **Add Tag**
   - Tag value: `workshop-outline-request`.
3. **Create/Update Opportunity**
   - Pipeline: `Workshop Leads`
   - Stage: `Outline Requested`
4. **Send Email**
   - Recipient: contact email from payload.
   - Include dynamic link using `outlineDocumentUrl`.
   - Suggested subject: `Your AI Workshop Syllabus`.
5. **Internal Notification** (recommended)
   - Notify your internal email/slack channel for each new outline request.

## Validation checklist

1. Submit the website outline form once with a test email.
2. Confirm contact is created/updated in GHL.
3. Confirm tag `workshop-outline-request` is applied.
4. Confirm opportunity lands in `Workshop Leads` > `Outline Requested`.
5. Confirm test inbox receives email containing the `outlineDocumentUrl`.

## Notes

- No GHL API key or location ID is required for this webhook-based path.
- Website code already routes outline submissions through Supabase Edge Function first, then forwards to `GHL_OUTLINE_WEBHOOK_URL`.
