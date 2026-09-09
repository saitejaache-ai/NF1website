import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { about, values } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <div className="relative aspect-4/3 overflow-hidden rounded-lg">
              <Image
                src="/images/about-collab.jpg"
                alt="An NForceOne team collaborating around a laptop in the Hyderabad delivery centre"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-red-600">
                {about.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-[1.1] text-ink-900 sm:text-4xl lg:text-[2.9rem]">
                <span className="text-red-600">{about.title}</span>
              </h2>
              {about.body.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="mt-5 text-[16.5px] leading-relaxed text-ink-600"
                >
                  {paragraph}
                </p>
              ))}
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-9 flex flex-wrap gap-3">
                {[
                  { v: "100+", k: "Professionals" },
                  { v: "2", k: "Countries" },
                  { v: "4.9/5", k: "Client rating" },
                ].map((s) => (
                  <div
                    key={s.k}
                    className="rounded border border-ink-200 bg-ink-100 px-4 py-3"
                  >
                    <span className="font-display text-lg font-bold text-ink-900">
                      {s.v}
                    </span>
                    <span className="ml-2 text-[13px] text-ink-500">{s.k}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
//comment
        <Reveal>
          <p className="mt-16 text-[13px] text-ink-500">
            Our culture spells itself out —{" "}
            <span className="font-mono tracking-[0.3em] text-ink-900">GROW</span>
          </p>
        </Reveal>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 90}>
              <div className="group relative h-full overflow-hidden rounded-lg border border-ink-200 bg-white p-6 transition-colors hover:border-ink-300 hover:shadow-md">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-3 -top-6 font-display text-[5.5rem] font-extrabold leading-none text-ink-100 transition-colors duration-500 group-hover:text-red-100"
                >
                  {value.letter}
                </span>
                <h3 className="relative text-lg font-bold text-ink-900">
                  {value.title}
                </h3>
                <p className="relative mt-2.5 text-[14.5px] leading-relaxed text-ink-600">
                  {value.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
