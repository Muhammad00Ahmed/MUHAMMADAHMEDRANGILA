import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Muhammad Ahmed",
  lastName: "Rangila",
  displayName: "Muhammad Ahmed Rangila",
  username: "Muhammad00Ahmed",
  gender: "male",
  pronouns: "he/him",
  bio: "AI engineer and full-stack product builder. I build AI agents, business automation, ERP integrations, and production-ready web products.",
  timeZone: "Asia/Karachi",
  flipSentences: [
    "AI Engineer",
    "Full-Stack Product Builder",
    "Business Automation Developer",
    "Agentic Systems Developer",
    "ERP & Workflow Automation",
  ],
  address: "Karachi, Pakistan",
  phoneNumber: "KzkyMzI0MjQ1MDMwMA==", // E.164 format, base64 encoded (https://t.io.vn/
  secondPhoneNumber: "",
  // base64-string-converter)
  email: "bWFobWVkcmFuZ2lsYUBnbWFpbC5jb20=", // base64 encoded
  website: "https://muhammad-ahmed-rangila-portfolio.vercel.app",
  jobTitle: "AI Engineer & Full-Stack Product Builder",
  jobs: [
    {
      title: "AI Engineer & Full-Stack Product Builder",
      company: "Independent Product Development",
      website: "https://github.com/Muhammad00Ahmed",
    },
    {
      title: "Software Engineering Intern",
      company: "NETSOL Technologies",
      website: "https://www.netsoltech.com",
    },
  ],
  about: `
- I'm **Muhammad Ahmed Rangila**, an AI engineer and full-stack product builder focused on creating intelligent software for real business problems.
- I build **AI agents**, **agentic workflows**, **ERP and business automation**, **SaaS applications**, **dashboards**, and **full-stack web products** — from idea to deployment.
- I enjoy turning complex workflows into practical systems that are easier to use, automate, and scale. My work combines product thinking, software engineering, AI integration, and user-focused design.
- My core toolkit is **Python**, **TypeScript**, **Next.js**, **React**, **Node.js**, and **PostgreSQL**, with **OpenAI APIs**, **LangGraph**, and **Supabase** for AI-driven features, and **Docker** for deployment.
- I started programming young and have been building ever since — always learning, always shipping.
`,
  avatar: "/images/me.jpg",
  ogImage: "/images/og-image-light.png",
  namePronunciationUrl: "",
  keywords: [
    "muhammad ahmed rangila",
    "Muhammad00Ahmed",
    "ai engineer",
    "full stack developer",
    "generative ai engineer",
    "ai agent developer",
    "automation engineer",
    "cloud engineer",
    "ui ux specialist",
    "ui ux designer",
    "software engineer",
    "react developer",
    "nextjs developer",
    "react native developer",
    "machine learning",
    "generative ai",
    "ai agents",
    "rag",
    "multi-agent systems",
    "nodejs developer",
    "nestjs developer",
    "young developer pakistan",
    "karachi developer",
  ],
  dateCreated: "2025-10-12", // YYYY-MM-DD
};
