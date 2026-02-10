import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "[Agent Name]",
    brokerage: "[Brokerage Name]",
    quote: "I used the ChatGPT prompts to write 30 days of content in one afternoon. This workshop paid for itself on day one.",
  },
  {
    name: "[Agent Name]",
    brokerage: "[Brokerage Name]",
    quote: "The AI follow-up scripts saved me 6 hours my first week. Finally, training that makes sense for real estate.",
  },
  {
    name: "[Team Lead Name]",
    brokerage: "[Brokerage Name]",
    quote: "We rolled out the AI templates across our team the next day. Consistent messaging, faster response times, happier clients.",
  },
];

const SocialProof = () => (
  <section className="section-padding bg-background">
    <div className="mx-auto max-w-5xl">
      <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl text-foreground">
        What Agents Are Saying
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Card key={i} className="border border-border bg-card">
            <CardContent className="p-6">
              <p className="text-sm leading-relaxed text-card-foreground">"{t.quote}"</p>
              <div className="mt-4 border-t border-border pt-4">
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.brokerage}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="mt-6 text-center text-xs text-muted-foreground">
        Results vary. This is training, not a guarantee.
      </p>
    </div>
  </section>
);

export default SocialProof;
