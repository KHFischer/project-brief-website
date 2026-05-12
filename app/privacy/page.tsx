import type { Metadata } from "next";

import { SiteShell } from "@/components/layout/SiteShell";
import { env } from "@/lib/env";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Project Brief privacy information.",
};

export default function PrivacyPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-[860px] px-5 py-14 md:px-8 md:py-20">
        <h1 className="text-3xl font-semibold text-text md:text-5xl">Privacy</h1>
        <div className="mt-8 space-y-5 rounded-xl border border-border bg-surface p-6 text-sm leading-7 text-muted md:p-8 md:text-base">
          <p>
            Project Brief may collect name, business name, email, phone number, intake
            answers, and analytics data. Billing information is handled by Stripe.
          </p>
          <p>
            Intake may be handled through Google Forms and Google Sheets. Website analytics
            may be handled through Google Tag Manager, GA4, Google Ads, and Meta Pixel.
          </p>
          <p>
            We use this information to process subscriptions, set up contractor profiles,
            deliver scheduled briefs, respond to support requests, and understand website
            performance.
          </p>
          <p>
            You can request changes or deletion by emailing {env.supportEmail}. Some
            payment, accounting, or operational records may need to be retained where
            required.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
