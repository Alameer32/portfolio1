"use client";

import Image from "next/image";
import { ArrowRight, Layers, Brain, ShieldCheck } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { projects } from "@/lib/projects";

const yalla = projects.find((p) => p.id === "yalla-fitness")!;

const highlights = [
  {
    icon: Layers,
    title: "Clean Architecture",
    description:
      "Separation of concerns using BLoC pattern for predictable state management and scalability.",
  },
  {
    icon: Brain,
    title: "AI Fitness Coach",
    description:
      "Custom-tuned LLM integration via Edge Functions for personalized workout planning and nutrition.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by Design",
    description:
      "Supabase Row-Level Security (RLS) ensures tenant isolation and granular data privacy controls.",
  },
];

export default function FeaturedYalla() {
  return (
    <section id="work" className="border-t border-border py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionLabel number="01" label="Featured" />
        </Reveal>

        <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column — text + metadata */}
          <div>
            <Reveal>
              <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                {yalla.title}.
              </h2>
            </Reveal>

            <Reveal delay={0.05}>
              <p className="mt-4 max-w-md text-lg text-muted">
                {yalla.tagline}
              </p>
            </Reveal>

            {/* Metadata table */}
            <Reveal delay={0.1}>
              <dl className="mt-8 space-y-3 border-l border-border pl-6">
                {[
                  { label: "Role", value: "Solo developer" },
                  { label: "Year", value: yalla.year },
                  { label: "Type", value: "Final-year project" },
                  {
                    label: "Stack",
                    value: yalla.technologies.join(", "),
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-6">
                    <dt className="w-14 shrink-0 font-mono text-xs uppercase tracking-wider text-muted">
                      {item.label}
                    </dt>
                    <dd className="font-mono text-sm text-text">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8">
                <Button
                  variant="secondary"
                  href={yalla.caseStudyUrl ?? "#"}
                >
                  Read case study <ArrowRight size={14} />
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right column — mockup image */}
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-lg border border-border bg-surface">
              <div className="absolute -inset-4 bg-accent/5 blur-3xl" />
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={yalla.image}
                  alt={`${yalla.title} app mockup`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-4 left-4">
                <span className="rounded border border-border bg-background/80 px-3 py-1 font-mono text-xs text-muted backdrop-blur-sm">
                  CLIENT_MOCKUP_V1.02
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* 3-column highlight grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {highlights.map((item, i) => (
            <Reveal key={item.title} delay={0.05 * i}>
              <div className="group rounded-lg border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5">
                <item.icon
                  size={24}
                  className="text-accent"
                  strokeWidth={1.5}
                />
                <h3 className="mt-4 text-sm font-bold uppercase tracking-wide text-text">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
