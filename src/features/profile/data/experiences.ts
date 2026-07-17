import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "independent",
    companyName: "Independent Product Development",
    // No fabricated logo — the timeline dot renders instead.
    positions: [
      {
        id: "independent-ai-fullstack",
        title: "AI Engineer & Full-Stack Product Builder",
        employmentPeriod: {
          start: "2024",
        },
        employmentType: "Independent / Freelance",
        icon: "code",
        description: `- Build AI agents, agentic workflows, and business-automation systems end to end.
- Develop full-stack web products with Next.js, React, Node.js, and PostgreSQL.
- Integrate LLM APIs (OpenAI) and orchestration tools (LangGraph) into real workflows.
- Design and ship dashboards, SaaS features, and ERP/workflow automations.`,
        skills: [
          "AI Agents",
          "LangGraph",
          "Next.js",
          "React",
          "Node.js",
          "PostgreSQL",
          "REST APIs",
          "Automation",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "netsol",
    companyName: "NETSOL Technologies, Pakistan",
    companyLogo:
      "https://ui-avatars.com/api/?name=NETSOL&background=4F46E5&color=fff&size=200",
    positions: [
      {
        id: "netsol-swe-intern",
        title: "Software Engineering Intern",
        employmentPeriod: {
          start: "05.2025",
          end: "07.2025",
        },
        employmentType: "Internship",
        icon: "code",
        description: `- Assisted in scalable web app development using React.js and Node.js.
- Built and tested REST APIs.
- Collaborated in agile teams and code reviews.
- Debugged issues and improved stability.`,
        skills: [
          "React.js",
          "Node.js",
          "REST APIs",
          "Agile",
          "Code Reviews",
          "Debugging",
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "tijara-books",
    companyName: "Tijara Books, Pakistan",
    companyLogo:
      "https://ui-avatars.com/api/?name=Tijara+Books&background=10B981&color=fff&size=200",
    positions: [
      {
        id: "tijara-app-dev-intern",
        title: "App Development Intern",
        employmentPeriod: {
          start: "05.2025",
          end: "07.2025",
        },
        employmentType: "Internship",
        icon: "code",
        description: `- Developed cross-platform mobile apps using React Native.
- Built full-stack features using Next.js, Node.js, and MongoDB.
- Integrated APIs and improved database performance.
- Assisted deployment and version control.`,
        skills: [
          "React Native",
          "Next.js",
          "Node.js",
          "MongoDB",
          "API Integration",
          "Git",
        ],
      },
    ],
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "happy-home-school",
        title: "Happy Home School, Pakistan",
        employmentPeriod: {
          start: "2024",
          end: "04.2026",
        },
        icon: "education",
        description: `- Matriculation — Computer Science.
- Completed April 2026.`,
        skills: [
          "Computer Science",
          "Programming Fundamentals",
          "Problem Solving",
        ],
      },
    ],
  },
];
