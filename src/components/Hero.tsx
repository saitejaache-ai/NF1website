import Image from "next/image";
import { Counter } from "@/components/Counter";
import { ArrowRight } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { hero, heroStats } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white pt-28 sm:pt-32">
      {/* Decorative ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-red-100/50 blur-3xl animate-float-slow"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-red-50 blur-3xl animate-pulse-glow"
      />

      <div className="container-page relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 xl:gap-20">
          <div className="pt-6 pb-4 lg:py-20">
            <Reveal variant="left">
              <span className="inline-flex items-center gap-2.5 rounded-full bg-red-50 px-3.5 py-1.5 text-[13px] font-medium text-red-700 shadow-sm border border-red-100/60">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-red-600" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-600" />
                </span>
                {hero.eyebrow}
              </span>
            </Reveal>

            <Reveal variant="left" delay={80}>
              <h1 className="mt-6 font-display text-[2.5rem] font-extrabold leading-[1.04] text-ink-900 sm:text-[3.4rem] lg:text-[3.9rem] xl:text-[4.4rem]">
                {hero.titleLead}{" "}
                <span className="text-red-600 transition-colors duration-300 hover:text-red-500">
                  {hero.titleAccent}
                </span>{" "}
                {hero.titleTrail}
              </h1>
            </Reveal>

            <Reveal variant="left" delay={160}>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-ink-600">
                {hero.body}
              </p>
            </Reveal>

            <Reveal variant="left" delay={240}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
                <a
                  href={hero.primaryCta.href}
                  className="btn-shimmer group inline-flex items-center justify-center gap-2 rounded bg-red-600 px-7 py-4 text-[15px] font-semibold text-white shadow-md shadow-red-600/20 transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/30 hover:-translate-y-0.5"
                >
                  {hero.primaryCta.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href={hero.secondaryCta.href}
                  className="group inline-flex items-center justify-center gap-2 px-1 py-2 text-[15px] font-semibold text-red-600 transition-all hover:text-red-700 hover:translate-x-1"
                >
                  {hero.secondaryCta.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Photo with the angled left edge and smooth hover zoom effect */}
          <Reveal variant="scale" delay={200} className="relative group">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg shadow-xl transition-all duration-500 group-hover:shadow-2xl lg:aspect-16/13 lg:rounded-none lg:[clip-path:polygon(14%_0,100%_0,100%_100%,0_100%)]">
              <Image
                src="/images/hero-team.jpg"
                alt="An NForceOne delivery team reviewing analytics together at a workstation"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          </Reveal>
        </div>
      </div>

      {/* Stat band — closes the hero and separates it from the logo wall. */}
      <div className="mt-14 border-t border-ink-200 bg-ink-100 lg:mt-20">
        <div className="container-page">
          <Reveal variant="up">
            <dl className="grid grid-cols-2 gap-x-6 gap-y-8 py-10 lg:grid-cols-4 lg:py-12">
              {heroStats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="group rounded-lg p-3 transition-colors hover:bg-white/80 hover:shadow-sm"
                >
                  <dt className="font-display text-4xl font-extrabold text-ink-900 transition-transform duration-300 group-hover:scale-105 lg:text-5xl">
                    <Counter
                      value={stat.value}
                      suffix={stat.suffix}
                      decimals={"decimals" in stat ? stat.decimals : 0}
                    />
                  </dt>
                  <dd className="mt-2 text-[13.5px] leading-snug text-ink-500 group-hover:text-ink-700">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
