

# Sponsor Logos, Broader Audience, and Text Contrast Fixes

---

## 1. Add Sponsor Logo Bar

Create a new visual strip showing the three sponsor logos with links. This will be placed in the Hero section beneath the trust strip text, or as a standalone strip between Hero and Social Proof.

**Sponsors with links:**
- **Pinnacle** (user-uploads://Pinnacle_Logotype.png) -> https://map.realtyonegroup.com/real-estate-agent/41130/rj-hawk
- **Eagle Bank Mortgage** (user-uploads://White_Logo_copy.png) -> https://www.eaglebank.com/lender/kim-leech/
- **Avery and Bryant** (user-uploads://1080_logo.png) -> https://www.averyandbryant.com

Each logo will be a clickable link (opens in new tab), displayed in a horizontal row with "Sponsored by" label above. Logos will be sized consistently (max height ~40px) and have appropriate contrast handling depending on section background.

---

## 2. Broaden Audience Messaging

Update copy across several components to make it clear this workshop is open to **all business professionals**, not just realtors:

- **HeroSection.tsx**: Update subheadline and headline context to say "business" alongside "realtor." Update trust strip to mention "Open to realtors, entrepreneurs, and any business looking to leverage AI."
- **WhoItsFor.tsx**: Update "for" items to include broader roles (e.g., "Business owners drowning in admin," "Entrepreneurs who want faster follow-up"). Keep realtor-specific items but add business-general ones.
- **Header.tsx**: No text changes needed (nav is generic).
- **SocialProof.tsx**: Adjust one testimonial placeholder to reference a non-realtor business owner.

---

## 3. Fix Text Contrast Issues

Several areas have white text on light/white backgrounds or low-opacity text that's hard to read:

- **HeroSection.tsx (line 49)**: Trust strip text uses `opacity-60` on white text over dark bg -- increase to `opacity-80` for readability.
- **FinalCTA.tsx (line 22)**: Same issue with "Seats are limited..." text at `opacity-60` -- increase to `opacity-80`.
- **CRMBridge.tsx (line 32)**: Feature card descriptions use `opacity-70` -- increase to `opacity-80`.
- **HeroSection.tsx (line 27)**: Subheadline uses `opacity-85` -- this is fine but will verify visually.

No white-on-white issues exist currently since dark sections use `bg-primary` (dark navy) with `text-primary-foreground` (light). Light sections use `bg-background` with `text-foreground` (dark). The main fix is increasing low-opacity text to be more readable.

---

## Files Modified

| File | Changes |
|------|---------|
| `src/components/landing/HeroSection.tsx` | Add sponsor logo row with links, broaden messaging, fix trust strip opacity |
| `src/components/landing/WhoItsFor.tsx` | Broaden audience items to include all businesses |
| `src/components/landing/SocialProof.tsx` | Add one business-owner testimonial placeholder |
| `src/components/landing/FinalCTA.tsx` | Fix opacity on subtitle text |
| `src/components/landing/CRMBridge.tsx` | Fix opacity on feature descriptions |

**No new dependencies required.** The three uploaded logo images will be referenced directly from the uploads.

