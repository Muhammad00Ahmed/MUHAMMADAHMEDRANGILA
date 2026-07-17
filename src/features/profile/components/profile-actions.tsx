"use client";

import { ArrowDownToLineIcon, FolderGitIcon, MailIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { USER } from "@/features/profile/data/user";
import { useIsClient } from "@/hooks/use-is-client";
import { decodeEmail } from "@/utils/string";

/**
 * TODO(muhammad): add a real resume file to /public (e.g. /resume.pdf) and set
 * RESUME_URL to its path. While this is null, the "Download Resume" button is
 * hidden so no broken/placeholder link ships.
 */
const RESUME_URL: string | null = null;

export function ProfileActions() {
  const isClient = useIsClient();
  const email = decodeEmail(USER.email);

  return (
    <div className="screen-line-after flex flex-wrap gap-2 border-x border-edge p-4">
      <Button asChild size="sm">
        <Link href="/#projects">
          <FolderGitIcon />
          View Featured Work
        </Link>
      </Button>

      <Button asChild variant="outline" size="sm">
        <a
          href={isClient ? `mailto:${email}` : "#contact"}
          aria-label={isClient ? `Email ${email}` : "Contact Muhammad"}
        >
          <MailIcon />
          Contact Muhammad
        </a>
      </Button>

      {RESUME_URL && (
        <Button asChild variant="outline" size="sm">
          <a href={RESUME_URL} download>
            <ArrowDownToLineIcon />
            Download Resume
          </a>
        </Button>
      )}
    </div>
  );
}
