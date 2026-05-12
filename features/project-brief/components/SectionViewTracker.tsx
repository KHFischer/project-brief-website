"use client";

import { useEffect, useRef } from "react";

import type { AnalyticsEventName } from "@/features/project-brief/analytics/events";
import { trackEvent } from "@/features/project-brief/analytics/track";

type SectionViewTrackerProps = {
  event: AnalyticsEventName;
  section: string;
};

export function SectionViewTracker({ event, section }: SectionViewTrackerProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          trackEvent(event, { section });
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [event, section]);

  return <div ref={ref} aria-hidden="true" className="h-px w-px" />;
}
