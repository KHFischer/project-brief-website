"use client";

import { useEffect } from "react";

import { EVENTS } from "@/features/project-brief/analytics/events";
import { trackEvent } from "@/features/project-brief/analytics/track";

export function SetupPageTracker() {
  useEffect(() => {
    trackEvent(EVENTS.VIEW_SETUP_PAGE, {
      page: "/project-brief/setup",
    });
  }, []);

  return null;
}
