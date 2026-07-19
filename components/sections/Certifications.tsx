import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import { certificates } from "@/lib/certificates";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="border-t border-border py-24 md:py-32"
    >
      <Container>
        <Reveal>
          <SectionLabel number="06" label="Certifications" tone="success" />
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            Professional Credentials
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            A collection of professional certifications "coming soon...".
          </p>
        </Reveal>

        {certificates.length > 0 ? (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, i) => {
            const Icon = cert.icon;

            return (
              <Reveal key={cert.id} delay={0.05 * i}>
                <article className="group flex h-full flex-col rounded-lg border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5">
                  {cert.image ? (
                    <div className="relative mb-4 aspect-[16/10] w-full overflow-hidden rounded border border-border">
                      <Image
                        src={cert.image}
                        alt={`${cert.title} certificate`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <Icon
                      size={22}
                      className="text-accent"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  )}

                  <h3
                    className={`text-lg font-bold leading-snug text-text ${cert.image ? "" : "mt-4"}`}
                  >
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{cert.issuer}</p>

                  <div className="mt-6 flex-1 border-t border-border pt-4">
                    <div className="flex items-end justify-between gap-4">
                      <p className="font-mono text-xs font-medium uppercase tracking-wider text-accent">
                        ISSUE_DATE: {cert.issueDate}
                      </p>

                      {cert.credentialUrl ? (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex shrink-0 items-center gap-1 font-mono text-xs font-medium uppercase tracking-wider text-accent transition-colors hover:text-text"
                        >
                          VIEW_CREDENTIAL
                          <ArrowUpRight size={14} aria-hidden="true" />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
        ) : null}
      </Container>
    </section>
  );
}
