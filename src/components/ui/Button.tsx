import Link from "next/link";
import type { ReactNode } from "react";

const base =
  "inline-flex items-center justify-center rounded-btn text-center font-display font-bold uppercase tracking-[0.06em] transition-colors";

const variants = {
  primary: "bg-gold text-ink-900 hover:bg-gold-hover",
  secondary: "border-2 border-gold text-text-strong hover:bg-gold/10",
} as const;

const sizes = {
  sm: "px-[22px] py-[13px] text-[17px]",
  md: "px-6 py-3.5 text-[18px]",
  lg: "px-8 py-[18px] text-[20px]",
} as const;

export function Button({
  href,
  variant = "primary",
  size = "lg",
  className = "",
  onClick,
  external = false,
  children,
}: {
  href: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  onClick?: () => void;
  /** Plain anchor that opens in a new tab. Use for files such as the PDF. */
  external?: boolean;
  children: ReactNode;
}) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener" className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} onClick={onClick} className={classes}>
      {children}
    </Link>
  );
}
