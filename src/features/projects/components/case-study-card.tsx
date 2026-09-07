"use client";

import { ArrowUpRightIcon, InfoIcon } from "lucide-react";

import {
  CollapsibleContent,
  CollapsibleTrigger,
  CollapsibleWithContext,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

import { CATEGORY_ACCENT, STATUS_LABEL } from "../lib/presentation";
import type { CaseStudy, CaseStudyStatus } from "../types/case-study";

export function CaseStudyCard({
  study,
  index,
}: {
  study: CaseStudy;
  index: number;
}) {
  const accent = CATEGORY_ACCENT[study.categories[0]];
  const headingId = `${study.slug}-title`;

  return (
    <CollapsibleWithContext asChild>
      <article
        id={study.slug}
        aria-labelledby={headingId}
        style={{ "--study-accent": accent } as React.CSSProperties}
        className={cn(
          "group/card relative isolate scroll-mt-24 border-b border-edge",
          "transition-colors duration-300 hover:bg-accent2",
          "data-[state=open]:bg-accent2"
        )}
      >
        {/* Accent hairline that draws in from the left on hover/open. */}
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-(--study-accent)",
            "transition-transform duration-500 ease-out",
            "group-hover/card:scale-x-100 group-data-[state=open]/card:scale-x-100"
          )}
        />

        <div className="flex">
          {/* Index rail */}
          <div className="flex w-12 shrink-0 flex-col items-center gap-2 pt-6 sm:w-16">
            <span className="font-mono text-xs text-muted-foreground tabular-nums select-none">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span
              aria-hidden
              className="size-1.5 rounded-full bg-(--study-accent) opacity-60 transition-opacity duration-300 group-hover/card:opacity-100"
            />
          </div>

          <div className="min-w-0 flex-1 border-l border-dashed border-edge p-4 pt-6 sm:p-6">
            <div className="mb-3 flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h3
                  id={headingId}
                  className="text-xl font-semibold tracking-tight text-balance sm:text-2xl"
                >
                  {study.name}
                </h3>

                {/* The five-second read. */}
                <p className="mt-1.5 text-[15px] leading-snug text-balance text-foreground/75">
                  {study.tagline}
                </p>
              </div>

              <StatusBadge status={study.status} />
            </div>

            <ul className="mb-5 flex flex-wrap items-center gap-x-2 gap-y-1">
              {study.categories.map((category) => (
                <li
                  key={category}
                  className="font-mono text-[11px] tracking-wide text-muted-foreground uppercase after:ml-2 after:text-edge after:content-['/'] last:after:hidden"
                >
                  {category}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-dashed border-edge pt-4">
              <ul className="flex flex-wrap gap-1.5">
                {study.platforms.map((platform) => (
                  <li
                    key={platform}
                    className="rounded border border-edge bg-background px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground"
                  >
                    {platform}
                  </li>
                ))}
              </ul>

              <CollapsibleTrigger
                className={cn(
                  "group/trigger inline-flex items-center gap-1.5 rounded-md border border-edge bg-background px-3 py-1.5",
                  "text-sm font-medium transition-colors hover:bg-accent",
                  "focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                )}
              >
                <span className="group-data-[state=open]/trigger:hidden">
                  View Case Study
                </span>
                <span className="hidden group-data-[state=open]/trigger:inline">
                  Close Case Study
                </span>
                <ArrowUpRightIcon
                  className="size-3.5 transition-transform duration-300 group-data-[state=open]/trigger:rotate-135"
                  aria-hidden
                />
              </CollapsibleTrigger>
            </div>
          </div>
        </div>

        {/* forceMount keeps the case study in the server HTML (Radix marks it
            hidden while closed) so the detail is indexable rather than living
            only in the client bundle. */}
        <CollapsibleContent
          forceMount
          className={cn(
            "overflow-hidden",
            // forceMount means Radix does not set `hidden`, so the closed state
            // is collapsed in CSS. This also holds before hydration, where the
            // Radix height variable the animation needs does not exist yet.
            "data-[state=closed]:h-0",
            "data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down"
          )}
        >
          <CaseStudyDetail study={study} />
        </CollapsibleContent>
      </article>
    </CollapsibleWithContext>
  );
}

function CaseStudyDetail({ study }: { study: CaseStudy }) {
  return (
    <div className="border-t border-edge bg-background/60">
      <div className="space-y-8 p-4 pt-6 sm:p-6 sm:pl-22">
        <p className="max-w-prose text-[15px] leading-relaxed text-muted-foreground">
          {study.summary}
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          <Section label="Problem">
            <p className="text-sm leading-relaxed text-muted-foreground">
              {study.problem}
            </p>
          </Section>

          <Section label="Solution">
            <p className="text-sm leading-relaxed text-muted-foreground">
              {study.solution}
            </p>
          </Section>
        </div>

        <Section label={`Key Features (${study.features.length})`}>
          <ul className="grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
            {study.features.map((feature) => (
              <li
                key={feature}
                className="flex gap-2 text-sm text-muted-foreground"
              >
                <span
                  aria-hidden
                  className="mt-[7px] size-1 shrink-0 rounded-full bg-(--study-accent)"
                />
                {feature}
              </li>
            ))}
          </ul>
        </Section>

        <div className="grid gap-6 sm:grid-cols-2">
          <Section label="Technology Stack">
            <ul className="flex flex-wrap gap-1.5">
              {study.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-lg border bg-zinc-50 px-1.5 py-0.5 font-mono text-xs text-muted-foreground dark:bg-zinc-900"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </Section>

          <Section label="Platform Availability">
            <ul className="flex flex-wrap gap-1.5">
              {study.platforms.map((platform) => (
                <li
                  key={platform}
                  className="rounded-lg border bg-zinc-50 px-1.5 py-0.5 font-mono text-xs text-muted-foreground dark:bg-zinc-900"
                >
                  {platform}
                </li>
              ))}
            </ul>
          </Section>
        </div>

        <Section label="Business Impact">
          <ul className="space-y-2">
            {study.impact.map((point) => (
              <li
                key={point}
                className="border-l-2 border-(--study-accent) pl-3 text-sm leading-relaxed text-foreground/80"
              >
                {point}
              </li>
            ))}
          </ul>
        </Section>

        {study.note && (
          <p className="flex gap-2.5 rounded-lg border border-edge bg-muted/50 p-3 text-xs leading-relaxed text-muted-foreground">
            <InfoIcon className="mt-px size-4 shrink-0" aria-hidden />
            <span>{study.note}</span>
          </p>
        )}
      </div>
    </div>
  );
}

function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-2.5">
      <h4 className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
        {label}
      </h4>
      {children}
    </section>
  );
}

function StatusBadge({ status }: { status: CaseStudyStatus }) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2 py-0.5",
        "font-mono text-[10px] leading-none font-medium tracking-wide uppercase select-none",
        status === "live"
          ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
          : "border-edge bg-muted text-muted-foreground"
      )}
    >
      {status === "live" && (
        <span
          aria-hidden
          className="size-1.5 rounded-full bg-emerald-500 motion-safe:animate-pulse"
        />
      )}
      {STATUS_LABEL[status]}
    </span>
  );
}
