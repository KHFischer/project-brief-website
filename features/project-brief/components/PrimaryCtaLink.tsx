"use client";

import { useEffect, useState } from "react";

import { ButtonLink } from "@/components/ui/Button";
import { EVENTS } from "@/features/project-brief/analytics/events";
import { trackEvent } from "@/features/project-brief/analytics/track";
import { appendTrackingParams, getCurrentTrackingParams, storeTrackingParamsFromLocation } from "@/lib/utm";
import { stripePaymentLink } from "@/lib/urls";

type PrimaryCtaLinkProps = {
  location: "header" | "hero" | "pricing";
  children: string;
  compact?: boolean;
  fullWidth?: boolean;
};

export function PrimaryCtaLink({
  location,
  children,
  compact = false,
  fullWidth = false,
}: PrimaryCtaLinkProps) {
  const [href, setHref] = useState(stripePaymentLink() || "#");

  useEffect(() => {
    storeTrackingParamsFromLocation();
    const paymentLink = stripePaymentLink();
    if (paymentLink) {
      setHref(appendTrackingParams(paymentLink, getCurrentTrackingParams()));
    }
  }, []);

  return (
    <ButtonLink
      href={href}
      fullWidth={fullWidth}
      className={compact ? "min-h-10 px-4 py-2 text-xs md:text-sm" : ""}
      onClick={() => {
        trackEvent(EVENTS.CLICK_PRIMARY_CTA, {
          section: location,
          cta_text: children,
          destination: "stripe",
        });
        trackEvent(EVENTS.CLICK_STRIPE_PAYMENT, {
          section: location,
          cta_text: children,
          destination: "stripe",
        });
      }}
    >
      {children}
    </ButtonLink>
  );
}
