import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { engagementModels } from "@/lib/content";

export function Engagement() {
  return (
    <section
      id="engagement"
      className="relative bg-ink-100 py-16 sm:py-20 lg:py-28"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Engagement models"
          title="Start small."
          accent="Scale when it works."
          body="Flexible contracts, from one-off deliverables to multi-year partnerships. Nothing here requires you to commit to a delivery centre before you've seen us work."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {engagementModels.map((model, i) => (
            <Reveal key={model.name} delay={i * 90}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-ink-200 bg-white p-7 transition-colors hover:border-ink-300 hover:shadow-md">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-red-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                <h3 className="text-xl font-bold text-ink-900">{model.name}</h3>
                <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-ink-600">
                  {model.body}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {model.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-ink-100 px-2.5 py-1 text-[12px] text-ink-600"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
