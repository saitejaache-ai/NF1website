import { Reveal } from "@/components/Reveal";
import { SampleBadge } from "@/components/SampleBadge";
import { SAMPLE_clients } from "@/lib/content";

export function LogoWall() {
  // Duplicated once so the -50% marquee translate loops seamlessly.
  const track = [...SAMPLE_clients, ...SAMPLE_clients];

  return (
    <section className="relative border-y border-ink-200 bg-white py-12">
      <div className="container-page">
        <Reveal className="flex flex-wrap items-center justify-center gap-4 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-500">
            Trusted by teams shipping under pressure
          </p>
          <SampleBadge what="with real client logos" />
        </Reveal>
      </div>

      <Reveal delay={100} className="relative mt-9">
        {/* The fades must match the band behind the marquee, or the names
            appear to slide under a coloured panel. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-white to-transparent sm:w-36"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-white to-transparent sm:w-36"
        />

        <div className="flex overflow-hidden">
          <ul className="flex shrink-0 animate-marquee items-center gap-12 pr-12 sm:gap-16 sm:pr-16">
            {track.map((client, i) => (
              <li
                key={`${client}-${i}`}
                aria-hidden={i >= SAMPLE_clients.length}
                className="shrink-0 whitespace-nowrap text-[17px] font-semibold text-ink-300 transition-colors duration-300 hover:text-ink-600 sm:text-xl"
              >
                {client}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
