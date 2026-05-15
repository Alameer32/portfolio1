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
import { projects, teleperformanceProjects } from "@/lib/projects";

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

const subProjectDetails = [
  {
    title: "Hiring Request Management System",
    icon: "Users",
    context:
      "Before this system, hiring requests were scattered across emails, spreadsheets, and informal Slack messages. There was no single source of truth, and the same role could be requested multiple times across different countries without anyone knowing.",
    solution:
      "Built the first centralized hiring workflow in the company using Power Apps with a multi-level approval chain. Managers submit requests through a standardized form, which routes through department heads and HR based on configurable business rules. Power Automate handles notifications, reminders, and escalations.",
    impact:
      "Deployed across MY, CN, KR, JP, ID, and TH — the first tool to span all six APAC offices. Reduced duplicate requests and cut hiring lead time significantly.",
    technologies: ["Power Apps", "Power Automate", "SharePoint"],
  },
  {
    title: "Promotion Management System",
    icon: "TrendingUp",
    context:
      "Promotions were managed through a patchwork of Excel sheets and email threads. Approval chains were unclear, promotion letters were manually written, and there was no audit trail.",
    solution:
      "Designed a multi-level approval flow where each promotion request moves through a configurable chain of managers, HR, and regional directors. The system auto-generates promotion letters from templates and sends automated reminders for pending approvals.",
    impact:
      "Eliminated manual letter generation entirely. The full audit trail gave HR leadership visibility into promotion velocity and bottlenecks across departments.",
    technologies: ["Power Apps", "Power Automate", "SharePoint"],
  },
  {
    title: "Global Talent Mobility Platform",
    icon: "Globe",
    context:
      "International employee transfers were coordinated through email chains and shared Excel files — a process prone to version conflicts, missed steps, and compliance gaps when moving employees across jurisdictions.",
    solution:
      "Replaced the entire workflow with a Next.js intake form that feeds into Power Automate orchestration and SharePoint document management. A companion Power Apps operations console gives the GTM team real-time visibility into every active transfer.",
    impact:
      "Dramatically reduced transfer processing time and eliminated version-conflict issues. The operations console became the GTM team's primary tool for daily standups.",
    technologies: ["Next.js", "TypeScript", "Power Automate", "SharePoint", "Power Apps"],
  },
  {
    title: "Finance Reimbursement Automation",
    icon: "DollarSign",
    context:
      "Reimbursement claims followed a convoluted paper-based process: employees submitted physical receipts, managers signed off manually, and finance manually entered data into their system. Processing time averaged weeks.",
    solution:
      "Built a Next.js submission portal where employees upload receipts and fill out structured claim forms. Claims route through manager approval, then multi-level finance review, before automatically consolidating into the finance system.",
    impact:
      "Reduced processing time from weeks to days. The structured digital format eliminated data-entry errors and gave finance real-time visibility into outstanding claims.",
    technologies: ["Next.js", "TypeScript", "Power Automate", "SharePoint"],
  },
  {
    title: "Client Event Management",
    icon: "Calendar",
    context:
      "Client events — site visits, executive summits, VIP tours — were tracked in ad-hoc spreadsheets. Post-event analysis was manual and inconsistent, making it hard to measure ROI or improve future events.",
    solution:
      "Built a Power Platform app for end-to-end event lifecycle management. Copilot Studio AI analyzes event performance data and auto-generates summary reports, replacing hours of manual analysis.",
    impact:
      "Gave leadership consistent, data-driven event ROI metrics for the first time. The AI-generated reports saved the events team significant preparation time per event.",
    technologies: ["Power Apps", "Power Automate", "Copilot Studio"],
  },
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

                      <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-4">
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
