/**
 * Single source of truth for every string on the landing page.
 * Copy edits happen here, not in the section components.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * PLACEHOLDER POLICY
 *
 * Anything exported below whose name starts with `SAMPLE_` is invented layout
 * filler, NOT fact. Client names, case-study metrics, awards, analyst mentions,
 * partner tiers, certifications and article bylines are all sample data so the
 * design can be reviewed. Every one of them renders behind a visible "Sample"
 * marker in the UI (see <SampleBadge />).
 *
 * Replace them with verified NForceOne data — and delete the badge — before
 * this site goes anywhere near production. Publishing invented client logos,
 * ISO certifications or Gartner mentions is a legal and reputational problem,
 * not just an accuracy one.
 *
 * Everything NOT prefixed `SAMPLE_` was taken from nforceone.com.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const company = {
  name: "NForceOne",
  tagline: "Scale at Speed",
  hotline: "1-800-356-8933",
  email: "contact@nforceone.com",
  adminEmail: "admin@nforceone.com",
  linkedin: "https://www.linkedin.com/company/nforceone/",
} as const;

/* ────────────────────────────── Navigation ─────────────────────────────── */

/** Plain nav links, matching the live site's header order. */
export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "About Us", href: "#about" },
] as const;

export const navLinksTrailing = [
  { label: "Careers", href: "#careers" },
  { label: "Contact Us", href: "#contact" },
] as const;

/** The two headers that open a panel — as they do on nforceone.com. */
export const megaMenu = [
  {
    label: "Services",
    href: "#services",
    columns: [
      {
        heading: "Quality assurance",
        links: [
          "Manual Testing",
          "Automation Testing",
          "AI Testing",
          "Performance Testing",
          "Consulting & Outsourcing",
        ],
        href: "#quality",
      },
      {
        heading: "Engineering",
        links: [
          "Software Development",
          "Digital App Development",
          "Pega Development",
          "DevOps & Cloud",
          "UI/UX Design",
        ],
        href: "#services",
      },
      {
        heading: "Data & intelligence",
        links: [
          "Artificial Intelligence",
          "Data Analytics",
          "Big Data",
          "Database Management",
          "Intelligent RPA",
        ],
        href: "#services",
      },
    ],
    feature: {
      eyebrow: "Flagship practice",
      title: "Quality assurance, all the way down",
      body: "Eight testing disciplines, 24/7 execution, zero critical defects.",
      href: "#quality",
    },
  },
  {
    label: "Industries",
    href: "#industries",
    columns: [
      {
        heading: "Financial services",
        links: ["Banking & Financial", "Finance & FinTech", "Insurance"],
        href: "#industries",
      },
      {
        heading: "Commerce & product",
        links: ["Retail & eCommerce", "ISV", "Digital Media & Advertising"],
        href: "#industries",
      },
      {
        heading: "Industrial & public",
        links: [
          "Automotive",
          "Manufacturing",
          "Energy & Utilities",
          "Telecommunication",
          "Education & EduTech",
        ],
        href: "#industries",
      },
    ],
    feature: {
      eyebrow: "Why it matters",
      title: "Domain fluency from day one",
      body: "Engineers who already speak your industry's language, not month three.",
      href: "#industries",
    },
  },
] as const;

/* ──────────────────────────────── Hero ─────────────────────────────────── */

export const hero = {
  eyebrow: "Engineering partner · India & United States",
  titleLead: "Ship enterprise software at",
  titleAccent: "lightning speed",
  titleTrail: "— without breaking trust.",
  body:
    "NForceOne is the engineering partner enterprises call when quality cannot slip and the deadline cannot move. Development, QA, AI, DevOps and data — one accountable team, two continents, zero critical defects.",
  primaryCta: { label: "Schedule a free consultation", href: "#contact" },
  secondaryCta: { label: "See our work", href: "#work" },
} as const;

export const heroStats = [
  { value: 100, suffix: "+", label: "Engineers & specialists" },
  { value: 8, suffix: "+", label: "Testing disciplines" },
  { value: 24, suffix: "/7", label: "Quality assurance" },
  { value: 4.9, suffix: "", label: "Average client rating", decimals: 1 },
] as const;

/* ─────────────────────────────── Services ──────────────────────────────── */

export type IconName =
  | "shield"
  | "code"
  | "spark"
  | "hexagon"
  | "infinity"
  | "database"
  | "chart"
  | "device"
  | "robot"
  | "compass";

