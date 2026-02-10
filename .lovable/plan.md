

# AI Workshop for Realtors — Landing Page

A single-page, high-converting landing page designed to sell workshop registrations and capture leads for an AI CRM product. Mobile-first, modern, premium design with no backend required (forms will use local state with confirmation screens and dataLayer tracking hooks ready for analytics).

---

## Sections & Features

### 1. Sticky Header
- Logo placeholder (left), smooth-scroll nav links (What You'll Learn, Who It's For, Details, FAQs), and a prominent "Reserve My Seat" CTA button (right)
- Collapses to hamburger menu on mobile with a persistent sticky CTA bar at the bottom of the screen

### 2. Hero Section
- Headline: **"Turn AI Into Your Realtor Assistant in 2 Hours"**
- Subheadline and 3 benefit bullets with simple line icons
- Two CTA buttons: "Reserve My Seat" (opens registration modal) and "Get the Workshop Outline" (opens lead magnet modal)
- Trust strip beneath CTAs: "Trusted by agents and teams · Workshop seats limited · Hands-on templates included"

### 3. Social Proof
- 3 testimonial cards with placeholder names, brokerages, and quotes
- Clean card layout with a subtle disclaimer line

### 4. What You'll Learn
- 4 content blocks in a grid layout, each with a title, icon, and 2 bullet-point outcomes
- Bonus line: "You'll also receive: Prompt Pack + Templates + Checklist"

### 5. Who It's For / Who It's Not For
- Two-column layout (stacks on mobile) with check/x icons for clarity

### 6. Workshop Details
- Clean card-based layout showing Duration, Format, Date/Time, What's Included, Price, and Seat count — all with editable placeholder values
- Small urgency line about limited seats

### 7. Instructor Section
- Photo placeholder, short bio, and 2 credibility bullets

### 8. The Bridge to AI CRM
- Soft upsell section with headline, copy, and 3 feature tiles
- Two CTAs: "Book a CRM Demo" and "Join the CRM Waitlist" (each opens its own modal form)

### 9. FAQ
- Accordion-style with 8 pre-written questions and placeholder answers

### 10. Final CTA Section
- Bold closing headline with both primary and secondary CTA buttons
- "Seats are limited to keep it interactive" line beneath

---

## Modal Forms (3 total)

1. **Registration Form** — Name, Email, Phone, Brokerage/Team, City, Role (Solo/Team/Brokerage dropdown)
2. **Lead Magnet Form** — Name, Email, Phone (optional)
3. **CRM Demo Form** — Name, Email, Phone, Team Size, Current CRM

All forms validate inputs with Zod, show a confirmation screen on submit with a calendar link placeholder, and fire dataLayer events (ReserveSeat_Click, OutlineLead_Submit, CRMDemo_Submit).

---

## Design Approach

- **Mobile-first** responsive layout with sticky mobile CTA bar
- Modern typography, generous whitespace, high-contrast CTA buttons
- Subtle section dividers, simple Lucide line icons throughout
- Premium color palette: dark primary tones with a bold accent color for CTAs
- No emojis, confident and practical copy tone throughout
- Smooth scroll navigation between sections
- All placeholder content clearly marked for easy editing (dates, price, instructor info, CRM name, refund policy)

