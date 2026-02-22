# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

## GoHighLevel (GHL) form wiring

The landing forms can POST leads directly into GHL workflows using webhook URLs.

1. Copy `.env.example` to `.env.local`.
2. Configure one of these delivery paths:
   - Supabase Edge Function (recommended):
     - `VITE_SUPABASE_URL`
     - `VITE_SUPABASE_PUBLISHABLE_KEY`
   - Direct webhook fallback (client-side):
     - `VITE_GHL_WEBHOOK_URL` or form-specific webhook URLs:
       - `VITE_GHL_RESERVE_WEBHOOK_URL`
       - `VITE_GHL_OUTLINE_WEBHOOK_URL`
       - `VITE_GHL_CRM_WAITLIST_WEBHOOK_URL`
3. Restart `npm run dev`.

Payload includes:
- `formType`
- `submittedAt`
- `pageUrl`
- Form field values

For the workshop outline flow, payload also includes:
- `outlineDocumentUrl`
- `requestedDelivery` (set to `"email"`)

The default outline URL is hosted at:
- `/docs/workshop_syllabus.pdf`

You can override it with:
- `VITE_WORKSHOP_OUTLINE_URL`

GHL setup playbook for the outline workflow:
- `/docs/ghl-outline-workflow.md`

## Workshop location config

Set these in `.env.local` to show your real in-person address across the site:
- `VITE_WORKSHOP_ADDRESS`
- `VITE_WORKSHOP_CITY`

Optional countdown config:
- `VITE_WORKSHOP_EVENT_START_ISO` (example: `2026-03-25T10:00:00-05:00`)
- `VITE_WORKSHOP_TIME_ZONE_LABEL` (example: `CT`)
