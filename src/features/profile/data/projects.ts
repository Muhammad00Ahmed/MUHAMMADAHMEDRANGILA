import type { Project } from "../types/projects";

/**
 * PROJECTS
 * --------
 * Honesty rules enforced by the UI (see project-item.tsx):
 *  - "Live Demo"  renders only when `link`  is a non-empty URL.
 *  - "GitHub"     renders only when `repo`  is a non-empty URL.
 *  - "Case Study" renders only when `caseStudy` is a non-empty path.
 *  - When none exist, the card shows a "Private Project" badge and no links.
 *
 * TODO(muhammad): For each project you own publicly, paste the REAL values:
 *   link:      "https://your-live-demo.com"      (public demo, else leave "")
 *   repo:      "https://github.com/you/repo"      (specific repo, else leave "")
 *   caseStudy: "/products/your-slug"              (only if a full page exists)
 *   logo:      "/images/projects/<file>.png"      (real screenshot/logo)
 * Do NOT point `repo` at your generic profile — leave it "" instead.
 */
export const PROJECTS: Project[] = [
  {
    id: "ai-erp-copilot",
    title: "AI ERP Copilot",
    period: { start: "2026" },
    status: "in-development",
    featured: true,
    link: "", // TODO: real live demo URL, or leave "" to hide the button
    repo: "", // TODO: real repository URL, or leave "" (Private Project)
    caseStudy: "",
    skills: ["AI Agents", "LangGraph", "Next.js", "Node.js", "PostgreSQL"],
    isExpanded: true,
    description: `An AI copilot layered on top of ERP systems to automate operations through natural language.
- Agentic workflows for invoices, inventory, and reporting
- Natural-language querying over business data
- Multi-agent orchestration with a full-stack dashboard`,
  },
  {
    id: "acos-accounting-platform",
    title: "ACOS Accounting Platform",
    period: { start: "2026" },
    status: "in-development",
    featured: true,
    link: "",
    repo: "",
    caseStudy: "",
    skills: ["Next.js", "Node.js", "PostgreSQL", "AI Automation"],
    description: `An AI-assisted accounting platform that automates bookkeeping and financial workflows.
- Automated invoice, expense, and ledger processing
- AI-assisted categorization and reconciliation
- Real-time financial dashboards and reporting`,
  },
  {
    id: "psx-ai-market-intelligence",
    title: "PSX AI Market Intelligence Platform",
    period: { start: "2026" },
    status: "in-development",
    featured: true,
    link: "",
    repo: "",
    caseStudy: "",
    skills: ["Python", "Machine Learning", "RAG", "Next.js", "Vector Databases"],
    description: `An AI market-intelligence platform for the Pakistan Stock Exchange (PSX).
- RAG over financial filings, news, and market data
- ML-driven signals and trend analysis
- Conversational interface for market research`,
  },
  {
    id: "multi-agent-ai-assistant",
    title: "Multi-Agent AI Assistant",
    period: { start: "2026" },
    status: "in-development",
    featured: true,
    link: "",
    repo: "",
    caseStudy: "",
    skills: ["CrewAI", "LangGraph", "LLMs", "Node.js", "Agentic Workflows"],
    description: `A multi-agent assistant that coordinates specialized agents to complete complex tasks.
- Orchestrated agents for research, planning, and execution
- Tool-using agents with memory and shared context
- Built on agentic workflow frameworks`,
  },
  {
    id: "shopflow",
    title: "ShopFlow",
    period: { start: "2025" },
    status: "live",
    featured: true,
    link: "https://shopflow-pos.vercel.app/", // verified live demo
    repo: "", // TODO: add public repo URL if/when open-sourced
    caseStudy: "/products/shopflow", // full product page exists in this repo
    skills: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "AI"],
    description: `An AI-assisted commerce operations product. Read the full case study for the problem, workflow, architecture, and lessons learned.`,
  },
  {
    id: "ai-resume-analyzer",
    title: "AI Resume Analyzer",
    period: { start: "2025" },
    status: "completed",
    link: "",
    repo: "",
    caseStudy: "",
    skills: ["Python", "Machine Learning", "NLP", "React.js", "Node.js"],
    description: `AI-based resume screening platform using NLP to match resumes with job descriptions.
- NLP-driven resume screening and ranking
- Machine-learning models for candidate matching
- React.js frontend with a Node.js backend`,
  },
  {
    id: "generative-ai-chatbot",
    title: "Generative AI Chatbot",
    period: { start: "2025" },
    status: "completed",
    link: "",
    repo: "",
    caseStudy: "",
    skills: ["JavaScript", "Node.js", "Generative AI", "Prompt Engineering"],
    description: `A chatbot for domain-specific queries using LLM APIs, memory, and prompt engineering.
- Contextual memory for multi-turn conversations
- Prompt engineering for accurate, domain-specific answers
- Built on LLM APIs with a Node.js backend`,
  },
  {
    id: "fullstack-ecommerce",
    title: "E-Commerce Platform",
    period: { start: "2025" },
    status: "completed",
    link: "",
    repo: "",
    caseStudy: "",
    skills: ["React.js", "Next.js", "Node.js", "MongoDB"],
    description: `A full-stack e-commerce platform with authentication, product management, and order processing.
- Secure authentication and user accounts
- Product management and order processing
- Built with React.js, Next.js, Node.js, and MongoDB`,
  },
  {
    id: "business-workflow-automation",
    title: "Business Workflow Automation System",
    period: { start: "2026" },
    status: "in-development",
    link: "",
    repo: "",
    caseStudy: "",
    skills: [
      "Node.js",
      "AI Automation",
      "API Integrations",
      "Workflow Automation",
    ],
    description: `An automation system that streamlines repetitive business processes end to end.
- Workflow and business-process automation
- Email automation and API integrations
- AI-assisted document and data processing`,
  },
];
