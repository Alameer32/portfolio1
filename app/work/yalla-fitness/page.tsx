import type { Metadata } from "next";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Container from "@/components/layout/Container";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import SectionLabel from "@/components/ui/SectionLabel";
import TechTag from "@/components/ui/TechTag";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { projects } from "@/lib/projects";

const project = projects.find((p) => p.id === "yalla-fitness")!;

export const metadata: Metadata = {
  title: "Yalla-Fitness — Case Study",
  description: project.tagline,
};

const architecture = [
  {
    layer: "Presentation",
    description:
      "Flutter UI built with BLoC pattern. Each feature module has its own set of Cubits/Blocs, pages, and widgets — fully decoupled from business logic.",
  },
  {
    layer: "Domain",
    description:
      "Pure Dart entities, use cases, and repository interfaces. Zero framework dependencies — testable in isolation.",
  },
  {
    layer: "Data",
    description:
      "Repository implementations, Supabase data sources, DTOs, and mappers. Dependency injection wires data to domain at app startup.",
  },
  {
    layer: "Backend",
    description:
      "Supabase provides auth, Postgres database, storage buckets, and edge functions. Row-level security policies enforce tenant isolation at the DB layer.",
  },
];

const decisions = [
  {
    question: "Why BLoC over Riverpod or Provider?",
    answer:
      "BLoC enforces a strict unidirectional data flow (Event → Bloc → State) that maps cleanly to the Clean Architecture boundary between presentation and domain. It also produces highly testable code — every state transition is predictable and replay-able.",
  },
  {
    question: "Why proxy the LLM through an edge function?",
    answer:
      "Keeping API credentials out of the client is non-negotiable for a production app. The Supabase edge function acts as a secure proxy — it holds the LLM API key, enforces rate limits, and persists conversation memory server-side so context survives across sessions.",
  },
  {
    question: "Why RLS instead of application-level auth checks?",
    answer:
      "Application-level checks can be bypassed by direct API calls or bugs in middleware. Postgres Row-Level Security pushes access control down to the database layer — even if the app code has a vulnerability, the data is still protected.",
  },
  {
    question: "Why build a separate admin console?",
    answer:
      "The mobile app and admin console serve fundamentally different user needs. Sharing the same Postgres backend while keeping the frontends separate lets each UI be purpose-built — the admin gets data tables, CMS workflows, and live mobile preview; the mobile app stays lean.",
  },
];

const lessons = [
  "Clean Architecture adds initial overhead but pays off exponentially as the feature set grows — adding barcode scanning and Spotify integration barely touched existing code.",
  "Edge functions are the right abstraction for AI features in mobile apps — they keep secrets safe, enable server-side memory, and let you swap LLM providers without a client update.",
  "RLS policies should be written and tested before any application code — they define the security model that everything else builds on.",
  "A live mobile-fidelity preview in the admin CMS cut content QA time by ~70% — admins could see exactly what end users would see before publishing.",
];

