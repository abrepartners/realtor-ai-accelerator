import { Button } from "@/components/ui/button";
import { workshopConfig } from "@/lib/workshopConfig";

interface FinalCTAProps {
  onReserveSeat: () => void;
  onGetOutline: () => void;
}

const FinalCTA = ({ onReserveSeat, onGetOutline }: FinalCTAProps) => (
  <section className="section-padding relative overflow-hidden">
    <div className="mx-auto max-w-5xl">
      <div className="rounded-[calc(var(--radius)+0.2rem)] border border-border/70 bg-primary p-8 text-primary-foreground shadow-[0_24px_50px_-30px_hsl(var(--foreground)/0.8)] sm:p-11">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-kicker justify-center text-primary-foreground/78 before:bg-primary-foreground/45">Final Invitation</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
        Leave With a System, Not Just Ideas.
          </h2>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <Button size="lg" onClick={onReserveSeat} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 sm:w-auto">
              Reserve My Seat
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={onGetOutline}
              className="w-full border-primary-foreground/33 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/12 sm:w-auto"
            >
              Get the Workshop Outline
            </Button>
          </div>
          <p className="meta-copy mt-6 text-[0.7rem] uppercase tracking-[0.09em] text-primary-foreground/78">
            {workshopConfig.seatCap} in-person seats only.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default FinalCTA;
