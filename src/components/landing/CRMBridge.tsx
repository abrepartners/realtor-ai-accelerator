import { Repeat, ListChecks, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CRMBridgeProps {
  onBookDemo: () => void;
  onJoinWaitlist: () => void;
}

const features = [
  { icon: Repeat, title: "AI Follow-Up Sequences" },
  { icon: ListChecks, title: "Pipeline + Task Automation" },
  { icon: Megaphone, title: "Content + Campaign Tools" },
];

const CRMBridge = ({ onBookDemo, onJoinWaitlist }: CRMBridgeProps) => (
  <section className="section-padding bg-primary text-primary-foreground">
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
        Want This Automated After the Workshop?
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed opacity-85 sm:text-base">
        The workshop teaches you the workflows. My AI CRM helps you run them automatically: lead capture, follow-up, reminders, pipeline organization, and smarter nurturing.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {features.map(({ icon: Icon, title }) => (
          <div key={title} className="rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 p-5">
            <Icon className="mx-auto h-6 w-6 text-accent" />
            <p className="mt-3 text-sm font-semibold">{title}</p>
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
