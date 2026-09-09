import Image from "next/image";
import { Counter } from "@/components/Counter";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { offices } from "@/lib/content";

export function GlobalPresence() {
  return (
    /* Black band with a city photograph behind it — the two offices are the
       one place a skyline earns its keep. */
    <section
      id="presence"
      className="relative overflow-hidden bg-ink-950 py-16 sm:py-20 lg:py-28"
    >
      <div aria-hidden="true" className="absolute inset-0">
        <Image
          src="/images/presence-city.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        {/* Keeps the copy legible whatever the photograph is doing. */}
        <div className="absolute inset-0 bg-ink-950/85" />
      </div>

      <div className="relative container-page">
        <SectionHeading
          tone="dark"
          eyebrow="Global presence"
          title="Two time zones,"
          accent="one delivery standard."
          body="A primary delivery centre in Hyderabad and a US office in Plano. The overlap is what makes follow-the-sun QA an actual schedule rather than a slide."
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          {offices.map((office, i) => (
            <Reveal key={office.city} delay={i * 100}>
              <div className="group h-full rounded-lg border border-white/10 bg-white/5 p-7 transition-colors hover:bg-white/10 sm:p-9">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-red-500">
                      {office.role}
                    </p>
                    <h3 className="mt-3 text-3xl font-extrabold text-white">
                      {office.city}
                    </h3>
                    <p className="mt-1 text-[14px] text-ink-400">
                      {office.region}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full bg-white/10 px-3 py-1.5 font-mono text-[11.5px] text-ink-300">
                    {office.utcOffset}
                  </span>
                </div>

                <address className="mt-7 text-[14px] leading-relaxed text-ink-300 not-italic break-words">
                  {office.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>

                <a
                  href={`tel:${office.phoneHref}`}
                  className="mt-4 inline-block py-2 text-[14px] font-semibold text-red-500 transition-colors hover:text-red-400"
                >
                  {office.phone}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140}>
          <dl className="mt-4 grid grid-cols-2 gap-6 rounded-lg border border-white/10 bg-white/5 px-7 py-8 sm:grid-cols-4">
            {[
              { value: 100, suffix: "+", label: "Professionals" },
              { value: 2, suffix: "", label: "Countries" },
              { value: 11, suffix: "", label: "Industries served" },
              { value: 24, suffix: "/7", label: "Coverage" },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <dt className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </dt>
                <dd className="mt-1.5 text-[13px] text-ink-400">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
