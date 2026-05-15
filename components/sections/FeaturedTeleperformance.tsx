"use client";

import {
  Users,
  TrendingUp,
  Globe,
  DollarSign,
  Calendar,
} from "lucide-react";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import TechTag from "@/components/ui/TechTag";
import Reveal from "@/components/ui/Reveal";
import CountUp from "@/components/ui/CountUp";
import { projects, teleperformanceProjects } from "@/lib/projects";

const tp = projects.find((p) => p.id === "teleperformance")!;

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  Users,
  TrendingUp,
  Globe,
  DollarSign,
  Calendar,
};

const stats = [
  { label: "Measured ROI", value: 500, prefix: "$", suffix: "K+" },
  { label: "Countries", value: 6 },
  { label: "Platforms", value: 5 },
  { label: "Duration", display: "1YR" },
];

export default function FeaturedTeleperformance() {
  return (
    <section className="border-t border-border py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionLabel number="02" label="Featured" />
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-8 text-4xl font-extrabold tracking-tight md:text-5xl">
            {tp.title}.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-4 max-w-xl text-lg text-muted">{tp.tagline}</p>
        </Reveal>

        {/* 4-stat row */}
        <Reveal delay={0.15}>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-border bg-surface p-6"
              >
                <p className="font-mono text-xs uppercase tracking-wider text-muted">
                  {stat.label}
                </p>
                <p className="mt-2 text-3xl font-bold tracking-tight text-accent md:text-4xl">
                  {"display" in stat && stat.display ? (
                    stat.display
                  ) : (
                    <CountUp
                      value={stat.value!}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  )}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* 5-card grid: 2 cols top, 3 cols bottom */}
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-2">
          {teleperformanceProjects.slice(0, 2).map((sub, i) => {
            const Icon = iconMap[sub.icon] ?? Globe;
            return (
              <Reveal key={sub.title} delay={0.05 * i}>
                <div className="group flex h-full flex-col justify-between rounded-lg border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5">
                  <div>
                    <div className="flex items-start justify-between">
                      <Icon
                        size={24}
                        className="text-accent"
                        strokeWidth={1.5}
                      />
                      <span className="font-mono text-xs text-muted">
                        PROJECT_{String(i + 1).padStart(2, "0")} //
                      </span>
                    </div>
                    <h3 className="mt-6 text-lg font-bold text-text">
                      {sub.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {sub.description}
                    </p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {sub.technologies.map((tech) => (
                      <TechTag key={tech} label={tech} />
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {teleperformanceProjects.slice(2).map((sub, i) => {
            const Icon = iconMap[sub.icon] ?? Globe;
            return (
              <Reveal key={sub.title} delay={0.05 * i}>
                <div className="group flex h-full flex-col justify-between rounded-lg border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5">
                  <div>
                    <div className="flex items-start justify-between">
                      <Icon
                        size={24}
                        className="text-accent"
                        strokeWidth={1.5}
                      />
                      <span className="font-mono text-xs text-muted">
                        PROJECT_{String(i + 3).padStart(2, "0")} //
                      </span>
                    </div>
                    <h3 className="mt-6 text-lg font-bold text-text">
                      {sub.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {sub.description}
                    </p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {sub.technologies.map((tech) => (
                      <TechTag key={tech} label={tech} />
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
