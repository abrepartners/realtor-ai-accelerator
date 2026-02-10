import { Button } from "@/components/ui/button";

interface MobileCTABarProps {
  onReserveSeat: () => void;
}

const MobileCTABar = ({ onReserveSeat }: MobileCTABarProps) => (
  <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background p-3 md:hidden">
    <Button onClick={onReserveSeat} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
      Reserve My Seat
    </Button>
  </div>
);

export default MobileCTABar;
