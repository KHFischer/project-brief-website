import { env } from "@/lib/env";

export const CANONICAL_ORIGIN = "https://demo.lintelstandard.com";
export const PROJECT_BRIEF_PATH = "/project-brief";

export function supportMailto(): string {
  return `mailto:${env.supportEmail}`;
}

export function canonicalUrl(path = PROJECT_BRIEF_PATH): string {
  return `${CANONICAL_ORIGIN}${path}`;
}

export function stripePaymentLink(): string {
  return env.stripePaymentLink;
}

export function intakeFormUrl(): string {
  return env.googleFormUrl;
}
