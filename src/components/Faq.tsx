"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { faqs } from "@/lib/content";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-brand-300">
              FAQ
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-[2.6rem] sm:leading-[1.12]">
              The questions{" "}
              <span className="text-gradient">buyers actually ask.</span>
            </h2>
            <p className="mt-5 text-[16.5px] leading-relaxed text-slate-400">
              Anything not covered here, ask us directly — you&rsquo;ll get an
              engineer on the call, not a sales script.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <dl>
              {faqs.map((faq, i) => {
                const isOpen = open === i;
                return (
                  <div key={faq.q} className="border-b border-white/8">
                    <dt>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => setOpen(isOpen ? null : i)}
                        className="flex w-full items-start justify-between gap-6 py-5 text-left"
                      >
                        <span
                          className={`text-[16.5px] font-medium transition-colors ${
                            isOpen ? "text-white" : "text-slate-300"
                          }`}
                        >
                          {faq.q}
                        </span>
                        <span
                          className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white/6 text-white transition-transform duration-300 ${
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
                      </button>
                    </dt>
                    <dd
                      className={`grid transition-all duration-400 ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-6 pr-12 text-[15px] leading-relaxed text-slate-400">
                          {faq.a}
                        </p>
                      </div>
                    </dd>
                  </div>
                );
              })}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
