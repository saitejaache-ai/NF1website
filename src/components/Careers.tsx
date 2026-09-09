import { ArrowRight } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { careers } from "@/lib/content";

/**
 * Careers teaser with live roles. Every role listed here is a real opening
 * published on nforceone.com/careers — applications go to the same inbox.
 */
export function Careers() {
  return (
    <section id="careers" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/4 -z-10 h-[30rem] w-[30rem] rounded-full bg-brand-300/8 blur-[140px]"
      />

      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-brand-300">
                Careers
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-[2.6rem] sm:leading-[1.12]">
                We put our{" "}
                <span className="text-gradient">people first.</span>
              </h2>
              <blockquote className="mt-6 border-l-2 border-brand-300/40 pl-5 text-[16px] leading-relaxed text-slate-400">
                {careers.quote}
              </blockquote>
            </Reveal>

            <Reveal delay={120}>
              <a
                href={`mailto:${careers.applyEmail}`}
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white/4 px-5 py-3 text-[14.5px] font-medium text-white transition-colors hover:bg-white/8"
              >
                <span className="hairline rounded-full" />
                Send us your CV
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <p className="mt-3 text-[13px] text-slate-600">
                {careers.applyEmail}
              </p>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <div className="flex items-baseline justify-between gap-4 border-b border-white/8 pb-4">
                <h3 className="text-[13px] font-medium uppercase tracking-[0.14em] text-slate-500">
                  Open roles
                </h3>
                <span className="text-[13px] text-slate-500">
                  {careers.roles.length} positions · Hyderabad
                </span>
              </div>
            </Reveal>

            <ul>
              {careers.roles.map((role, i) => (
                <Reveal as="li" key={role.title} delay={i * 70}>
                  <a
                    href={`mailto:${careers.applyEmail}?subject=${encodeURIComponent(
                      `Application: ${role.title}`,
                    )}`}
                    className="group flex items-start justify-between gap-6 border-b border-white/6 py-5 transition-colors hover:border-white/12"
                  >
                    <div className="min-w-0">
                      <p className="text-[16.5px] font-medium text-white transition-colors group-hover:text-brand-300">
                        {role.title}
                      </p>
                      <p className="mt-1.5 text-[14px] leading-relaxed text-slate-500">
                        {role.summary}
                      </p>
                      <ul className="mt-3 flex flex-wrap gap-1.5">
                        {role.skills.map((skill) => (
                          <li
                            key={skill}
                            className="rounded-full bg-white/4 px-2.5 py-0.5 text-[11.5px] text-slate-500"
                          >
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex shrink-0 items-center gap-4">
                      <span className="hidden text-right text-[12.5px] text-slate-500 sm:block">
                        {role.experience}
                        <span className="mt-0.5 block text-slate-600">
                          {role.location}
                        </span>
                      </span>
                      <ArrowRight className="h-4 w-4 shrink-0 -translate-x-1 text-slate-600 opacity-0 transition-all group-hover:translate-x-0 group-hover:text-white group-hover:opacity-100" />
                    </div>
                  </a>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
