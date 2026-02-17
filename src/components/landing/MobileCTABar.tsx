import { Button } from "@/components/ui/button";

interface MobileCTABarProps {
  onReserveSeat: () => void;
}

const MobileCTABar = ({ onReserveSeat }: MobileCTABarProps) => (
  <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/80 bg-background/95 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl md:hidden">
    <Button onClick={onReserveSeat} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
      Reserve My Seat
    </Button>
  </div>
);

export default MobileCTABar;
