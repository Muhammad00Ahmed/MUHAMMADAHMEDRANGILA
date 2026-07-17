import type { Award } from "../types/awards";

/**
 * RECOGNITION & ACHIEVEMENTS
 * --------------------------
 * Only genuine, factual achievements belong here — NOT job titles, focus
 * areas, or self-described roles (those live in Experience / About).
 *
 * When you have a proof/reference link (certificate, announcement, profile),
 * add it as `referenceLink` so the item is verifiable.
 *
 * TODO(muhammad): add `referenceLink` URLs where you have public proof.
 */
export const AWARDS: Award[] = [
  {
    id: "netsol-intern",
    prize: "Experience",
    title: "Software Engineering Internship — NETSOL Technologies",
    date: "2025-07",
    grade: "Professional",
    description:
      "- Completed a software engineering internship at NETSOL Technologies.\n- Built and tested REST APIs and collaborated within an agile team.",
    // referenceLink: "" // TODO: internship certificate / verification URL
  },
  {
    id: "mentor-saylani",
    prize: "Community",
    title: "Mentor & Volunteer — Saylani Welfare",
    date: "2025-01",
    grade: "Community",
    description:
      "- Mentored learners and supported community coding events at Saylani Welfare.",
    // referenceLink: "" // TODO: reference / confirmation URL
  },
  {
    id: "started-coding-early",
    prize: "Milestone",
    title: "Started Programming Early",
    date: "2020-01",
    grade: "Personal",
    description:
      "- Began writing code as a young student, driven by curiosity about how software works.\n- Built a foundation through self-directed learning and hands-on projects.",
  },
];
