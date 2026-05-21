import type { Metadata } from "next";

import { SiteShell } from "@/components/layout/SiteShell";
import { DifferentiatorsSection } from "@/features/project-brief/sections/DifferentiatorsSection";
import { FAQSection } from "@/features/project-brief/sections/FAQSection";
import { HeroSection } from "@/features/project-brief/sections/HeroSection";
import { PricingHowItWorksSection } from "@/features/project-brief/sections/PricingHowItWorksSection";
import { SampleBriefSection } from "@/features/project-brief/sections/SampleBriefSection";
import { canonicalUrl } from "@/lib/urls";

export const metadata: Metadata = {
  title: "Project Brief | Qualified Demo and Abatement Briefs",
  description:
    "Scheduled email briefs for demolition and abatement contractors. Project Brief monitors permits, public bids, and relevant sources, then sends the jobs worth checking.",
  alternates: {
    canonical: canonicalUrl("/project-brief"),
  },
};

export default function ProjectBriefPage() {
  return (
    <SiteShell>
      <HeroSection />
      <DifferentiatorsSection />
      <SampleBriefSection />
      <PricingHowItWorksSection />
      <FAQSection />
    </SiteShell>
  );
}
