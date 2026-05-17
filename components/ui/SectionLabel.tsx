interface SectionLabelProps {
  number?: string;
  label: string;
  tone?: "default" | "success";
}

export default function SectionLabel({
  number,
  label,
  tone = "default",
}: SectionLabelProps) {
  const labelColor = tone === "success" ? "text-success" : "text-muted";

  return (
    <div className="flex items-center gap-3">
      <p
        className={`font-mono text-xs font-medium uppercase tracking-wider ${labelColor}`}
      >
        {number && <span>{number} — </span>}
        {label}
      </p>
      <span className="h-px w-12 bg-border" aria-hidden="true" />
    </div>
  );
}
