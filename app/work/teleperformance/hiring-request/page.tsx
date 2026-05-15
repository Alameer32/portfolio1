import type { Metadata } from "next";
import TpCaseStudy from "@/components/sections/TpCaseStudy";
import { subProjectDetails } from "@/lib/teleperformance-details";

const project = subProjectDetails[0];

export const metadata: Metadata = {
  title: "Hiring Request Management System — Teleperformance",
  description: project.context.slice(0, 160),
};

export default function Page() {
  return <TpCaseStudy project={project} index={0} />;
}