export default function YallaFitnessPage() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        {/* Hero */}
        <section className="border-b border-border py-24 md:py-32">
          <Container>
            <Reveal>
              <Button variant="ghost" href="/#work" className="mb-8">
                <ArrowLeft size={14} /> Back to home
              </Button>
            </Reveal>

            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <Reveal>
                  <SectionLabel label="Case Study" />
                  <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
                    {project.title}
                  </h1>
                </Reveal>

                <Reveal delay={0.05}>
                  <p className="mt-4 text-lg text-muted">{project.tagline}</p>
                </Reveal>

                <Reveal delay={0.1}>
                  <dl className="mt-8 grid grid-cols-2 gap-4">
                    {[
                      { label: "Role", value: "Solo developer" },
                      { label: "Year", value: project.year },
                      { label: "Type", value: project.type },
                      { label: "Category", value: "Final-Year Project" },
                    ].map((item) => (
                      <div key={item.label}>
                        <dt className="font-mono text-xs uppercase tracking-wider text-muted">
                          {item.label}
                        </dt>
                        <dd className="mt-1 text-sm font-medium text-text">
                          {item.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </Reveal>

                <Reveal delay={0.15}>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <TechTag key={tech} label={tech} />
                    ))}
                  </div>
                </Reveal>

                {project.githubUrl && (
                  <Reveal delay={0.2}>
                    <div className="mt-6">
                      <Button
                        variant="primary"
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View on GitHub <ArrowUpRight size={14} />
                      </Button>
                    </div>
                  </Reveal>
                )}
              </div>

              <Reveal delay={0.1}>
                <div className="relative overflow-hidden rounded-lg border border-border bg-surface">
                  <div className="absolute -inset-4 bg-accent/5 blur-3xl" />
                  <div className="relative aspect-video w-full">
                    <iframe
                      src="https://www.youtube.com/embed/8anJiEnWJ2c"
                      title={`${project.title} demo`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* Problem */}
        <section className="py-24 md:py-32">
          <Container>
            <Reveal>
              <SectionLabel label="Problem" />
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
                The challenge
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-muted">
                <p>
                  Fitness apps are plentiful, but most fall into one of two
                  camps: they are either simple trackers with no intelligence, or
                  bloated platforms that try to do everything through a single
                  monolithic codebase. Neither approach scales well, and neither
                  gives users a truly personalized experience.
                </p>
                <p>
                  The goal was to build a fitness companion that combines the
                  depth of a full-stack platform — workout scheduling, nutrition
                  tracking, step syncing, education — with the intelligence of an
                  AI coach, all while keeping the architecture clean enough that
                  any single feature could be modified or replaced without
                  touching the rest.
                </p>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* Architecture */}
        <section className="border-t border-border py-24 md:py-32">
          <Container>
            <Reveal>
              <SectionLabel label="Architecture" />
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
                System design
              </h2>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="mt-8 overflow-hidden rounded-lg border border-border bg-surface">
                <Image
                  src="/images/BLoC.png"
                  alt={`${project.title} system design — BLoC architecture`}
                  width={1640}
                  height={922}
                  sizes="100vw"
                  className="h-auto w-full"
                />
              </div>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {architecture.map((item, i) => (
                <Reveal key={item.layer} delay={0.05 * i}>
                  <div className="rounded-lg border border-border bg-surface p-6">
                    <p className="font-mono text-xs font-medium uppercase tracking-wider text-accent">
                      {item.layer}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* Key Decisions */}
        <section className="border-t border-border py-24 md:py-32">
          <Container>
            <Reveal>
              <SectionLabel label="Decisions" />
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
                Key decisions
              </h2>
            </Reveal>

            <div className="mt-8 space-y-6">
              {decisions.map((item, i) => (
                <Reveal key={item.question} delay={0.05 * i}>
                  <div className="rounded-lg border border-border bg-surface p-6">
                    <h3 className="text-base font-bold text-text">
                      {item.question}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.answer}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* Features */}
        <section className="border-t border-border py-24 md:py-32">
          <Container>
            <Reveal>
              <SectionLabel label="Features" />
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
                What it does
              </h2>
            </Reveal>

            <Reveal delay={0.05}>
              <ul className="mt-8 space-y-4">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-3 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Reveal>
          </Container>
        </section>

        {/* Lessons */}
        <section className="border-t border-border py-24 md:py-32">
          <Container>
            <Reveal>
              <SectionLabel label="Reflections" />
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
                What I learned
              </h2>
            </Reveal>

            <Reveal delay={0.05}>
              <ul className="mt-8 space-y-4">
                {lessons.map((lesson) => (
                  <li
                    key={lesson}
                    className="flex gap-3 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />
                    {lesson}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-12">
                <Button variant="ghost" href="/#work">
                  <ArrowLeft size={14} /> Back to all projects
                </Button>
              </div>
            </Reveal>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
