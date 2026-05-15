import type { Metadata } from "next";
import {
  ArrowLeft,
  Users,
  TrendingUp,
  Globe,
  DollarSign,
  Calendar,
} from "lucide-react";
import Container from "@/components/layout/Container";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import SectionLabel from "@/components/ui/SectionLabel";
import TechTag from "@/components/ui/TechTag";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/projects";
import { subProjectDetails } from "@/lib/teleperformance-details";

const project = projects.find((p) => p.id === "teleperformance")!;

export const metadata: Metadata = {
  title: "Teleperformance — Case Study",
  description: project.tagline,
};

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  Users,
  TrendingUp,
  Globe,
  DollarSign,
  Calendar,
};

const stats = [
  { label: "Measured ROI", value: "$500K+" },
  { label: "Countries", value: "6" },
  { label: "Platforms", value: "5" },
  { label: "Duration", value: "1 Year" },
  { label: "User Range", value: "Intern → CEO" },
  { label: "Departments", value: "HR, Finance, GTM, Ops" },
];

const lessons = [
  "Enterprise software lives or dies by adoption. The most elegant architecture means nothing if the end users — who range from interns to regional CEOs — find it confusing. Every design decision started with 'who will use this and what do they already know?'",
  "Power Platform is underestimated. For internal tools that need to integrate with SharePoint and Microsoft 365, it delivers production-ready solutions faster than custom-coded alternatives — and the business team can maintain them.",
  "Measuring impact in dollar terms changes the conversation. When you can say '$500K+ in combined ROI,' stakeholders listen differently than when you say 'improved efficiency.'",
  "Working across six countries taught me that 'same process' doesn't mean 'same implementation.' Regional compliance requirements, approval hierarchies, and cultural expectations all vary — the system had to be configurable, not just translatable.",
];

export default function TeleperformancePage() {
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

            <Reveal delay={0.05}>
              <SectionLabel label="Case Study" />
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
                {project.title}
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-4 max-w-2xl text-lg text-muted">
                {project.tagline}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted">
                {project.description}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <TechTag key={tech} label={tech} />
                ))}
              </div>
            </Reveal>
          </Container>
        </section>

        {/* Stats */}
        <section className="py-24 md:py-32">
          <Container>
            <Reveal>
              <SectionLabel label="Impact" />
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
                By the numbers
              </h2>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg border border-border bg-surface p-6"
                  >
                    <p className="font-mono text-xs uppercase tracking-wider text-muted">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-2xl font-bold tracking-tight text-accent md:text-3xl">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </Container>
        </section>

        {/* Sub-projects deep dive */}
        <section className="border-t border-border py-24 md:py-32">
          <Container>
            <Reveal>
              <SectionLabel label="Platforms" />
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
                Five platforms, one internship
              </h2>
            </Reveal>

            <div className="mt-12 space-y-16">
              {subProjectDetails.map((sub, i) => {
                const Icon = iconMap[sub.icon] ?? Globe;
                return (
                  <Reveal key={sub.title} delay={0.05}>
                    <div className="rounded-lg border border-border bg-surface p-8">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded border border-border bg-background">
                          <Icon
                            size={20}
                            className="text-accent"
                            strokeWidth={1.5}
                          />
                        </div>
                        <div>
                          <p className="font-mono text-xs text-muted">
                            PROJECT_{String(i + 1).padStart(2, "0")} //
                          </p>
                          <h3 className="mt-1 text-xl font-bold text-text">
                            {sub.title}
                          </h3>
                        </div>
                      </div>

                      <div className="mt-6 grid gap-6 md:grid-cols-3">
                        <div>
                          <p className="font-mono text-xs font-medium uppercase tracking-wider text-accent">
                            Context
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-muted">
                            {sub.context}
                          </p>
                        </div>
                        <div>
                          <p className="font-mono text-xs font-medium uppercase tracking-wider text-accent">
                            Solution
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-muted">
                            {sub.solution}
                          </p>
                        </div>
                        <div>
                          <p className="font-mono text-xs font-medium uppercase tracking-wider text-accent">
                            Impact
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-muted">
                            {sub.impact}
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                        <div className="flex flex-wrap gap-2">
                          {sub.technologies.map((tech) => (
                            <TechTag key={tech} label={tech} />
                          ))}
                        </div>
                        <a
                          href={`/work/teleperformance/${sub.slug}`}
                          className="flex shrink-0 items-center gap-2 font-mono text-xs font-medium uppercase tracking-wider text-accent transition-colors hover:text-accent/80"
                        >
                          Case study <ArrowRight size={12} />
                        </a>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
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
