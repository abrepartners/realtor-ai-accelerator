import { Bot, Sparkles, BrainCircuit, PenTool, Database } from "lucide-react";

const tools = [
  { icon: Bot, name: "ChatGPT / GPT", desc: "Scripts, listings, client communication" },
  { icon: Sparkles, name: "Google Gemini", desc: "Research, market data, summaries" },
  { icon: BrainCircuit, name: "Claude", desc: "Long-form content, strategy, analysis" },
  { icon: PenTool, name: "Canva AI", desc: "Graphics, social posts, branding" },
  { icon: Database, name: "AI CRM", desc: "Automated follow-up, pipeline, lead scoring" },
];

const AIToolsSection = () => (
  <section className="section-padding bg-background">
    <div className="mx-auto max-w-5xl">
      <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl text-foreground">
        The AI Stack You'll Walk Away With
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground sm:text-base">
        No theory. You'll get hands-on time with each tool and leave with workflows you can run immediately.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {tools.map(({ icon: Icon, name, desc }) => (
          <div key={name} className="flex flex-col items-center rounded-lg border border-border bg-card p-6 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 float-icon">
              <Icon className="h-6 w-6 text-accent" />
            </div>
            <h3 className="mt-4 text-sm font-bold text-foreground">{name}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AIToolsSection;
