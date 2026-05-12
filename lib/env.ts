export const env = {
  gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? "",
  stripePaymentLink: process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK ?? "",
  googleFormUrl: process.env.NEXT_PUBLIC_GOOGLE_FORM_URL ?? "",
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "support@lintelstandard.com",
  stripeBillingPortalUrl: process.env.NEXT_PUBLIC_STRIPE_BILLING_PORTAL_URL ?? "",
};
