import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { CollapsibleList } from "@/components/collapsible-list";
import { CASE_STUDIES } from "@/features/projects/data/case-studies";

import { PROJECTS } from "../../data/projects";
import { Panel, PanelHeader, PanelTitle } from "../panel";
import { ProjectItem } from "./project-item";

export function Projects() {
  return (
    <Panel id="projects">
      <PanelHeader className="flex flex-wrap items-center justify-between gap-3">
        <PanelTitle>
          Projects
          <sup className="ml-1 font-mono text-sm text-muted-foreground select-none">
            ({PROJECTS.length})
          </sup>
        </PanelTitle>

        <Link
          href="/projects"
          className="group inline-flex items-center gap-1.5 rounded-md border border-edge bg-background px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
          {CASE_STUDIES.length} product case studies
          <ArrowRightIcon
            className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
            aria-hidden
          />
        </Link>
      </PanelHeader>

      <CollapsibleList
        items={PROJECTS}
        max={4}
        renderItem={(item) => <ProjectItem project={item} />}
      />
    </Panel>
  );
}
