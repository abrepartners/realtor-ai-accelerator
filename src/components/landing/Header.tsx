import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

interface HeaderProps {
  onReserveSeat: () => void;
}

const navLinks = [
  { label: "What You'll Learn", href: "#learn" },
  { label: "Who It's For", href: "#who" },
  { label: "Details", href: "#details" },
  { label: "FAQs", href: "#faq" },
];

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  el?.scrollIntoView({ behavior: "smooth" });
};

const Header = ({ onReserveSeat }: HeaderProps) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-xl supports-[backdrop-filter]:bg-background/72">
      <div className="mx-auto flex h-[4.55rem] max-w-6xl items-center justify-between px-5 md:px-8 lg:px-10">
        <a href="#" className="group inline-flex flex-col leading-none">
          <span className="meta-copy text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">Live Workshop</span>
          <span className="mt-1 text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent sm:text-[1.08rem]">
            Realtor AI Accelerator
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="meta-copy text-[0.68rem] font-medium uppercase tracking-[0.08em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </button>
          ))}
          <Button onClick={onReserveSeat} className="bg-accent text-accent-foreground hover:bg-accent/90">
            Reserve My Seat
          </Button>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 rounded-full border border-border/80 bg-card/70 text-foreground hover:bg-muted/80"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[18rem] border-l border-border/80 bg-background/96 pt-10 backdrop-blur-xl"
          >
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <p className="meta-copy text-[0.62rem] uppercase tracking-[0.12em] text-muted-foreground">Navigation</p>
            <nav className="mt-6 flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => {
                    scrollTo(link.href);
                    setOpen(false);
                  }}
                  className="rounded-xl border border-border/75 bg-card/65 px-4 py-2.5 text-left text-sm font-medium text-foreground transition-colors hover:border-accent/45 hover:bg-accent/10"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => {
                  onReserveSeat();
                  setOpen(false);
                }}
                className="mt-4 w-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Reserve My Seat
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
