interface TechTagProps {
  label: string;
}

export default function TechTag({ label }: TechTagProps) {
  return (
    <span className="inline-block rounded border border-border px-2 py-0.5 font-mono text-xs text-muted">
      {label}
    </span>
  );
}
