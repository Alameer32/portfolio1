export type ProjectCategory =
  | "Full-Stack"
  | "Mobile"
  | "AI"
  | "Game"
  | "Backend"
  | "Automation";

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  year: string;
  type: string;
  category: ProjectCategory;
  githubUrl?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  isUniversity: boolean;
  featured: boolean;
}

export interface TeleperformanceSubProject {
  slug: string;
  title: string;
  description: string;
  icon: string;
  technologies: string[];
}

export const projects: Project[] = [
  // ── Featured ──────────────────────────────────────────────
  {
    id: "yalla-fitness",
    title: "Yalla-Fitness",
    tagline:
      "A full-stack fitness companion — Flutter mobile, Next.js admin console, Supabase backend with row-level security and an AI coach.",
    description:
      "Cross-platform fitness companion built as my final-year project. The Flutter client uses BLoC and Clean Architecture (presentation → domain → data with DI), backed by Supabase for auth, Postgres, storage, and edge functions. It supports a full fitness journey — onboarding with body-metric and calorie-target calculation, live aggregated dashboard, workout templates with weekly scheduling, nutrition tracking with barcode scanning, Google Fit / Health Connect step syncing, goal tracking, an educational myths-vs-facts feed, and a Spotify-integrated music player. An LLM-powered AI coach runs through a Supabase edge function so credentials never reach the client and conversation memory lives server-side. A companion Next.js admin console shares the same Postgres backend, with role-gated access, content moderation, and CMS for workouts, exercises, supplements, and education — each with live mobile-fidelity preview. Data integrity is enforced at the database layer through row-level security, triggers, and audit logging.",
    image: "/images/yalla-fitness.png",
    technologies: [
      "Flutter",
      "BLoC",
      "Clean Architecture",
      "Supabase",
      "Postgres",
      "Edge Functions",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "LLM",
    ],
    features: [
      "Flutter client structured with BLoC and Clean Architecture, fully testable layered separation",
      "LLM-powered AI fitness coach proxied through a Supabase edge function — credentials never reach the client",
      "Row-level security, Postgres triggers, and audit logging enforce data integrity at the DB layer",
      "Next.js admin console with role-gated access, content moderation, and CMS with live mobile-fidelity preview",
      "Integrations: Spotify, Google Fit / Health Connect, barcode-scanned food catalogue",
    ],
    year: "2026",
    type: "Mobile + Web (Full-Stack)",
    category: "Full-Stack",
    githubUrl: "https://github.com/Alameer32/yalla-fitness",
    caseStudyUrl: "/work/yalla-fitness",
    isUniversity: true,
    featured: true,
  },
  {
    id: "teleperformance",
    title: "Enterprise Automation & AI at Teleperformance",
    tagline:
      "From intern to AI Officer. Seven solutions. $500K+ in measured ROI. Users from intern level to regional CEOs across seven countries.",
    description:
      "Joined Teleperformance Malaysia as a full-year Automation Developer intern (2025–2026) and progressed to full-time AI Officer (2026–present). Delivering production automation and AI across HR, Finance, Global Talent Mobility, Recruiting, and client operations — $500K+ in measured ROI through hours saved and headcount avoided, with end-to-end ownership of deployment, multi-country rollout, user training, and ongoing maintenance.",
    image: "/images/teleperformance.png",
    technologies: [
      "Power Apps",
      "Power Automate",
      "Power Automate Desktop",
      "SharePoint",
      "Copilot Studio",
      "PaddleOCR",
      "Ollama",
      "FastAPI",
      "Next.js",
      "TypeScript",
    ],
    features: [
      "Hiring Request Management System — first centralized hiring workflow in the company, launched in MY/TH and adopted across CN/KR/JP/ID/VN; 200+ users up to regional CEO",
      "Intelligent Document Extraction — email-triggered pipeline: Power Automate → PaddleOCR → local LLM (Ollama) → FastAPI → client dashboard (confidential client project)",
      "AI Agents (Copilot Studio) — client site-assessment agent that calculates ROI and generates the proposal deck, plus a recruiting agent that drafts tailored interview questions",
      "Promotion Management System — multi-level approval flow with automated reminders and auto-generated promotion letters",
      "Global Talent Mobility Platform — replaced Excel/email with Next.js intake → Power Automate → SharePoint, plus Power Apps ops console",
      "Finance Reimbursement Automation — Next.js intake → manager approval → multi-level review → finance system submission, with OCR extracting expense details from receipts",
      "Client Event Management — Power Platform app using AI to analyze event performance and auto-generate reports",
    ],
    year: "2025 – Present",
    type: "Enterprise Automation & AI",
    category: "Automation",
    caseStudyUrl: "/work/teleperformance",
    isUniversity: false,
    featured: true,
  },

  // ── Grid projects ─────────────────────────────────────────
  {
    id: "course-mark",
    title: "Course Mark Management Web App",
    tagline:
      "Full-stack academic performance system with role-based access for Lecturers, Students, Advisors, and Admins.",
    description:
      "A full-stack web application designed to streamline the management and monitoring of student performance, built for academic institutions.",
    image: "/images/coursemark.png",
    technologies: ["Vue.js", "PHP Slim", "MySQL", "Chart.js", "REST API"],
    features: [
      "Role-based access control for 4 user types (Lecturer, Student, Advisor, Admin)",
      "Continuous assessment and final exam marks entry with auto-calculation (70/30 split)",
      "Real-time performance analytics with charts; What-If simulator and anonymous peer comparison for students",
      "Advisor workspace for monitoring at-risk students and logging consultations",
      "RESTful API with client + server-side validation, bulk CSV upload/download, mark update notifications",
    ],
    year: "2025",
    type: "Web Application",
    category: "Full-Stack",
    githubUrl: "https://github.com/Alameer32/students_mark",
    isUniversity: true,
    featured: false,
  },
  {
    id: "wisedose",
    title: "WiseDose — Medication Reminder App",
    tagline:
      "Mobile app for daily medication management with secure auth and encrypted health data.",
    description:
      "A comprehensive mobile application that helps users manage their daily medication schedules with secure authentication and health data encryption.",
    image: "/images/wisedose.jpg",
    technologies: ["Flutter", "Firebase", "Dart"],
    features: [
      "Secure user authentication and data encryption",
      "Real-time medication reminders with custom schedules",
      "Health metrics tracking and analytics",
      "Firebase integration for cross-device data sync",
    ],
    year: "2025",
    type: "Mobile Application",
    category: "Mobile",
    githubUrl: "https://github.com/Alameer32/wisedose",
    isUniversity: true,
    featured: false,
  },
  {
    id: "edusync",
    title: "EduSync — Resource Sharing Platform",
    tagline:
      "Resource-sharing platform with role-based access for admins, lecturers, and students.",
    description:
      "A full-stack web application for sharing and organizing Google Drive links, course materials, and managing tasks.",
    image: "/images/edusync.png",
    technologies: ["Next.js", "Express.js", "MongoDB", "Tailwind CSS"],
    features: [
      "Admin: manage users, categories, sessions, shared links, and dashboard analytics",
      "Lecturer: manage shared links, timetable, and tasks; share resources",
      "Student: view/manage links, schedule, and tasks; access links shared with them",
      "Common: dashboards, link management, personal tasks, and schedules for all roles",
    ],
    year: "2024",
    type: "Web Application",
    category: "Full-Stack",
    githubUrl: "https://github.com/Alameer32/EduSync",
    isUniversity: true,
    featured: false,
  },
  {
    id: "cook-and-go",
    title: "Cook&Go — Food Delivery Platform",
    tagline:
      "Full-stack ordering platform with admin dashboard and customer-facing menu.",
    description: "A food delivery platform for restaurants and customers.",
    image: "/images/cook-go.png",
    technologies: ["Next.js", "Firebase", "Tailwind CSS", "Vercel"],
    features: [
      "Admin: manage users, orders, and view dashboard analytics",
      "Customer: browse menu and manage own orders",
      "Responsive design, deployed on Vercel",
    ],
    year: "2025",
    type: "Web Application",
    category: "Full-Stack",
    githubUrl: "https://github.com/Alameer32/Cook-Go",
    liveUrl: "https://cook-go.vercel.app",
    isUniversity: false,
    featured: false,
  },
  {
    id: "sage",
    title: "SAGE — Personal AI Assistant",
    tagline:
      "JARVIS-inspired desktop assistant with dynamic JSON memory and a friendly conversational style.",
    description:
      "A desktop AI assistant designed to help with daily tasks, remember user info, and interact naturally.",
    image: "/images/sage.png",
    technologies: ["Python", "Tkinter", "Ollama", "JSON", "REST API"],
    features: [
      "Conversational agent with natural, friendly texting tone",
      "Dynamic JSON memory system that remembers user facts and context",
      "To-do list tool for adding, viewing, and managing daily tasks",
      "Designed for future integration with calendar, code helper, and voice interface",
    ],
    year: "2025",
    type: "Desktop App",
    category: "AI",
    githubUrl: "https://github.com/Alameer32/ai-agent",
    isUniversity: false,
    featured: false,
  },
  {
    id: "realtime-chat",
    title: "Real-time Messaging App",
    tagline:
      "Cross-platform messaging with real-time delivery, read receipts, and group chats.",
    description:
      "A modern messaging platform with real-time message delivery and intuitive UI design.",
    image: "",
    technologies: ["Flutter", "Firebase", "Real-time Database"],
    features: [
      "Real-time message delivery with read receipts",
      "Cross-platform compatibility (iOS & Android)",
      "Group chat functionality with admin controls",
      "Secure auth and Firebase real-time sync",
    ],
    year: "2025",
    type: "Mobile Application",
    category: "Mobile",
    githubUrl: "https://github.com/Alameer32/flutter_chat_app",
    isUniversity: false,
    featured: false,
  },
  {
    id: "asteroids",
    title: "Asteroids — 2D C++ Game",
    tagline:
      "Classic 2D space shooter built in C++ to demonstrate OOP fundamentals.",
    description:
      "A simple 2D space shooter where players control a triangular spaceship to destroy asteroids and avoid collisions.",
    image: "/images/asteroids.png",
    technologies: ["C++", "OOP"],
    features: [
      "Triangle-shaped ship with movement and shooting mechanics",
      "Collision detection between ship and asteroids",
      "Demonstrates inheritance, aggregation, composition, and association",
      "Smooth gameplay loop suitable for beginner-level game programming",
    ],
    year: "2023",
    type: "Desktop App / Game",
    category: "Game",
    githubUrl: "https://github.com/Alameer32/Asteroids",
    isUniversity: true,
    featured: false,
  },
];

