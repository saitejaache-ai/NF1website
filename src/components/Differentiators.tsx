import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { differentiators, focusPillars } from "@/lib/content";

export function Differentiators() {
  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Why NForceOne"
          title="Four reasons enterprises"
          accent="stay with us."
          align="center"
          body="Speed is easy to promise. Holding quality while you move quickly is the part that takes a hundred specialists and a decade of habits."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="group relative h-full overflow-hidden rounded-lg border border-ink-200 bg-white p-6 transition-colors hover:border-ink-300 hover:shadow-md">
                <span
                  aria-hidden="true"
                  className="font-display text-[13px] font-bold text-red-600"
                >
                  0{i + 1}
                </span>
                <h3 className="mt-4 text-lg font-bold text-ink-900">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-600">
                  {item.body}
                </p>
                <span className="absolute inset-x-6 bottom-0 h-0.5 scale-x-0 bg-red-600 transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-4 overflow-hidden rounded-lg border border-ink-200 bg-ink-100 px-6 py-7 sm:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {focusPillars.map((pillar) => (
                <div key={pillar.label} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                  <div>
                    <p className="text-[14px] font-semibold text-ink-900">
                      {pillar.label}
                    </p>
                    <p className="mt-1 text-[13px] leading-snug text-ink-500">
                      {pillar.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
