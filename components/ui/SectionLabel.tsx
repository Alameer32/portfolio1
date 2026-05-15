interface SectionLabelProps {
  number?: string;
  label: string;
}

export default function SectionLabel({ number, label }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3">
      <p className="font-mono text-xs font-medium uppercase tracking-wider text-muted">
        {number && <span>{number} — </span>}
        {label}
      </p>
      <span className="h-px w-12 bg-border" aria-hidden="true" />
    </div>
  );
}
