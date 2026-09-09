"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { qualityGroups, qualityProof } from "@/lib/content";

export function Quality() {
  type GroupId = (typeof qualityGroups)[number]["id"];
  const [active, setActive] = useState<GroupId>(qualityGroups[0].id);
  const group = qualityGroups.find((g) => g.id === active) ?? qualityGroups[0];

  return (
    /* Full-bleed black band so the flagship practice reads as its own chapter. */
    <section id="quality" className="bg-ink-950 py-16 sm:py-20 lg:py-28">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading
              tone="dark"
              eyebrow="Flagship practice"
              title="Quality assurance,"
              accent="all the way down."
              body="Testing is where NForceOne started, and it is still where we are hardest to beat. Choose the slice you need — or hand us the entire quality function."
            />

            <Reveal variant="scale" delay={120}>
              <dl className="mt-10 grid grid-cols-3 gap-4">
                {qualityProof.map((p) => (
                  <div
                    key={p.label}
                    className="group rounded-lg border border-white/10 bg-white/5 px-4 py-5 transition-all duration-300 hover:border-red-500/40 hover:bg-white/10 hover:shadow-lg hover:shadow-red-600/10"
                  >
                    <dt className="font-display text-2xl font-extrabold text-white transition-transform duration-300 group-hover:scale-105 group-hover:text-red-500">
                      {p.value}
                    </dt>
                    <dd className="mt-1 text-[12px] leading-tight text-ink-400 group-hover:text-ink-300">
                      {p.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal variant="right" delay={100}>
            <div className="rounded-lg border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur-sm">
              <div
                role="tablist"
                aria-label="Quality assurance service groups"
                className="flex gap-1 rounded bg-white/5 p-1.5"
              >
                {qualityGroups.map((g) => (
                  <button
                    key={g.id}
                    role="tab"
                    id={`qa-tab-${g.id}`}
                    aria-selected={active === g.id}
                    aria-controls={`qa-panel-${g.id}`}
                    onClick={() => setActive(g.id)}
                    className={`min-h-11 flex-1 rounded px-3 py-2.5 text-[13px] font-semibold transition-all duration-300 ${
                      active === g.id
                        ? "bg-red-600 text-white shadow-md shadow-red-600/30 scale-[1.02]"
                        : "text-ink-400 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {g.title}
                  </button>
                ))}
              </div>

              <div
                role="tabpanel"
                id={`qa-panel-${group.id}`}
                aria-labelledby={`qa-tab-${group.id}`}
                className="px-5 py-7 sm:px-7"
              >
                <p className="text-[15px] leading-relaxed text-ink-300">
                  {group.caption}
                </p>
                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {group.items.map((item, i) => (
                    <li
                      key={item}
                      style={{ animationDelay: `${i * 40}ms` }}
                      className="group flex items-center gap-3 rounded border border-white/10 bg-white/5 px-4 py-3 text-[14px] text-ink-300 transition-all duration-300 hover:border-red-500/30 hover:bg-white/10 hover:translate-x-1"
                    >
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3.5 w-3.5 shrink-0 text-red-500 transition-transform duration-300 group-hover:scale-125"
                        aria-hidden="true"
                      >
                        <path d="m3.5 8.5 3 3 6-7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
