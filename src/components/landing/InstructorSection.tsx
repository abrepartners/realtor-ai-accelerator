import { Award, Wrench, BrainCircuit, Users } from "lucide-react";
import thomasBrown from "@/assets/instructor/thomas-brown.png";

const InstructorSection = () => (
  <section className="section-padding bg-background">
    <div className="mx-auto max-w-3xl">
      <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl text-foreground">
        Your Instructor
      </h2>
      <div className="mt-10 flex flex-col items-center gap-8 md:flex-row md:items-start">
        <img src={thomasBrown} alt="Thomas Brown" className="h-40 w-40 shrink-0 rounded-xl object-cover" />
        <div>
          <h3 className="text-xl font-bold text-foreground">Thomas Brown</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
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