export type Service = {
  name: string;
  blurb: string;
  points: readonly string[];
  /** Bento span — "wide" services take two columns on large screens. */
  span?: "wide";
  icon: IconName;
};

export const services: readonly Service[] = [
  {
    name: "Quality Assurance",
    blurb:
      "Our flagship practice. Full-cycle testing that catches defects before your customers ever meet them — manual, automated, and increasingly AI-assisted.",
    points: [
      "Manual & exploratory",
      "Automation frameworks",
      "AI-assisted testing",
      "QA consulting & outsourcing",
    ],
    span: "wide",
    icon: "shield",
  },
  {
    name: "Software Development",
    blurb:
      "The right technology, implemented properly and monitored continuously, compounds into real growth.",
    points: ["Custom platforms", "Modernisation", "API & integration"],
    icon: "code",
  },
  {
    name: "Artificial Intelligence",
    blurb:
      "Practical AI enablement — models that sit inside your workflow, not beside it.",
    points: ["LLM enablement", "Predictive models", "AI governance"],
    icon: "spark",
  },
  {
    name: "Pega Development & Testing",
    blurb:
      "A dedicated Pega bench for case management builds, upgrades and end-to-end validation.",
    points: ["App development", "Upgrade & migration", "Automated Pega testing"],
    icon: "hexagon",
  },
  {
    name: "DevOps & Cloud",
    blurb:
      "Pipelines, infrastructure-as-code and observability that make releases boring — in the best way.",
    points: ["CI/CD", "Cloud migration", "SRE & monitoring"],
    icon: "infinity",
  },
  {
    name: "Database Management",
    blurb:
      "Design, tuning and 24/7 stewardship of the systems your business cannot afford to lose.",
    points: ["Performance tuning", "High availability", "Managed DBA"],
    icon: "database",
  },
  {
    name: "Data Analytics & Big Data",
    blurb:
      "Warehouses, pipelines and dashboards that turn operational exhaust into decisions.",
    points: ["Data platforms", "BI & reporting", "Streaming pipelines"],
    icon: "chart",
  },
  {
    name: "Digital App Development",
    blurb:
      "Mobile and web products built for the device your customer actually reaches for.",
    points: ["iOS & Android", "Progressive web", "Design systems"],
    icon: "device",
  },
  {
    name: "Intelligent RPA",
    blurb:
      "Automation that removes the repetitive work your teams should never have been doing.",
    points: ["Process discovery", "Bot development", "Hyperautomation"],
    icon: "robot",
  },
  {
    name: "Management Services",
    blurb:
      "Delivery leadership, staffing and governance for programmes that span vendors and time zones.",
    points: ["Programme delivery", "Dedicated teams", "Governance"],
    icon: "compass",
  },
] as const;

/* ──────────────────────────── Quality assurance ────────────────────────── */

export const qualityGroups = [
  {
    id: "cycle",
    title: "Full-cycle services",
    caption:
      "Own the whole quality function, or slot into the part of it you're short on.",
    items: [
      "Manual Testing",
      "Automation Testing",
      "Consulting Testing",
      "Outsourcing Testing",
      "AI Testing",
    ],
  },
  {
    id: "type",
    title: "Services by type",
    caption:
      "Targeted coverage for the risk that actually keeps your release manager awake.",
    items: [
      "UX Testing",
      "Performance Testing",
      "Functional Testing",
      "Regression Testing",
      "Integration Testing",
      "Compatibility Testing",
    ],
  },
  {
    id: "platform",
    title: "Services by platform",
    caption:
      "Specialist rigs and device labs for the surfaces your customers transact on.",
    items: [
      "POS Testing",
      "Payment Testing",
      "IoT Testing",
      "Mobile App Testing",
      "Mobile & Device Testing",
      "Web App Testing",
      "Cloud Testing",
    ],
  },
] as const;

export const qualityProof = [
  { value: "100%", label: "Coverage focus" },
  { value: "0", label: "Critical defects" },
  { value: "24/7", label: "Test execution" },
] as const;

/* ────────────────────────────── Why us / how ───────────────────────────── */

