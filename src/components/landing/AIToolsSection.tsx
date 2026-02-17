import { Bot, Sparkles, BrainCircuit, PenTool, Database } from "lucide-react";

const tools = [
  { icon: Bot, name: "ChatGPT / GPT", desc: "Scripts, listings, client communication" },
  { icon: Sparkles, name: "Google Gemini", desc: "Research, market data, summaries" },
  { icon: BrainCircuit, name: "Claude", desc: "Long-form content, strategy, analysis" },
  { icon: PenTool, name: "Canva AI", desc: "Graphics, social posts, branding" },
  { icon: Database, name: "AI CRM", desc: "Automated follow-up, pipeline, lead scoring" },
];

const AIToolsSection = () => (
  <section className="section-padding">
    <div className="mx-auto max-w-6xl">
      <div className="mx-auto max-w-3xl text-center">
        <span className="section-kicker justify-center">Tooling</span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          The AI Stack You'll Walk Away With
        </h2>
      </div>
      <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground sm:text-base">
        No theory. You'll get hands-on time with each tool and leave with workflows you can run immediately.
      </p>
      <div className="stagger-fade mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {tools.map(({ icon: Icon, name, desc }) => (
          <div key={name} className="section-frame flex flex-col items-center p-5 text-center">
            <div className="drift-float flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/30 bg-accent/13">
              <Icon className="h-6 w-6 text-accent" />
            </div>
            <h3 className="mt-4 text-sm font-bold text-foreground">{name}</h3>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AIToolsSection;
