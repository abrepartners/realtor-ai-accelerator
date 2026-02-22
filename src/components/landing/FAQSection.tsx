import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { workshopConfig } from "@/lib/workshopConfig";

const faqs = [
  { q: "Is this beginner-friendly?", a: "Absolutely. This workshop is designed for agents who are new to AI. No technical background required. If you can send an email, you can use these tools." },
  { q: "Will I get the prompts and templates?", a: "Yes. Every attendee receives the full Prompt Pack, AI Tool Guide, templates, and a checklist you can start using the same day." },
  { q: "Which AI tools will we use?", a: "We'll work hands-on with ChatGPT, Claude, and Gemini. No paid subscriptions required for the workshop -- free tiers are all you need." },
  { q: "Will AI replace me?", a: "No. AI handles repetitive tasks so you can focus on relationships and closing. Think of it as a tireless assistant, not a replacement." },
  { q: "Where is the workshop?", a: `This is an in-person workshop in ${workshopConfig.city}. Address: ${workshopConfig.locationLabel}. Exact arrival details are included in your confirmation email.` },
  { q: "What if I can't attend in person?", a: "Select the non-attendee option in registration and we will email your calendar hold, workshop outline, and post-event resources so you can still benefit from the training." },
  { q: "Do I need special tools?", a: "No paid tools required. We'll use free AI tools during the workshop. You just need a laptop or tablet and internet access." },
  { q: "Is this specific to my market?", a: "The workflows are designed for any residential real estate market. The AI strategies are adaptable regardless of your location or niche." },
  { q: "Will you try to sell me something?", a: "The workshop stands on its own. At the end, we'll briefly introduce our AI CRM for agents who want to automate what they learned. No pressure, no hard pitch." },
  { q: "How many seats are available?", a: `We cap this workshop at ${workshopConfig.seatCap} in-person seats to keep it interactive. If seats are full, join the waitlist.` },
];

const FAQSection = () => (
  <section id="faq" className="section-padding">
    <div className="mx-auto max-w-4xl">
      <div className="mx-auto max-w-3xl text-center">
        <span className="section-kicker justify-center">Q + A</span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Frequently Asked Questions</h2>
      </div>
      <Accordion type="single" collapsible className="mt-10 space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="px-5">
            <AccordionTrigger className="py-5 text-left text-sm font-medium text-foreground sm:text-base">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
