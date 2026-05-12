import Link from "next/link";

import { siteContent } from "@/features/project-brief/content/pageContent";
import { env } from "@/lib/env";
import { supportMailto } from "@/lib/urls";
import { EVENTS } from "@/features/project-brief/analytics/events";
import { SupportEmailLink } from "@/components/layout/SupportEmailLink";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-[1120px] gap-6 px-5 py-8 text-sm text-muted md:grid-cols-[1fr_auto] md:px-8">
        <div className="space-y-3">
          <p className="font-semibold text-text">{siteContent.footer.brand}</p>
          <p className="max-w-2xl leading-6">{siteContent.footer.disclaimer}</p>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          <SupportEmailLink href={supportMailto()} event={EVENTS.CLICK_EMAIL_SUPPORT}>
            {env.supportEmail}
          </SupportEmailLink>
          <div className="flex gap-3">
            <Link className="hover:text-blue" href="/terms">
              Terms
            </Link>
            <span aria-hidden="true">·</span>
            <Link className="hover:text-blue" href="/privacy">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
