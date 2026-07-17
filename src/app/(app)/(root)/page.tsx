import dayjs from "dayjs";
import type { ProfilePage as PageSchema, WithContext } from "schema-dts";

import { SITE_INFO } from "@/config/site";
import { About } from "@/features/profile/components/about";
import { Awards } from "@/features/profile/components/awards";
import { Blog } from "@/features/profile/components/blog";
import { Brand } from "@/features/profile/components/brand";
import { Certifications } from "@/features/profile/components/certifications";
import { ContactCTA } from "@/features/profile/components/contact-cta";
import { Experiences } from "@/features/profile/components/experiences";
import { GitHubContributions } from "@/features/profile/components/github-contributions";
import { Overview } from "@/features/profile/components/overview";
import { ProfileActions } from "@/features/profile/components/profile-actions";
import { ProfileCover } from "@/features/profile/components/profile-cover";
import { ProfileHeader } from "@/features/profile/components/profile-header";
import { Projects } from "@/features/profile/components/projects";
import { SocialLinks } from "@/features/profile/components/social-links";
import { TeckStack } from "@/features/profile/components/teck-stack";
import { TestimonialsMarquee } from "@/features/profile/components/testimonials-marquee";
import { AWARDS } from "@/features/profile/data/awards";
import { CERTIFICATIONS } from "@/features/profile/data/certifications";
import { SOCIAL_LINKS } from "@/features/profile/data/social-links";
import { USER } from "@/features/profile/data/user";
import { cn } from "@/lib/utils";

const hasAwards = AWARDS.length > 0;
const hasCertifications = CERTIFICATIONS.some((c) => c.status === "published");

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getPageJsonLd()).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto md:max-w-3xl">
        <ProfileCover />
        <ProfileHeader />
        <ProfileActions />
        <Separator />

        <Overview />
        <Separator />

        <SocialLinks />
        <Separator />

        <About />
        <Separator />

        <GitHubContributions />
        <Separator />

        <TestimonialsMarquee />
        <Separator />

        <TeckStack />
        <Separator />

        <Blog />
        <Separator />

        <Experiences />
        <Separator />

        <Projects />
        <Separator />

        {/* Awards and Certifications self-hide when they have no verifiable
            content; render each with its separator only when present so no
            orphan separator remains. */}
        {hasAwards && (
          <>
            <Awards />
            <Separator />
          </>
        )}

        {hasCertifications && (
          <>
            <Certifications />
            <Separator />
          </>
        )}

        <ContactCTA />
        <Separator />

        <Brand />
        <Separator />
      </div>
    </>
  );
}

function getPageJsonLd(): WithContext<PageSchema> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: dayjs(USER.dateCreated).toISOString(),
    dateModified: dayjs().toISOString(),
    mainEntity: {
      "@type": "Person",
      name: USER.displayName,
      alternateName: USER.username,
      identifier: USER.username,
      description: USER.bio,
      image: new URL(USER.avatar, SITE_INFO.url).toString(),
      url: SITE_INFO.url,
      jobTitle: USER.jobTitle,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Karachi",
        addressCountry: "PK",
      },
      knowsAbout: [
        "AI Engineering",
        "AI Agents",
        "Agentic Workflows",
        "Business Automation",
        "ERP Integration",
        "Full-Stack Development",
        "Next.js",
        "TypeScript",
        "Python",
      ],
      sameAs: SOCIAL_LINKS.map((link) => link.href),
    },
  };
}

function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-8 w-full border-x border-edge",
        "before:absolute before:-left-[100vw] before:-z-1 before:h-8 before:w-[200vw]",
        "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56",
        className
      )}
    />
  );
}
