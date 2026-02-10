import { Brain, MessageSquare, Palette, Settings } from "lucide-react";

const blocks = [
  {
    icon: Brain,
    title: "AI Basics Realtors Actually Need",
    bullets: ["How to get accurate outputs", "Avoiding 'robot' messaging"],
  },
  {
    icon: MessageSquare,
    title: "Follow-Up + Client Communication",
    bullets: ["Text/email scripts in your voice", "Objection handling and appointment setting"],
  },
  {
    icon: Palette,
    title: "Content in Minutes",
    bullets: ["Reels hooks + captions", "Repurposing system from one topic into 5 posts"],
  },
  {
    icon: Settings,
    title: "Workflow + Automation",
    bullets: ["Simple AI-assisted pipeline habits", "How to stop leads from slipping through cracks"],
  },
];

const WhatYoullLearn = () => (
  <section id="learn" className="section-padding bg-muted/50">
    <div className="mx-auto max-w-5xl">
      <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl text-foreground">
        What You'll Learn
      </h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {blocks.map(({ icon: Icon, title, bullets }) => (
          <div key={title} className="rounded-lg border border-border bg-card p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent/10">
                <Icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            </div>
            <ul className="mt-4 space-y-2">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-8 text-center text-sm font-medium text-foreground">
        You'll also receive: Prompt Pack + Templates + Checklist
      </p>
    </div>
  </section>
);

export default WhatYoullLearn;
