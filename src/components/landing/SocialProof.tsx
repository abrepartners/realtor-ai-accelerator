import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Marcus Johnson",
    brokerage: "Keller Williams Central Arkansas",
    quote: "I used the ChatGPT prompts to write 30 days of content in one afternoon. This workshop paid for itself on day one.",
  },
  {
    name: "Sarah Mitchell",
    brokerage: "Coldwell Banker RPM Group",
    quote: "The AI follow-up scripts saved me 6 hours my first week. Finally, training that makes sense for real estate.",
  },
  {
    name: "David Hernandez",
    brokerage: "Hernandez Media Co.",
    quote: "I'm not in real estate, but the AI workflow templates cut my content creation time in half. This workshop is a game-changer for any business.",
  },
];

const SocialProof = () => (
  <section className="section-padding relative">
    <div className="mx-auto max-w-6xl">
      <div className="mx-auto max-w-3xl text-center">
        <span className="section-kicker justify-center">Proof In Practice</span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">What People Are Saying</h2>
      </div>
      <div className="stagger-fade mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Card key={i} className="h-full">
            <CardContent className="flex h-full flex-col p-6">
              <p className="mb-4 text-4xl leading-none text-accent">"</p>
              <p className="text-sm leading-relaxed text-card-foreground">{t.quote}</p>
              <div className="mt-auto border-t border-border/80 pt-4">
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="meta-copy mt-1 text-[0.68rem] uppercase tracking-[0.08em] text-muted-foreground">{t.brokerage}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="meta-copy mt-7 text-center text-[0.68rem] uppercase tracking-[0.08em] text-muted-foreground">
        Results vary. This is training, not a guarantee.
      </p>
    </div>
  </section>
);

export default SocialProof;
