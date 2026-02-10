import { FileText, Zap, Video, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import pinnacleLogo from "@/assets/sponsors/pinnacle.png";
import eaglebankLogo from "@/assets/sponsors/eaglebank.png";
import averybryantLogo from "@/assets/sponsors/averybryant.png";

interface HeroProps {
  onReserveSeat: () => void;
  onGetOutline: () => void;
}

const bullets = [
  { icon: FileText, text: "AI prompts for listing descriptions, emails, texts, and follow-ups" },
  { icon: Zap, text: "Simple automations that reduce admin and missed leads" },
  { icon: Video, text: "Content repurposing system for Instagram and short-form video" },
  { icon: BarChart3, text: "AI-powered market analysis and CMA talking points" },
];

const sponsors = [
  { src: pinnacleLogo, alt: "Pinnacle", href: "https://map.realtyonegroup.com/real-estate-agent/41130/rj-hawk" },
  { src: eaglebankLogo, alt: "Eagle Bank Mortgage", href: "https://www.eaglebank.com/lender/kim-leech/" },
  { src: averybryantLogo, alt: "Avery and Bryant", href: "https://www.averyandbryant.com" },
];

const HeroSection = ({ onReserveSeat, onGetOutline }: HeroProps) => (
  <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
    <div className="absolute inset-0 ai-glow-bg pointer-events-none" />
    <div className="relative mx-auto max-w-4xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-accent uppercase pulse-glow">
        Powered by AI
      </span>

      <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
        <span className="typing-cursor">Turn AI Into Your Business Assistant in 2 Hours</span>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed opacity-90 sm:text-lg">
        Walk away with real workflows you can use the same day: faster follow-up, smarter client messaging, content in minutes, and a cleaner pipeline. Open to realtors, entrepreneurs, and any business looking to leverage AI.
      </p>

      <ul className="mx-auto mt-8 flex max-w-xl flex-col gap-4 text-left sm:mt-10">
        {bullets.map(({ icon: Icon, text }) => (
          <li key={text} className="flex items-start gap-3">
            <Icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            <span className="text-sm sm:text-base opacity-90">{text}</span>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
        <Button size="lg" onClick={onReserveSeat} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base sm:w-auto px-8">
          Reserve My Seat
        </Button>
        <Button size="lg" variant="outline" onClick={onGetOutline} className="w-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-medium sm:w-auto px-8">
          Get the Workshop Outline
        </Button>
      </div>

      <p className="mt-8 text-xs tracking-wide opacity-80 sm:text-sm">
        Uses ChatGPT, Claude, and Gemini workflows &middot; Workshop seats limited &middot; Hands-on templates included
      </p>

      <div className="mt-10">
        <p className="text-xs font-semibold uppercase tracking-widest opacity-60 mb-4">Sponsored by</p>
        <div className="flex items-center justify-center gap-8 flex-wrap">
          {sponsors.map((s) => (
            <a key={s.alt} href={s.href} target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80">
              <img src={s.src} alt={s.alt} className="h-10 w-auto object-contain" />
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
