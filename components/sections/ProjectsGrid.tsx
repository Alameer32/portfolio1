"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import CategoryFilter from "@/components/projects/CategoryFilter";
import ProjectCard from "@/components/projects/ProjectCard";
import { gridProjects, type ProjectCategory } from "@/lib/projects";

export default function ProjectsGrid() {
  const [active, setActive] = useState<ProjectCategory | "All">("All");
  const prefersReducedMotion = useReducedMotion();

  const filtered =
    active === "All"
      ? gridProjects
      : gridProjects.filter((p) => p.category === active);

  return (
    <section id="projects" className="border-t border-border py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionLabel number="03" label="Selected Projects" />
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-8 text-4xl font-extrabold tracking-tight md:text-5xl">
            More work.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8">
            <CategoryFilter active={active} onChange={setActive} />
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout={!prefersReducedMotion}
                initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
