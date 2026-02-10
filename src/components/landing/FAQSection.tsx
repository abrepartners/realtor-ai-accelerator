import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Is this beginner-friendly?", a: "Absolutely. This workshop is designed for agents who are new to AI. No technical background required. If you can send an email, you can use these tools." },
  { q: "Will I get the prompts and templates?", a: "Yes. Every attendee receives the full Prompt Pack, templates, and a checklist you can start using the same day." },
  { q: "Is there a replay?", a: "[Placeholder: Yes/No — if yes, all registered attendees will receive access to the replay within 48 hours.]" },
  { q: "What if I can't attend live?", a: "[Placeholder: Depending on replay availability, you'll still receive all materials. We recommend attending live for the interactive Q&A.]" },
  { q: "Do I need special tools?", a: "No paid tools required. We'll use free AI tools during the workshop. You just need a laptop or tablet and internet access." },
  { q: "Is this specific to my market?", a: "The workflows are designed for any residential real estate market. The strategies are adaptable regardless of your location or niche." },
  { q: "Will you try to sell me something?", a: "The workshop stands on its own. At the end, we'll briefly introduce our AI CRM for agents who want to automate what they learned. No pressure, no hard pitch." },
  { q: "What's the refund policy?", a: "[Placeholder: Full refund if you cancel at least 48 hours before the workshop. No refunds within 48 hours of the event.]" },
];

const FAQSection = () => (
  <section id="faq" className="section-padding bg-background">
    <div className="mx-auto max-w-3xl">
      <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl text-foreground">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="mt-10">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`}>
            <AccordionTrigger className="text-left text-sm font-medium text-foreground sm:text-base">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
