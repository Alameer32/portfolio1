# Portfolio Build Brief — Salman Alameer


## 1. Project goal

Build a high-end personal portfolio for **Salman Alameer**, a final-year Software Engineering student at UTM (graduating 2026) actively job-hunting. The visual design has been finalized in Google Stitch and exported — implement it pixel-faithfully in Next.js. The site is the centerpiece of his job applications; quality bar is "would be hired by Vercel / Linear / Stripe."
the extracted design is in the docs folder spread across multiple folders
---

## 2. Tech stack (locked)

- **Framework:** Next.js 15 (App Router, React 19, TypeScript strict)
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **Icons:** lucide-react
- **Fonts:** Geist Sans + Geist Mono (via `next/font/google`)
- **Theme:** `next-themes` for dark/light toggle (dark is the default)
- **Deployment:** Vercel
- **Analytics:** `@vercel/analytics`
- **Linting:** ESLint + Prettier with Tailwind plugin
- **Package manager:** pnpm

Do **not** add any UI library that isn't strictly needed. No Material UI, no Chakra. shadcn/ui primitives are acceptable only if a component would otherwise require >30 lines of accessibility boilerplate (e.g. dropdown menu).

---

## 3. Quality bar (non-negotiable)

- **TypeScript strict mode**, no `any`, no `@ts-ignore` without a comment explaining why.
- **Lighthouse:** 95+ on Performance, Accessibility, Best Practices, SEO.
- **Accessibility:** WCAG AA contrast. Visible focus rings on every interactive element. All images have meaningful `alt`. Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`). `prefers-reduced-motion` respected — disable Framer Motion transforms when set.
- **Responsive:** breakpoints at 640px (sm), 768px (md), 1024px (lg), 1280px (xl). Test mobile first.
- **SEO:** Proper `<Metadata>` per page, Open Graph + Twitter card images, sitemap, robots.txt.
- **No layout shift:** every image has explicit width/height, fonts use `next/font` with `display: swap` and fallback metrics.
- **No console errors or warnings** in production build.

---

## 4. Design system (use these tokens exactly)

Generate `tailwind.config.ts` with these tokens. Match the exported Stitch design for everything else.

### Colors

```ts
// Dark mode (default)
background: "#0A0A0B"
surface:    "#14141A"
border:     "#26262E"
text:       "#ECECEC"
muted:      "#8A8A95"
accent:     "#6366F1"   // electric indigo — used sparingly
success:    "#22C55E"   // "available for hire" dot

