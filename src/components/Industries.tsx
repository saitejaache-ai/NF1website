import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { industries } from "@/lib/content";

export function Industries() {
  return (
    <section id="industries" className="bg-ink-100 py-16 sm:py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Industries we serve"
          title="Domain fluency from day one,"
          accent="not month three."
          align="center"
          body="Eleven sectors, each with its own regulators, release rhythms and failure modes. We staff for the one you're in."
        />

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => (
            <Reveal key={industry.name} delay={Math.min(i, 6) * 60}>
              <div className="h-full rounded-lg border border-ink-200 bg-white p-5 transition-all duration-300 hover:border-ink-300 hover:shadow-md">
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                  <div>
                    <h3 className="text-[15.5px] font-bold text-ink-900">
                      {industry.name}
                    </h3>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-600">
                      {industry.body}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
