import { Repeat, ListChecks, Megaphone, BrainCircuit } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CRMBridgeProps {
  onJoinWaitlist: () => void;
}

const features = [
  { icon: Repeat, title: "AI Follow-Up Sequences", desc: "Automated texts, emails, and reminders triggered by lead behavior." },
  { icon: ListChecks, title: "Pipeline + Task Automation", desc: "AI organizes your deals, surfaces next actions, and kills busywork." },
  { icon: Megaphone, title: "Content + Campaign Tools", desc: "Generate listing posts, market updates, and drip campaigns in clicks." },
  { icon: BrainCircuit, title: "AI Lead Scoring", desc: "Prioritize your hottest leads automatically so you never miss a close." },
];

const CRMBridge = ({ onJoinWaitlist }: CRMBridgeProps) => (
  <section className="section-padding relative overflow-hidden bg-primary text-primary-foreground">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,hsl(var(--accent)/0.28),transparent_34%),radial-gradient(circle_at_86%_10%,hsl(var(--signal)/0.26),transparent_32%)]" />
    <div className="relative mx-auto max-w-6xl">
      <div className="mx-auto max-w-3xl text-center">
        <span className="section-kicker justify-center text-primary-foreground/80 before:bg-primary-foreground/45">Automation Layer</span>
      </div>
      <h2 className="mx-auto mt-4 max-w-3xl text-center text-3xl font-bold tracking-tight sm:text-4xl">
        Let AI Run Your Business After the Workshop
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-primary-foreground/84 sm:text-base">
        The workshop teaches you the workflows. My AI CRM helps you run them automatically: lead capture, follow-up, reminders, pipeline organization, and smarter nurturing.
      </p>

      <div className="stagger-fade mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-2xl border border-primary-foreground/20 bg-primary-foreground/8 p-5 text-left backdrop-blur-[2px]">
            <Icon className="h-6 w-6 text-[hsl(var(--accent))]" />
            <p className="mt-3 text-sm font-semibold">{title}</p>
            <p className="mt-1 text-xs leading-relaxed text-primary-foreground/80">{desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Button
          size="lg"
          onClick={onJoinWaitlist}
          className="w-full bg-accent text-accent-foreground hover:bg-accent/90 sm:w-auto"
        >
          Join the CRM Waitlist
        </Button>
      </div>
    </div>
  </section>
);

export default CRMBridge;
