import { SITE_INFO } from "@/config/site";
import { PROJECTS } from "@/features/profile/data/projects";
import { CASE_STUDIES } from "@/features/projects/data/case-studies";

const STATUS_LABEL: Record<string, string> = {
  live: "Live",
  "in-development": "In Development",
  beta: "Beta",
  prototype: "Prototype",
  research: "Research",
};

const caseStudies = CASE_STUDIES.map((study) => {
  const lines = [
    `## ${study.name}`,
    "",
    `> ${study.tagline}`,
    "",
    `Case study: ${SITE_INFO.url}/projects#${study.slug}`,
    `Category: ${study.categories.join(", ")}`,
    `Status: ${STATUS_LABEL[study.status] ?? study.status}`,
    `Platforms: ${study.platforms.join(", ")}`,
    `Tech stack: ${study.stack.join(", ")}`,
    "",
    `**Problem.** ${study.problem}`,
    "",
    `**Solution.** ${study.solution}`,
    "",
    "**Key features:**",
    ...study.features.map((feature) => `- ${feature}`),
    "",
    "**Business impact:**",
    ...study.impact.map((point) => `- ${point}`),
  ];

  if (study.note) {
    lines.push("", `**Note.** ${study.note}`);
  }

  return lines.join("\n");
}).join("\n\n");

const otherProjects = PROJECTS.map((item) => {
  const url = item.link || item.repo || item.caseStudy || "Private project";
  const description = item.description ? `\n\n${item.description.trim()}` : "";
  return `## ${item.title}\n\nProject URL: ${url}\n\nSkills: ${item.skills.join(", ")}${description}`;
}).join("\n\n");

const content = `# Projects

Full project library: ${SITE_INFO.url}/projects

# Product Case Studies

${caseStudies}

# Other Projects

${otherProjects}
`;

export const dynamic = "force-static";

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  });
}
