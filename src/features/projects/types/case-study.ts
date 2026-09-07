/**
 * Category taxonomy used by the library filter bar. Keep this list closed so
 * the filter UI can be derived from the data without a separate config.
 */
export type CaseStudyCategory =
  | "AI"
  | "ERP"
  | "SaaS"
  | "Automation"
  | "Healthcare"
  | "FinTech"
  | "Voice AI"
  | "Computer Vision"
  | "Accounting"
  | "Web Development";

export type CaseStudyStatus =
  | "live"
  | "in-development"
  | "beta"
  | "prototype"
  | "research";

export type Platform =
  | "Web"
  | "Desktop"
  | "Mobile"
  | "WhatsApp"
  | "Voice"
  | "Email"
  | "API";

export type CaseStudy = {
  /** Stable id: used as the list key and as the deep-link anchor. */
  slug: string;
  name: string;
  /**
   * The five-second read. One plain-language line that a non-technical reader
   * understands without any of the detail below it.
   */
  tagline: string;
  /** First entry is the primary category and drives the card's accent. */
  categories: [CaseStudyCategory, ...CaseStudyCategory[]];
  /**
   * Year work started, e.g. "2026". Displayed as the period in the homepage
   * project list. Adjust per project where the real start year differs.
   */
  since: string;
  status: CaseStudyStatus;
  /** Two-line orientation shown on the collapsed card. */
  summary: string;
  problem: string;
  solution: string;
  features: string[];
  stack: string[];
  platforms: Platform[];
  /**
   * Qualitative outcome statements only. Numeric performance claims belong here
   * only when they are independently verifiable; anything measured in-house is
   * labelled as such in `note`.
   */
  impact: string[];
  /** Scope or validation caveat, rendered as a callout inside the case study. */
  note?: string;
  /** Surfaced in the homepage summary and sorted to the top of the library. */
  featured?: boolean;
};