export const differentiators = [
  {
    title: "Cost-effectiveness",
    body: "Blended onshore–offshore teams that hold delivery quality while taking real cost out of the programme.",
  },
  {
    title: "Innovative technology",
    body: "AI-assisted testing, intelligent automation and modern cloud tooling applied where they change the outcome.",
  },
  {
    title: "Industry expertise",
    body: "Engineers who already speak the language of banking, retail, insurance and manufacturing on day one.",
  },
  {
    title: "Scalability",
    body: "Spin a squad up for a release, or stand up a full delivery centre — the model flexes with your roadmap.",
  },
] as const;

export const focusPillars = [
  { label: "User-focused", detail: "Outcomes measured on the customer's screen." },
  { label: "Quality-focused", detail: "Defects prevented, not just discovered." },
  { label: "Agility-focused", detail: "Short loops, visible progress, no surprises." },
  { label: "Innovation-focused", detail: "New tooling adopted with discipline." },
] as const;

export const process = [
  {
    step: "01",
    title: "Discover",
    body: "We map the system, the risk and the constraints — and tell you plainly what we found, including the parts you may not want to hear.",
  },
  {
    step: "02",
    title: "Design",
    body: "An architecture and a delivery plan with named owners, measurable checkpoints and a quality strategy attached from the start.",
  },
  {
    step: "03",
    title: "Deliver",
    body: "Short iterations, continuous testing, automated pipelines. Progress is demonstrable every sprint, not summarised in a status deck.",
  },
  {
    step: "04",
    title: "Sustain",
    body: "Monitoring, regression suites and a support model that keeps the system healthy long after go-live.",
  },
] as const;

/** Drawn from the commitments NForceOne makes on its FAQ page. */
export const engagementModels = [
  {
    name: "Start small",
    body: "A single QA pod or a two-week discovery. Whether you need a small QA team or a full cross-functional squad, we scale up — or down — as your requirements evolve.",
    tags: ["QA pod", "Discovery sprint", "Staff augmentation"],
  },
  {
    name: "Project delivery",
    body: "Flexible contracts covering one-off deliverables through to multi-year partnerships. Fixed scope when the scope is genuinely fixed, and honest about it when it isn't.",
    tags: ["Fixed scope", "Time & materials", "Managed capacity"],
  },
  {
    name: "Dedicated centre",
    body: "A standing delivery team in Hyderabad or Plano operating as an extension of yours, with governance and reporting you control.",
    tags: ["Dedicated team", "Follow-the-sun", "Managed service"],
  },
] as const;

/* ────────────────────────────── Industries ─────────────────────────────── */

/**
 * NOTE: nforceone.com currently shows mismatched descriptions on its Industries
 * page (Automotive carries dating-app copy, Education carries telehealth copy).
 * These have been rewritten to match the actual sector. Worth fixing on the
 * live WordPress site too.
 */
export const industries = [
  {
    name: "Banking & Financial",
    body: "Core banking, payments and regulated release cycles where a defect is an incident report.",
  },
  {
    name: "Finance & FinTech",
    body: "High-velocity product teams that still need audit trails and payment-grade test coverage.",
  },
  { name: "Insurance", body: "Claims, underwriting and policy platforms — often Pega-based." },
  {
    name: "Retail & eCommerce",
    body: "Storefronts, POS and peak-season load, tested on the devices customers actually use.",
  },
  { name: "ISV", body: "Product companies that need a QA and engineering bench without the headcount." },
  {
    name: "Digital Media & Advertising",
    body: "Content platforms and ad tech where uptime and latency are the product.",
  },
  { name: "Automotive", body: "Connected-vehicle services, dealer systems and embedded integration testing." },
  { name: "Manufacturing", body: "MES, supply chain and shop-floor systems that cannot stop for a release." },
  { name: "Energy & Utilities", body: "Metering, field service and grid systems under real regulatory scrutiny." },
  { name: "Telecommunication", body: "OSS/BSS, provisioning and network platforms at carrier scale." },
  { name: "Education & EduTech", body: "Learning platforms built for term-start traffic spikes and accessibility." },
] as const;

/* ──────────────────────────── Values / about ───────────────────────────── */

/** GROW — the four values, and conveniently an acronym. */
export const values = [
  {
    letter: "G",
    title: "Growth",
    body: "Continuous learning, and a genuine commitment to helping every person on the team reach their potential.",
  },
  {
    letter: "R",
    title: "Responsibility",
    body: "We own our actions and their impact — delivering solutions that are reliable and ethical, not merely shippable.",
  },
  {
    letter: "O",
    title: "Optimism",
    body: "We approach hard problems believing a better solution exists, and then we go and find it.",
  },
  {
    letter: "W",
    title: "Wisdom",
    body: "Collective experience and a deliberately diverse team, applied to decisions that matter.",
  },
] as const;

