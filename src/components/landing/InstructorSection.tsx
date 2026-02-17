import { Award, Wrench, BrainCircuit, Users } from "lucide-react";
import thomasBrown from "@/assets/instructor/thomas-brown.png";

const InstructorSection = () => (
  <section className="section-padding">
    <div className="mx-auto max-w-6xl">
      <div className="mx-auto max-w-3xl text-center">
        <span className="section-kicker justify-center">Leadership</span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Your Instructor</h2>
      </div>
      <div className="section-frame mt-10 flex flex-col items-center gap-8 p-6 md:flex-row md:items-start md:p-8">
        <img
          src={thomasBrown}
          alt="Thomas Brown"
          className="h-40 w-40 shrink-0 rounded-2xl border border-border/70 object-cover shadow-[0_16px_30px_-18px_hsl(var(--foreground)/0.75)]"
        />
        <div>
          <h3 className="text-2xl font-bold text-foreground">Thomas Brown</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
            I run a media + marketing operation and I build AI systems that help businesses follow up faster, save time, and close more consistently.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center gap-2 text-sm text-foreground">
              <Award className="h-4 w-4 text-accent" />
              Built AI workflows for real estate marketing
            </li>
            <li className="flex items-center gap-2 text-sm text-foreground">
              <Wrench className="h-4 w-4 text-accent" />
              Hands-on systems, not theory
            </li>
            <li className="flex items-center gap-2 text-sm text-foreground">
              <BrainCircuit className="h-4 w-4 text-accent" />
              Certified in AI prompt engineering and automation
            </li>
            <li className="flex items-center gap-2 text-sm text-foreground">
              <Users className="h-4 w-4 text-accent" />
              Trained 200+ agents on AI-powered workflows
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default InstructorSection;
