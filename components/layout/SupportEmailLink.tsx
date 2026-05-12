"use client";

import type { PropsWithChildren } from "react";

import type { AnalyticsEventName } from "@/features/project-brief/analytics/events";
import { trackEvent } from "@/features/project-brief/analytics/track";

type SupportEmailLinkProps = PropsWithChildren<{
  href: string;
  event: AnalyticsEventName;
}>;

export function SupportEmailLink({ href, event, children }: SupportEmailLinkProps) {
  return (
    <a
      href={href}
      className="font-medium text-text hover:text-blue"
      onClick={() => {
        trackEvent(event, {
          section: "footer",
          destination: "email",
        });
      }}
    >
      {children}
    </a>
  );
}
