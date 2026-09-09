/**
 * The NF1 mark: heavy italic "NF", a red "1", red speed streaks trailing off
 * the right, and the "Let's Do IT!" lockup underneath with "IT!" in red.
 *
 * Drawn as SVG so it stays crisp at any size and recolours for light or dark
 * backgrounds. Swap in the official asset if you have the vector file —
 * `tone` is the only prop consumers depend on.
 */
export function Logo({
  tone = "onDark",
  className = "",
}: {
  tone?: "onDark" | "onLight";
  className?: string;
}) {
  const letterFill = tone === "onDark" ? "#FFFFFF" : "#1F2124";

  return (
    <span className={`inline-flex flex-col leading-none ${className}`}>
      <svg
        viewBox="0 0 188 54"
        role="img"
        aria-label="NForceOne"
        className="h-9 w-auto sm:h-10"
      >
        {/* Speed streaks — three tapered bars trailing the mark */}
        <g fill="#C40000">
          <path d="M150 6h30l-6 8h-30z" opacity=".95" />
          <path d="M141 21h39l-6 8h-39z" opacity=".75" />
          <path d="M132 36h30l-6 8h-30z" opacity=".5" />
        </g>

        {/* N F — heavy italic slab forms */}
        <g fill={letterFill}>
          {/* N */}
          <path d="M14 4h16l16 26V4h16v46H46L30 24v26H14z" transform="skewX(-10) translate(9 0)" />
          {/* F */}
          <path d="M74 4h38v11H90v7h20v11H90v17H74z" transform="skewX(-10) translate(9 0)" />
        </g>

        {/* 1 — the brand red numeral */}
        <path
          fill="#C40000"
          d="M126 4h14v46h-16V19l-9 4V12z"
          transform="skewX(-10) translate(9 0)"
        />
      </svg>

      <span
        className={`mt-1.5 text-[9px] font-semibold uppercase tracking-[0.34em] sm:text-[10px] ${
          tone === "onDark" ? "text-white" : "text-ink-900"
        }`}
      >
        Let&rsquo;s Do <span className="text-red-600">IT!</span>
      </span>
    </span>
  );
}
