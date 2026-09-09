import { Reveal } from "@/components/Reveal";

type Props = {
  eyebrow: string;
  title: string;
  accent?: string;
  body?: string;
  align?: "left" | "center";
  /**
   * The page is white with a few full-bleed black bands. Sections sitting on
   * a band pass `tone="dark"` so the same heading reads correctly there.
   */
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  accent,
  body,
  align = "left",
  tone = "light",
}: Props) {
  const centered = align === "center";
  const dark = tone === "dark";

  return (
    <Reveal className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p
        className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${
          dark ? "text-red-500" : "text-red-600"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-3xl font-extrabold leading-[1.1] sm:text-4xl lg:text-[2.9rem] ${
          dark ? "text-white" : "text-ink-900"
        }`}
      >
        {title}
        {accent ? (
          <>
            {" "}
            <span className={dark ? "text-red-500" : "text-red-600"}>
              {accent}
            </span>
          </>
        ) : null}
      </h2>
      {body ? (
        <p
          className={`mt-5 text-[16.5px] leading-relaxed ${
            dark ? "text-ink-300" : "text-ink-600"
          } ${centered ? "mx-auto" : ""}`}
        >
          {body}
        </p>
      ) : null}
    </Reveal>
  );
}
