

# Fill In All Placeholder Content and Final Updates

---

## 1. Workshop Details -- Fill Real Data

In `WorkshopDetails.tsx`, replace all placeholder values:

| Field | Current | New Value |
|-------|---------|-----------|
| Format | `[Live In-Person / Virtual]` | `Live Virtual (Google Meet)` |
| Date & Time | `[Month Day, Year] at [Time TZ]` | `March 24, 2026 at 10:00 AM CST` |
| Includes | current value | `Prompt Pack, AI Tool Guide, Templates, Replay (attendees only), Lunch Provided` |
| Price | `[$XX]` | `Free` |
| Seats | `[XX] spots available` | `Limited spots available` |

---

## 2. Instructor Section -- Thomas Brown with Photo

In `InstructorSection.tsx`:
- Replace `[Instructor Name]` with **Thomas Brown**
- Replace the placeholder `[Photo]` div with the uploaded headshot image (`user-uploads://hand_on_hear_copy.png`), copied to `src/assets/instructor/thomas-brown.png`
- Update bio text to reflect Thomas Brown's background

---

## 3. Social Proof -- Fill Agent Names with Central Arkansas Context

In `SocialProof.tsx`, replace placeholder names and brokerages with realistic Central Arkansas agent names:
- Testimonial 1: e.g., "Marcus Johnson" / "Keller Williams Central Arkansas"
- Testimonial 2: e.g., "Sarah Mitchell" / "Coldwell Banker RPM Group"
- Testimonial 3 (business owner): e.g., "David Hernandez" / "Hernandez Media Co."

---

## 4. FAQ Section -- Update Replay and Refund Answers

In `FAQSection.tsx`:
- "Is there a replay?" answer: "Yes, all registered attendees who attend will receive access to the replay within 48 hours. The replay is exclusive to those who attend the live event."
- "What if I can't attend live?" answer: "We recommend attending live for the interactive Q&A and to receive the replay. The replay will only be available to those who attend. All registered attendees receive the materials regardless."
- Refund policy: Since it's free, replace with "This is a free workshop -- no payment required. If you can't make it, please cancel your registration so someone else can take your spot."

---

## 5. Registration Form -- Update Confirmation

In `RegistrationForm.tsx`:
- Update the confirmation text to mention "March 24, 10:00 AM CST"
- Update the calendar link placeholder text to say "Add to Google Calendar"
- Update the confirmation message to mention Google Meet link will be sent via email and that lunch will be provided for in-person attendees

---

## 6. Sponsor Logos -- Use Larger, Clearer Versions

The hero section sits on a dark background, so the white Avery & Bryant logo (`Ab_logo_large_all_white.png`) should be used there. The Eagle Bank logo with black text on the dark hero background needs the white version if available -- since both uploaded Eagle Bank logos have black text, we will add a `brightness-0 invert` CSS filter to make them white on the dark background. The Pinnacle logo already works on dark backgrounds.

Replace the current sponsor logo assets:
- Copy `user-uploads://Ab_logo_large_all_white.png` to `src/assets/sponsors/averybryant-white.png` for the hero (dark bg)
- Use the existing colored Avery & Bryant logo for any light-background sections
- Keep Eagle Bank and Pinnacle logos as-is but apply `brightness-0 invert` filter on the dark hero background so they show as white

---

## Files Modified

| File | Changes |
|------|--------|
| `WorkshopDetails.tsx` | Fill all placeholder values with real event data |
| `InstructorSection.tsx` | Thomas Brown name, photo, updated bio |
| `SocialProof.tsx` | Central Arkansas agent names and brokerages |
| `FAQSection.tsx` | Update replay, attendance, and refund answers |
| `RegistrationForm.tsx` | Update confirmation with date and Google Meet details |
| `HeroSection.tsx` | Use white Avery & Bryant logo, apply invert filter to Eagle Bank for dark bg visibility |
| New asset: `src/assets/instructor/thomas-brown.png` | Instructor headshot |
| New asset: `src/assets/sponsors/averybryant-white.png` | White version of A&B logo for dark backgrounds |

