import { FileText, Zap, Video, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import pinnacleLogo from "@/assets/sponsors/pinnacle-color-trim.png";
import eaglebankLogo from "@/assets/sponsors/eaglebank-color-trim.png";
import averybryantLogo from "@/assets/sponsors/averybryant-color-trim.png";
import { workshopConfig } from "@/lib/workshopConfig";
import { useCountdown } from "@/hooks/useCountdown";

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
  {
    src: pinnacleLogo,
    alt: "Realty ONE Group Pinnacle",
    href: "https://map.realtyonegroup.com/real-estate-agent/41130/rj-hawk",
    logoClass: "h-16 sm:h-[4.65rem]",
    cardClass: "border-[#223247]/80 bg-[#0d1521] hover:border-[#2d4562] hover:bg-[#111c2b]",
  },
  {
    src: eaglebankLogo,
    alt: "Eagle Bank Mortgage",
    href: "https://www.eaglebank.com/lender/kim-leech/",
    logoClass: "h-16 sm:h-[4.65rem]",
    cardClass: "border-border/70 bg-background/75 hover:border-accent/35 hover:bg-accent/5",
  },
  {
    src: averybryantLogo,
    alt: "Avery and Bryant",
    href: "https://www.averyandbryant.com",
    logoClass: "h-16 sm:h-[4.65rem]",
    cardClass: "border-border/70 bg-background/75 hover:border-accent/35 hover:bg-accent/5",
  },
];

const pad = (value: number) => String(value).padStart(2, "0");

const HeroSection = ({ onReserveSeat, onGetOutline }: HeroProps) => {
  const countdown = useCountdown(workshopConfig.eventStartIso);

  return (
    <section className="section-padding relative border-b border-border/65">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="reveal-up">
            <span className="section-kicker">Edition 01 · In-Person Workshop</span>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <span className="data-strip">{workshopConfig.dateLabel}</span>
              <span className="data-strip">
                {workshopConfig.timeLabel} {workshopConfig.timeZoneLabel}
              </span>
              <span className="data-strip">{workshopConfig.seatCap} Seats Max</span>
            </div>

            <div className="mt-5">
              {countdown.expired ? (
                <div className="rounded-xl border border-border/75 bg-card/85 px-4 py-3">
                  <p className="meta-copy text-[0.68rem] uppercase tracking-[0.1em] text-[hsl(var(--signal))]">
                    Enrollment remains first-come until all 40 seats are filled.
                  </p>
                </div>
              ) : (
                <div className="section-frame p-4">
                  <p className="meta-copy text-[0.66rem] uppercase tracking-[0.1em] text-muted-foreground">
                    Workshop starts in
                  </p>
                  <div className="mt-3 grid grid-cols-4 gap-2.5">
                    <div className="rounded-lg border border-border/80 bg-background/75 px-2 py-2 text-center">
                      <p className="text-lg font-semibold leading-none text-foreground">{pad(countdown.days)}</p>
                      <p className="meta-copy mt-1 text-[0.62rem] uppercase tracking-[0.09em] text-muted-foreground">days</p>
                    </div>
                    <div className="rounded-lg border border-border/80 bg-background/75 px-2 py-2 text-center">
                      <p className="text-lg font-semibold leading-none text-foreground">{pad(countdown.hours)}</p>
                      <p className="meta-copy mt-1 text-[0.62rem] uppercase tracking-[0.09em] text-muted-foreground">hours</p>
                    </div>
                    <div className="rounded-lg border border-border/80 bg-background/75 px-2 py-2 text-center">
                      <p className="text-lg font-semibold leading-none text-foreground">{pad(countdown.minutes)}</p>
                      <p className="meta-copy mt-1 text-[0.62rem] uppercase tracking-[0.09em] text-muted-foreground">mins</p>
                    </div>
                    <div className="rounded-lg border border-border/80 bg-background/75 px-2 py-2 text-center">
                      <p className="text-lg font-semibold leading-none text-foreground">{pad(countdown.seconds)}</p>
                      <p className="meta-copy mt-1 text-[0.62rem] uppercase tracking-[0.09em] text-muted-foreground">secs</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <h1 className="mt-7 max-w-2xl text-4xl font-bold leading-[1.04] text-foreground sm:text-[3.2rem]">
              Turn AI Into Your Business Assistant in 2 Hours
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Walk away with real workflows you can use the same day: faster follow-up, smarter client messaging, content
              in minutes, and a cleaner pipeline. Open to realtors, entrepreneurs, and any business looking to leverage
              AI.
            </p>
            <p className="meta-copy mt-4 text-xs uppercase tracking-[0.07em] text-muted-foreground">
              In person · {workshopConfig.locationLabel}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button size="lg" onClick={onReserveSeat} className="soft-pulse w-full bg-accent text-accent-foreground sm:w-auto">
                Reserve My Seat
              </Button>
              <Button size="lg" variant="outline" onClick={onGetOutline} className="w-full sm:w-auto">
                Get the Workshop Outline
              </Button>
            </div>

            <p className="meta-copy mt-7 text-xs uppercase tracking-[0.08em] text-muted-foreground">
              Uses ChatGPT, Claude, and Gemini workflows · {workshopConfig.seatCap}-seat in-person cap · templates included
            </p>
          </div>

          <aside className="section-frame reveal-up relative p-6 sm:p-7">
            <div className="absolute -left-3 top-8 hidden h-12 w-1 rounded-full bg-[hsl(var(--accent))] lg:block" />
            <p className="section-kicker">Inside The In-Person Session</p>
            <ul className="stagger-fade mt-5 space-y-3.5">
              {bullets.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3 rounded-xl border border-border/70 bg-background/55 px-3.5 py-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <span className="text-sm leading-relaxed text-foreground">{text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 rounded-2xl border border-border/75 bg-primary px-4 py-4 text-primary-foreground">
              <p className="meta-copy text-[0.68rem] uppercase tracking-[0.11em] text-primary-foreground/80">Hands-On Stack</p>
              <p className="mt-1.5 text-sm leading-relaxed">
                Prompt libraries, automation templates, and live walkthroughs you can deploy the same day.
              </p>
            </div>
          </aside>
        </div>

        <div className="mt-11 rounded-[calc(var(--radius)+0.15rem)] border border-border/75 bg-card/95 px-5 py-6 sm:px-8">
          <p className="meta-copy text-center text-[0.66rem] font-medium uppercase tracking-[0.14em] text-muted-foreground">
            Sponsored by
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sponsors.map((s) => (
              <a
                key={s.alt}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex min-h-[7.5rem] items-center justify-center rounded-2xl border px-6 py-4 transition-colors ${s.cardClass}`}
              >
                <img src={s.src} alt={s.alt} className={`${s.logoClass} w-auto object-contain`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
