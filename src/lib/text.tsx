import { Fragment, type ReactNode } from "react";
import { Placeholder } from "@/components/ui/Placeholder";

const BRACKETS = /(\[[^\]]+\])/g;

/**
 * Renders a copy string, turning every [BRACKETED] segment into a visible
 * <Placeholder>. Content files stay plain strings, and nothing in square
 * brackets can slip onto the site unflagged.
 */
export function rt(text: string): ReactNode {
  return text.split(BRACKETS).map((part, i) =>
    part.length > 2 && part.startsWith("[") && part.endsWith("]") ? (
      <Placeholder key={i}>{part}</Placeholder>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}
