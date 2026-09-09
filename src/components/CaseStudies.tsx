"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ArrowRight } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { SampleBadge } from "@/components/SampleBadge";
import { SAMPLE_caseStudies } from "@/lib/content";

/**
 * Scroll-snap carousel with arrow controls — the case-study pattern every
 * large consultancy homepage uses, because it puts business outcomes above
 * the fold of the section rather than burying them in a PDF.
 */

/** Indexed to match SAMPLE_caseStudies: banking, retail, insurance. */
const CASE_IMAGES = [
  "/images/case-banking.jpg",
  "/images/case-retail.jpg",
  "/images/case-insurance.jpg",
] as const;

export function CaseStudies() {
  const scroller = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  function scrollTo(next: number) {
    const el = scroller.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(next, SAMPLE_caseStudies.length - 1));
    const card = el.children[clamped] as HTMLElement | undefined;
    if (!card) return;
    el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: "smooth" });
    setIndex(clamped);
  }

  // Keep the dots honest when the user swipes instead of using the arrows.
  function onScroll() {
    const el = scroller.current;
    if (!el) return;
    const children = Array.from(el.children) as HTMLElement[];
    const nearest = children.reduce(
      (best, child, i) => {
        const distance = Math.abs(child.offsetLeft - el.offsetLeft - el.scrollLeft);
        return distance < best.distance ? { i, distance } : best;
      },
      { i: 0, distance: Infinity },
    );
    setIndex(nearest.i);
  }

  return (
    <section
      id="work"
      className="relative overflow-hidden bg-ink-100 py-16 sm:py-20 lg:py-28"
    >
      <div className="container-page">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-red-600">
              Our work
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-[1.1] text-ink-900 sm:text-4xl lg:text-[2.9rem]">
              Outcomes, not{" "}
              <span className="text-red-600">activity reports.</span>
            </h2>
            <p className="mt-5 text-[16.5px] leading-relaxed text-ink-600">
              Every engagement is measured against a number the client already
              cared about before we arrived.
            </p>
            <SampleBadge
              what="with real, client-approved engagements"
              className="mt-5"
            />
          </Reveal>

          <Reveal delay={100} className="flex gap-2">
            <CarouselButton
              direction="prev"
              disabled={index === 0}
              onClick={() => scrollTo(index - 1)}
            />
            <CarouselButton
              direction="next"
              disabled={index === SAMPLE_caseStudies.length - 1}
              onClick={() => scrollTo(index + 1)}
            />
          </Reveal>
        </div>

        <Reveal variant="scale" delay={80}>
          <div
            ref={scroller}
            onScroll={onScroll}
            className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {SAMPLE_caseStudies.map((study, i) => (
              <article
                key={study.title}
                className="card-hover group flex w-[85vw] shrink-0 snap-start flex-col overflow-hidden rounded-lg border border-ink-200 bg-white transition-all duration-300 hover:border-red-600/30 sm:w-[30rem]"
              >
                <div className="relative aspect-16/9 w-full overflow-hidden">
                  <Image
                    src={CASE_IMAGES[i]}
                    alt={`${study.industry} — ${study.title}`}
                    fill
                    sizes="(max-width: 640px) 85vw, 30rem"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                <div className="flex flex-1 flex-col p-7 sm:p-9">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-red-600">
                    {study.industry}
                  </p>
                  <h3 className="mt-4 text-2xl font-bold leading-snug text-ink-900 transition-colors duration-200 group-hover:text-red-700">
                    {study.title}
                  </h3>
                  <p className="mt-3.5 text-[14.5px] leading-relaxed text-ink-600">
                    {study.body}
                  </p>

                  <dl className="mt-7 grid grid-cols-3 gap-4 border-t border-ink-200 pt-6">
                    {study.metrics.map((metric) => (
                      <div key={metric.label}>
                        {/* Red, not neutral — these numbers are the whole
                            point of the card and should win the eye. */}
                        <dt className="font-display text-2xl font-extrabold text-red-600 transition-transform duration-300 group-hover:scale-105">
                          {metric.value}
                        </dt>
                        <dd className="mt-1 text-[11.5px] leading-tight text-ink-500">
                          {metric.label}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {study.services.map((service) => (
                      <li
                        key={service}
                        className="rounded-full bg-ink-100 px-2.5 py-1 text-[11.5px] text-ink-600 transition-colors duration-200 group-hover:bg-red-50 group-hover:text-red-700"
                      >
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </Reveal>

        <div className="mt-6 flex items-center justify-between gap-4">
          <div className="flex gap-1.5">
            {SAMPLE_caseStudies.map((study, i) => (
              <button
                key={study.title}
                type="button"
                aria-label={`Go to case study ${i + 1}`}
                aria-current={i === index}
                onClick={() => scrollTo(i)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-red-600" : "w-4 bg-ink-300"
                }`}
              />
            ))}
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-[14.5px] font-semibold text-red-600 transition-colors hover:text-red-700"
          >
            Discuss a similar problem
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function CarouselButton({
  direction,
  disabled,
  onClick,
}: {
  direction: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "prev" ? "Previous case study" : "Next case study"}
      className="grid h-11 w-11 place-items-center rounded border border-ink-300 text-ink-900 transition-colors hover:bg-ink-100 disabled:opacity-30 disabled:hover:bg-transparent"
    >
      <ArrowRight
        className={`h-4 w-4 ${direction === "prev" ? "rotate-180" : ""}`}
      />
    </button>
  );
}
