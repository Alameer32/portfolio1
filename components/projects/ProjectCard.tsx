import Image from "next/image";
import { Code, ExternalLink } from "lucide-react";
import TechTag from "@/components/ui/TechTag";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
}

function GitHubSmallIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group flex h-full flex-col rounded-lg border border-border bg-surface p-5 transition-all duration-200 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5">
      {/* Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-background">
            <Code size={32} className="text-muted/40" strokeWidth={1.5} />
          </div>
        )}
      </div>

      {/* Title row */}
      <div className="mt-4 flex items-center justify-between">
        <h3 className="text-lg font-bold text-text">{project.title}</h3>
        <Code size={16} className="text-muted" strokeWidth={1.5} />
      </div>

      {/* Tagline */}
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {project.tagline}
      </p>

      {/* Tech tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.slice(0, 3).map((tech) => (
          <TechTag key={tech} label={tech} />
        ))}
      </div>

      {/* Bottom link row */}
      <div className="mt-4 flex items-center justify-end gap-3 border-t border-border pt-4">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-text"
            aria-label={`${project.title} on GitHub`}
          >
            <GitHubSmallIcon />
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-text"
            aria-label={`${project.title} live site`}
          >
            <ExternalLink size={14} />
          </a>
        )}
        <a
          href={project.githubUrl ?? project.liveUrl ?? "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs font-medium uppercase tracking-wider text-accent transition-colors hover:text-accent/80"
        >
          VIEW_PROJECT //
        </a>
      </div>
    </div>
  );
}
