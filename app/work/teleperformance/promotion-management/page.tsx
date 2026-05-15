import type { Metadata } from "next";
import TpCaseStudy from "@/components/sections/TpCaseStudy";
import { subProjectDetails } from "@/lib/teleperformance-details";

const project = subProjectDetails[1];

export const metadata: Metadata = {
  title: "Promotion Management System — Teleperformance",
  description: project.context.slice(0, 160),
};

export default function Page() {
  return <TpCaseStudy project={project} index={1} />;
}
