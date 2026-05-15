import type { Metadata } from "next";
import TpCaseStudy from "@/components/sections/TpCaseStudy";
import { subProjectDetails } from "@/lib/teleperformance-details";

const project = subProjectDetails[3];

export const metadata: Metadata = {
  title: "Finance Reimbursement Automation — Teleperformance",
  description: project.context.slice(0, 160),
};

export default function Page() {
  return <TpCaseStudy project={project} index={3} />;
}
