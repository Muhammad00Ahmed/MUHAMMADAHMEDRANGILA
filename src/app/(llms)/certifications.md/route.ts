import { CERTIFICATIONS } from "@/features/profile/data/certifications";

const published = CERTIFICATIONS.filter((c) => c.status === "published");

const content = `# Certifications

${
  published.length > 0
    ? published
        .map((item) =>
          item.credentialURL
            ? `- [${item.title}](${item.credentialURL})`
            : `- ${item.title}`
        )
        .join("\n")
    : "_No published certifications yet._"
}
`;

export const dynamic = "force-static";

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  });
}
