import { useState } from "react";
import { Menu, X } from "lucide-react";
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
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <a href="#" className="text-lg font-bold tracking-tight text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          AI Workshop
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </button>
          ))}
          <Button onClick={onReserveSeat} className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
            Reserve My Seat
          </Button>
        </nav>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 bg-background">
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <nav className="mt-8 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => { scrollTo(link.href); setOpen(false); }}
                  className="py-2 text-left text-base font-medium text-foreground"
                >
                  {link.label}
                </button>
              ))}
              <Button onClick={() => { onReserveSeat(); setOpen(false); }} className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
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
