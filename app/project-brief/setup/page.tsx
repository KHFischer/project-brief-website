import type { Metadata } from "next";

import { SiteShell } from "@/components/layout/SiteShell";
import { SupportEmailLink } from "@/components/layout/SupportEmailLink";
import { ButtonLink } from "@/components/ui/Button";
import { EVENTS } from "@/features/project-brief/analytics/events";
import { IntakeFormLink } from "@/features/project-brief/components/IntakeFormLink";
import { SetupPageTracker } from "@/features/project-brief/components/SetupPageTracker";
import { siteContent } from "@/features/project-brief/content/pageContent";
import { env } from "@/lib/env";
import { intakeFormUrl, supportMailto } from "@/lib/urls";

export const metadata: Metadata = {
  title: "Setup",
  description: "Project Brief payment confirmation and intake next steps.",
};

export default function SetupPage() {
  const formUrl = intakeFormUrl();

  return (
    <SiteShell>
      <SetupPageTracker />
      <section className="mx-auto max-w-[860px] px-5 py-16 md:px-8 md:py-24">
        <div className="rounded-xl border border-border bg-surface p-6 shadow-soft md:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-soft">
            Project Brief
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight text-text md:text-5xl">
            {siteContent.setup.headline}
          </h1>
          <div className="mt-6 space-y-4 text-base leading-8 text-muted">
            {siteContent.setup.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <IntakeFormLink href={formUrl}>{siteContent.setup.intakeCta}</IntakeFormLink>
            <ButtonLink href="/project-brief" variant="secondary">
              Return to Project Brief
            </ButtonLink>
          </div>
          <p className="mt-8 text-sm leading-7 text-muted">
            Questions? Email{" "}
            <SupportEmailLink href={supportMailto()} event={EVENTS.CLICK_EMAIL_SUPPORT}>
              {env.supportEmail}
            </SupportEmailLink>
            .
          </p>
          <p className="mt-3 text-sm leading-7 text-soft">
            {siteContent.setup.cancellation}
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
