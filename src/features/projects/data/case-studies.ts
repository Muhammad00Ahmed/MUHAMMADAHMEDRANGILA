import type { CaseStudy, CaseStudyCategory } from "../types/case-study";

/**
 * CASE STUDIES
 * ------------
 * The single source of truth for the project library at /projects.
 *
 * Honesty rules:
 *  - `impact` holds qualitative outcome statements, not invented metrics.
 *  - Any figure that is backtested, self-measured, or not yet validated must be
 *    labelled as such in `note` rather than stated as a fact in `impact`.
 *  - Research prototypes must say so in `note` so they are never mistaken for
 *    clinically or commercially validated products.
 */
export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "nexaerp-ai",
    name: "NexaERP AI",
    tagline: "Runs an entire import/export business from a single dashboard.",
    categories: ["ERP", "AI", "SaaS"],
    since: "2026",
    status: "in-development",
    featured: true,
    summary:
      "An AI-enabled ERP that connects purchasing, inventory, factories, warehouses, accounting and shipping into one system — and tells the owner what needs their attention.",
    problem:
      "Import/export businesses run on disconnected tools: stock in one spreadsheet, ledgers in another, approvals over phone calls, and shipping updates buried in email. The owner is the integration layer, so nothing moves without them and nothing is reconciled until month end.",
    solution:
      "One platform modelling the real org chart. Every location, team and workflow reports into a shared ledger, and an automation layer pushes approvals, stock alerts and reconciliations out to the people who need to act — over WhatsApp and email, not just an in-app inbox.",
    features: [
      "Multi-level organization and role hierarchy",
      "Owner/management command dashboard",
      "Per-employee operational dashboards",
      "Factory and warehouse management",
      "Inventory tracking with stock-level monitoring",
      "Purchase and sales management",
      "Import/export and shipment workflows",
      "Accounting and financial management",
      "Automated reconciliation",
      "Approval workflows with WhatsApp reminders",
      "Gmail/email notifications and reminders",
      "Daily and monthly reporting",
      "Real-time business intelligence",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "OpenAI API",
      "Electron",
      "React Native",
      "WhatsApp Business API",
      "Gmail API",
    ],
    platforms: ["Web", "Desktop", "Mobile", "WhatsApp", "Email"],
    impact: [
      "Replaces spreadsheet-and-phone-call coordination with one auditable system of record.",
      "Approvals reach decision makers where they already are, so operations stop waiting on the owner.",
      "Reconciliation and reporting run continuously instead of as a month-end scramble.",
    ],
  },
  {
    slug: "mediconnect-ai",
    name: "MediConnect AI",
    tagline: "Book a doctor, consult online, and never miss the follow-up.",
    categories: ["Healthcare", "SaaS", "Automation"],
    since: "2026",
    status: "in-development",
    featured: true,
    summary:
      "A telemedicine platform covering the full patient journey — finding the right doctor, consulting online, and being reminded about the visit that comes next.",
    problem:
      "Booking a doctor still means phone calls and guesswork about availability and fees. The bigger gap is after the consultation: follow-ups are verbal, patients forget, and clinics have no reliable way to bring them back.",
    solution:
      "Searchable doctor profiles with transparent fees and clinic details, online consultations with a persistent history, and an automated follow-up layer that reaches patients on WhatsApp so the next step in care actually happens.",
    features: [
      "Doctor discovery and profiles",
      "Appointment booking and management",
      "Online consultations",
      "Consultation fee management, including free consultations",
      "Clinic information and in-person visit follow-up",
      "Patient communication threads",
      "Consultation history",
      "WhatsApp reminders and follow-up notifications",
      "Automated patient communication",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "WhatsApp Business API",
      "Twilio",
    ],
    platforms: ["Web", "Mobile", "WhatsApp"],
    impact: [
      "Turns follow-up care from a verbal promise into a tracked, automated workflow.",
      "Gives clinics a booking channel that shows availability and fees up front, cutting phone-call overhead.",
      "Keeps the full consultation history in one place for both patient and doctor.",
    ],
    note: "MediConnect AI is a consultation and scheduling platform. It supports the relationship between a patient and their doctor and does not provide diagnosis or clinical decision-making.",
  },
  {
    slug: "voxa-ai",
    name: "Voxa AI",
    tagline: "An AI that answers the phone and actually closes the loop.",
    categories: ["Voice AI", "AI", "Automation"],
    since: "2026",
    status: "in-development",
    featured: true,
    summary:
      "A voice agent that handles real customer calls — qualifying leads, confirming orders, booking appointments and running reception — then writes the outcome back into the business's systems.",
    problem:
      "Calls are where deals are won and lost, and they are the first thing to break at scale. Leads go unanswered outside office hours, international callers hit a language wall, and order confirmations and reminders eat hours of staff time every day.",
    solution:
      "A conversational voice agent that detects the caller's language automatically, holds a natural conversation to the point of an outcome, and hands that outcome to the CRM or workflow that has to act on it — over both phone and WhatsApp calling.",
    features: [
      "Natural AI voice conversations",
      "Automatic language detection",
      "Lead qualification",
      "International lead handling",
      "Order confirmation calls",
      "Appointment booking",
      "Customer follow-up calls",
      "AI receptionist workflows",
      "Outbound calling campaigns",
      "WhatsApp call integration",
      "CRM and workflow integration",
    ],
    stack: [
      "Python",
      "OpenAI Realtime API",
      "Speech-to-Text / Text-to-Speech",
      "Twilio Voice",
      "WhatsApp Business API",
      "Node.js",
      "PostgreSQL",
    ],
    platforms: ["Voice", "WhatsApp", "Web", "API"],
    impact: [
      "Every inbound call gets answered, including outside business hours.",
      "Language detection removes the barrier on international leads without hiring per-language staff.",
      "Routine confirmation and reminder calls come off the team's plate entirely.",
    ],
  },
  {
    slug: "webforge-ai",
    name: "WebForge AI",
    tagline: "Describe a website. Get a real, responsive build.",
    categories: ["Web Development", "AI", "SaaS"],
    since: "2026",
    status: "in-development",
    summary:
      "An AI design-and-build tool that takes a brief to laid-out, responsive, component-based pages — compressing the slowest part of the web project into a working starting point.",
    problem:
      "The gap between a brief and a first credible layout is where web projects stall. Design ideation, responsive rework and boilerplate component wiring absorb days before anything is reviewable.",
    solution:
      "A generation pipeline that produces layout options from a brief, builds them as real responsive components rather than flat mockups, and keeps the output editable so it becomes the project's foundation instead of a throwaway comp.",
    features: [
      "AI-assisted website generation",
      "Design ideation and layout options",
      "Automated responsive layouts",
      "Component generation",
      "Rapid prototyping",
      "Modern UI generation",
      "Development workflow automation",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "OpenAI API",
      "Node.js",
    ],
    platforms: ["Web", "API"],
    impact: [
      "Moves a project from brief to reviewable layout in a single session.",
      "Output ships as real responsive components, so prototyping work is not thrown away.",
      "Removes the repetitive scaffolding pass at the start of every build.",
    ],
  },
  {
    slug: "ledgermind-ai",
    name: "LedgerMind AI",
    tagline: "Bookkeeping that keeps itself current.",
    categories: ["Accounting", "FinTech", "AI"],
    since: "2026",
    status: "in-development",
    featured: true,
    summary:
      "An accounting suite that automates the daily entry work — sales, purchases, expenses, receivables and payables — and keeps the ledger and the stock position in agreement.",
    problem:
      "Small and mid-size businesses do their books in arrears. Entries are keyed by hand weeks late, inventory movements never reconcile against the ledger, and by the time a report exists it is describing a quarter that has already closed.",
    solution:
      "An accounting layer where transactions post as they happen, inventory movement and ledger entries stay linked, and AI handles the categorisation and calculation work that otherwise forces a human to touch every line.",
    features: [
      "Sales and purchase management",
      "Expense management",
      "Accounts receivable and payable",
      "Ledger management",
      "Inventory-linked accounting",
      "Automated calculations",
      "Financial reporting",
      "AI-assisted categorisation and workflows",
      "Business insights",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "OpenAI API",
      "Python",
    ],
    platforms: ["Web", "Desktop", "API"],
    impact: [
      "Books reflect the current position rather than last month's.",
      "Inventory and ledger stay reconciled, so stock value and financials do not drift apart.",
      "Manual data entry drops to review-and-approve on flagged exceptions.",
    ],
  },
  {
    slug: "odooflow",
    name: "OdooFlow",
    tagline: "Odoo, shaped around how the business actually works.",
    categories: ["ERP", "Accounting", "Automation"],
    since: "2026",
    status: "live",
    summary:
      "Custom Odoo implementations and modules for businesses that need real ERP capability without rebuilding their processes around stock software.",
    problem:
      "Odoo out of the box assumes a generic business. Real companies have their own approval chains, document formats and reporting requirements, and the usual outcome is either an expensive process rewrite or staff quietly working around the system in spreadsheets.",
    solution:
      "Implementation work that starts from the existing process: custom modules for the parts Odoo does not model, automation for the manual steps between them, and integrations that keep Odoo connected to the tools already in use.",
    features: [
      "Odoo implementation and configuration",
      "Custom module development",
      "Accounting management",
      "Sales and purchase management",
      "Inventory management",
      "Business workflow automation",
      "Custom reporting",
      "Third-party ERP integrations",
    ],
    stack: ["Odoo", "Python", "PostgreSQL", "XML", "REST APIs"],
    platforms: ["Web", "API"],
    impact: [
      "Teams adopt the ERP because it matches the process they already run.",
      "Manual handoffs between departments become automated workflow steps.",
      "Reporting comes out of the system in the format the business actually uses.",
    ],
  },
  {
    slug: "dermavision-ai",
    name: "DermaVision AI",
    tagline: "Point a phone camera at a skin condition, get an AI read.",
    categories: ["Computer Vision", "AI", "Healthcare"],
    since: "2026",
    status: "research",
    summary:
      "A computer-vision research project exploring image-based disease detection from ordinary mobile-camera photos, built as a full pipeline from capture to classification.",
    problem:
      "Image-based screening research is usually built around clinical-grade photography. The open question is how much signal survives when the input is a handheld phone photo taken in uncontrolled lighting — which is the only realistic input outside a clinic.",
    solution:
      "An end-to-end prototype: guided mobile capture, preprocessing for real-world lighting and framing variance, and a trained classification model, with the detection workflow instrumented so model behaviour can be studied rather than just scored.",
    features: [
      "Mobile camera capture integration",
      "Image preprocessing for uncontrolled conditions",
      "AI model training pipeline",
      "Image classification",
      "Detection workflow instrumentation",
      "AI-assisted analysis output",
    ],
    stack: [
      "Python",
      "PyTorch",
      "OpenCV",
      "TensorFlow Lite",
      "React Native",
      "FastAPI",
    ],
    platforms: ["Mobile", "API"],
    impact: [
      "Demonstrates a complete capture-to-classification pipeline running on consumer hardware.",
      "Produces a reusable training and evaluation setup for image-based detection work.",
      "Documents where phone-camera input degrades model performance and why.",
    ],
    note: "Research and prototype work. DermaVision AI is not a clinically validated medical device, has not been through regulatory review, and must not be used for diagnosis or treatment decisions.",
  },
  {
    slug: "tradepilot-ai",
    name: "TradePilot AI",
    tagline: "Reads the market, then runs your strategy for you.",
    categories: ["FinTech", "AI", "Automation"],
    since: "2026",
    status: "in-development",
    summary:
      "An AI-driven trading system that analyses market conditions and executes rule-based strategies against Pakistan Stock Exchange and Binance-compatible crypto markets.",
    problem:
      "Strategy-based trading fails on execution, not on ideas. Positions get missed overnight, rules get abandoned under pressure, and PSX and crypto markets behave differently enough that one generic bot handles neither well.",
    solution:
      "A system that separates analysis from execution: an AI layer that reads market conditions, an explicit strategy layer holding the rules, and per-market execution paths tuned separately for PSX and for Binance — with risk limits enforced in code rather than by discipline.",
    features: [
      "AI market analysis",
      "Strategy-based decision making",
      "PSX-specific execution optimization",
      "Binance-specific execution optimization",
      "Automated trading workflows",
      "Continuous market monitoring",
      "Risk management controls",
      "Portfolio monitoring",
      "Trading analytics and performance tracking",
    ],
    stack: [
      "Python",
      "Pandas",
      "Machine Learning",
      "PSX Data APIs",
      "Binance API",
      "PostgreSQL",
      "Next.js",
    ],
    platforms: ["Web", "Desktop", "API"],
    impact: [
      "Strategy rules execute consistently, including when the market moves outside working hours.",
      "Risk limits are enforced by the system rather than left to in-the-moment judgement.",
      "Every decision is logged, so strategy performance can be reviewed against what actually happened.",
    ],
    note: "No performance guarantees. Any accuracy, return or win-rate figure from this system is a backtested or in-house test result under specific conditions, is labelled as such wherever it appears, and is not a prediction of live results. Automated trading carries risk of loss.",
  },
  {
    slug: "whauto-ai",
    name: "Whauto AI",
    tagline: "Turns WhatsApp into a 24/7 sales and support desk.",
    categories: ["Automation", "AI", "SaaS"],
    since: "2026",
    status: "in-development",
    summary:
      "A WhatsApp automation platform that answers customers, follows up on leads, places voice calls and keeps a ledger-style record of every conversation.",
    problem:
      "For most businesses in this market WhatsApp is the primary sales channel, and it is run out of a personal phone. Replies stop after hours, follow-ups depend on memory, and there is no record of what was agreed with whom.",
    solution:
      "An AI layer over the WhatsApp Business API that answers in the business's voice, drives follow-up and reminder sequences on its own, escalates to voice and voice-note workflows where text stalls, and logs every exchange into a searchable per-customer history.",
    features: [
      "Automated WhatsApp messaging",
      "AI-powered responses",
      "Automated customer follow-ups",
      "Automated calls and voice-message workflows",
      "Conversation logging",
      "Per-customer history",
      "Journal/ledger-style records",
      "Lead management",
      "Notification and reminder automation",
      "Workflow automation",
      "Multi-industry configuration",
    ],
    stack: [
      "Node.js",
      "TypeScript",
      "OpenAI API",
      "WhatsApp Business API",
      "PostgreSQL",
      "Redis",
      "Next.js",
    ],
    platforms: ["WhatsApp", "Web", "Voice", "API"],
    impact: [
      "Customers get an answer at any hour instead of waiting for the morning.",
      "Follow-up sequences run automatically, so leads stop going cold through inattention.",
      "Every conversation becomes a searchable record rather than history on someone's phone.",
    ],
  },
];

/** Category list for the filter bar, ordered by how many projects use each. */
export const CASE_STUDY_CATEGORIES: CaseStudyCategory[] = Array.from(
  CASE_STUDIES.reduce((counts, study) => {
    for (const category of study.categories) {
      counts.set(category, (counts.get(category) ?? 0) + 1);
    }
    return counts;
  }, new Map<CaseStudyCategory, number>())
)
  .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
  .map(([category]) => category);

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((study) => study.slug === slug);
}
