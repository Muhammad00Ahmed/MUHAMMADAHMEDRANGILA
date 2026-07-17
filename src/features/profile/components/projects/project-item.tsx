import {
  ArrowUpRightIcon,
  BookOpenIcon,
  InfinityIcon,
  LockIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Icons } from "@/components/icons";
import { Markdown } from "@/components/markdown";
import {
  CollapsibleChevronsIcon,
  CollapsibleContent,
  CollapsibleTrigger,
  CollapsibleWithContext,
} from "@/components/ui/collapsible";
import { Tag } from "@/components/ui/tag";
import { Prose } from "@/components/ui/typography";
import { UTM_PARAMS } from "@/config/site";
import { cn } from "@/lib/utils";
import { addQueryParams } from "@/utils/url";

import type { Project, ProjectStatus } from "../../types/projects";

const STATUS_LABEL: Record<ProjectStatus, string> = {
  "in-development": "In Development",
  live: "Live",
  completed: "Completed",
  private: "Private Project",
};

export function ProjectItem({
  className,
  project,
}: {
  className?: string;
  project: Project;
}) {
  const { start, end } = project.period;
  const isOngoing = !end;

  const hasLiveDemo = Boolean(project.link);
  const hasRepo = Boolean(project.repo);
  const hasCaseStudy = Boolean(project.caseStudy);
  const hasAnyLink = hasLiveDemo || hasRepo || hasCaseStudy;

  const status: ProjectStatus =
    project.status ?? (hasAnyLink ? "completed" : "private");

  return (
    <CollapsibleWithContext defaultOpen={project.isExpanded} asChild>
      <div className={className}>
        <div className="flex items-center hover:bg-accent2">
          {project.logo ? (
            <Image
              src={project.logo}
              alt=""
              width={32}
              height={32}
              quality={100}
              className="mx-4 flex size-6 shrink-0 select-none rounded"
              aria-hidden="true"
            />
          ) : (
            <div
              className="mx-4 flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-edge ring-offset-1 ring-offset-background select-none"
              aria-hidden="true"
            >
              <Icons.project className="size-4" />
            </div>
          )}

          <div className="flex-1 border-l border-dashed border-edge">
            <CollapsibleTrigger className="flex w-full items-center gap-4 p-4 pr-2 text-left select-none">
              <div className="flex-1">
                <h3 className="mb-1 flex flex-wrap items-center gap-x-2 gap-y-1 leading-snug font-medium text-balance">
                  {project.title}
                  <StatusBadge status={status} />
                </h3>

                <dl className="text-sm text-muted-foreground">
                  <dt className="sr-only">Period</dt>
                  <dd className="flex items-center gap-0.5">
                    <span>{start}</span>
                    <span className="font-mono">—</span>
                    {isOngoing ? (
                      <>
                        <InfinityIcon
                          className="size-4.5 translate-y-[0.5px]"
                          aria-hidden
                        />
                        <span className="sr-only">Present</span>
                      </>
                    ) : (
                      <span>{end}</span>
                    )}
                  </dd>
                </dl>
              </div>

              <div
                className="shrink-0 text-muted-foreground [&_svg]:size-4"
                aria-hidden
              >
                <CollapsibleChevronsIcon />
              </div>
            </CollapsibleTrigger>
          </div>
        </div>

        <CollapsibleContent className="group overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
          <div className="border-t border-edge shadow-inner">
            <div className="space-y-4 p-4 duration-300 group-data-[state=closed]:animate-fade-out group-data-[state=open]:animate-fade-in">
              {project.description && (
                <Prose>
                  <Markdown>{project.description}</Markdown>
                </Prose>
              )}

              {project.skills.length > 0 && (
                <ul className="flex flex-wrap gap-1.5">
                  {project.skills.map((skill, index) => (
                    <li key={index} className="flex">
                      <Tag>{skill}</Tag>
                    </li>
                  ))}
                </ul>
              )}

              {/* Conditional actions — only rendered when a real link exists. */}
              {hasAnyLink ? (
                <div className="flex flex-wrap gap-2">
                  {hasCaseStudy && (
                    <Link
                      href={project.caseStudy!}
                      className="inline-flex items-center gap-1.5 rounded-md border border-edge bg-muted/40 px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-accent2 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                    >
                      <BookOpenIcon className="size-4" aria-hidden />
                      Read Case Study
                    </Link>
                  )}
                  {hasLiveDemo && (
                    <a
                      href={addQueryParams(project.link!, UTM_PARAMS)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md border border-edge bg-muted/40 px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-accent2 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                    >
                      <ArrowUpRightIcon className="size-4" aria-hidden />
                      Live Demo
                    </a>
                  )}
                  {hasRepo && (
                    <a
                      href={project.repo!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md border border-edge bg-muted/40 px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-accent2 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                    >
                      <Icons.github className="size-4" aria-hidden />
                      GitHub Repository
                    </a>
                  )}
                </div>
              ) : (
                <p className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                  <LockIcon className="size-4" aria-hidden />
                  Private project — links available on request.
                </p>
              )}
            </div>
          </div>
        </CollapsibleContent>
      </div>
    </CollapsibleWithContext>
  );
}

function StatusBadge({ status }: { status: ProjectStatus }) {
  const isLive = status === "live";
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2 py-0.5 font-mono text-[10px] leading-none font-medium tracking-wide uppercase select-none",
        isLive
          ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
          : "border-edge bg-muted text-muted-foreground"
      )}
    >
      {STATUS_LABEL[status]}
    </span>
  );
}
