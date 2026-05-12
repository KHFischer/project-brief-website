import Image from "next/image";
import Link from "next/link";

import { siteContent } from "@/features/project-brief/content/pageContent";
import { PrimaryCtaLink } from "@/features/project-brief/components/PrimaryCtaLink";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/92 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1120px] items-center justify-between gap-4 px-5 md:px-8">
        <Link href="/project-brief" className="flex items-center gap-3" aria-label="Project Brief home">
          <Image src="/logos/logo-mark.png" alt="" width={40} height={32} priority />
          <span className="text-sm font-semibold tracking-[0.01em] text-text md:text-base">
            {siteContent.productName}
          </span>
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-2 md:gap-6">
          <Link
            href="/project-brief#sample-brief"
            className="hidden text-sm font-medium text-muted transition hover:text-blue sm:inline"
          >
            {siteContent.nav.sampleBrief}
          </Link>
          <Link
            href="/project-brief#pricing"
            className="hidden text-sm font-medium text-muted transition hover:text-blue sm:inline"
          >
            {siteContent.nav.pricing}
          </Link>
          <PrimaryCtaLink location="header" compact>
            {siteContent.nav.start}
          </PrimaryCtaLink>
        </nav>
      </div>
    </header>
  );
}
