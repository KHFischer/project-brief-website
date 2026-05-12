"use client";

export const TRACKING_PARAM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "pb_account_id",
  "pb_batch_id",
  "pb_project_id",
  "client_reference_id",
] as const;

export type TrackingParamKey = (typeof TRACKING_PARAM_KEYS)[number];
export type TrackingParams = Partial<Record<TrackingParamKey, string>>;

const STORAGE_KEY = "project_brief_tracking_params";

export function getTrackingParamsFromSearch(search: string): TrackingParams {
  const params = new URLSearchParams(search);
  return TRACKING_PARAM_KEYS.reduce<TrackingParams>((acc, key) => {
    const value = params.get(key);
    if (value) {
      acc[key] = value;
    }
    return acc;
  }, {});
}

export function storeTrackingParamsFromLocation(): TrackingParams {
  if (typeof window === "undefined") {
    return {};
  }

  const current = getTrackingParamsFromSearch(window.location.search);
  if (Object.keys(current).length === 0) {
    return readStoredTrackingParams();
  }

  const merged = {
    ...readStoredTrackingParams(),
    ...current,
  };

  window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
  return merged;
}

export function readStoredTrackingParams(): TrackingParams {
  if (typeof window === "undefined") {
    return {};
  }

  const raw = window.sessionStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return {};
  }

  try {
    const parsed = JSON.parse(raw) as Record<string, unknown>;
    return TRACKING_PARAM_KEYS.reduce<TrackingParams>((acc, key) => {
      const value = parsed[key];
      if (typeof value === "string" && value.length > 0) {
        acc[key] = value;
      }
      return acc;
    }, {});
  } catch {
    return {};
  }
}

export function getCurrentTrackingParams(): TrackingParams {
  if (typeof window === "undefined") {
    return {};
  }

  return {
    ...readStoredTrackingParams(),
    ...getTrackingParamsFromSearch(window.location.search),
  };
}

export function appendTrackingParams(url: string, params: TrackingParams): string {
  if (!url) {
    return "#";
  }

  const nextUrl = new URL(url, window.location.origin);
  TRACKING_PARAM_KEYS.forEach((key) => {
    const value = params[key];
    if (value) {
      nextUrl.searchParams.set(key, value);
    }
  });

  return nextUrl.toString();
}
