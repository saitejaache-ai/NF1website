import { ArrowRight } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { SampleBadge } from "@/components/SampleBadge";
import { SAMPLE_insights } from "@/lib/content";

/** Thought-leadership cards — the "What we think" band on every MNC homepage. */
export function Insights() {
  return (
    <section id="insights" className="relative py-24 sm:py-32">
      <div className="container-page">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-brand-300">
              What we think
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-[2.6rem] sm:leading-[1.12]">
              Opinions we&rsquo;re willing to{" "}
              <span className="text-gradient">defend.</span>
            </h2>
            <SampleBadge what="with published articles" className="mt-5" />
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {SAMPLE_insights.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-ink-900/60 p-7 transition-colors hover:bg-ink-800/70">
                <span className="hairline rounded-2xl" />
                <span className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-300/0 blur-3xl transition-colors duration-500 group-hover:bg-brand-300/15" />

                <div className="relative flex items-center gap-3 text-[11.5px]">
                  <span className="rounded-full bg-brand-300/12 px-2.5 py-1 font-medium text-brand-300">
                    {item.kind}
                  </span>
                  <span className="text-slate-600">{item.readTime} read</span>
                </div>

                <h3 className="relative mt-5 text-xl font-semibold leading-snug tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="relative mt-3 flex-1 text-[14.5px] leading-relaxed text-slate-400">
                  {item.body}
                </p>

                <span className="relative mt-6 inline-flex items-center gap-2 text-[14px] font-medium text-slate-500 transition-colors group-hover:text-white">
                  Read
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
