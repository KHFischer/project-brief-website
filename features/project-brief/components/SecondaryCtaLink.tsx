"use client";

import { ButtonLink } from "@/components/ui/Button";
import { EVENTS } from "@/features/project-brief/analytics/events";
import { trackEvent } from "@/features/project-brief/analytics/track";

type SecondaryCtaLinkProps = {
  children: string;
  target: string;
  fullWidth?: boolean;
};

export function SecondaryCtaLink({ children, target, fullWidth = false }: SecondaryCtaLinkProps) {
  return (
    <ButtonLink
      href={target}
      variant="secondary"
      fullWidth={fullWidth}
      onClick={() => {
        trackEvent(EVENTS.CLICK_SECONDARY_CTA, {
          section: "hero",
          cta_text: children,
          destination: target,
        });
      }}
    >
      {children}
    </ButtonLink>
  );
}
