import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import { experience } from "@/lib/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-border py-24 md:py-32"
    >
      <Container>
        <Reveal>
          <SectionLabel number="05" label="Career_Path" />
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            Experience
          </h2>
        </Reveal>

        <div className="relative mt-12">
          {/* Timeline line */}
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px bg-border md:left-1/2 md:-translate-x-px"
            aria-hidden="true"
          />

          <div className="space-y-12">
            {experience.map((item, i) => {
              const isLeft = i % 2 === 0;

              return (
                <Reveal key={item.dates + item.role} delay={0.05 * i}>
                  <div className="relative grid gap-4 pl-8 md:grid-cols-2 md:gap-12 md:pl-0">
                    {/* Timeline dot */}
                    <div
                      className="absolute left-0 top-2 h-3.5 w-3.5 rounded-full border-2 border-accent bg-background md:left-1/2 md:-translate-x-1/2"
                      aria-hidden="true"
                    />

                    {/* Left side */}
                    <div
                      className={`${
                        isLeft ? "md:text-right" : "md:order-2 md:text-left"
                      }`}
                    >
                      <p className="font-mono text-sm font-medium text-accent">
                        {item.dates}
                      </p>
                      <h3 className="mt-1 text-lg font-bold text-text">
                        {item.org}
                      </h3>
                      <p className="font-mono text-xs uppercase tracking-wider text-muted">
                        {item.role}
                      </p>
                    </div>

                    {/* Right side */}
                    <div
                      className={`${
                        isLeft ? "" : "md:order-1 md:text-right"
                      }`}
                    >
                      <p className="text-sm leading-relaxed text-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
