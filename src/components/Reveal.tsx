"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger in milliseconds — lets a grid cascade in rather than pop at once. */
  delay?: number;
  /** Direction or style variant for reveal animation */
  variant?: "up" | "left" | "right" | "scale" | "blur";
  as?: ElementType;
};

/**
 * Fades and lifts or slides its children the first time they enter the viewport.
 * The animations live in `.reveal*` in globals.css so reduced-motion
 * users get the final state immediately.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.dataset.visible = "true";
        observer.disconnect();
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const variantClass =
    variant === "left"
      ? "reveal-left"
      : variant === "right"
      ? "reveal-right"
      : variant === "scale"
      ? "reveal-scale"
      : variant === "blur"
      ? "reveal-blur"
      : "reveal";

  return (
    <Tag
      ref={ref}
      className={`${variantClass} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
