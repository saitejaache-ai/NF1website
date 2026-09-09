"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SampleBadge } from "@/components/SampleBadge";
import {
  SAMPLE_awards,
  SAMPLE_certifications,
  SAMPLE_partners,
} from "@/lib/content";

/**
 * Awards as toggle-expandable cards (the Accenture pattern), plus the
 * certification and partner strips that enterprise buyers scan for during
 * vendor assessment.
 */
export function Recognition() {
  const [expanded, setExpanded] = useState<string | null>(SAMPLE_awards[0].title);

  return (
    <section
      id="recognition"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28"
    >
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-red-600">
            Recognition & assurance
          </p>
          <h2 className="mt-4 text-3xl font-extrabold leading-[1.1] text-ink-900 sm:text-4xl lg:text-[2.9rem]">
            The due-diligence{" "}
            <span className="text-red-600">answers, up front.</span>
          </h2>
          <SampleBadge
            what="with verified awards and certifications"
            className="mt-6"
          />
        </Reveal>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SAMPLE_awards.map((award, i) => {
            const isOpen = expanded === award.title;
            return (
              <Reveal key={award.title} delay={i * 90}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setExpanded(isOpen ? null : award.title)}
                  className={`h-full w-full overflow-hidden rounded-lg border bg-white p-6 text-left transition-colors duration-300 ${
                    isOpen
                      ? "border-red-600 bg-red-50"
                      : "border-ink-200 hover:border-ink-300 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-mono text-[12px] text-red-600">
                      {award.year}
                    </span>
                    <span
                      className={`grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ink-100 text-ink-900 transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      <svg
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.4}
                        strokeLinecap="round"
                        aria-hidden="true"
                        className="h-3 w-3"
                      >
                        <path d="M6 2.5v7M2.5 6h7" />
                      </svg>
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold leading-snug text-ink-900">
                    {award.title}
                  </h3>

                  <div
                    className={`grid transition-all duration-400 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pt-3 text-[14.5px] leading-relaxed text-ink-600">
                        {award.body}
                      </p>
                      <p className="pt-3 text-[12px] text-ink-500">
                        {award.source}
                      </p>
                    </div>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-4 grid gap-3 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal delay={80}>
            <div className="h-full rounded-lg border border-ink-200 bg-white p-6 sm:p-7">
              <h3 className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-500">
                Certifications & compliance
              </h3>
              <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {SAMPLE_certifications.map((cert) => (
                  <li
                    key={cert.name}
                    className="rounded bg-ink-100 px-3 py-3.5 text-center"
                  >
                    <p className="text-[13.5px] font-semibold text-ink-900">
                      {cert.name}
                    </p>
                    <p className="mt-1 text-[11px] leading-tight text-ink-500">
                      {cert.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="h-full rounded-lg border border-ink-200 bg-white p-6 sm:p-7">
              <h3 className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-500">
                Platforms & ecosystem
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {SAMPLE_partners.map((partner) => (
                  <li
                    key={partner}
                    className="rounded-full bg-ink-100 px-3.5 py-1.5 text-[13px] text-ink-600 transition-colors hover:bg-ink-200 hover:text-ink-900"
                  >
                    {partner}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[13px] leading-relaxed text-ink-500">
                We&rsquo;re tech-agnostic and will align with your preferences —
                AWS, Azure, React, Pega, or custom legacy systems.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
