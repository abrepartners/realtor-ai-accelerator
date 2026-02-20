import workshopClip from "@/assets/videos/ai-workshop-rj-720p.mp4";
import workshopPoster from "@/assets/videos/ai-workshop-rj-poster.jpg";
import caydenClip from "@/assets/videos/cayden-720p.mp4";
import caydenPoster from "@/assets/videos/cayden-poster.jpg";

const clips = [
  {
    label: "Sponsor Spotlight",
    title: "RJ Hawk, Event Sponsor",
    description:
      "RJ is a featured sponsor of this event and a key local real estate partner helping support this in-person workshop experience.",
    src: workshopClip,
    poster: workshopPoster,
  },
  {
    label: "Creative Specialist",
    title: "Cayden at Avery & Bryant",
    description:
      "Cayden works with Thomas as a creative specialist, and Avery & Bryant uses AI in its day-to-day process for content and marketing execution.",
    src: caydenClip,
    poster: caydenPoster,
  },
];

const VideoHighlights = () => (
  <section className="section-padding relative border-b border-border/60">
    <div className="mx-auto max-w-6xl">
      <div className="mx-auto max-w-3xl text-center reveal-up">
        <span className="section-kicker justify-center">Partner + Team Highlights</span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Meet The People Behind This Workshop
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Quick introductions from a sponsor and a core creative team member. Tap either video to play with sound.
        </p>
      </div>

      <div className="stagger-fade mt-10 grid gap-6 lg:grid-cols-2">
        {clips.map((clip) => (
          <article key={clip.title} className="section-frame p-4 sm:p-5">
            <div className="mx-auto w-full max-w-[20.5rem] rounded-[1.2rem] border border-border/70 bg-black/90 p-1.5 shadow-[0_26px_52px_-34px_hsl(var(--foreground)/0.75)]">
              <video
                className="aspect-[9/16] w-full rounded-[0.95rem] object-cover"
                controls
                playsInline
                preload="metadata"
                poster={clip.poster}
              >
                <source src={clip.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="mt-4">
              <p className="meta-copy text-[0.66rem] uppercase tracking-[0.1em] text-accent">{clip.label}</p>
              <h3 className="mt-1.5 text-xl font-semibold leading-tight text-foreground">{clip.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{clip.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default VideoHighlights;
