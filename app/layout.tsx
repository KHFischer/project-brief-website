import type { Metadata } from "next";
import { Suspense, type ReactNode } from "react";

import { AnalyticsBoot } from "@/components/analytics/AnalyticsBoot";
import { GTM, GTMNoScript } from "@/components/analytics/GTM";
import { canonicalUrl } from "@/lib/urls";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://demo.lintelstandard.com"),
  title: {
    default: "Project Brief | Qualified Demo and Abatement Briefs",
    template: "%s | Project Brief",
  },
  description:
    "Scheduled email briefs for demolition and abatement contractors. Project Brief monitors permits, public bids, and relevant sources, then sends the jobs worth checking.",
  alternates: {
    canonical: canonicalUrl(),
  },
  openGraph: {
    title: "Project Brief",
    description: "Qualified demo and abatement briefs. Not another lead feed.",
    url: canonicalUrl(),
    siteName: "Project Brief",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <GTM />
      </head>
      <body>
        <GTMNoScript />
        <Suspense fallback={null}>
          <AnalyticsBoot />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
