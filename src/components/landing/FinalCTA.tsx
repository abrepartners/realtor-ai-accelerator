import { Button } from "@/components/ui/button";

interface FinalCTAProps {
  onReserveSeat: () => void;
  onGetOutline: () => void;
}

const FinalCTA = ({ onReserveSeat, onGetOutline }: FinalCTAProps) => (
  <section className="section-padding bg-primary text-primary-foreground">
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
        Leave With a System, Not Just Ideas.
      </h2>
      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
        <Button size="lg" onClick={onReserveSeat} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base sm:w-auto px-8">
          Reserve My Seat
        </Button>
        <Button size="lg" variant="outline" onClick={onGetOutline} className="w-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-medium sm:w-auto px-8">
          Get the Workshop Outline
        </Button>
      </div>
      <p className="mt-6 text-xs tracking-wide opacity-80 sm:text-sm">
        Seats are limited to keep it interactive.
      </p>
    </div>
  </section>
);

export default FinalCTA;
