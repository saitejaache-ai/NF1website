"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "@/components/Icons";
import { Logo } from "@/components/Logo";
import { company, megaMenu, navLinks, navLinksTrailing } from "@/lib/content";

export function Nav() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const closeTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpenMenu(null);
      setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // The mobile drawer covers the page — don't let the page scroll behind it.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  /** Grace period so the pointer can cross the gap into the panel. */
  function scheduleClose() {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenMenu(null), 140);
  }
  function cancelClose() {
    window.clearTimeout(closeTimer.current);
  }

  const active = megaMenu.find((m) => m.label === openMenu);
  const linkBase =
    "rounded px-3 py-2 text-[15px] text-white transition-colors hover:text-red-500";

  return (
    <header className="fixed inset-x-0 top-0 z-50" onMouseLeave={scheduleClose}>
      <div className="relative z-10 bg-ink-950">
        <div className="container-page flex h-20 items-center justify-between gap-4">
          <a href="#top" aria-label="NForceOne home" className="shrink-0">
            <Logo tone="onDark" />
          </a>

          <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary">
            {navLinks.map((item) => (
              <a key={item.href} href={item.href} className={linkBase}>
                {item.label}
              </a>
            ))}

            {megaMenu.map((item) => (
              <button
                key={item.label}
                type="button"
                aria-expanded={openMenu === item.label}
                onMouseEnter={() => {
                  cancelClose();
                  setOpenMenu(item.label);
                }}
                onFocus={() => setOpenMenu(item.label)}
                onClick={() => {
                  setOpenMenu(null);
                  window.location.hash = item.href;
                }}
                className={`flex items-center gap-1.5 rounded px-3 py-2 text-[15px] transition-colors ${
                  openMenu === item.label
                    ? "text-red-500"
                    : "text-white hover:text-red-500"
                }`}
              >
                {item.label}
                <svg
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.6}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className={`h-2.5 w-2.5 transition-transform duration-300 ${
                    openMenu === item.label ? "rotate-180" : ""
                  }`}
                >
                  <path d="m3 4.5 3 3 3-3" />
                </svg>
              </button>
            ))}

            {navLinksTrailing.map((item) => (
              <a key={item.href} href={item.href} className={linkBase}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <a
              href={`tel:${company.hotline.replace(/[^0-9+]/g, "")}`}
              className="text-[14px] text-ink-300 transition-colors hover:text-white"
            >
              {company.hotline}
            </a>
            <a
              href="#contact"
              className="rounded bg-red-600 px-5 py-2.5 text-[15px] font-semibold text-white transition-colors hover:bg-red-700"
            >
              Contact Us
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="grid h-11 w-11 place-items-center rounded border border-white/20 text-white xl:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 h-0.5 w-5 bg-current transition-all duration-300 ${
                  mobileOpen ? "top-2 rotate-45" : "top-0.5"
                }`}
              />
              <span
                className={`absolute left-0 top-2 h-0.5 w-5 bg-current transition-opacity duration-200 ${
                  mobileOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-5 bg-current transition-all duration-300 ${
                  mobileOpen ? "top-2 -rotate-45" : "top-3.5"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* ── Desktop mega panel ── */}
      <div
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
        className={`absolute inset-x-0 top-20 hidden origin-top border-b border-ink-200 bg-white shadow-xl transition-all duration-300 xl:block ${
          active
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        {active ? (
          <div className="container-page grid grid-cols-[repeat(3,minmax(0,1fr))_minmax(0,0.95fr)] gap-10 py-10">
            {active.columns.map((column) => (
              <div key={column.heading}>
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-red-600">
                  {column.heading}
                </h3>
                <ul className="mt-4 space-y-0.5">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href={column.href}
                        onClick={() => setOpenMenu(null)}
                        className="group -mx-2 flex items-center gap-2 rounded px-2 py-1.5 text-[15px] text-ink-700 transition-colors hover:bg-ink-100 hover:text-ink-950"
                      >
                        {link}
                        <ArrowRight className="h-3.5 w-3.5 -translate-x-1 text-red-600 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <a
              href={active.feature.href}
              onClick={() => setOpenMenu(null)}
              className="group rounded-lg bg-ink-950 p-6 transition-colors hover:bg-ink-900"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-red-500">
                {active.feature.eyebrow}
              </p>
              <p className="mt-3 font-display text-lg font-bold leading-snug text-white">
                {active.feature.title}
              </p>
              <p className="mt-2 text-[13.5px] leading-relaxed text-ink-300">
                {active.feature.body}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-white">
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          </div>
        ) : null}
      </div>

      {/* ── Mobile drawer ── */}
      <div
        className={`fixed inset-x-0 top-20 bottom-0 overflow-y-auto overscroll-contain bg-ink-950 transition-all duration-300 xl:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <nav className="container-page flex flex-col py-4" aria-label="Mobile">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="border-b border-white/10 py-4 text-[17px] text-white"
            >
              {item.label}
            </a>
          ))}

          {megaMenu.map((item) => {
            const expanded = mobileSection === item.label;
            return (
              <div key={item.label} className="border-b border-white/10">
                <button
                  type="button"
                  aria-expanded={expanded}
                  onClick={() => setMobileSection(expanded ? null : item.label)}
                  className="flex w-full items-center justify-between py-4 text-left text-[17px] text-white"
                >
                  {item.label}
                  <svg
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.6}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className={`h-3 w-3 text-red-500 transition-transform duration-300 ${
                      expanded ? "rotate-180" : ""
                    }`}
                  >
                    <path d="m3 4.5 3 3 3-3" />
                  </svg>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    expanded
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-4">
                      {item.columns.map((column) => (
                        <div key={column.heading} className="mb-4">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-red-500">
                            {column.heading}
                          </p>
                          <ul className="mt-2 space-y-2">
                            {column.links.map((link) => (
                              <li key={link}>
                                <a
                                  href={column.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="text-[15px] text-ink-300"
                                >
                                  {link}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {navLinksTrailing.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="border-b border-white/10 py-4 text-[17px] text-white"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-7 rounded bg-red-600 px-5 py-3.5 text-center font-semibold text-white"
          >
            Schedule a Free Consultation
          </a>
          <a
            href={`tel:${company.hotline.replace(/[^0-9+]/g, "")}`}
            className="mt-4 pb-10 text-center text-[15px] text-ink-400"
          >
            {company.hotline}
          </a>
        </nav>
      </div>
    </header>
  );
}
