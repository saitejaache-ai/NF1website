import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { process } from "@/lib/content";

export function Process() {
  return (
    <section id="process" className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="How we work"
          title="A delivery model built to"
          accent="survive contact with reality."
          body="Four phases, named owners at each one, and checkpoints you can hold us to. No black boxes and no status decks standing in for progress."
        />

        <div className="relative mt-16">
          {/* Connective spine — desktop only. */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-6 hidden border-t border-ink-200 lg:block"
          />

          <ol className="grid gap-10 lg:grid-cols-4 lg:gap-8">
            {process.map((phase, i) => (
              <Reveal as="li" key={phase.step} delay={i * 100} className="relative">
                <div className="flex items-center gap-4 lg:block">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded bg-ink-950 font-mono text-[13px] font-semibold text-white">
                    {phase.step}
                  </span>
                  <h3 className="text-xl font-bold text-ink-900 lg:mt-6">
                    {phase.title}
                  </h3>
                </div>
                <p className="mt-4 text-[14.5px] leading-relaxed text-ink-600">
                  {phase.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
