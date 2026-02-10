

# Make the Landing Page More AI-Focused

Transform the current workshop landing page from a generic training page into a visually distinct, AI-themed experience with deeper AI-specific content, visual effects, and expanded specifications.

---

## 1. Visual Overhaul -- AI-Themed Design

**Color palette shift** in `src/index.css`:
- Move from warm amber accent to a cool electric blue/cyan AI palette (e.g., `accent: 210 100% 55%`)
- Add a subtle gradient mesh or radial glow effect behind the Hero section using CSS
- Add a subtle animated grid/dot pattern background utility class for key sections

**New CSS animations** in `tailwind.config.ts` and `index.css`:
- A slow "pulse-glow" keyframe for accent elements (mimicking an AI "thinking" indicator)
- A "typing" cursor blink animation for the hero headline area
- A "float" animation for icons in the feature cards

---

## 2. Hero Section Enhancements (`HeroSection.tsx`)

- Add a small "Powered by AI" badge/pill above the headline
- Update headline to include a typewriter-style visual treatment (static text, but styled with a blinking cursor at the end)
- Add a subtle animated gradient background (CSS only, no JS animation library)
- Expand bullets to 4, adding: "AI-powered market analysis and CMA talking points"
- Add AI-specific tool mentions in the trust strip: "Uses ChatGPT, Claude, and Gemini workflows"

---

## 3. Expanded "What You'll Learn" (`WhatYoullLearn.tsx`)

Add 2 more learning blocks (6 total) with deeper AI specs:

- **Block 5: "AI Tools Walkthrough"** -- Hands-on with ChatGPT, Claude, and Gemini for real estate; choosing the right tool for each task
- **Block 6: "AI-Powered Lead Scoring + Market Insights"** -- Using AI to prioritize leads; generating neighborhood summaries and market snapshots

Update existing block titles to be more AI-specific:
- "AI Basics Realtors Actually Need" -> "Prompt Engineering for Real Estate"
- "Workflow + Automation" -> "AI Automation + Smart Pipelines"

Add more bullets per block (3 instead of 2) to deepen AI content.

---

## 4. New Section: "AI Tools You'll Master" (new component)

Create `src/components/landing/AIToolsSection.tsx` -- a visual grid section placed after "What You'll Learn" showing the specific AI tools and platforms covered:

- ChatGPT / GPT-5
- Google Gemini
- Claude
- Canva AI
- AI CRM (the presenter's tool)

Each shown as a minimal card with a tool name, one-liner, and a simple icon. Header: "The AI Stack You'll Walk Away With."

---

## 5. Workshop Details Updates (`WorkshopDetails.tsx`)

Add new detail cards:
- **AI Tools Provided**: "Access to prompt libraries + AI tool guides"
- **Skill Level**: "Beginner to Intermediate -- no coding required"

Update the "Includes" value to: "Prompt Pack, AI Tool Guide, Templates, Replay"

---

## 6. CRM Bridge Section Updates (`CRMBridge.tsx`)

Make the AI angle more prominent:
- Add feature descriptions under each tile (not just titles)
- Add a new tile: "AI Lead Scoring" with a BrainCircuit icon
- Update headline to: "Let AI Run Your Business After the Workshop"

---

## 7. FAQ Updates (`FAQSection.tsx`)

Add 2 more AI-specific questions:
- "Which AI tools will we use?" -> "We'll work hands-on with ChatGPT, Claude, and Gemini. No paid subscriptions required for the workshop."
- "Will AI replace me?" -> "No. AI handles repetitive tasks so you can focus on relationships and closing. Think of it as a tireless assistant, not a replacement."

---

## 8. Instructor Section Updates (`InstructorSection.tsx`)

Add more AI-specific credibility:
- "Certified in AI prompt engineering and automation"
- "Trained 200+ agents on AI-powered workflows"

---

## 9. Social Proof Updates (`SocialProof.tsx`)

Make testimonial quotes more AI-specific:
- Reference specific AI tools and outcomes
- E.g., "I used the ChatGPT prompts to write 30 days of content in one afternoon."

---

## Technical Details

**Files modified:**
- `src/index.css` -- New color palette, glow/grid animations
- `tailwind.config.ts` -- New keyframes (pulse-glow, float)
- `src/components/landing/HeroSection.tsx` -- AI badge, expanded bullets, gradient bg
- `src/components/landing/WhatYoullLearn.tsx` -- 6 blocks, more bullets, AI-specific titles
- `src/components/landing/WorkshopDetails.tsx` -- 2 new detail cards
- `src/components/landing/CRMBridge.tsx` -- 4 tiles with descriptions, updated headline
- `src/components/landing/FAQSection.tsx` -- 2 new FAQs
- `src/components/landing/InstructorSection.tsx` -- More AI credentials
- `src/components/landing/SocialProof.tsx` -- AI-specific quotes
- `src/pages/Index.tsx` -- Add new AIToolsSection

**New file created:**
- `src/components/landing/AIToolsSection.tsx` -- AI tools grid section

**No new dependencies required.** All visual effects use CSS animations and Tailwind utilities.

