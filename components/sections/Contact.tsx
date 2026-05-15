import { ArrowUpRight, Download } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import AvailabilityDot from "@/components/ui/AvailabilityDot";
import ContactForm from "@/components/ui/ContactForm";
import { site } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionLabel number="06" label="Contact" />
        </Reveal>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_320px]">
          {/* Left — heading + email */}
          <div>
            <Reveal delay={0.05}>
              <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
                Let&apos;s build something{" "}
                <em className="text-accent">exceptional.</em>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <a
                href={`mailto:${site.email}`}
                className="group relative mt-8 inline-block"
              >
                <span className="text-2xl font-bold tracking-tight text-text transition-colors duration-300 group-hover:text-accent md:text-4xl lg:text-5xl">
                  {site.email}
                </span>
                <span className="absolute inset-x-0 bottom-0 h-1 w-0 bg-accent transition-all duration-500 ease-in-out group-hover:w-full" />
              </a>
            </Reveal>
          </div>

          {/* Right — status card */}
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-lg border border-border bg-surface p-6">
              <div className="absolute inset-0 bg-[radial-gradient(#464554_1px,transparent_1px)] opacity-10 [background-size:20px_20px]" />
              <div className="relative">
                <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                  Current Status
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <AvailabilityDot />
                  <span className="font-mono text-sm font-medium uppercase tracking-wider text-text">
                    Open to new ventures
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  I specialize in architecting scalable web systems and
                  minimalist user experiences. Reach out for consulting,
                  full-time opportunities, or architectural reviews.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Link cards row */}
        <Reveal delay={0.15}>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-lg border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-muted">
                  Network
                </p>
                <p className="mt-1 text-lg font-bold text-text">LinkedIn</p>
              </div>
              <ArrowUpRight
                size={18}
                className="text-muted transition-transform transition-colors duration-200 group-hover:translate-x-0.5 group-hover:text-accent"
              />
            </a>

            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-lg border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-muted">
                  Repositories
                </p>
                <p className="mt-1 text-lg font-bold text-text">GitHub</p>
              </div>
              <ArrowUpRight
                size={18}
                className="text-muted transition-transform transition-colors duration-200 group-hover:translate-x-0.5 group-hover:text-accent"
              />
            </a>

            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-lg border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-muted">
                  Credentials
                </p>
                <p className="mt-1 text-lg font-bold text-text">Resume PDF</p>
              </div>
              <Download
                size={18}
                className="text-muted transition-colors duration-200 group-hover:text-accent"
              />
            </a>
          </div>
        </Reveal>

        {/* Terminal contact form */}
        <Reveal delay={0.2}>
          <div className="mt-12">
            <ContactForm />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
