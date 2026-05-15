"use client";

import type { ProjectCategory } from "@/lib/projects";

const categories: (ProjectCategory | "All")[] = [
  "All",
  "Full-Stack",
  "Mobile",
  "AI",
  "Game",
  "Automation",
  "Backend",
];

interface CategoryFilterProps {
  active: ProjectCategory | "All";
  onChange: (category: ProjectCategory | "All") => void;
}

export default function CategoryFilter({
  active,
  onChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`rounded border px-3 py-1.5 font-mono text-xs font-medium uppercase tracking-wider transition-colors duration-200 ${
            active === cat
              ? "border-accent bg-accent text-white"
              : "border-border text-muted hover:border-accent/40 hover:text-text"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
