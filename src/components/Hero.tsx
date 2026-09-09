import Image from "next/image";
import { Counter } from "@/components/Counter";
import { ArrowRight } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { hero, heroStats } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white pt-28 sm:pt-32">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 xl:gap-20">
          <div className="pt-6 pb-4 lg:py-20">
            <Reveal>
              <span className="inline-flex items-center gap-2.5 rounded-full bg-red-50 px-3.5 py-1.5 text-[13px] font-medium text-red-700">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-red-600" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-600" />
                </span>
                {hero.eyebrow}
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 font-display text-[2.5rem] font-extrabold leading-[1.04] text-ink-900 sm:text-[3.4rem] lg:text-[3.9rem] xl:text-[4.4rem]">
                {hero.titleLead}{" "}
                <span className="text-red-600">{hero.titleAccent}</span>{" "}
                {hero.titleTrail}
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-ink-600">
                {hero.body}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
                <a
                  href={hero.primaryCta.href}
                  className="group inline-flex items-center justify-center gap-2 rounded bg-red-600 px-7 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-red-700"
                >
                  {hero.primaryCta.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href={hero.secondaryCta.href}
                  className="group inline-flex items-center justify-center gap-2 px-1 py-2 text-[15px] font-semibold text-red-600 transition-colors hover:text-red-700"
                >
                  {hero.secondaryCta.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Photo with the angled left edge their hero uses. The clip is
              dropped below lg — on a phone it just eats the image. */}
          <Reveal delay={200} className="relative">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg lg:aspect-16/13 lg:rounded-none lg:[clip-path:polygon(14%_0,100%_0,100%_100%,0_100%)]">
              <Image
                src="/images/hero-team.jpg"
                alt="An NForceOne delivery team reviewing analytics together at a workstation"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>

      {/* Stat band — closes the hero and separates it from the logo wall. */}
      <div className="mt-14 border-t border-ink-200 bg-ink-100 lg:mt-20">
        <div className="container-page">
          <Reveal>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-8 py-10 lg:grid-cols-4 lg:py-12">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-display text-4xl font-extrabold text-ink-900 lg:text-5xl">
                    <Counter
                      value={stat.value}
                      suffix={stat.suffix}
                      decimals={"decimals" in stat ? stat.decimals : 0}
                    />
                  </dt>
                  <dd className="mt-2 text-[13.5px] leading-snug text-ink-500">
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
