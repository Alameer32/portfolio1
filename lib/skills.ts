export interface SkillGroup {
  group: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    group: "AI & Automation",
    items: [
      "Power Apps",
      "Power Automate",
      "Power Automate Desktop",
      "Copilot Studio",
      "PaddleOCR",
      "Ollama",
      "LLM Integration",
      "AI Agent Design",
    ],
  },
  {
    group: "Languages",
    items: [
      "Python",
      "TypeScript",
      "JavaScript",
      "Dart",
      "SQL",
      "Java",
      "C++",
      "PHP",
      "HTML",
      "CSS",
    ],
  },
  {
    group: "Frameworks",
    items: ["FastAPI", "Next.js", "React", "Express.js", "Flutter", "Vue.js", "Tailwind CSS"],
  },
  {
    group: "Backend & Databases",
    items: ["Supabase", "Postgres", "MongoDB", "Firebase", "MySQL", "SharePoint", "REST APIs"],
  },
  {
    group: "Practices & Tools",
    items: [
      "Git",
      "CI/CD",
      "Vercel",
      "Figma",
      "Row-Level Security",
      "Audit Logging",
      "Requirements Gathering",
      "User Training",
    ],
  },
];
