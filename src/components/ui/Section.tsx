import type { ReactNode } from "react";
import { Container } from "./Container";

export type Tone = "ink-950" | "ink-900" | "ink-800" | "paper";

const toneClass: Record<Tone, string> = {
  "ink-950": "bg-ink-950 text-text",
  "ink-900": "bg-ink-900 text-text",
  "ink-800": "bg-ink-800 text-text",
  paper: "bg-paper text-ink-text",
};

const sizeClass = {
  xl: "py-16 md:py-[104px]",
  lg: "py-16 md:py-24",
  md: "py-14 md:py-[88px]",
  sm: "py-12 md:py-[72px]",
} as const;

/** A full-bleed band. Sets data-surface so children pick the right colors. */
export function Section({
  tone = "ink-900",
  size = "lg",
  id,
  label,
  className = "",
  innerClassName = "",
  children,
}: {
  tone?: Tone;
  size?: keyof typeof sizeClass;
  id?: string;
  label?: string;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-label={label}
      data-surface={tone === "paper" ? "light" : "dark"}
      className={`${toneClass[tone]} ${className}`}
    >
      <Container className={`${sizeClass[size]} ${innerClassName}`}>{children}</Container>
    </section>
  );
}
