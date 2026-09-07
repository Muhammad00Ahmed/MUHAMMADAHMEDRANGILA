import type { CaseStudyCategory, CaseStudyStatus } from "../types/case-study";

export const STATUS_LABEL: Record<CaseStudyStatus, string> = {
  live: "Live",
  "in-development": "In Development",
  beta: "Beta",
  prototype: "Prototype",
  research: "Research",
};

/**
 * One accent per category, applied only to small identifying marks (index rail,
 * hover hairline, list bullets). Literal oklch values rather than Tailwind
 * palette variables so the accent does not depend on which theme variables the
 * build happens to emit.
 */
export const CATEGORY_ACCENT: Record<CaseStudyCategory, string> = {
  AI: "oklch(0.606 0.25 292.717)",
  ERP: "oklch(0.623 0.214 259.815)",
  SaaS: "oklch(0.685 0.169 237.323)",
  Automation: "oklch(0.769 0.188 70.08)",
  Healthcare: "oklch(0.696 0.17 162.48)",
  FinTech: "oklch(0.704 0.14 182.503)",
  "Voice AI": "oklch(0.667 0.295 322.15)",
  "Computer Vision": "oklch(0.715 0.143 215.221)",
  Accounting: "oklch(0.585 0.233 277.117)",
  "Web Development": "oklch(0.645 0.246 16.439)",
};
