

# Update Workshop Time to 11:00 AM – 1:00 PM

Two files need changes:

## 1. `src/lib/workshopConfig.ts`
- Change `timeLabel` from `"10:00 AM - 12:00 PM"` to `"11:00 AM - 1:00 PM"`
- Change `eventStartIso` default from `"2026-03-25T10:00:00-05:00"` to `"2026-03-25T11:00:00-05:00"`

## 2. `src/components/landing/WorkshopDetails.tsx`
- Change the hardcoded `"10:00 AM"` in the Date & Time detail to `"11:00 AM"`

These two changes will propagate the correct time everywhere the config values are referenced (header countdown, registration confirmation, FAQ, etc.).