export const about = {
  eyebrow: "Who we are",
  title: "Digital changemakers",
  body: [
    "We're here to disrupt old ideas, blaze new trails, and help enterprises transform and scale. Over 100 professionals with deep expertise across India and the United States, and a footprint that keeps growing in both.",
    "Our work is about finding order in the midst of the chaos that characterises modern business — through genuine partnership, not vendor paperwork.",
  ],
} as const;

/* ───────────────────────── Global presence / offices ───────────────────── */

export const offices = [
  {
    city: "Hyderabad",
    region: "India",
    role: "Primary delivery centre",
    lines: [
      "4th Floor, Sanali Spazio",
      "Inorbit Mall Rd, Madhapur",
      "Hyderabad, Telangana 500081",
    ],
    phone: "+91 93469 34833",
    phoneHref: "+919346934833",
    utcOffset: "UTC+5:30",
  },
  {
    city: "Plano",
    region: "Texas, USA",
    role: "Associate brand office",
    lines: ["5700 Tennyson Parkway", "Suite 300", "Plano, Texas 75024"],
    phone: "+1 (972) 499-6667",
    phoneHref: "+19724996667",
    utcOffset: "UTC−6:00",
  },
] as const;

/* ──────────────────────────────── Careers ──────────────────────────────── */

export const careers = {
  quote:
    "We put our people first. When we place a high value on our team's happiness, work/life balance, and professional development, everybody wins — clients included.",
  applyEmail: "admin@nforceone.com",
  roles: [
    {
      title: "Senior Automation Tester",
      location: "Hyderabad",
      experience: "Senior",
      summary:
        "Lead automation testing efforts to ensure software quality and efficiency.",
      skills: ["Selenium", "TestNG", "Scripting"],
    },
    {
      title: "Performance Tester",
      location: "Hyderabad",
      experience: "Mid–Senior",
      summary:
        "Design and execute performance testing strategies for applications under high load.",
      skills: ["JMeter", "LoadRunner", "Bottleneck analysis"],
    },
    {
      title: "PEGA Developer",
      location: "Hyderabad",
      experience: "3–5 years",
      summary:
        "Build and integrate Pega applications across 7.x, 8.x and Infinity.",
      skills: ["Pega Launchpad", "REST / SOAP / JMS", "CSA / CSSA"],
    },
    {
      title: "QA Manager",
      location: "Hyderabad",
      experience: "8+ years",
      summary:
        "Lead multiple QA teams across diverse projects, manual and automated.",
      skills: ["Team leadership", "Agile / DevOps", "QA strategy"],
    },
    {
      title: "Associate Engineer Intern",
      location: "Hyderabad",
      experience: "Entry level",
      summary:
        "Test case execution, bug identification and hands-on quality assurance.",
      skills: ["Testing fundamentals", "Selenium (preferred)", "Analysis"],
    },
  ],
} as const;

/* ────────────────────────────────── FAQ ────────────────────────────────── */

export const faqs = [
  {
    q: "What makes NForceOne different from other IT service providers?",
    a: "We combine domain expertise with startup-style agility, offering full-spectrum services across AI, DevOps, QA, Pega, and cloud.",
  },
  {
    q: "Can I start small and scale services as my business grows?",
    a: "Absolutely. Whether you need a small QA team or a full cross-functional squad, we scale up (or down) based on your evolving requirements.",
  },
  {
    q: "Do you support one-time projects as well as long-term engagements?",
    a: "Yes. We offer flexible contracts, ranging from one-off deliverables to multi-year partnerships.",
  },
  {
    q: "How do you ensure the security and quality of your solutions?",
    a: "From secure development practices to rigorous QA, everything we deliver meets enterprise-grade standards.",
  },
  {
    q: "Can I choose the tools, tech stack, or cloud provider we use?",
    a: "Of course. We're tech-agnostic and will align with your preferences, whether it's AWS, Azure, React, Pega, or custom legacy systems.",
  },
] as const;

/* ═══════════════════════════════════════════════════════════════════════════
   SAMPLE DATA BELOW — invented layout filler, not fact. See the policy note
   at the top of this file. Each of these renders behind a visible badge.
   ═══════════════════════════════════════════════════════════════════════════ */

