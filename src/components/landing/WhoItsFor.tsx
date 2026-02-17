import { Check, X } from "lucide-react";

const forItems = [
  "Realtors doing too much themselves",
  "Business owners drowning in admin",
  "Entrepreneurs who want faster follow-up",
  "Teams needing consistent messaging",
  "Anyone tired of content taking forever",
];

const notForItems = [
  "People looking for 'get rich quick' AI hacks",
  "People unwilling to implement",
];

const WhoItsFor = () => (
  <section id="who" className="section-padding">
    <div className="mx-auto max-w-6xl">
      <div className="mx-auto max-w-3xl text-center">
        <span className="section-kicker justify-center">Fit Check</span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Who It's For</h2>
      </div>
      <div className="stagger-fade mt-10 grid gap-6 md:grid-cols-2">
        <div className="section-frame p-6">
          <h3 className="text-xl font-semibold text-foreground">This Is For You If...</h3>
          <ul className="mt-4 space-y-3">
            {forItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-card-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="section-frame p-6">
          <h3 className="text-xl font-semibold text-foreground">This Is Not For You If...</h3>
          <ul className="mt-4 space-y-3">
            {notForItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default WhoItsFor;
