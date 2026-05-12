import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Section } from "@/components/ui/Section";
import { EVENTS } from "@/features/project-brief/analytics/events";
import { SectionViewTracker } from "@/features/project-brief/components/SectionViewTracker";
import { faqItems } from "@/features/project-brief/content/faq";

export function FAQSection() {
  return (
    <Section id="faq">
      <SectionViewTracker event={EVENTS.VIEW_FAQ} section="faq" />
      <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
        <div>
          <h2 className="text-3xl font-semibold leading-tight text-text md:text-4xl">
            Questions before you start.
          </h2>
        </div>
        <FAQAccordion items={faqItems} />
      </div>
    </Section>
  );
}
