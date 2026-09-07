export type ProjectStatus =
  | "in-development"
  | "live"
  | "beta"
  | "prototype"
  | "research"
  | "completed"
  | "private";

export type Project = {
  /** Stable unique identifier (used as list key/anchor). */
  id: string;
  title: string;
  /**
   * Project period for display and sorting.
   * Use "MM.YYYY" or "YYYY" format. Omit `end` for ongoing projects.
   */
  period: {
    /** Start date (e.g., "05.2025"). */
    start: string;
    /** End date; leave undefined for "Present". */
    end?: string;
  };
  /**
   * Public live/demo URL. Leave empty ("") when no public demo exists —
   * the "Live Demo" action is then hidden automatically.
   */
  link?: string;
  /**
   * Specific public repository URL for THIS project (not a generic profile).
   * Leave empty ("") for private/closed-source work — the "GitHub"
   * action is hidden and the project is treated as private.
   */
  repo?: string;
  /**
   * Internal case-study / product page path (e.g. "/products/shopflow").
   * Leave empty ("") when no complete case study exists.
   */
  caseStudy?: string;
  /** Development / availability status. Controls the status badge. */
  status?: ProjectStatus;
  /** Tags/technologies for chips or filtering. */
  skills: string[];
  /** Optional rich description; Markdown and line breaks supported. */
  description?: string;
  /** Logo image URL (absolute or path under /public). */
  logo?: string;
  /** Whether the project card is expanded by default in the UI. */
  isExpanded?: boolean;
  /** Show on the homepage featured list. */
  featured?: boolean;
};
