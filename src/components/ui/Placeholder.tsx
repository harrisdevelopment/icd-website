import type { ReactNode } from "react";

/** Marks info the client still has to supply. Gold with a dashed underline. */
export function Placeholder({
  children,
  tag = false,
}: {
  children: ReactNode;
  /** Chip style, used for editorial notes such as "[Confirm list with Epic]". */
  tag?: boolean;
}) {
  return <span className={tag ? "placeholder-tag" : "placeholder"}>{children}</span>;
}
