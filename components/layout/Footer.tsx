import { site } from "@/lib/site";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-2xl font-bold tracking-tight text-text">
              {site.name.toUpperCase()}
            </p>
            <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted">
              Designed with intention, built with care.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs font-medium uppercase tracking-wider text-muted underline underline-offset-4 transition-colors hover:text-text"
            >
              GitHub
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs font-medium uppercase tracking-wider text-muted underline underline-offset-4 transition-colors hover:text-text"
            >
              LinkedIn
            </a>
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs font-medium uppercase tracking-wider text-muted underline underline-offset-4 transition-colors hover:text-text"
            >
              Source_Code
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-xs text-muted">
            &copy; {new Date().getFullYear()} {site.name.toUpperCase()} // BUILT
            FOR SCALE
          </p>
          <div className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
            </span>
            <span className="font-mono text-xs text-muted">SYSTEMS_ACTIVE</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
