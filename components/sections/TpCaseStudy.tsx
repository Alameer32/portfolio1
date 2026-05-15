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
import type { SubProjectDetail } from "@/lib/teleperformance-details";

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  Users,
  TrendingUp,
  Globe,
  DollarSign,
  Calendar,
};

interface TpCaseStudyProps {
  project: SubProjectDetail;
  index: number;
}

export default function TpCaseStudy({ project, index }: TpCaseStudyProps) {
  const Icon = iconMap[project.icon] ?? Globe;

  return (
    <>
      <Nav />
      <main className="pt-16">
        {/* Hero */}
        <section className="border-b border-border py-24 md:py-32">
          <Container>
            <Reveal>
              <Button variant="ghost" href="/work/teleperformance" className="mb-8">
                <ArrowLeft size={14} /> Back to Teleperformance
              </Button>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-border bg-surface">
                  <Icon size={24} className="text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-mono text-xs text-muted">
                    TELEPERFORMANCE // PROJECT_{String(index + 1).padStart(2, "0")}
                  </p>
                  <h1 className="mt-1 text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">
                    {project.title}
                  </h1>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <TechTag key={tech} label={tech} />
                ))}
              </div>
            </Reveal>
          </Container>
        </section>

        {/* Context / Solution / Impact */}
        <section className="py-24 md:py-32">
          <Container>
            <div className="grid gap-12 md:grid-cols-3">
              <Reveal>
                <div>
                  <SectionLabel label="Context" />
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {project.context}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.05}>
                <div>
                  <SectionLabel label="Solution" />
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {project.solution}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div>
                  <SectionLabel label="Impact" />
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {project.impact}
                  </p>
                </div>
              </Reveal>
            </div>
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
                <pre className="overflow-x-auto p-6 font-mono text-xs leading-relaxed text-muted">
                  {project.architecture}
                </pre>
              </div>
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
                {project.lessons.map((lesson) => (
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
              <div className="mt-12 flex gap-4">
                <Button variant="ghost" href="/work/teleperformance">
                  <ArrowLeft size={14} /> All Teleperformance projects
                </Button>
                <Button variant="ghost" href="/#work">
                  <ArrowLeft size={14} /> Home
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
