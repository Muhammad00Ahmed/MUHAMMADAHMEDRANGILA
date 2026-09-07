"use client";

import { useMemo, useState } from "react";

import { cn } from "@/lib/utils";

import type { CaseStudy, CaseStudyCategory } from "../types/case-study";
import { CaseStudyCard } from "./case-study-card";

const ALL = "All" as const;
type Filter = typeof ALL | CaseStudyCategory;

export function ProjectLibrary({
  studies,
  categories,
}: {
  studies: CaseStudy[];
  categories: CaseStudyCategory[];
}) {
  const [filter, setFilter] = useState<Filter>(ALL);

  const counts = useMemo(() => {
    const map = new Map<Filter, number>([[ALL, studies.length]]);
    for (const study of studies) {
      for (const category of study.categories) {
        map.set(category, (map.get(category) ?? 0) + 1);
      }
    }
    return map;
  }, [studies]);

  const visible = useMemo(
    () =>
      filter === ALL
        ? studies
        : studies.filter((study) => study.categories.includes(filter)),
    [studies, filter]
  );

  const filters: Filter[] = [ALL, ...categories];

  return (
    <>
      {/* Not sticky: the app <main> sets overflow-x-hidden, which makes it a
          scroll container and stops position:sticky from ever engaging. */}
      <div className="screen-line-after border-x border-edge bg-muted/30">
        <div
          className="no-scrollbar flex gap-1.5 overflow-x-auto p-3 sm:flex-wrap sm:overflow-x-visible"
          role="group"
          aria-label="Filter projects by category"
        >
          {filters.map((item) => {
            const active = filter === item;

            return (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                aria-pressed={active}
                className={cn(
                  "inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1",
                  "font-mono text-xs whitespace-nowrap transition-colors duration-200",
                  "focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                  active
                    ? "border-foreground bg-foreground text-background"
                    : "border-edge text-muted-foreground hover:border-muted-foreground/40 hover:text-foreground"
                )}
              >
                {item}
                <span
                  className={cn(
                    "tabular-nums",
                    active ? "text-background/60" : "text-muted-foreground/60"
                  )}
                >
                  {counts.get(item) ?? 0}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <p aria-live="polite" className="sr-only">
        {visible.length} {visible.length === 1 ? "project" : "projects"} shown
        {filter === ALL ? "" : ` in ${filter}`}.
      </p>

      <div className="border-x border-edge">
        {visible.map((study, index) => (
          <div
            key={`${filter}-${study.slug}`}
            className="motion-safe:animate-fade-in"
            style={{
              animationDelay: `${Math.min(index, 6) * 45}ms`,
              animationFillMode: "backwards",
            }}
          >
            <CaseStudyCard study={study} index={studies.indexOf(study)} />
          </div>
        ))}
      </div>
    </>
  );
}
