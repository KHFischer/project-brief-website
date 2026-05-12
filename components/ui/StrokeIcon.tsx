type StrokeIconProps = {
  name: string;
  className?: string;
};

export function StrokeIcon({ name, className = "" }: StrokeIconProps) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
  };

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`h-6 w-6 ${className}`}
      {...common}
    >
      {name === "filter" && (
        <path d="M4 6h16M7 12h10M10 18h4" />
      )}
      {name === "license" && (
        <>
          <rect x="5" y="4" width="14" height="16" rx="2" />
          <path d="M9 8h6M9 12h6M9 16h3" />
        </>
      )}
      {name === "target" && (
        <>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
        </>
      )}
      {name === "mail" && (
        <>
          <rect x="4" y="6" width="16" height="12" rx="2" />
          <path d="m5 8 7 5 7-5" />
        </>
      )}
      {name === "check" && <path d="m5 12 4 4L19 6" />}
      {name === "arrow" && <path d="M5 12h14M13 6l6 6-6 6" />}
    </svg>
  );
}
