import { About } from "@/components/About";
import { Careers } from "@/components/Careers";
import { CaseStudies } from "@/components/CaseStudies";
import { Contact } from "@/components/Contact";
import { Differentiators } from "@/components/Differentiators";
import { Engagement } from "@/components/Engagement";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { GlobalPresence } from "@/components/GlobalPresence";
import { Hero } from "@/components/Hero";
import { Industries } from "@/components/Industries";
import { Insights } from "@/components/Insights";
import { LeadershipQuote } from "@/components/LeadershipQuote";
import { LogoWall } from "@/components/LogoWall";
import { Nav } from "@/components/Nav";
import { Process } from "@/components/Process";
import { Quality } from "@/components/Quality";
import { Recognition } from "@/components/Recognition";
import { Services } from "@/components/Services";
import { StickyCta } from "@/components/StickyCta";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* Attract — who we are and the proof you scan for first. */}
        <Hero />
        <LogoWall />

        {/* Capability — what we actually do. */}
        <Services />
        <Quality />

        {/* Evidence — outcomes, then how we get there. */}
        <CaseStudies />
        <Differentiators />
        <Process />
        <Engagement />
        <Industries />

        {/* Assurance — the due-diligence answers. */}
        <Recognition />
        <LeadershipQuote />
        <About />
        <GlobalPresence />

        {/* Depth — people and point of view. */}
        <Careers />
        <Insights />
        <Faq />

        {/* Convert. */}
        <Contact />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
