import { Section } from "@/components/ui/Section";
import { StrokeIcon } from "@/components/ui/StrokeIcon";
import { EVENTS } from "@/features/project-brief/analytics/events";
import { PrimaryCtaLink } from "@/features/project-brief/components/PrimaryCtaLink";
import { SectionViewTracker } from "@/features/project-brief/components/SectionViewTracker";
import { siteContent } from "@/features/project-brief/content/pageContent";

export function PricingHowItWorksSection() {
  return (
    <Section id="pricing" className="border-y border-border bg-surface/55">
      <SectionViewTracker event={EVENTS.VIEW_PRICING} section="pricing" />
      <div className="grid gap-10 lg:grid-cols-[1fr_380px] lg:items-start">
        <div>
          <h2 className="text-3xl font-semibold leading-tight text-text md:text-4xl">
            {siteContent.pricing.headline}
          </h2>
          <div className="mt-8 grid gap-5">
            {siteContent.pricing.steps.map((step, index) => (
              <div key={step.title} className="grid grid-cols-[44px_1fr] gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border-strong bg-surface font-mono text-sm text-blue">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text">{step.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-7 text-muted md:text-base">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded-xl border border-border bg-surface p-6 shadow-soft md:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-soft">
            {siteContent.pricing.card.title}
          </p>
          <p className="mt-5 text-3xl font-semibold text-text">
            {siteContent.pricing.card.price}
          </p>
          <p className="mt-2 text-base text-muted">{siteContent.pricing.card.cadence}</p>
          <ul className="mt-6 space-y-3 text-sm leading-6 text-muted">
            {siteContent.pricing.card.included.map((item) => (
              <li key={item} className="flex gap-3">
                <StrokeIcon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-6 text-soft">{siteContent.pricing.card.terms}</p>
          <div className="mt-6">
            <PrimaryCtaLink location="pricing" fullWidth>
              {siteContent.pricing.card.cta}
            </PrimaryCtaLink>
          </div>
        </aside>
      </div>
    </Section>
  );
}