/** SAMPLE — replace with clients who have given written logo permission. */
export const SAMPLE_clients = [
  "Northwind Bank",
  "Meridian Retail",
  "Alta Insurance",
  "Voltra Energy",
  "Corvus Telecom",
  "Brightpath EdTech",
  "Kestrel Motors",
  "Lumen Health",
] as const;

/** SAMPLE — replace with real engagements and client-approved metrics. */
export const SAMPLE_caseStudies = [
  {
    industry: "Banking & Financial",
    title: "Cutting release risk on a core payments platform",
    body: "A regression suite that grew faster than the team could run it. We rebuilt it as a parallelised automation pack wired into the release gate.",
    metrics: [
      { value: "-62%", label: "Regression cycle time" },
      { value: "0", label: "Critical defects post-release" },
      { value: "3.4k", label: "Automated test cases" },
    ],
    services: ["Automation Testing", "Payment Testing", "DevOps"],
  },
  {
    industry: "Retail & eCommerce",
    title: "Holding checkout together through peak season",
    body: "Performance testing against realistic peak profiles, then tuning the bottlenecks we found in the cart and payment services before Black Friday.",
    metrics: [
      { value: "4.1×", label: "Peak load headroom" },
      { value: "-48%", label: "p95 checkout latency" },
      { value: "99.98%", label: "Peak-week uptime" },
    ],
    services: ["Performance Testing", "POS Testing", "Cloud Testing"],
  },
  {
    industry: "Insurance",
    title: "A Pega claims upgrade without a service window",
    body: "Migrating a claims workflow to Pega Infinity with automated validation at every step, so the cutover was a non-event for adjusters.",
    metrics: [
      { value: "0", label: "Hours of downtime" },
      { value: "-35%", label: "Claim handling time" },
      { value: "12", label: "Weeks to production" },
    ],
    services: ["Pega Development", "Pega Testing", "Integration Testing"],
  },
] as const;

/** SAMPLE — do not publish award or analyst claims you cannot evidence. */
export const SAMPLE_awards = [
  {
    year: "2025",
    title: "Great Place to Work — Certified",
    body: "Recognised for employee experience across the Hyderabad delivery centre.",
    source: "Great Place to Work Institute",
  },
  {
    year: "2024",
    title: "Rising Star — QA Services",
    body: "Named an emerging provider in independent quality-engineering research.",
    source: "Industry analyst report",
  },
  {
    year: "2024",
    title: "Best Employer — Emerging IT Services",
    body: "Acknowledged for growth in specialist testing and Pega talent.",
    source: "Regional business awards",
  },
] as const;

/** SAMPLE — certifications must be verified before they appear publicly. */
export const SAMPLE_certifications = [
  { name: "ISO 27001", detail: "Information security" },
  { name: "ISO 9001", detail: "Quality management" },
  { name: "SOC 2 Type II", detail: "Controls assurance" },
  { name: "GDPR aligned", detail: "Data protection" },
] as const;

/** SAMPLE — partner tiers are contractual; confirm each before publishing. */
export const SAMPLE_partners = [
  "AWS",
  "Microsoft Azure",
  "Google Cloud",
  "Pega",
  "Selenium",
  "JMeter",
  "Kubernetes",
  "Databricks",
] as const;

/** SAMPLE — placeholder article cards for a future insights hub. */
export const SAMPLE_insights = [
  {
    kind: "Report",
    readTime: "9 min",
    title: "What AI actually changes about regression testing",
    body: "Where model-assisted test generation earns its keep — and the three places it quietly makes coverage worse.",
  },
  {
    kind: "Playbook",
    readTime: "6 min",
    title: "A release gate your engineers won't route around",
    body: "Quality gates fail when they're slower than the deadline. Designing one that survives contact with a shipping team.",
  },
  {
    kind: "Perspective",
    readTime: "5 min",
    title: "Follow-the-sun QA, honestly assessed",
    body: "Two continents buys you wall-clock time, not free throughput. What it takes to make the handover actually work.",
  },
] as const;

/** SAMPLE — attribute leadership quotes to a real, consenting person. */
export const SAMPLE_leadershipQuote = {
  quote:
    "Speed is easy to sell and hard to deliver. The only version that matters is the one where quality holds while you move — that is the whole discipline, and it is why our clients stay.",
  name: "Leadership quote placeholder",
  role: "Add name and title before publishing",
} as const;
