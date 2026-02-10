import { Repeat, ListChecks, Megaphone, BrainCircuit } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CRMBridgeProps {
  onBookDemo: () => void;
  onJoinWaitlist: () => void;
}

const features = [
  { icon: Repeat, title: "AI Follow-Up Sequences", desc: "Automated texts, emails, and reminders triggered by lead behavior." },
  { icon: ListChecks, title: "Pipeline + Task Automation", desc: "AI organizes your deals, surfaces next actions, and kills busywork." },
  { icon: Megaphone, title: "Content + Campaign Tools", desc: "Generate listing posts, market updates, and drip campaigns in clicks." },
  { icon: BrainCircuit, title: "AI Lead Scoring", desc: "Prioritize your hottest leads automatically so you never miss a close." },
];

const CRMBridge = ({ onBookDemo, onJoinWaitlist }: CRMBridgeProps) => (
  <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
    <div className="absolute inset-0 ai-glow-bg pointer-events-none" />
    <div className="relative mx-auto max-w-4xl text-center">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
        Let AI Run Your Business After the Workshop
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed opacity-85 sm:text-base">
        The workshop teaches you the workflows. My AI CRM helps you run them automatically: lead capture, follow-up, reminders, pipeline organization, and smarter nurturing.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 p-5 text-left">
            <Icon className="h-6 w-6 text-accent" />
            <p className="mt-3 text-sm font-semibold">{title}</p>
            <p className="mt-1 text-xs opacity-80 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
        <Button size="lg" onClick={onBookDemo} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold sm:w-auto px-8">
          Book a CRM Demo
        </Button>
        <Button size="lg" variant="outline" onClick={onJoinWaitlist} className="w-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-medium sm:w-auto px-8">
          Join the CRM Waitlist
        </Button>
      </div>
    </div>
  </section>
);

export default CRMBridge;
