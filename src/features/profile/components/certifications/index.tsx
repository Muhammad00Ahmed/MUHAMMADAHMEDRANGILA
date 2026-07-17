import { CollapsibleList } from "@/components/collapsible-list";

import { CERTIFICATIONS } from "../../data/certifications";
import { Panel, PanelHeader, PanelTitle } from "../panel";
import { CertificationItem } from "./certification-item";

// Only verifiable, published certifications are shown publicly.
const PUBLISHED_CERTIFICATIONS = CERTIFICATIONS.filter(
  (c) => c.status === "published"
);

export function Certifications() {
  // Honesty: never render an empty certifications section.
  if (PUBLISHED_CERTIFICATIONS.length === 0) {
    return null;
  }

  return (
    <Panel id="certs">
      <PanelHeader>
        <PanelTitle>
          Certifications
          <sup className="ml-1 font-mono text-sm font-medium text-muted-foreground select-none">
            ({PUBLISHED_CERTIFICATIONS.length})
          </sup>
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={PUBLISHED_CERTIFICATIONS}
        max={8}
        renderItem={(item) => <CertificationItem certification={item} />}
      />
    </Panel>
  );
}
