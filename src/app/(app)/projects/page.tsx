import { ArrowRightIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import type { ItemList, WithContext } from "schema-dts";

import { SITE_INFO } from "@/config/site";
import { USER } from "@/features/profile/data/user";
import { ProjectLibrary } from "@/features/projects/components/project-library";
import {
  CASE_STUDIES,
  CASE_STUDY_CATEGORIES,
} from "@/features/projects/data/case-studies";
import { cn } from "@/lib/utils";

const TITLE = "Projects";
const DESCRIPTION =
  "A library of AI, ERP, automation and SaaS products built by Muhammad Ahmed Rangila — each with the problem it solves, how it works, and what it changes for the business.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: `${TITLE} – ${USER.displayName}`,
    description: DESCRIPTION,
    url: "/projects",
    type: "website",
    images: [
      { url: USER.ogImage, width: 1200, height: 630, alt: USER.displayName },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} – ${USER.displayName}`,
    description: DESCRIPTION,
    images: [USER.ogImage],
  },
};

const PLATFORM_COUNT = new Set(CASE_STUDIES.flatMap((s) => s.platforms)).size;

function getJsonLd(): WithContext<ItemList> {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Projects by ${USER.displayName}`,
    description: DESCRIPTION,
    numberOfItems: CASE_STUDIES.length,
    itemListElement: CASE_STUDIES.map((study, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: study.name,
        description: study.tagline,
        applicationCategory: "BusinessApplication",
        operatingSystem: study.platforms.join(", "),
        url: `${SITE_INFO.url}/projects#${study.slug}`,
        author: {
          "@type": "Person",
          name: USER.displayName,
          url: SITE_INFO.url,
        },
      },
    })),
  };
}

export default function ProjectsPage() {
  return (
    <div className="mx-auto md:max-w-3xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getJsonLd()).replace(/</g, "\\u003c"),
        }}
      />

      <Hatch />

      <section className="screen-line-after border-x border-edge px-4 py-10 sm:px-6 sm:py-14">
        <p className="mb-4 font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Project Library
        </p>

        <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Products built to run real businesses.
        </h1>

        <p className="mt-4 max-w-prose text-base leading-relaxed text-muted-foreground">
          Each project below is a working product with a problem behind it — not
          a demo. Read the one-line summary in five seconds, or open the case
          study for the problem, the solution, the stack and what it changes for
          the business.
        </p>
      </section>

      <dl className="screen-line-after grid grid-cols-3 divide-x divide-edge border-x border-edge">
        <Stat label="Products" value={CASE_STUDIES.length} />
        <Stat label="Categories" value={CASE_STUDY_CATEGORIES.length} />
        <Stat label="Platforms" value={PLATFORM_COUNT} />
      </dl>

      <ProjectLibrary
        studies={CASE_STUDIES}
        categories={CASE_STUDY_CATEGORIES}
      />

      <Hatch />

      <section className="screen-line-before screen-line-after border-x border-edge px-4 py-10 sm:px-6">
        <h2 className="text-xl font-semibold tracking-tight">
          Building something in this space?
        </h2>
        <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted-foreground">
          Most of these started as someone describing a process that was eating
          their week. If that sounds familiar, I am happy to talk through it.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-1.5 rounded-md bg-foreground px-3 py-1.5 text-sm font-medium text-background transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            Get in touch
            <ArrowRightIcon className="size-4" aria-hidden />
          </Link>

          <Link
            href="/products/shopflow"
            className="inline-flex items-center gap-1.5 rounded-md border border-edge bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            ShopFlow case study
          </Link>
        </div>
      </section>

      <Hatch />
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="px-4 py-4 sm:px-6">
      <dt className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
        {label}
      </dt>
      <dd className="mt-1 font-mono text-2xl font-medium tabular-nums">
        {value}
      </dd>
    </div>
  );
}

/** Diagonal hatch strip used as a section break, matching the docs layout. */
function Hatch({ className }: { className?: string }) {
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
