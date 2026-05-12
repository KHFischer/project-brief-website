import Image from "next/image";

import { Section } from "@/components/ui/Section";
import { heroBrief } from "@/features/project-brief/content/sampleBrief";
import { siteContent } from "@/features/project-brief/content/pageContent";
import { PrimaryCtaLink } from "@/features/project-brief/components/PrimaryCtaLink";
import { SecondaryCtaLink } from "@/features/project-brief/components/SecondaryCtaLink";

export function HeroSection() {
  return (
    <Section className="!pb-6 !pt-8 md:!pb-8 md:!pt-10">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_420px]">
        <div className="max-w-2xl">
          <h1 className="whitespace-pre-line text-4xl font-semibold leading-[1.05] text-text md:text-6xl">
            {siteContent.hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted md:text-lg">
            {siteContent.hero.subheadline}
          </p>
          <div className="mt-8 grid gap-3 sm:flex">
            <PrimaryCtaLink location="hero">
              {siteContent.hero.primaryCta}
            </PrimaryCtaLink>
            <SecondaryCtaLink target="#sample-brief">
              {siteContent.hero.secondaryCta}
            </SecondaryCtaLink>
          </div>
          <p className="mt-4 max-w-lg text-sm leading-6 text-soft">
            {siteContent.hero.microcopy}
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[340px] lg:max-w-[380px]">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-soft">
            {siteContent.hero.visualLabel}
          </p>
          <div className="relative h-[440px] overflow-hidden rounded-[2rem] border border-border bg-surface shadow-soft md:h-[460px]">
            <Image
              src="/mockups/phone_mock.png"
              alt="Phone showing an example Project Brief email."
              fill
              priority
              sizes="(min-width: 1024px) 380px, 340px"
              className="object-cover object-top"
            />
          </div>
          <div className="sr-only">
            <p>From: {heroBrief.from}</p>
            <p>Subject: {heroBrief.subject}</p>
            <p>{heroBrief.title}</p>
            <p>Decision Summary: {heroBrief.decisionSummary.join("; ")}</p>
            <p>Why it fits: {heroBrief.whyItFits.join("; ")}</p>
            <p>Next step: {heroBrief.nextStep}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
