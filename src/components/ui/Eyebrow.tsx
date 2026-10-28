import type { ReactNode } from "react";

/** Small uppercase label above a heading. Gold on dark, gold-ink on light. */
export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={`m-0 text-[14px] font-bold uppercase leading-snug tracking-[0.16em] text-accent ${className}`}
    >
      {children}
    </p>
  );
}
