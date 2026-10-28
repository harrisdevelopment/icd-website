import { rt } from "@/lib/text";
import { site } from "@content/site";
import type { InfoRow } from "@content/types";
import { Button } from "./ui/Button";
import { Heading } from "./ui/Heading";

/** Dark sidebar card of key/value facts (NAICS, PSC, UEI, CAGE, SAM, ...). */
export function ContractingInfoCard({
  title,
  rows,
  capabilityLink = false,
}: {
  title: string;
  rows: InfoRow[];
  capabilityLink?: boolean;
}) {
  return (
    <aside
      aria-label={title}
      data-surface="dark"
      className="flex flex-col gap-[18px] rounded-card bg-ink-900 px-7 py-8 text-text"
    >
      <Heading size="h3" className="text-[28px]">
        {title}
      </Heading>
      <dl className="m-0 flex flex-col gap-[18px]">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex justify-between gap-4 border-b border-line-dark pb-3.5"
          >
            <dt className="text-[13px] uppercase tracking-[0.1em] text-text-muted">{row.label}</dt>
            <dd className="m-0 text-right font-bold text-text-strong">{rt(row.value)}</dd>
          </div>
        ))}
      </dl>
      {capabilityLink && (
        <Button href={site.capabilityStatement} variant="secondary" size="sm" external>
          Capability Statement (PDF)
        </Button>
      )}
    </aside>
  );
}
