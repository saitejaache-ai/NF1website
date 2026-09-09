import { LinkedInIcon } from "@/components/Icons";
import { Logo } from "@/components/Logo";
import { Newsletter } from "@/components/Newsletter";
import { company, industries, services } from "@/lib/content";

/** Manual — these sections have no entry in the two-item mega menu. */
const companyLinks = [
  { label: "About Us", href: "#about" },
  { label: "Careers", href: "#careers" },
  { label: "Global Presence", href: "#presence" },
  { label: "Insights", href: "#insights" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact Us", href: "#contact" },
];

const headingClass =
  "text-[11px] font-semibold uppercase tracking-[0.18em] text-red-500";
const linkClass = "text-[14px] text-ink-300 transition-colors hover:text-white";

export function Footer() {
  return (
    <footer className="bg-ink-950 pt-16 pb-12">
      <div className="container-page">
        <Newsletter />

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_repeat(3,minmax(0,1fr))] lg:gap-10">
          <div>
            <Logo tone="onDark" />
            <p className="mt-5 max-w-xs text-[14.5px] leading-relaxed text-ink-300">
              Digital changemakers — here to disrupt old ideas, blaze new trails,
              and help enterprises transform and scale.
            </p>
            <a
              href={company.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="NForceOne on LinkedIn"
              className="mt-6 inline-grid h-11 w-11 place-items-center rounded border border-white/10 bg-white/5 text-ink-300 transition-colors hover:bg-white/10 hover:text-white"
            >
              <LinkedInIcon className="h-4.5 w-4.5" />
            </a>
          </div>

          <nav aria-label="Services">
            <h3 className={headingClass}>Services</h3>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 6).map((service) => (
                <li key={service.name}>
                  <a href="#services" className={linkClass}>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Industries">
            <h3 className={headingClass}>Industries</h3>
            <ul className="mt-4 space-y-2.5">
              {industries.slice(0, 6).map((industry) => (
                <li key={industry.name}>
                  <a href="#industries" className={linkClass}>
                    {industry.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h3 className={headingClass}>Company</h3>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={linkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/12 pt-7 text-[13px] text-ink-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {company.name}. All rights
            reserved.
          </p>
          <p className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <a
              href={`tel:${company.hotline.replace(/[^0-9+]/g, "")}`}
              className="break-words transition-colors hover:text-white"
            >
              {company.hotline}
            </a>
            <a
              href={`mailto:${company.email}`}
              className="break-words transition-colors hover:text-white"
            >
              {company.email}
            </a>
            <span>Hyderabad · Plano</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
