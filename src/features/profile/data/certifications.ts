import type { Certification } from "../types/certifications";

/**
 * CERTIFICATIONS
 * --------------
 * Honesty rules (enforced in certifications/index.tsx):
 *  - Only entries with status "published" render on the live site.
 *  - A certification should be "published" ONLY when it has a real issuer,
 *    an issue date, and (ideally) a public credentialURL to verify it.
 *
 * Every entry below is currently a DRAFT: the issuer is generic and there is
 * no verification link, so none of them render publicly yet.
 *
 * TODO(muhammad): For each real certificate, fill in:
 *   issuer:        "Coursera" | "Google" | "Meta" | ...   (the actual issuer)
 *   issueDate:     "YYYY-MM-DD"
 *   credentialID:  "ABC123"                                (if any)
 *   credentialURL: "https://.../verify/..."                (public proof)
 *   issuerIconName or issuerLogoURL                        (optional)
 * Then change status to "published". Draft entries stay hidden automatically.
 */
export const CERTIFICATIONS: Certification[] = [
  {
    status: "draft",
    title: "Data Science",
    issuer: "", // TODO: real issuer
    issueDate: "",
    credentialID: "",
    credentialURL: "",
  },
  {
    status: "draft",
    title: "Generative AI",
    issuer: "",
    issueDate: "",
    credentialID: "",
    credentialURL: "",
  },
  {
    status: "draft",
    title: "Cloud Computing",
    issuer: "",
    issueDate: "",
    credentialID: "",
    credentialURL: "",
  },
  {
    status: "draft",
    title: "Machine Learning",
    issuer: "",
    issueDate: "",
    credentialID: "",
    credentialURL: "",
  },
  {
    status: "draft",
    title: "AI Agents",
    issuer: "",
    issueDate: "",
    credentialID: "",
    credentialURL: "",
  },
  {
    status: "draft",
    title: "Prompt Engineering",
    issuer: "",
    issueDate: "",
    credentialID: "",
    credentialURL: "",
  },
];
