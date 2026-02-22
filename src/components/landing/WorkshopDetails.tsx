import { Clock, MonitorPlay, Calendar, Gift, DollarSign, Users, Cpu, GraduationCap, MapPin } from "lucide-react";
import { workshopConfig } from "@/lib/workshopConfig";

const venueAddress = "107 Progress Drive, Suite 200, Bryant, Arkansas, 72022";

const details = [
  { icon: Clock, label: "Duration", value: `2 Hours (${workshopConfig.timeLabel} ${workshopConfig.timeZoneLabel})` },
  { icon: MonitorPlay, label: "Format", value: workshopConfig.formatLabel },
  { icon: Calendar, label: "Date & Time", value: `${workshopConfig.dateLabel} at 10:00 AM ${workshopConfig.timeZoneLabel}` },
  { icon: MapPin, label: "Address", value: venueAddress },
  { icon: Gift, label: "Includes", value: "Prompt Pack, AI Tool Guide, Templates, In-person Q&A, Lunch Provided" },
  { icon: DollarSign, label: "Price", value: "Free" },
  { icon: Users, label: "Seats", value: `${workshopConfig.seatCap} in-person seats (hard cap)` },
  { icon: Cpu, label: "AI Tools Provided", value: "Access to prompt libraries + AI tool guides" },
  { icon: GraduationCap, label: "Skill Level", value: "Beginner to Intermediate -- no coding required" },
];

const WorkshopDetails = () => (
  <section id="details" className="section-padding">
    <div className="mx-auto max-w-6xl">
      <div className="mx-auto max-w-3xl text-center">
        <span className="section-kicker justify-center">Logistics</span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Workshop Details</h2>
      </div>
      <div className="stagger-fade mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {details.map(({ icon: Icon, label, value }) => (
          <div key={label} className="section-frame flex items-start gap-4 p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent/25 bg-accent/13">
              <Icon className="h-5 w-5 text-accent" />
            </div>
            <div>
              <p className="meta-copy text-[0.66rem] font-medium uppercase tracking-[0.1em] text-muted-foreground">{label}</p>
              <p className="mt-1 text-sm font-semibold leading-relaxed text-foreground">{value}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="meta-copy mt-7 text-center text-[0.68rem] font-medium uppercase tracking-[0.08em] text-[hsl(var(--signal))]">
        Only {workshopConfig.seatCap} in-person seats are available.
      </p>
    </div>
  </section>
);

export default WorkshopDetails;
