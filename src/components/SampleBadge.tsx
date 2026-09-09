/**
 * Marks a section whose content is invented placeholder data.
 *
 * This is deliberately visible rather than a code comment: client logos,
 * case-study metrics, awards and certifications are claims, and shipping
 * invented ones is a legal problem, not a cosmetic one. Delete the badge at
 * the same moment you replace the `SAMPLE_*` data in src/lib/content.ts.
 */
export function SampleBadge({
  what,
  tone = "light",
  className = "",
}: {
  what: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  /*
   * Red is the brand accent here, so hue alone cannot carry the warning —
   * the dashed border, the triangle glyph and the word "Sample" are what
   * separate this from the buttons and eyebrows sitting next to it.
   */
  const toneClasses =
    tone === "dark"
      ? "border-white/20 bg-white/10 text-white"
      : "border-red-200 bg-red-50 text-red-700";

  return (
    <span
      className={`relative inline-flex items-center gap-2 rounded-full border border-dashed px-3 py-1.5 text-[11px] font-semibold ${toneClasses} ${className}`}
      title={`Placeholder content — replace ${what} with verified data before publishing.`}
    >
      <svg
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        className="h-3.5 w-3.5 shrink-0"
        aria-hidden="true"
      >
        <path d="M8 2.8 1.8 13.2h12.4L8 2.8Z" strokeLinejoin="round" />
        <path d="M8 6.6v3.1" />
        <path d="M8 11.4h.01" />
      </svg>
      Sample data — replace {what}
    </span>
  );
}
