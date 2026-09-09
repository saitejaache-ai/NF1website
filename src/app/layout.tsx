import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";

/* The pairing nforceone.com declares: Inter Tight for h1–h6, Inter for body. */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const description =
  "NForceOne is the engineering partner for enterprises that need to move fast without breaking trust — quality assurance, software development, AI, DevOps and data, delivered by 100+ specialists across India and the US.";

export const metadata: Metadata = {
  metadataBase: new URL("https://nforceone.com"),
  title: {
    default: "NForceOne — Scale at Speed",
    template: "%s | NForceOne",
  },
  description,
  keywords: [
    "quality assurance",
    "test automation",
    "AI testing",
    "software development",
    "Pega development",
    "DevOps",
    "data analytics",
    "intelligent RPA",
    "NForceOne",
  ],
  openGraph: {
    type: "website",
    url: "https://nforceone.com",
    siteName: "NForceOne",
    title: "NForceOne — Scale at Speed",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "NForceOne — Scale at Speed",
    description,
  },
};

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white">{children}</body>
    </html>
  );
}
