import { Check, X } from "lucide-react";

const forItems = [
  "Agents doing too much themselves",
  "Teams needing consistent messaging",
  "Anyone tired of content taking forever",
];

const notForItems = [
  "People looking for 'get rich quick' AI hacks",
  "People unwilling to implement",
];

const WhoItsFor = () => (
  <section id="who" className="section-padding bg-background">
    <div className="mx-auto max-w-4xl">
      <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl text-foreground">
        Who It's For
      </h2>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="text-lg font-semibold text-foreground">This Is For You If...</h3>
          <ul className="mt-4 space-y-3">
            {forItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-card-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="text-lg font-semibold text-foreground">This Is Not For You If...</h3>
          <ul className="mt-4 space-y-3">
            {notForItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
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
