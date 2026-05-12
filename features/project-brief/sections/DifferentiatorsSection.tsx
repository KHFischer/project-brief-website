import { Section } from "@/components/ui/Section";
import { StrokeIcon } from "@/components/ui/StrokeIcon";
import { siteContent } from "@/features/project-brief/content/pageContent";

export function DifferentiatorsSection() {
  return (
    <Section className="border-y border-border bg-surface/55 !py-6 md:!py-8">
      <div className="flex flex-col gap-8">
        <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-text md:text-4xl">
          {siteContent.differentiators.headline}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {siteContent.differentiators.cards.map((card) => (
            <article
              key={card.title}
              className="rounded-xl border border-border bg-surface p-5"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg border border-border-strong text-blue">
                <StrokeIcon name={card.icon} />
              </div>
              <h3 className="text-lg font-semibold text-text">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
