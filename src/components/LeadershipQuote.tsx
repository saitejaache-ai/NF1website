import { Reveal } from "@/components/Reveal";
import { SampleBadge } from "@/components/SampleBadge";
import { SAMPLE_leadershipQuote } from "@/lib/content";

/** The CEO-perspective band that anchors most enterprise consultancy homepages. */
export function LeadershipQuote() {
  return (
    <section className="bg-ink-950 py-16 sm:py-20 lg:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-4xl text-center">
          <span
            aria-hidden="true"
            className="block font-display text-7xl font-extrabold leading-none text-red-600"
          >
            &ldquo;
          </span>
          <blockquote className="-mt-4 font-display text-2xl font-bold leading-snug text-white sm:text-[2.1rem] sm:leading-[1.28]">
            {SAMPLE_leadershipQuote.quote}
          </blockquote>

          <div className="mt-8 flex flex-col items-center gap-3">
            <div className="h-px w-12 bg-white/12" />
            <p className="text-[15px] font-semibold text-white">
              {SAMPLE_leadershipQuote.name}
            </p>
            <p className="text-[13.5px] text-ink-400">
              {SAMPLE_leadershipQuote.role}
            </p>
            <SampleBadge
              what="with a named, consenting spokesperson"
              tone="dark"
              className="mt-2"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
