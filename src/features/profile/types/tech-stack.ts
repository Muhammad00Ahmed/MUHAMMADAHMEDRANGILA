/**
 * A technology item displayed in the Tech Stack section.
 */
export type TechStack = {
  /** Unique identifier used to resolve icon files. */
  key: string;
  /** Display name of the technology. */
  title: string;
  /** Official website URL. */
  href: string;
  /** Category tags used for grouping/filtering. */
  categories: string[];
  /** CDN URL for the technology icon. */
  iconUrl: string;
  /** If true, use theme-specific icons for dark/light mode. */
  theme?: boolean;
  /**
   * If true, this technology is part of the core "Primary stack" — the tools
   * used across most projects. Everything else renders under "Working
   * knowledge". Keep the primary list small and honest (~12 items).
   */
  primary?: boolean;
};
