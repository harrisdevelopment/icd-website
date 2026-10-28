import type { ReactNode } from "react";

const sizes = {
  hero: "t-hero",
  h1: "t-h1",
  "h1-sm": "t-h1-sm",
  h2: "t-h2",
  "h2-md": "t-h2-md",
  "h2-sm": "t-h2-sm",
  "h2-xs": "t-h2-xs",
  "h2-xxs": "t-h2-xxs",
  cta: "t-cta",
  h3: "text-[26px] leading-[1.05] tracking-[0.01em]",
  "h3-md": "text-[24px] leading-[1.1] tracking-[0.01em]",
  "h3-sm": "text-[22px] leading-[1.1] tracking-[0.01em]",
} as const;

export type HeadingSize = keyof typeof sizes;

/** Barlow Condensed display heading. Level and visual size are independent. */
export function Heading({
  as: Tag = "h2",
  size = "h2",
  className = "",
  children,
}: {
  as?: "h1" | "h2" | "h3" | "p";
  size?: HeadingSize;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag className={`m-0 font-display font-bold uppercase text-heading ${sizes[size]} ${className}`}>
      {children}
    </Tag>
  );
}
