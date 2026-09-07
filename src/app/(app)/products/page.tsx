import { ArrowRightIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import type { ItemList, WithContext } from "schema-dts";

import { SITE_INFO } from "@/config/site";
import { USER } from "@/features/profile/data/user";
import { CASE_STUDIES } from "@/features/projects/data/case-studies";
import {
  CATEGORY_ACCENT,
  STATUS_LABEL,
} from "@/features/projects/lib/presentation";
import { cn } from "@/lib/utils";

const TITLE = "Products";
const DESCRIPTION =
  "The product catalogue of Muhammad Ahmed Rangila — AI, ERP, accounting, automation and voice products, plus ShopFlow, a live shop management system.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: `${TITLE} – ${USER.displayName}`,
    description: DESCRIPTION,
    url: "/products",
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

type CatalogueEntry = {
  name: string;
  tagline: string;
  category: string;
  accent: string;
  status: string;
  isLive: boolean;
  href: string;
  platforms: string[];
};

const SHOPFLOW: CatalogueEntry = {
  name: "ShopFlow",
  tagline: "Run a shop end to end, from the counter to the books.",
  category: "SaaS",
  accent: CATEGORY_ACCENT.SaaS,
  status: "Live",
  isLive: true,
  href: "/products/shopflow",
  platforms: ["Web"],
};

const CATALOGUE: CatalogueEntry[] = [
  SHOPFLOW,
  ...CASE_STUDIES.map((study) => ({
    name: study.name,
    tagline: study.tagline,
    category: study.categories[0],
    accent: CATEGORY_ACCENT[study.categories[0]],
    status: STATUS_LABEL[study.status],
    isLive: study.status === "live",
    href: `/projects#${study.slug}`,
    platforms: study.platforms,
  })),
];

function getJsonLd(): WithContext<ItemList> {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Products by ${USER.displayName}`,
    description: DESCRIPTION,
    numberOfItems: CATALOGUE.length,
    itemListElement: CATALOGUE.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: entry.name,
        description: entry.tagline,
        applicationCategory: "BusinessApplication",
        operatingSystem: entry.platforms.join(", "),
        url: `${SITE_INFO.url}${entry.href}`,
        author: {
          "@type": "Person",
          name: USER.displayName,
          url: SITE_INFO.url,
        },
      },
    })),
  };
}

export default function ProductsPage() {
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
          Product Catalogue
        </p>

        <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Software products, not side projects.
        </h1>

        <p className="mt-4 max-w-prose text-base leading-relaxed text-muted-foreground">
          {CATALOGUE.length} products across AI, ERP, accounting, automation and
          voice. Pick one to read the full case study — the problem it solves,
          how it is built, and what it changes for the business.
        </p>
      </section>

      <div className="grid border-x border-edge sm:grid-cols-2">
        {CATALOGUE.map((entry, index) => (
          <Link
            key={entry.name}
            href={entry.href}
            style={{ "--study-accent": entry.accent } as React.CSSProperties}
            className={cn(
              "group relative flex flex-col gap-3 border-b border-edge p-5",
              "transition-colors duration-300 hover:bg-accent2",
              "focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
              // Vertical rule between the two columns, without a trailing edge.
              "sm:odd:border-r"
            )}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-(--study-accent) transition-transform duration-500 ease-out group-hover:scale-x-100"
            />

            <div className="flex items-center gap-2">
              <span
                aria-hidden
                className="size-1.5 shrink-0 rounded-full bg-(--study-accent)"
              />
              <span className="font-mono text-[11px] tracking-wide text-muted-foreground uppercase">
                {entry.category}
              </span>
              <span className="ml-auto font-mono text-[10px] text-muted-foreground tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <div>
              <h2 className="text-lg font-semibold tracking-tight">
                {entry.name}
              </h2>
              <p className="mt-1 text-sm leading-snug text-balance text-muted-foreground">
                {entry.tagline}
              </p>
            </div>

            <div className="mt-auto flex items-center justify-between gap-3 pt-1">
              <span
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5",
                  "font-mono text-[10px] leading-none tracking-wide uppercase",
                  entry.isLive
                    ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                    : "border-edge bg-muted text-muted-foreground"
                )}
              >
                {entry.isLive && (
                  <span
                    aria-hidden
                    className="size-1.5 rounded-full bg-emerald-500 motion-safe:animate-pulse"
                  />
                )}
                {entry.status}
              </span>

              <span className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground transition-colors group-hover:text-foreground">
                View
                <ArrowRightIcon
                  className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </span>
            </div>
          </Link>
        ))}
      </div>

      <Hatch />

      <section className="screen-line-before screen-line-after border-x border-edge px-4 py-10 sm:px-6">
        <h2 className="text-xl font-semibold tracking-tight">
          Want the detail behind any of these?
        </h2>
        <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted-foreground">
          The project library carries the full case study for every product —
          problem, solution, feature set, stack and business impact.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 rounded-md bg-foreground px-3 py-1.5 text-sm font-medium text-background transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            Open the project library
            <ArrowRightIcon className="size-4" aria-hidden />
          </Link>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-1.5 rounded-md border border-edge bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            Get in touch
          </Link>
        </div>
      </section>

      <Hatch />
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