// Light mode
background: "#FAFAFA"
surface:    "#FFFFFF"
border:     "#E5E5E7"
text:       "#0A0A0B"
muted:      "#6B6B73"
// accent + success stay the same
```

### Typography

- **Display & headings:** Geist Sans, tracking `-0.02em` on sizes ≥48px.
- **Body:** Geist Sans, 16–17px, line-height 1.6.
- **Mono:** Geist Mono — used for section labels (uppercase, small, muted color), tech stack tags, dates, status indicators, file-path-style breadcrumbs.
- **Numerals:** tabular figures everywhere (`font-variant-numeric: tabular-nums`).

### Spacing

- 8px base grid. Tailwind defaults work fine.
- Section vertical padding: `py-24` on desktop, `py-16` on mobile.
- Max content width: `max-w-6xl` (1152px) — use a `<Container>` component.

### Motion

- Transitions: 200–300ms `ease-out`.
- Section reveal on scroll: opacity 0 → 1, translateY 20px → 0, duration 400ms, threshold 0.15.
- Card hover: translateY -4px, shadow scales up, accent border glow.
- Theme toggle: animated sun ↔ moon swap.

---

## 5. File structure

```
portfolio/
├── app/
│   ├── layout.tsx              # Root layout: fonts, theme provider, analytics
│   ├── page.tsx                # Single-page scroll
│   ├── globals.css             # Tailwind directives + CSS variables
│   ├── work/
│   │   ├── yalla-fitness/page.tsx
│   │   └── teleperformance/page.tsx
│   ├── sitemap.ts
│   ├── robots.ts
│   └── opengraph-image.tsx
├── components/
│   ├── layout/
│   │   ├── Nav.tsx
│   │   ├── Footer.tsx
│   │   └── Container.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── FeaturedYalla.tsx
│   │   ├── FeaturedTeleperformance.tsx
│   │   ├── ProjectsGrid.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   └── Contact.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── SectionLabel.tsx
│   │   ├── TechTag.tsx
│   │   ├── AvailabilityDot.tsx
│   │   └── Reveal.tsx           # Wraps children with scroll-reveal motion
│   └── projects/
│       ├── ProjectCard.tsx
│       └── CategoryFilter.tsx
├── lib/
│   ├── projects.ts              # ALL project data — see section 7
│   ├── experience.ts            # Timeline data
│   ├── skills.ts                # Skills strip data
│   └── site.ts                  # Site-wide constants (name, urls, etc.)
├── public/
│   ├── images/                  # Project screenshots
│   ├── og.png
│   └── resume.pdf
├── tailwind.config.ts
├── next.config.mjs
├── tsconfig.json
└── package.json
```

---

## 6. Information architecture (page structure)

Single-page scroll with sticky nav. Section IDs match nav anchors. Optional case-study detail pages for the two featured projects.

1. **Sticky nav** — logo (`SA` monogram), nav links (Work, About, Experience, Contact), theme toggle, "Available for hire" pill with green pulse dot.
2. **Hero (~85vh)** — eyebrow mono line → big headline → sub-headline → 3 inline stats (`$300K+ ROI`, `6 countries`, `GPA 3.87`) → CTA row (primary "View work", secondary "Download CV", inline icons for GitHub/LinkedIn/email).
3. **Featured: Yalla-Fitness** — case study block with mockup, metadata column, 3-column highlight grid.
4. **Featured: Teleperformance** — case study block with 4-stat row, 5-card grid of sub-projects.
5. **Selected Projects** — filterable grid (filter chips: All / Full-Stack / Mobile / AI / Game / Backend). Cards for the 7 "more work" projects.
6. **About** — two-column on desktop: portrait + caption left; heading, 2–3 paragraphs, skills strip, languages right.
7. **Experience** — vertical timeline.
8. **Contact** — huge closing heading, big mailto link as focal element, social icons row, footer microtext.

---

## 7. Content data

Create these as TypeScript files in `lib/`. Use these exact values — do not invent additional copy.

### `lib/site.ts`

```ts
export const site = {
  name: "Salman Alameer",
  role: "Software Engineer",
  location: "Johor, Malaysia",
  email: "salmanalameer2@gmail.com",
  phone: "+60 11-3973 2242",
  github: "https://github.com/Alameer32",
  linkedin: "https://www.linkedin.com/in/salman-alameer/", // confirm exact slug
  resumeUrl: "/resume.pdf",
  available: true,
  tagline: "I build software that ships and scales.",
  subtagline:
    "Final-year Software Engineering student at UTM. I ship enterprise automation, full-stack products, and AI-integrated systems end-to-end.",
  stats: [
    { value: "$300K+", label: "ROI delivered" },
    { value: "6 countries", label: "production deployments" },
    { value: "3.87", label: "GPA / 4.00" },
  ],
} as const;
```

### `lib/projects.ts`

Two featured projects + seven grid projects. The `Project` type should include: `id`, `title`, `tagline`, `description`, `image`, `technologies`, `features` (3–5 bullets), `year`, `type`, `category` (one of `"Full-Stack" | "Mobile" | "AI" | "Game" | "Backend" | "Automation"`), `githubUrl?`, `liveUrl?`, `caseStudyUrl?`, `isUniversity`, `featured` (boolean).

**Featured projects:**

```ts
// FEATURED 1 — Yalla-Fitness (Final-Year Project)
{
  id: "yalla-fitness",
  title: "Yalla-Fitness",
  tagline: "A full-stack fitness companion — Flutter mobile, Next.js admin console, Supabase backend with row-level security and an AI coach.",
  description:
    "Cross-platform fitness companion built as my final-year project. The Flutter client uses BLoC and Clean Architecture (presentation → domain → data with DI), backed by Supabase for auth, Postgres, storage, and edge functions. It supports a full fitness journey — onboarding with body-metric and calorie-target calculation, live aggregated dashboard, workout templates with weekly scheduling, nutrition tracking with barcode scanning, Google Fit / Health Connect step syncing, goal tracking, an educational myths-vs-facts feed, and a Spotify-integrated music player. An LLM-powered AI coach runs through a Supabase edge function so credentials never reach the client and conversation memory lives server-side. A companion Next.js admin console shares the same Postgres backend, with role-gated access, content moderation, and CMS for workouts, exercises, supplements, and education — each with live mobile-fidelity preview. Data integrity is enforced at the database layer through row-level security, triggers, and audit logging.",
  image: "/images/yalla-fitness.png",
  technologies: ["Flutter", "BLoC", "Clean Architecture", "Supabase", "Postgres", "Edge Functions", "Next.js", "TypeScript", "Tailwind CSS", "LLM"],
  features: [
    "Flutter client structured with BLoC and Clean Architecture, fully testable layered separation",
    "LLM-powered AI fitness coach proxied through a Supabase edge function — credentials never reach the client",
    "Row-level security, Postgres triggers, and audit logging enforce data integrity at the DB layer",
    "Next.js admin console with role-gated access, content moderation, and CMS with live mobile-fidelity preview",
    "Integrations: Spotify, Google Fit / Health Connect, barcode-scanned food catalogue",
  ],
  year: "2025",
  type: "Mobile + Web (Full-Stack)",
  category: "Full-Stack",
  githubUrl: "https://github.com/Alameer32/yalla-fitness", // confirm
  caseStudyUrl: "/work/yalla-fitness",
  isUniversity: true,
  featured: true,
}

