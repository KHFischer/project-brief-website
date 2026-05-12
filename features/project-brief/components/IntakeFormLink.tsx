"use client";

import { ButtonLink } from "@/components/ui/Button";
import { EVENTS } from "@/features/project-brief/analytics/events";
import { trackEvent } from "@/features/project-brief/analytics/track";

type IntakeFormLinkProps = {
  href: string;
  children: string;
};

export function IntakeFormLink({ href, children }: IntakeFormLinkProps) {
  if (!href) {
    return null;
  }

  return (
    <ButtonLink
      href={href}
      onClick={() => {
        trackEvent(EVENTS.CLICK_INTAKE_FORM, {
          section: "setup",
          cta_text: children,
          destination: "google_form",
        });
      }}
    >
      {children}
    </ButtonLink>
  );
}
