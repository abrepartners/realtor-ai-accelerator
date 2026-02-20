import workshopClip from "@/assets/videos/ai-workshop-rj-720p.mp4";
import workshopPoster from "@/assets/videos/ai-workshop-rj-poster.jpg";
import caydenClip from "@/assets/videos/cayden-720p.mp4";
import caydenPoster from "@/assets/videos/cayden-poster.jpg";

const clips = [
  {
    label: "Live Workshop Footage",
    title: "What The Room Feels Like",
    description:
      "A quick look at the in-person training format so attendees know what to expect before reserving one of the limited seats.",
    src: workshopClip,
    poster: workshopPoster,
  },
  {
    label: "Attendee Perspective",
    title: "Real Feedback In Action",
    description:
      "A short attendee highlight that reinforces the practical, immediately usable systems covered during the session.",
    src: caydenClip,
    poster: caydenPoster,
  },
];

const VideoHighlights = () => (
  <section className="section-padding relative border-b border-border/60">
    <div className="mx-auto max-w-6xl">
      <div className="mx-auto max-w-3xl text-center reveal-up">
        <span className="section-kicker justify-center">Workshop Preview</span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          See The Training Style Before You Register
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          These short clips show the in-person energy and practical format. Tap either video to play with sound.
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
