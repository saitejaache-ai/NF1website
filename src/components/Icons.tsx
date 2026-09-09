import type { IconName } from "@/lib/content";

const paths: Record<IconName, React.ReactNode> = {
  shield: (
    <>
      <path d="M12 3 4.5 6v5.4c0 4.6 3.1 8.2 7.5 9.6 4.4-1.4 7.5-5 7.5-9.6V6L12 3Z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </>
  ),
  code: (
    <>
      <path d="m8.5 8.5-4 3.5 4 3.5" />
      <path d="m15.5 8.5 4 3.5-4 3.5" />
      <path d="m13.5 5-3 14" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3.2 13.7 9l5.8 1.7-5.8 1.7L12 18.2 10.3 12.4 4.5 10.7 10.3 9 12 3.2Z" />
      <path d="M18.5 16.5 19.3 19l2.5.8-2.5.8-.8 2.5" />
    </>
  ),
  hexagon: (
    <>
      <path d="M12 3.2 19.5 7.6v8.8L12 20.8 4.5 16.4V7.6L12 3.2Z" />
      <path d="M12 8.4 15.5 10.4v4L12 16.4 8.5 14.4v-4L12 8.4Z" />
    </>
  ),
  infinity: (
    <>
      <path d="M6.8 15.2c-1.8 0-3.3-1.4-3.3-3.2s1.5-3.2 3.3-3.2c2.9 0 4 6.4 7 6.4 1.8 0 3.3-1.4 3.3-3.2S17.6 8.8 15.8 8.8c-2.9 0-4 6.4-7 6.4Z" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="6" rx="7.2" ry="3" />
      <path d="M4.8 6v6c0 1.7 3.2 3 7.2 3s7.2-1.3 7.2-3V6" />
      <path d="M4.8 12v6c0 1.7 3.2 3 7.2 3s7.2-1.3 7.2-3v-6" />
    </>
  ),
  chart: (
    <>
      <path d="M4 20h16" />
      <path d="M7 20v-6" />
      <path d="M12 20V6" />
      <path d="M17 20v-9" />
    </>
  ),
  device: (
    <>
      <rect x="7" y="3" width="10" height="18" rx="2.4" />
      <path d="M11 18h2" />
    </>
  ),
  robot: (
    <>
      <rect x="4.5" y="8" width="15" height="11" rx="3" />
      <path d="M12 8V4.8" />
      <circle cx="12" cy="3.6" r="1.2" />
      <path d="M9.5 13v1.6M14.5 13v1.6" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="8.6" />
      <path d="m15.2 8.8-1.9 4.5-4.5 1.9 1.9-4.5 4.5-1.9Z" />
    </>
  ),
};

export function ServiceIcon({
  name,
  className = "",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}

export function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M4 10h11" />
      <path d="m10.5 5.5 4.5 4.5-4.5 4.5" />
    </svg>
  );
}

export function LinkedInIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9.75h4v11H3v-11Zm7 0h3.8v1.5a4.2 4.2 0 0 1 3.7-2c3 0 4.5 1.9 4.5 5.4v6.1h-4v-5.4c0-1.6-.6-2.6-2-2.6-1.2 0-1.9.8-2.2 1.6-.1.3-.1.7-.1 1.1v5.3h-4v-11Z" />
    </svg>
  );
}
