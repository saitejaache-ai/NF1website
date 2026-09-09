"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "@/components/Icons";

/**
 * Subscribe band. Like the contact form, this has no backend yet — it confirms
 * locally so the flow can be demoed. Wire it to your ESP before launch.
 */
export function Newsletter() {
  const [done, setDone] = useState(false);

  return (
    <div className="rounded-lg border border-white/10 bg-white/5 px-7 py-9 sm:px-10 sm:py-11">
      <div className="grid gap-7 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12">
        <div>
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            Engineering notes, occasionally.
          </h2>
          <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-300">
            What we&rsquo;re learning about testing at scale, AI in delivery, and
            keeping releases boring. No newsletter cadence theatre.
          </p>
        </div>

        {done ? (
          <p className="text-[15px] font-semibold text-white">
            Thanks — you&rsquo;re on the list.
          </p>
        ) : (
          <form
            onSubmit={(e: FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              setDone(true);
            }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Work email
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              required
              placeholder="you@company.com"
              className="w-full rounded border border-white/20 bg-white/10 px-5 py-3.5 text-[15px] text-white placeholder:text-ink-400 transition-colors outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/25"
            />
            <button
              type="submit"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded bg-red-600 px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-red-700"
            >
              Subscribe
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
