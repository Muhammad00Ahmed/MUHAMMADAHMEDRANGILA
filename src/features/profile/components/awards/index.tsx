import dayjs from "dayjs";

import { CollapsibleList } from "@/components/collapsible-list";

import { AWARDS } from "../../data/awards";
import { Panel, PanelHeader, PanelTitle } from "../panel";
import { AwardItem } from "./award-item";

const SORTED_AWARDS = [...AWARDS].sort((a, b) => {
  return dayjs(b.date).diff(dayjs(a.date));
});

export function Awards() {
  // Honesty: never render an empty recognition section.
  if (SORTED_AWARDS.length === 0) {
    return null;
  }

  return (
    <Panel id="awards">
      <PanelHeader>
        <PanelTitle>
          Recognition &amp; Achievements
          <sup className="ml-1 font-mono text-sm font-medium text-muted-foreground select-none">
            ({SORTED_AWARDS.length})
          </sup>
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={SORTED_AWARDS}
        max={8}
        keyExtractor={(item) => item.id}
        renderItem={(item) => <AwardItem award={item} />}
      />
    </Panel>
  );
}
