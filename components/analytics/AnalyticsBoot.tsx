"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

import { trackPageView } from "@/features/project-brief/analytics/track";
import { storeTrackingParamsFromLocation } from "@/lib/utm";

export function AnalyticsBoot() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    storeTrackingParamsFromLocation();
    trackPageView();
  }, [pathname, searchParams]);

  return null;
}
