import { CASE_STUDIES } from "@/features/projects/data/case-studies";
import type { CaseStudyStatus } from "@/features/projects/types/case-study";

import type { Project, ProjectStatus } from "../types/projects";

/**
 * PROJECTS
 * --------
 * Honesty rules enforced by the UI (see project-item.tsx):
 *  - "Live Demo"  renders only when `link`  is a non-empty URL.
 *  - "GitHub"     renders only when `repo`  is a non-empty URL.
 *  - "Case Study" renders only when `caseStudy` is a non-empty path.
 *  - When none exist, the card shows a "Private Project" badge and no links.
 *
 * The nine product entries are derived from CASE_STUDIES so this list, the
 * /projects library, the /products catalogue and /projects.md can never drift
 * apart. Edit the product content in src/features/projects/data/case-studies.ts.
 */

const STATUS_FROM_CASE_STUDY: Record<CaseStudyStatus, ProjectStatus> = {
  live: "live",
  "in-development": "in-development",
  beta: "beta",
  prototype: "prototype",
  research: "research",
};

const PRODUCT_PROJECTS: Project[] = CASE_STUDIES.map((study) => ({
  id: study.slug,
  title: study.name,
  period: { start: study.since },
  status: STATUS_FROM_CASE_STUDY[study.status],
  featured: study.featured,
  link: "",
  repo: "",
  caseStudy: `/projects#${study.slug}`,
  skills: study.stack.slice(0, 5),
  description: `${study.tagline}\n\n${study.summary}`,
}));

/**
 * Earlier work that is not part of the product line. ShopFlow leads because it
 * is the only entry with a public live demo and its own product page.
 */
const OTHER_PROJECTS: Project[] = [
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
    id: "multi-agent-ai-assistant",
    title: "Multi-Agent AI Assistant",
    period: { start: "2026" },
    status: "in-development",
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

export const PROJECTS: Project[] = [
  OTHER_PROJECTS[0], // ShopFlow — the only entry with a public live demo
  ...PRODUCT_PROJECTS,
  ...OTHER_PROJECTS.slice(1),
];
