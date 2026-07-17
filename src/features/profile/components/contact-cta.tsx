"use client";

import { MailIcon } from "lucide-react";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { USER } from "@/features/profile/data/user";
import { useIsClient } from "@/hooks/use-is-client";
import { decodeEmail } from "@/utils/string";

import { SOCIAL_LINKS } from "../data/social-links";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

const LINKEDIN = SOCIAL_LINKS.find((l) => l.title === "LinkedIn")?.href;
const GITHUB = SOCIAL_LINKS.find((l) => l.title === "GitHub")?.href;

export function ContactCTA() {
  const isClient = useIsClient();
  const email = decodeEmail(USER.email);

  return (
    <Panel id="contact">
      <PanelHeader>
        <PanelTitle>Let&rsquo;s work together</PanelTitle>
      </PanelHeader>

      <PanelContent className="space-y-4">
        <p className="text-balance text-muted-foreground">
          Have a project involving AI, automation, ERP, or full-stack
          development? Let&rsquo;s discuss it.
        </p>

        <div className="flex flex-wrap gap-2">
          <Button asChild size="sm">
            <a
              href={isClient ? `mailto:${email}` : "#contact"}
              aria-label={isClient ? `Email ${email}` : "Send an email"}
            >
              <MailIcon />
              Send an Email
            </a>
          </Button>

          {LINKEDIN && (
            <Button asChild variant="outline" size="sm">
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect on LinkedIn"
              >
                <Icons.linkedin />
                Connect on LinkedIn
              </a>
            </Button>
          )}

          {GITHUB && (
            <Button asChild variant="outline" size="sm">
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View GitHub profile"
              >
                <Icons.github />
                View GitHub
              </a>
            </Button>
          )}
        </div>
      </PanelContent>
    </Panel>
  );
}
