import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface InlineTeaserCTAProps {
  kicker: string;
  title: string;
  bullets: string[];
  onReserveSeat: () => void;
  onGetOutline: () => void;
}

const InlineTeaserCTA = ({ kicker, title, bullets, onReserveSeat, onGetOutline }: InlineTeaserCTAProps) => (
  <section className="px-5 pb-12 md:px-9 md:pb-16 lg:px-12 lg:pb-20">
    <div className="mx-auto max-w-6xl">
      <div className="section-frame overflow-hidden p-6 sm:p-7">
        <div className="grid gap-7 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <span className="section-kicker">{kicker}</span>
            <h3 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {title}
            </h3>
            <ul className="mt-5 space-y-2.5">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-center gap-3 rounded-2xl border border-border/75 bg-background/70 p-5">
            <p className="text-sm leading-relaxed text-foreground">
              Ready to put this into action live and walk out with templates you can use the same day?
            </p>
            <Button onClick={onReserveSeat} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
              Reserve My Seat
            </Button>
            <Button variant="outline" onClick={onGetOutline} className="w-full">
              Get the Workshop Outline
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default InlineTeaserCTA;
