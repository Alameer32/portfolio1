export interface SubProjectDetail {
  slug: string;
  title: string;
  icon: string;
  context: string;
  solution: string;
  impact: string;
  technologies: string[];
  architecture: string;
  lessons: string[];
}

export const subProjectDetails: SubProjectDetail[] = [
  {
    slug: "hiring-request",
    title: "Hiring Request Management System",
    icon: "Users",
    context:
      "Before this system, hiring requests were scattered across emails, spreadsheets, and informal Slack messages. There was no single source of truth, and the same role could be requested multiple times across different countries without anyone knowing.",
    solution:
      "Built the first centralized hiring workflow in the company using Power Apps, Power Automate and SharePoint, with AI screening and a multi-level approval chain. Managers submit requests through a standardized form, which routes through department heads and HR based on configurable business rules. Power Automate handles notifications, reminders, and escalations. I owned requirements, design, rollout and country-by-country training, and have kept the tool aligned with changing requirements for over a year.",
    impact:
      "Launched in Malaysia and Thailand, then adopted in China, Korea, Japan, Indonesia and Vietnam — the first tool to span seven countries. Now used by 200+ people, up to regional CEO level. Reduced duplicate requests and cut hiring lead time significantly.",
    technologies: ["Power Apps", "Power Automate", "SharePoint"],
    architecture: `┌──────────────────────────────────────────────────┐
│              HIRING REQUEST FLOW                  │
│                                                    │
│  Manager ──→ Standardized Form (Power Apps)        │
│                     │                              │
│                     ▼                              │
│          Dept Head Approval                        │
│                     │                              │
│                     ▼                              │
│            HR Review & Approval                    │
│                     │                              │
│                     ▼                              │
│       Power Automate (Notifications,               │
│       Reminders, Escalations)                      │
│                     │                              │
│                     ▼                              │
│         SharePoint (Record Keeping)                │
│                                                    │
│  Launched: MY / TH  →  Adopted: CN / KR / JP /     │
│            ID / VN   (200+ users)                  │
└──────────────────────────────────────────────────┘`,
    lessons: [
      "Standardizing a form across seven countries required balancing universal fields with region-specific requirements — configurable business rules were key.",
      "Auto-escalation on stale approvals was the single most impactful feature — it removed the bottleneck of managers forgetting to act on pending requests.",
      "Being the first cross-APAC tool meant gaining buy-in country by country. Teams in Malaysia who adopted it early vouched for it to colleagues in the other countries.",
    ],
  },
  {
    slug: "promotion-management",
    title: "Promotion Management System",
    icon: "TrendingUp",
    context:
      "Promotions were managed through a patchwork of Excel sheets and email threads. Approval chains were unclear, promotion letters were manually written, and there was no audit trail.",
    solution:
      "Designed a multi-level approval flow where each promotion request moves through a configurable chain of managers, HR, and regional directors. The system auto-generates promotion letters from templates and sends automated reminders for pending approvals.",
    impact:
      "Eliminated manual letter generation entirely. The full audit trail gave HR leadership visibility into promotion velocity and bottlenecks across departments.",
    technologies: ["Power Apps", "Power Automate", "SharePoint"],
    architecture: `┌──────────────────────────────────────────────────┐
│            PROMOTION WORKFLOW                      │
│                                                    │
│  Nomination ──→ Power Apps Form                    │
│                     │                              │
│                     ▼                              │
│         Manager Approval Chain                     │
│         (Configurable per dept)                    │
│                     │                              │
│                     ▼                              │
│           HR Review + Director Sign-off            │
│                     │                              │
│              ┌──────┴──────┐                       │
│              ▼             ▼                       │
│     Auto-generated    SharePoint                   │
│    Promotion Letter   Audit Trail                  │
│                                                    │
│  + Automated reminders for pending approvals       │
└──────────────────────────────────────────────────┘`,
    lessons: [
      "Auto-generating promotion letters from templates saved HR hours per cycle and eliminated formatting inconsistencies.",
      "The audit trail became unexpectedly valuable — leadership used it to identify departments with promotion bottlenecks and rebalance workloads.",
      "Configurable approval chains were essential because each department had a different hierarchy depth.",
    ],
  },
  {
    slug: "global-talent-mobility",
    title: "Global Talent Mobility Platform",
    icon: "Globe",
    context:
      "International employee transfers were coordinated through email chains and shared Excel files — a process prone to version conflicts, missed steps, and compliance gaps when moving employees across jurisdictions.",
    solution:
      "Replaced the entire workflow with a Next.js intake form that feeds into Power Automate orchestration and SharePoint document management. A companion Power Apps operations console gives the GTM team real-time visibility into every active transfer.",
    impact:
      "Dramatically reduced transfer processing time and eliminated version-conflict issues. The operations console became the GTM team's primary tool for daily standups.",
    technologies: ["Next.js", "TypeScript", "Power Automate", "SharePoint", "Power Apps"],
    architecture: `┌──────────────────────────────────────────────────┐
│         GLOBAL TALENT MOBILITY PLATFORM            │
│                                                    │
│  ┌─────────────┐    ┌───────────────────────┐      │
│  │  Next.js    │    │   Power Apps           │      │
│  │  Intake     │    │   Ops Console          │      │
│  │  Form       │    │   (GTM Team View)      │      │
│  └──────┬──────┘    └───────────┬───────────┘      │
│         │                       │                   │
│         └───────────┬───────────┘                   │
│                     ▼                               │
│            Power Automate                           │
│         (Orchestration Layer)                       │
│                     │                               │
│                     ▼                               │
│              SharePoint                             │
│       (Document Management +                        │
│        Compliance Records)                          │
└──────────────────────────────────────────────────┘`,
    lessons: [
      "Next.js for the intake form was the right call — the GTM team needed a polished, fast UI that non-technical employees could use without training.",
      "The Power Apps ops console was built after launch based on the GTM team's feedback — they needed a dashboard view, not just a form.",
      "Cross-jurisdiction compliance requirements meant the document checklist had to be dynamic — different countries require different paperwork.",
    ],
  },
  {
    slug: "finance-reimbursement",
    title: "Finance Reimbursement Automation",
    icon: "DollarSign",
    context:
      "Reimbursement claims followed a convoluted paper-based process: employees submitted physical receipts, managers signed off manually, and finance manually entered data into their system. Processing time averaged weeks.",
    solution:
      "Built a Next.js submission portal where employees upload receipts and fill out structured claim forms. Claims route through manager approval, then multi-level Power Apps review, before being submitted into the finance system. OCR extracts expense details from the submitted receipts automatically, so nobody retypes them.",
    impact:
      "Reduced processing time from weeks to days. The structured digital format eliminated data-entry errors and gave finance real-time visibility into outstanding claims.",
    technologies: ["Next.js", "TypeScript", "Power Automate", "SharePoint", "OCR"],
    architecture: `┌──────────────────────────────────────────────────┐
│        FINANCE REIMBURSEMENT FLOW                  │
│                                                    │
│  Employee ──→ Next.js Portal                       │
│               (Upload receipts +                   │
│                structured form)                    │
│                     │                              │
│                     ▼                              │
│        OCR (extract expense details)               │
│                     │                              │
│                     ▼                              │
│           Manager Approval                         │
│                     │                              │
│                     ▼                              │
│     Multi-level Review (Power Apps)                │
│                     │                              │
│                     ▼                              │
│     Power Automate Consolidation                   │
│              ──→ Finance System                    │
│                                                    │
│  + SharePoint audit trail & receipt storage         │
└──────────────────────────────────────────────────┘`,
    lessons: [
      "Structured digital forms eliminated the most common source of delay — illegible or incomplete paper receipts that finance had to send back.",
      "Multi-level finance review was initially seen as adding friction, but it actually sped things up by catching errors earlier in the chain.",
      "Real-time visibility into outstanding claims let finance forecast cash flow more accurately.",
      "Adding OCR on receipts removed the last manual step — expense details arrive pre-filled instead of being retyped.",
    ],
  },
  {
    slug: "event-management",
    title: "Client Event Management",
    icon: "Calendar",
    context:
      "Client events — site visits, executive summits, VIP tours — were tracked in ad-hoc spreadsheets. Post-event analysis was manual and inconsistent, making it hard to measure ROI or improve future events.",
    solution:
      "Built a Power Platform app for end-to-end event lifecycle management. Copilot Studio AI analyzes event performance data and auto-generates summary reports, replacing hours of manual analysis.",
    impact:
      "Gave leadership consistent, data-driven event ROI metrics for the first time. The AI-generated reports saved the events team significant preparation time per event.",
    technologies: ["Power Apps", "Power Automate", "Copilot Studio"],
    architecture: `┌──────────────────────────────────────────────────┐
│         CLIENT EVENT MANAGEMENT                    │
│                                                    │
│  Event Planning ──→ Power Apps                     │
│                     (Lifecycle Mgmt)               │
│                          │                         │
│                ┌─────────┴─────────┐               │
│                ▼                   ▼               │
│        Power Automate        Copilot Studio        │
│        (Workflows &          (AI Analysis &        │
│         Notifications)        Report Gen)          │
│                │                   │               │
│                └─────────┬─────────┘               │
│                          ▼                         │
│                   SharePoint                       │
│              (Reports & Archives)                  │
└──────────────────────────────────────────────────┘`,
    lessons: [
      "Copilot Studio was the right tool for report generation — it could analyze unstructured event feedback and produce consistent, formatted summaries.",
      "The biggest win was standardizing event metrics so leadership could compare across event types and quarters.",
      "Automating post-event reports freed the events team to focus on planning the next event instead of documenting the last one.",
    ],
  },
  {
    slug: "document-extraction",
    title: "Intelligent Document Extraction",
    icon: "ScanText",
    context:
      "For a confidential client project, documents arrived by email and their contents had to be read and keyed into the client's dashboard by hand — slow, repetitive, and error-prone.",
    solution:
      "Designed an email-triggered pipeline. A forwarded email starts Power Automate and Power Automate Desktop flows, the documents run through PaddleOCR, and a locally hosted LLM (Ollama) maps the extracted text to the required fields. A Python FastAPI service then populates the client's dashboard automatically.",
    impact:
      "Documents go from inbox to populated dashboard without manual data entry. Because the LLM is hosted locally, document contents are not sent to an external AI service.",
    technologies: ["Power Automate", "Power Automate Desktop", "PaddleOCR", "Ollama", "FastAPI"],
    architecture: `┌──────────────────────────────────────────────────┐
│          DOCUMENT EXTRACTION PIPELINE              │
│                                                    │
│  Forwarded Email                                   │
│         │                                          │
│         ▼                                          │
│  Power Automate + Power Automate Desktop           │
│         │                                          │
│         ▼                                          │
│  PaddleOCR (text extraction)                       │
│         │                                          │
│         ▼                                          │
│  Local LLM via Ollama (field mapping)              │
│         │                                          │
│         ▼                                          │
│  Python FastAPI service                            │
│         │                                          │
│         ▼                                          │
│  Client Dashboard (auto-populated)                 │
└──────────────────────────────────────────────────┘`,
    lessons: [
      "OCR alone returns text, not structure — a local LLM mapping text to a fixed set of required fields is what turned raw output into dashboard-ready data.",
      "Hosting the model locally kept sensitive client documents inside the environment, which made the project viable for a confidential engagement.",
      "Splitting the work into small stages (trigger, OCR, mapping, API) made each step easy to test and replace independently.",
    ],
  },
  {
    slug: "ai-agents",
    title: "AI Agents (Copilot Studio)",
    icon: "Bot",
    context:
      "Sales and recruiting teams spent time on repetitive work: assembling site-assessment proposals with ROI figures, preparing tailored interview questions, and answering the same HR and Operations queries again and again.",
    solution:
      "Built Microsoft Copilot Studio agents. A client site-assessment agent calculates ROI, proposes solutions from the company's tool knowledge base and generates the proposal slide deck. A recruiting agent analyzes applicant profiles to produce tailored interview questions and discussion topics. Earlier department agents handled repetitive queries to HR and Operations.",
    impact:
      "Proposal decks and interview prep that used to be assembled by hand are generated on demand, and the department agents reduced repetitive queries to HR and Operations.",
    technologies: ["Copilot Studio", "Power Automate", "SharePoint", "LLM"],
    architecture: `┌──────────────────────────────────────────────────┐
│           COPILOT STUDIO AGENTS                    │
│                                                    │
│  Site-Assessment Agent                             │
│    Client inputs ──→ ROI calculation               │
│                  ──→ Solution proposals            │
│                      (tool knowledge base)         │
│                  ──→ Proposal slide deck           │
│                                                    │
│  Recruiting Agent                                  │
│    Applicant profile ──→ Analysis                  │
│                      ──→ Tailored interview        │
│                          questions & topics        │
│                                                    │
│  Department Agents (HR, Operations)                │
│    Repetitive queries ──→ Automated answers        │
└──────────────────────────────────────────────────┘`,
    lessons: [
      "An agent is only as good as its knowledge base — grounding the site-assessment agent in the company's own tool catalogue is what kept proposals relevant.",
      "The strongest use cases combine calculation with generation: computing the ROI first, then letting the agent write it up, keeps the numbers trustworthy.",
      "Starting with narrow department agents for repetitive HR and Operations queries was a practical way to learn what makes an agent useful before building the more involved site-assessment and recruiting agents.",
    ],
  },
];
