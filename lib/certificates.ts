import type { LucideIcon } from "lucide-react";
import {
  Award,
  BadgeCheck,
  Cloud,
  Code2,
  GraduationCap,
  Workflow,
} from "lucide-react";

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  /** Credly, Microsoft Learn, AWS, etc. Omit to hide VIEW_CREDENTIAL. */
  credentialUrl?: string;
  /** Badge/thumbnail in public/images/certificates/ */
  image?: string;
  icon: LucideIcon;
}

/** Re-export icons for convenience when adding entries. */
export const certificateIcons = {
  Award,
  BadgeCheck,
  Cloud,
  Code2,
  GraduationCap,
  Workflow,
} as const;

/**
 * Replace the entries below with your own credentials.
 * Optional images: drop files in public/images/certificates/
 */
export const certificates: Certificate[] = [
  // {
  //   id: "aws-solutions-architect",
  //   title: "AWS Certified Solutions Architect — Associate",
  //   issuer: "Amazon Web Services",
  //   issueDate: "2024",
  //   icon: Cloud,
  // },
  // {
  //   id: "azure-developer",
  //   title: "Microsoft Certified: Azure Developer Associate",
  //   issuer: "Microsoft",
  //   issueDate: "2023",
  //   icon: Award,
  // },
  // {
  //   id: "gcp-cloud-architect",
  //   title: "Google Cloud Professional Cloud Architect",
  //   issuer: "Google Cloud",
  //   issueDate: "2024",
  //   icon: BadgeCheck,
  // },
  // {
  //   id: "power-platform-developer",
  //   title: "Microsoft Certified: Power Platform Developer Associate",
  //   issuer: "Microsoft",
  //   issueDate: "2023",
  //   icon: Workflow,
  // },
  // {
  //   id: "meta-frontend",
  //   title: "Meta Front-End Developer Professional Certificate",
  //   issuer: "Meta",
  //   issueDate: "2024",
  //   icon: GraduationCap,
  // },
  // {
  //   id: "aws-developer",
  //   title: "AWS Certified Developer — Associate",
  //   issuer: "Amazon Web Services",
  //   issueDate: "2022",
  //   icon: Code2,
  // },
];
