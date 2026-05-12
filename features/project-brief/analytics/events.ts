export const EVENTS = {
  PAGE_VIEW: "page_view",
  VIEW_SAMPLE_BRIEF: "view_sample_brief",
  VIEW_PRICING: "view_pricing",
  VIEW_FAQ: "view_faq",
  CLICK_PRIMARY_CTA: "click_primary_cta",
  CLICK_SECONDARY_CTA: "click_secondary_cta",
  CLICK_STRIPE_PAYMENT: "click_stripe_payment",
  CLICK_EMAIL_SUPPORT: "click_email_support",
  CLICK_INTAKE_FORM: "click_intake_form",
  VIEW_SETUP_PAGE: "view_setup_page",
} as const;

export type AnalyticsEventName = (typeof EVENTS)[keyof typeof EVENTS];
