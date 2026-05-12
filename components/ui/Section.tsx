import type { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
  id?: string;
  className?: string;
  innerClassName?: string;
}>;

export function Section({ id, className = "", innerClassName = "", children }: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className={`mx-auto w-full max-w-[1120px] px-5 md:px-8 ${innerClassName}`}>
        {children}
      </div>
    </section>
  );
}
