import type { Metadata } from "next";
import TpCaseStudy from "@/components/sections/TpCaseStudy";
import { subProjectDetails } from "@/lib/teleperformance-details";

const project = subProjectDetails[2];

export const metadata: Metadata = {
  title: "Global Talent Mobility Platform — Teleperformance",
  description: project.context.slice(0, 160),
};

export default function Page() {
  return <TpCaseStudy project={project} index={2} />;
}
