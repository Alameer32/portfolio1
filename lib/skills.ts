export interface SkillGroup {
  group: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Dart", "C++", "Java", "PHP", "SQL"],
  },
  {
    group: "Frameworks",
    items: ["Next.js", "React", "Express.js", "Flutter", "Vue.js", "Tailwind CSS"],
  },
  {
    group: "Backend & Databases",
    items: ["Supabase", "Postgres", "MongoDB", "Firebase", "MySQL", "SharePoint"],
  },
  {
    group: "Power Platform",
    items: ["Power Apps", "Power Automate", "Power Automate Desktop", "Copilot Studio"],
  },
  {
    group: "Tools",
    items: ["Git", "REST APIs", "CI/CD", "Vercel", "Figma"],
  },
];