// FEATURED 2 — Teleperformance Internship
// Treat as a single "case study" entry with 5 sub-projects rendered in the section.
{
  id: "teleperformance",
  title: "Enterprise Automation at Teleperformance",
  tagline:
    "One-year internship. Five platforms. $500K+ in measured ROI. Users from intern level to regional CEOs across six countries.",
  description:
    "Full-year Automation Developer internship at Teleperformance Malaysia, building enterprise platforms across HR, Finance, Global Talent Mobility, Recruiting, and Operations. Combined business impact exceeded US$500K in ROI.",
  image: "/images/teleperformance.png",
  technologies: ["Power Apps", "Power Automate", "Power Automate Desktop", "SharePoint", "Copilot Studio", "Next.js", "TypeScript"],
  features: [
    "Hiring Request Management System — first centralized hiring workflow in the company, deployed across MY/CN/KR/JP/ID/TH",
    "Promotion Management System — multi-level approval flow with automated reminders and auto-generated promotion letters",
    "Global Talent Mobility Platform — replaced Excel/email with Next.js intake → Power Automate → SharePoint, plus Power Apps ops console",
    "Finance Reimbursement Automation — Next.js intake → manager approval → multi-level review → finance system consolidation",
    "Client Event Management — Power Platform app using AI to analyze event performance and auto-generate reports",
  ],
  year: "2024 – 2025",
  type: "Enterprise Automation",
  category: "Automation",
  caseStudyUrl: "/work/teleperformance",
  isUniversity: false,
  featured: true,
}
```

For the Teleperformance section, also expose a separate array `teleperformanceProjects` with one entry per sub-project (Hiring Request, Promotion, GTM, Finance, Event Management) for the 5-card grid inside that section. Each sub-project entry: `title`, `description` (1–2 lines), `icon` (lucide name), `technologies`.

**Grid projects (seven entries):**

```ts
{
  id: "course-mark",
  title: "Course Mark Management Web App",
  tagline: "Full-stack academic performance system with role-based access for Lecturers, Students, Advisors, and Admins.",
  description: "A full-stack web application designed to streamline the management and monitoring of student performance, built for academic institutions.",
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
  tagline: "Mobile app for daily medication management with secure auth and encrypted health data.",
  description: "A comprehensive mobile application that helps users manage their daily medication schedules with secure authentication and health data encryption.",
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
  tagline: "Resource-sharing platform with role-based access for admins, lecturers, and students.",
  description: "A full-stack web application for sharing and organizing Google Drive links, course materials, and managing tasks.",
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
  tagline: "Full-stack ordering platform with admin dashboard and customer-facing menu.",
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
  tagline: "JARVIS-inspired desktop assistant with dynamic JSON memory and a friendly conversational style.",
  description: "A desktop AI assistant designed to help with daily tasks, remember user info, and interact naturally.",
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
  tagline: "Cross-platform messaging with real-time delivery, read receipts, and group chats.",
  description: "A modern messaging platform with real-time message delivery and intuitive UI design.",
  image: "/images/realtime-chat.png",
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
  tagline: "Classic 2D space shooter built in C++ to demonstrate OOP fundamentals.",
  description: "A simple 2D space shooter where players control a triangular spaceship to destroy asteroids and avoid collisions.",
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
}
```

### `lib/experience.ts`

```ts
[
  {
    dates: "2024 – 2025",
    role: "Automation Developer",
    org: "Teleperformance Malaysia",
    description: "Shipped 5 enterprise platforms across 6 countries with combined $500K+ ROI. Users from intern level to regional CEOs.",
  },
  {
    dates: "2025",
    role: "Final-Year Project — Yalla-Fitness",
    org: "Universiti Teknologi Malaysia",
    description: "Full-stack mobile + admin console with secure Supabase backend and LLM-powered AI coach.",
  },
  {
    dates: "2024",
    role: "Country Representative & Director of Performance",
    org: "Arabic Culture Day",
    description: "Led country representation and performance direction for the cultural event.",
  },
  {
    dates: "2023 – 2024",
    role: "Head of Computing",
    org: "Yemeni Student Academic Group (YSAG)",
    description: "Led the computing division of the student academic group.",
  },
  {
    dates: "2022 – 2026",
    role: "B.Sc. Software Engineering",
    org: "Universiti Teknologi Malaysia",
    description: "GPA 3.87/4.00. Coursework: Data Structures & Algorithms, Database Systems, Software Engineering, Software Design & Architecture, AI, Computational Intelligence.",
  },
]
```

### `lib/skills.ts`

```ts
[
  { group: "Languages", items: ["TypeScript", "JavaScript", "Python", "Dart", "C++", "Java", "PHP", "SQL"] },
  { group: "Frameworks", items: ["Next.js", "React", "Express.js", "Flutter", "Vue.js", "Tailwind CSS"] },
  { group: "Backend & Databases", items: ["Supabase", "Postgres", "MongoDB", "Firebase", "MySQL", "SharePoint"] },
  { group: "Power Platform", items: ["Power Apps", "Power Automate", "Power Automate Desktop", "Copilot Studio"] },
  { group: "Tools", items: ["Git", "REST APIs", "CI/CD", "Vercel", "Figma"] },
]
```

---

## 8. Build phases

**Confirm each phase with the user before moving to the next.** Each phase has explicit deliverables and acceptance criteria.

### Phase 1 — Project scaffolding

1. Initialize Next.js 15 with `pnpm create next-app@latest` (TypeScript, Tailwind, App Router, src dir: no, import alias `@/*`).
2. Install dependencies: `framer-motion lucide-react next-themes @vercel/analytics`.
3. Install dev dependencies: `prettier prettier-plugin-tailwindcss`.
4. Configure `tailwind.config.ts` with the design tokens from section 4 (extend colors, fonts, transitions).
5. Set up Geist Sans + Geist Mono in `app/layout.tsx` via `next/font/google`.
6. Configure `next-themes` provider in `app/layout.tsx` with `attribute="class"`, `defaultTheme="dark"`, `enableSystem={false}`.
7. Create the file structure from section 5 (empty files OK for now).
8. Create `lib/site.ts`, `lib/projects.ts`, `lib/experience.ts`, `lib/skills.ts` with the data from section 7.
9. Verify dev server runs without errors.

**Acceptance:** `pnpm dev` shows a working blank page in dark mode. Theme toggle wired but not yet visible. No console warnings.

### Phase 2 — Layout primitives & shared UI

1. `components/layout/Container.tsx` — `max-w-6xl mx-auto px-6 lg:px-8`.
2. `components/ui/SectionLabel.tsx` — small uppercase mono text, muted color, optional number prefix (e.g. `01 — featured`).
3. `components/ui/TechTag.tsx` — small mono pill with border, slight padding.
4. `components/ui/Button.tsx` — three variants: `primary` (filled accent), `secondary` (outline), `ghost` (text only). Sizes `sm` and `md`.
5. `components/ui/AvailabilityDot.tsx` — green dot with pulsing ring animation.
6. `components/ui/ThemeToggle.tsx` — sun/moon icon swap with smooth transition, accessible label.
7. `components/ui/Reveal.tsx` — Framer Motion wrapper for scroll reveals (opacity + translateY, IntersectionObserver via `useInView`).
8. `components/layout/Nav.tsx` — sticky, backdrop blur on scroll. Logo left, anchor links center, theme toggle + availability pill right. Mobile: hamburger that slides in a panel.
9. `components/layout/Footer.tsx` — minimal: microtext + small social icon row.

**Acceptance:** Every primitive renders standalone with no console errors and respects `prefers-reduced-motion`. Theme toggle persists across reloads.

### Phase 3 — Hero section

Build `components/sections/Hero.tsx` matching the Stitch design:
- Mono eyebrow line: `// software engineer · based in johor, malaysia`
- Headline from `site.tagline` (large, tight tracking)
- Sub-headline from `site.subtagline`
- Stats row from `site.stats` — three inline items, large numbers, mono labels under
- CTA row: primary "View work" (anchor to `#work`), secondary "Download CV" (links to `/resume.pdf`), inline icons for GitHub/LinkedIn/email
- Subtle dot-grid background using CSS (`background-image: radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px); background-size: 24px 24px;`)
- Scroll cue at the bottom with a subtle bounce animation

**Acceptance:** Hero fills ~85vh on desktop, ~65vh on mobile. Stats use tabular numerals. All interactive elements have visible focus states.

### Phase 4 — Featured case studies

1. `components/sections/FeaturedYalla.tsx` — case study block per Stitch design. Large screenshot mockup with faint indigo glow behind it. Right-side metadata column. 3-column highlight grid below the hero image. "Read case study →" link routes to `/work/yalla-fitness`.
2. `components/sections/FeaturedTeleperformance.tsx` — section label, title, subhead, 4-stat row (huge numerals + mono labels), 5-card grid of sub-projects. Each sub-project card: lucide icon, title, 2-line description, mono tech tags.

**Acceptance:** Both sections render on the home page in order. Stats animate with a count-up effect on first scroll into view (max 1.2s). Cards have hover lift (translateY -4px, shadow scale, accent border glow).

### Phase 5 — Selected Projects grid

1. `components/projects/ProjectCard.tsx` — image at top with rounded corners, title, one-line tagline, tech tags, year on the right, GitHub/Live icons.
2. `components/projects/CategoryFilter.tsx` — chip row: `All / Full-Stack / Mobile / AI / Game / Automation / Backend`. Active chip uses accent background.
3. `components/sections/ProjectsGrid.tsx` — section label, heading, filter row, responsive grid (3 cols lg, 2 cols md, 1 col sm). Hooks up to filter state; uses Framer Motion `AnimatePresence` for filter transitions.

**Acceptance:** Filtering is instant and smooth. Empty states never appear (always show "All" by default). Each card image uses `next/image` with appropriate `sizes`.

### Phase 6 — About, Experience, Contact

1. `components/sections/About.tsx` — two-column on desktop: portrait + caption left; heading, 2–3 paragraphs (write tasteful, professional prose drawing on `lib/site.ts` and the user's background — feel free to draft and confirm with user), skills strip below, languages strip at the bottom (English: Professional, Arabic: Native).
2. `components/sections/Experience.tsx` — vertical timeline with thin left rule, dates in mono on the left, role/org/description on the right. Map over `experience` data.
3. `components/sections/Contact.tsx` — section label, huge closing heading ("Let's build something."), email rendered as a very large mailto link (~64–80px), row of icon links (LinkedIn, GitHub, Resume PDF). Footer microtext in mono, muted.

**Acceptance:** All sections respect the 8px grid. About reads naturally without filler. Email link's hover shows accent underline.

### Phase 7 — Case study detail pages

Optional but strongly recommended:
1. `app/work/yalla-fitness/page.tsx` — long-form deep dive: problem, architecture diagram (ASCII or component), key decisions, screenshots, what was learned.
2. `app/work/teleperformance/page.tsx` — same structure: business context, one section per sub-project with screenshots/architecture, measured impact, lessons.

**Acceptance:** Each detail page is self-contained, links back to home, has its own metadata for SEO. If user wants to defer this phase, leave a "Coming soon" page.

### Phase 8 — SEO, metadata, polish

1. Root `metadata` in `app/layout.tsx`: title template, description, OG image, Twitter card.
2. `app/opengraph-image.tsx` — generate a clean OG card with name, role, and tagline.
3. `app/sitemap.ts` and `app/robots.ts`.
4. Add Vercel Analytics.
5. Lighthouse audit — fix anything <95 on any metric.
6. Test on real mobile devices (iOS Safari + Android Chrome).
7. Test reduced-motion behavior.
8. Verify all external links open in new tabs with `rel="noopener noreferrer"`.

**Acceptance:** Lighthouse ≥95 across all four metrics. No console warnings in prod build. OG card looks good when previewed in a Slack/X/LinkedIn link preview tool.

### Phase 9 — Deploy

1. Push to a GitHub repo named `portfolio` (private or public, user's call).
2. Connect to Vercel.
3. Configure custom domain if user has one.
4. Verify production build matches local dev exactly.

---

## 9. Things to ask the user before assuming

Before writing copy or guessing, ask about:
1. **Exact LinkedIn URL slug** — `linkedin.com/in/?` 
2. **Whether the GitHub username `Alameer32` is current** — and the correct repo URLs for Yalla-Fitness (which isn't in the old portfolio data).
3. **Whether he wants a portrait photo** in the About section, and if so to provide the asset (or use a stylized avatar).
4. **Hero headline** — confirm "I build software that ships and scales." or pick an alternative.
5. **Whether to ship the two case-study detail pages now or defer to Phase 7+1**.
6. **Custom domain** for Vercel deployment.

---

## 10. What good looks like (anti-patterns to avoid)

- ❌ Adding any UI library beyond what's listed in section 2.
- ❌ Using `<div>` where a semantic tag would do.
- ❌ Skill bars showing "JavaScript 85%".
- ❌ Emojis used as section header decoration.
- ❌ Stock photos.
- ❌ Carousels in the project grid (use a real filterable grid).
- ❌ Hardcoded copy that diverges from `lib/site.ts` / `lib/projects.ts`.
- ❌ `<a>` tags that don't have hover/focus states.
- ❌ Animations that fire on every scroll instead of once.
- ❌ Layout shift from images or fonts.

---

End of brief. Confirm Phase 1 completion before starting Phase 2.