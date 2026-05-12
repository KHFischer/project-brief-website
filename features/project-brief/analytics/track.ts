"use client";

import { EVENTS, type AnalyticsEventName } from "@/features/project-brief/analytics/events";
import { getCurrentTrackingParams, type TrackingParams } from "@/lib/utm";

type EventParams = TrackingParams & {
  page?: string;
  section?: string;
  cta_text?: string;
  destination?: string;
};

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackEvent(event: AnalyticsEventName, params: EventParams = {}) {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({
    event,
    page: window.location.pathname,
    ...getCurrentTrackingParams(),
    ...params,
  });
}

export function trackPageView() {
  trackEvent(EVENTS.PAGE_VIEW);
}
