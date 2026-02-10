

# Larger Logos and Font Contrast Fixes

---

## 1. Make Sponsor Logos Larger

In `src/components/landing/HeroSection.tsx` (line 67), increase the logo height from `h-10` (40px) to `h-16` (64px) for better visibility. Also increase the gap between logos from `gap-8` to `gap-10`.

---

## 2. Fix Text Contrast -- "Sponsored by" Label

In `src/components/landing/HeroSection.tsx` (line 63), the "Sponsored by" text uses `opacity-60` which is too faint on the dark background. Increase to `opacity-90`.

---

## 3. Fix Text Contrast -- Trust Strip Below CTA Buttons

In `src/components/landing/HeroSection.tsx` (line 58), the trust strip text beside the "Reserve My Seat" button area uses `opacity-80`. Increase to `opacity-90` for better readability.

---

## 4. Fix Text Contrast -- CRM Bridge Description

In `src/components/landing/CRMBridge.tsx` (line 23), the subtitle uses `opacity-85`. Increase to `opacity-90` for consistency.

---

## 5. Fix Text Contrast -- FinalCTA Subtitle

In `src/components/landing/FinalCTA.tsx` (line 22), the "Seats are limited" text uses `opacity-80`. Increase to `opacity-90`.

---

## Files Modified

| File | Change |
|------|--------|
| `HeroSection.tsx` | Logo height `h-10` to `h-16`, gap `gap-8` to `gap-10`, "Sponsored by" opacity `60` to `90`, trust strip opacity `80` to `90` |
| `CRMBridge.tsx` | Subtitle opacity `85` to `90` |
| `FinalCTA.tsx` | Subtitle opacity `80` to `90` |

No new dependencies or files needed.

