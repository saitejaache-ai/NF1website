"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "@/components/Icons";

/**
 * Persistent contact affordance (the Cognizant pattern). Appears once the hero
 * is behind you and retires when the contact form itself is on screen, so it
 * never competes with the thing it's pointing at.
 */
export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const contact = document.getElementById("contact");

    const onScroll = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.9;
      const contactInView = contact
        ? contact.getBoundingClientRect().top < window.innerHeight * 0.85
        : false;
      setVisible(pastHero && !contactInView);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#contact"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`group fixed bottom-6 right-6 z-40 hidden items-center gap-2.5 rounded-full bg-linear-to-r from-brand-600 to-brand-500 px-5 py-3.5 text-[14.5px] font-medium text-white shadow-[0_16px_44px_-14px_rgba(51,65,240,0.85)] transition-all duration-400 lg:inline-flex ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      Schedule a consultation
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}