export const teleperformanceProjects: TeleperformanceSubProject[] = [
  {
    slug: "hiring-request",
    title: "Hiring Request Management System",
    description:
      "First centralized hiring workflow in the company, launched in MY/TH and adopted across CN/KR/JP/ID/VN.",
    icon: "Users",
    technologies: ["Power Apps", "Power Automate", "SharePoint"],
  },
  {
    slug: "promotion-management",
    title: "Promotion Management System",
    description:
      "Multi-level approval flow with automated reminders and auto-generated promotion letters.",
    icon: "TrendingUp",
    technologies: ["Power Apps", "Power Automate", "SharePoint"],
  },
  {
    slug: "global-talent-mobility",
    title: "Global Talent Mobility Platform",
    description:
      "Replaced Excel/email with Next.js intake → Power Automate → SharePoint, plus Power Apps ops console.",
    icon: "Globe",
    technologies: ["Next.js", "TypeScript", "Power Automate", "SharePoint", "Power Apps"],
  },
  {
    slug: "finance-reimbursement",
    title: "Finance Reimbursement Automation",
    description:
      "Next.js intake → manager approval → multi-level review → finance system submission, with OCR on receipts.",
    icon: "DollarSign",
    technologies: ["Next.js", "TypeScript", "Power Automate", "SharePoint", "OCR"],
  },
  {
    slug: "event-management",
    title: "Client Event Management",
    description:
      "Power Platform app using AI to analyze event performance and auto-generate reports.",
    icon: "Calendar",
    technologies: ["Power Apps", "Power Automate", "Copilot Studio"],
  },
  {
    slug: "document-extraction",
    title: "Intelligent Document Extraction",
    description:
      "Email-triggered pipeline: OCR + locally hosted LLM extract fields and populate a client dashboard automatically.",
    icon: "ScanText",
    technologies: ["Power Automate", "PaddleOCR", "Ollama", "FastAPI"],
  },
  {
    slug: "ai-agents",
    title: "AI Agents (Copilot Studio)",
    description:
      "Site-assessment agent that calculates ROI and builds proposal decks, and a recruiting agent that drafts interview questions.",
    icon: "Bot",
    technologies: ["Copilot Studio", "Power Automate", "LLM"],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const gridProjects = projects.filter((p) => !p.featured);
