import { rt } from "@/lib/text";
import type { NumberedItem } from "@content/types";
import { Heading } from "./ui/Heading";

/**
 * The 01 / 02 / 03 grid.
 * - "bordered": hairline-divided cells, flush against each other (dark sections).
 * - "cards": separate bordered cards with a gap (light sections).
 * Numbers are generated from position unless `numbered` is false.
 */
export function NumberedGrid({
  items,
  variant = "bordered",
  numbered = true,
  cols,
}: {
  items: NumberedItem[];
  variant?: "bordered" | "cards";
  numbered?: boolean;
  /** Desktop columns. Defaults to 3 (or the item count when fewer). */
  cols?: 2 | 3 | 4;
}) {
  const desktop = cols ?? (Math.min(items.length, 3) as 2 | 3);
  const colsClass =
    desktop === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : desktop === 2
        ? "sm:grid-cols-2"
        : items.length <= 3
          ? "md:grid-cols-3"
          : "sm:grid-cols-2 lg:grid-cols-3";

  const cells = items.map((item, i) => (
    <li
      key={item.title}
      className={
        variant === "bordered"
          ? "flex flex-col gap-2.5 border-b border-r border-rule px-[26px] py-7 md:px-7 md:py-8"
          : "flex flex-col gap-2.5 rounded-card border border-rule bg-card p-6"
      }
    >
      {numbered && (
        <span className="font-display text-[18px] font-bold text-accent">
          {String(i + 1).padStart(2, "0")}
        </span>
      )}
      <Heading as="h3" size="h3-md">
        {item.title}
      </Heading>
      {item.body && <p className="m-0 text-[15px] leading-[1.6] text-body md:text-base">{rt(item.body)}</p>}
    </li>
  ));

  return (
    <ol
      className={`m-0 grid list-none p-0 ${colsClass} ${
        variant === "bordered" ? "border-l border-t border-rule" : "gap-4"
      }`}
    >
      {cells}
    </ol>
  );
}
