import { ServiceIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/lib/content";

export function Services() {
  return (
    <section id="services" className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="What we do"
          title="Ten practices."
          accent="One accountable team."
          body="Most partners hand you a specialism and a hand-off. We staff the whole path from architecture to release gate, so nothing falls into the gap between vendors."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const wide = service.span === "wide";
            return (
              <Reveal
                key={service.name}
                variant="scale"
                delay={Math.min(i, 5) * 60}
                className={wide ? "sm:col-span-2" : undefined}
              >
                <article
                  className={`card-hover group flex h-full flex-col rounded-lg border border-ink-200 bg-white p-6 transition-all duration-300 hover:border-red-600/30 ${
                    wide ? "lg:p-8" : ""
                  }`}
                >
                  <span className="grid h-11 w-11 place-items-center rounded bg-red-50 text-red-600 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-md">
                    <ServiceIcon name={service.icon} className="h-5 w-5 transition-transform duration-300 group-hover:scale-105" />
                  </span>

                  <h3
                    className={`mt-5 font-bold text-ink-900 transition-colors duration-200 group-hover:text-red-700 ${
                      wide ? "text-2xl" : "text-lg"
                    }`}
                  >
                    {service.name}
                  </h3>
                  <p
                    className={`mt-2.5 text-[14.5px] leading-relaxed text-ink-600 ${
                      wide ? "max-w-lg" : ""
                    }`}
                  >
                    {service.blurb}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2 pt-1">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="rounded-full bg-ink-100 px-2.5 py-1 text-[12px] text-ink-600 transition-colors duration-200 group-hover:bg-red-50 group-hover:text-red-700"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
