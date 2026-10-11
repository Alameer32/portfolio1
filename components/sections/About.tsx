import Image from "next/image";
import { MapPin } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import TechTag from "@/components/ui/TechTag";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/lib/site";
import { skills } from "@/lib/skills";

export default function About() {
  return (
    <section id="about" className="border-t border-border py-24 md:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[320px_1fr] lg:gap-16">
          {/* Left — portrait + caption */}
          <Reveal>
            <div>
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg border border-border">
                <Image
                  src="/images/portrait.jpeg"
                  alt={`Portrait of ${site.name}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 320px"
                  className="object-cover"
                />
              </div>
              <div className="mt-3 flex items-center gap-2 text-muted">
                <MapPin size={14} />
                <span className="font-mono text-xs uppercase tracking-wider">
                  {site.location} · {site.timezone}
                </span>
              </div>
            </div>
          </Reveal>

          {/* Right — bio + skills */}
          <div>
            <Reveal>
              <SectionLabel number="04" label="Profile" />
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
                About me
              </h2>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
                <p>
                  AI Officer at{" "}
                  <strong className="text-text">Teleperformance Malaysia</strong>
                  , progressing from intern to full-time while delivering
                  production automation and AI across seven countries. I
                  graduated with a Bachelor of Software Engineering from{" "}
                  <strong className="text-text">
                    Universiti Teknologi Malaysia (UTM)
                  </strong>
                  , with a CGPA of{" "}
                  <span className="font-mono text-text">3.88/4.00</span>. I build
                  real systems that solve real problems — from OCR and
                  local-LLM document pipelines and Copilot Studio agents to
                  enterprise workflow platforms and AI-integrated mobile apps.
                </p>
                <p>
                  My engineering philosophy is built on the principle of{" "}
                  <em className="text-text">architectural intentionality</em>.
                  Whether I am designing enterprise automation or complex
                  software systems, I prioritize scalability, performance, and
                  clean, modular design. I believe that good engineering is
                  invisible — it simply works under pressure without friction.
                </p>
              </div>
            </Reveal>

            {/* Skills strip */}
            <Reveal delay={0.1}>
              <div className="mt-8 space-y-4 border-t border-border pt-8">
                {skills.map((group) => (
                  <div key={group.group}>
                    <p className="mb-2 font-mono text-xs uppercase tracking-wider text-muted">
                      {group.group}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <TechTag key={item} label={item} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Languages */}
            <Reveal delay={0.15}>
              <div className="mt-6 space-y-2 border-t border-border pt-6">
                <p className="font-mono text-xs uppercase tracking-wider text-muted">
                  Languages
                </p>
                <div className="flex gap-6">
                  <div>
                    <p className="text-sm font-medium text-text">English</p>
                    <p className="font-mono text-xs text-muted">Professional</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text">Arabic</p>
                    <p className="font-mono text-xs text-muted">Native</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
