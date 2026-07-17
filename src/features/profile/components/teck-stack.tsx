import Image from "next/image";
import React from "react";

import { SimpleTooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import { TECH_STACK } from "../data/tech-stack";
import type { TechStack } from "../types/tech-stack";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

const PRIMARY_STACK = TECH_STACK.filter((t) => t.primary);
const WORKING_KNOWLEDGE = TECH_STACK.filter((t) => !t.primary);

function TechGrid({ items }: { items: TechStack[] }) {
  return (
    <ul className="flex flex-wrap gap-4 select-none">
      {items.map((tech) => (
        <li key={tech.key} className="flex">
          <SimpleTooltip content={tech.title}>
            <a
              href={tech.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={tech.title}
              className="rounded-sm transition-transform hover:scale-110 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              <Image
                src={tech.iconUrl}
                alt={`${tech.title} icon`}
                width={32}
                height={32}
                unoptimized
                className={cn(
                  "h-8 w-8 object-contain",
                  tech.theme && "dark:invert"
                )}
              />
              <span className="sr-only">{tech.title}</span>
            </a>
          </SimpleTooltip>
        </li>
      ))}
    </ul>
  );
}

export function TeckStack() {
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <PanelContent
        className={cn(
          "space-y-6",
          "[--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5",
          "bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center",
          "bg-zinc-950/0.75 dark:bg-white/0.75"
        )}
      >
        <section aria-labelledby="stack-primary">
          <h3
            id="stack-primary"
            className="mb-3 font-mono text-xs font-medium tracking-wide text-muted-foreground uppercase"
          >
            Primary stack
          </h3>
          <TechGrid items={PRIMARY_STACK} />
        </section>

        {WORKING_KNOWLEDGE.length > 0 && (
          <section aria-labelledby="stack-working">
            <h3
              id="stack-working"
              className="mb-3 font-mono text-xs font-medium tracking-wide text-muted-foreground uppercase"
            >
              Working knowledge
            </h3>
            <TechGrid items={WORKING_KNOWLEDGE} />
          </section>
        )}
      </PanelContent>
    </Panel>
  );
}
