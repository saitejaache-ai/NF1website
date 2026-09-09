"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { company, offices } from "@/lib/content";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  // No backend yet — the form validates and confirms locally so the page can
  // be demoed end to end. Wire `action` to your CRM or a route handler next.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-ink-950 py-16 sm:py-20 lg:py-28">
      <div className="container-page">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-red-500">
                Start a conversation
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-[1.1] text-white sm:text-4xl lg:text-[2.9rem]">
                Tell us what needs to ship.{" "}
                <span className="text-red-500">We&rsquo;ll tell you how.</span>
              </h2>
              <p className="mt-5 max-w-md text-[16.5px] leading-relaxed text-ink-300">
                A free consultation with an engineer, not a sales script. Bring
                the roadmap, the release date and the thing you&rsquo;re worried
                about.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-10 flex flex-col gap-3 text-[15px]">
                <a
                  href={`tel:${company.hotline.replace(/[^0-9+]/g, "")}`}
                  className="group inline-flex w-fit items-center gap-3 break-words text-white transition-colors hover:text-red-500"
                >
                  <span className="text-[12px] uppercase tracking-[0.14em] text-ink-400">
                    Hotline
                  </span>
                  {company.hotline}
                </a>
                <a
                  href={`mailto:${company.email}`}
                  className="group inline-flex w-fit items-center gap-3 break-words text-white transition-colors hover:text-red-500"
                >
                  <span className="text-[12px] uppercase tracking-[0.14em] text-ink-400">
                    Email
                  </span>
                  {company.email}
                </a>
              </div>
            </Reveal>

            {/* Full addresses live in <GlobalPresence /> — this is just the
                nearest-office shortcut so nobody has to scroll back up. */}
            <Reveal delay={140}>
              <div className="mt-10 flex flex-wrap gap-2.5">
                {offices.map((office) => (
                  <a
                    key={office.city}
                    href={`tel:${office.phoneHref}`}
                    className="rounded border border-white/10 bg-white/5 px-4 py-3 transition-colors hover:bg-white/10"
                  >
                    <span className="block text-[13.5px] font-semibold text-white">
                      {office.city}
                      <span className="ml-2 text-[11.5px] font-normal text-ink-400">
                        {office.region}
                      </span>
                    </span>
                    <span className="mt-0.5 block break-words text-[13px] text-red-500">
                      {office.phone}
                    </span>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={80}>
            {/* A white card on the black band — everything inside it is styled
                for a light surface. */}
            <div className="rounded-lg bg-white p-6 sm:p-8">
              {submitted ? (
                <div className="flex min-h-96 flex-col items-center justify-center text-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-red-50 text-red-600">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.8}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                      aria-hidden="true"
                    >
                      <path d="m5 12.5 4.5 4.5L19 7" />
                    </svg>
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-ink-900">
                    Thanks — we&rsquo;ve got it.
                  </h3>
                  <p className="mt-2 max-w-xs text-[14.5px] leading-relaxed text-ink-600">
                    An engineering lead will be in touch within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
                  <Field label="First name" name="firstName" autoComplete="given-name" />
                  <Field label="Last name" name="lastName" autoComplete="family-name" />
                  <Field
                    label="Company"
                    name="company"
                    autoComplete="organization"
                    className="sm:col-span-2"
                  />
                  <Field
                    label="Work email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="sm:col-span-2"
                  />
                  <Field
                    label="Phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required={false}
                    className="sm:col-span-2"
                  />

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-500"
                    >
                      What are you building?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="mt-2 w-full resize-none rounded border border-ink-300 bg-white px-4 py-3 text-[15px] text-ink-900 placeholder:text-ink-400 transition-colors outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20"
                      placeholder="A few lines about the product, the timeline and where it hurts."
                    />
                  </div>

                  <label className="flex items-start gap-3 text-[13px] leading-relaxed text-ink-500 sm:col-span-2">
                    <input
                      type="checkbox"
                      required
                      name="consent"
                      className="mt-0.5 h-4 w-4 shrink-0 rounded border-ink-300 bg-white accent-red-600"
                    />
                    I agree to the privacy policy and consent to NForceOne
                    contacting me about this enquiry.
                  </label>

                  <button
                    type="submit"
                    className="group mt-1 inline-flex items-center justify-center gap-2 rounded bg-red-600 px-7 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-red-700 sm:col-span-2"
                  >
                    Schedule a free consultation
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  required = true,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-500"
      >
        {label}
        {required ? null : (
          <span className="ml-1.5 normal-case tracking-normal text-ink-400">
            (optional)
          </span>
        )}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="mt-2 w-full rounded border border-ink-300 bg-white px-4 py-3 text-[15px] text-ink-900 placeholder:text-ink-400 transition-colors outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20"
      />
    </div>
  );
}
