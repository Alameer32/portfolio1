import type { Metadata } from "next";
import TpCaseStudy from "@/components/sections/TpCaseStudy";
import { subProjectDetails } from "@/lib/teleperformance-details";

const project = subProjectDetails[4];

export const metadata: Metadata = {
  title: "Client Event Management — Teleperformance",
  description: project.context.slice(0, 160),
};

export default function Page() {
  return <TpCaseStudy project={project} index={4} />;
}
