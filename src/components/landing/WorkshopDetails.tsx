import { Clock, MonitorPlay, Calendar, Gift, DollarSign, Users } from "lucide-react";

const details = [
  { icon: Clock, label: "Duration", value: "2 Hours" },
  { icon: MonitorPlay, label: "Format", value: "[Live In-Person / Virtual]" },
  { icon: Calendar, label: "Date & Time", value: "[Month Day, Year] at [Time TZ]" },
  { icon: Gift, label: "Includes", value: "Prompt Pack, Templates, Replay" },
  { icon: DollarSign, label: "Price", value: "[$XX]" },
  { icon: Users, label: "Seats", value: "[XX] spots available" },
];

const WorkshopDetails = () => (
  <section id="details" className="section-padding bg-muted/50">
    <div className="mx-auto max-w-4xl">
      <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl text-foreground">
        Workshop Details
      </h2>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {details.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-start gap-4 rounded-lg border border-border bg-card p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent/10">
              <Icon className="h-5 w-5 text-accent" />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</p>
              <p className="mt-1 text-sm font-semibold text-foreground">{value}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-sm font-medium text-accent">
        Seats are limited to keep it hands-on and interactive.
      </p>
    </div>
  </section>
);

export default WorkshopDetails;
