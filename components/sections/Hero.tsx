"use client";

import { ArrowUpRight, Mail, ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/lib/site";

function GitHubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="relative flex min-h-[85vh] flex-col justify-center py-24 max-md:min-h-[65vh]"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      <Container>
        {/* Eyebrow */}
        <Reveal>
          <p className="font-mono text-sm text-muted">
            // software engineer · based in johor, malaysia.
          </p>
        </Reveal>

        {/* Headline */}
        <Reveal delay={0.05}>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            I build software that{" "}
            <span className="text-accent">ships</span>
            <br />
            and <span className="text-success">scales.</span>
          </h1>
        </Reveal>

        {/* Sub-headline */}
        <Reveal delay={0.1}>
          <p className="mt-4 max-w-xl text-lg text-muted">
            {site.subtagline}
          </p>
        </Reveal>

        {/* CTA row */}
        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button variant="primary" href="#work">
              View work <ArrowUpRight size={14} />
            </Button>
            <Button variant="secondary" href={site.resumeUrl}>
              Download CV
            </Button>

            {/* Divider + social icons */}
            <div className="hidden items-center gap-4 sm:flex">
              <span className="h-8 w-px bg-border" aria-hidden="true" />
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors duration-200 hover:text-text"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors duration-200 hover:text-text"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </a>
              <a
                href={`mailto:${site.email}`}
                className="text-muted transition-colors duration-200 hover:text-text"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Mobile social icons */}
        <Reveal delay={0.2}>
          <div className="mt-6 flex items-center gap-4 sm:hidden">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors duration-200 hover:text-text"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors duration-200 hover:text-text"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href={`mailto:${site.email}`}
              className="text-muted transition-colors duration-200 hover:text-text"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </Reveal>

        {/* Stats row */}
        <Reveal delay={0.25}>
          <div className="mt-16 flex flex-col gap-8 sm:flex-row sm:gap-12">
            {site.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold tracking-tight text-text md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>

      {/* Scroll cue */}
      <div className="absolute inset-x-0 bottom-8 flex justify-center">
        <motion.a
          href="#work"
          className="text-muted transition-colors hover:text-text"
          aria-label="Scroll to work"
          animate={
            prefersReducedMotion
              ? {}
              : { y: [0, 6, 0] }
          }
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown size={24} />
        </motion.a>
      </div>
    </section>
  );
}
