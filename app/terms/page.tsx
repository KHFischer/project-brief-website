import type { Metadata } from "next";

import { SiteShell } from "@/components/layout/SiteShell";

export const metadata: Metadata = {
  title: "Terms",
  description: "Project Brief service terms.",
};

export default function TermsPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-[860px] px-5 py-14 md:px-8 md:py-20">
        <h1 className="text-3xl font-semibold text-text md:text-5xl">Terms</h1>
        <div className="mt-8 space-y-5 rounded-xl border border-border bg-surface p-6 text-sm leading-7 text-muted md:p-8 md:text-base">
          <p>
            Project Brief is a bid research service for contractors. The service provides
            scheduled email briefs based on available public sources and your contractor
            profile.
          </p>
          <p>
            The launch price is $299 for the first month, then $499/month. Subscriptions
            are month to month. Cancellation before renewal prevents further charges, and
            access continues through the end of the paid period.
          </p>
          <p>
            Direct opportunities are selected from available public sources based on
            apparent profile fit, including trade, territory, timing, project preferences,
            and exclusions. Intake completeness affects personalization quality.
          </p>
          <p>
            Project Brief does not guarantee awards, revenue, exclusivity, buyer intent,
            or final eligibility for any opportunity.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
