import Image from "next/image";

import { Section } from "@/components/ui/Section";
import { EVENTS } from "@/features/project-brief/analytics/events";
import { SectionViewTracker } from "@/features/project-brief/components/SectionViewTracker";
import { siteContent } from "@/features/project-brief/content/pageContent";
import { fullSampleBrief } from "@/features/project-brief/content/sampleBrief";

export function SampleBriefSection() {
  return (
    <Section id="sample-brief">
      <SectionViewTracker event={EVENTS.VIEW_SAMPLE_BRIEF} section="sample_brief" />
      <div className="grid gap-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold leading-tight text-text md:text-4xl">
            {siteContent.sampleBrief.headline}
          </h2>
          <p className="mt-4 text-base leading-7 text-muted">
            {siteContent.sampleBrief.body}
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-border bg-surface p-3 shadow-soft">
          <Image
            src="/mockups/laptop_mock.png"
            alt="Laptop showing a full Project Brief email sample."
            width={1448}
            height={1086}
            className="h-auto min-w-[820px] rounded-lg md:min-w-0"
          />
        </div>

        <p className="max-w-3xl border-l-2 border-blue pl-5 text-sm leading-7 text-muted md:text-base">
          {siteContent.sampleBrief.dryWeekNote}
        </p>

        <div className="sr-only">
          <p>Subject: {fullSampleBrief.subject}</p>
          <p>{fullSampleBrief.title}</p>
          {fullSampleBrief.sections.map((section) => (
            <div key={section.title}>
              <p>{section.title}</p>
              <ul>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
          <p>Source: {fullSampleBrief.source}</p>
          <p>Questions? Reply to this email.</p>
        </div>
      </div>
    </Section>
  );
}
