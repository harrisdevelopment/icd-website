import Link from "next/link";
import type { ReactNode } from "react";
import type { ImageKey } from "@content/images";
import { rt } from "@/lib/text";
import { Heading } from "./ui/Heading";
import { Photo } from "./ui/Photo";

type Props = {
  title: string;
  body?: string;
  image?: ImageKey;
  /** Makes the whole card a link. */
  href?: string;
  /** Link affordance: "Learn more →" text, or an arrow after the title. */
  cta?: string;
  arrow?: boolean;
  /** Photo height class, e.g. "h-[220px]". */
  imageHeight?: string;
  titleSize?: "h3" | "h3-md" | "h3-sm";
  sizes?: string;
};

/**
 * Card with an optional photo. On a light section it is white with a paper
 * border; on a dark section it is ink-800 (see data-surface in globals.css).
 * Without an image it gets a gold accent bar so text-only cards still read as
 * part of the same family.
 */
export function ImageCard({
  title,
  body,
  image,
  href,
  cta,
  arrow,
  imageHeight = "h-[190px]",
  titleSize = "h3-md",
  sizes = "(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw",
}: Props) {
  const content: ReactNode = (
    <>
      {image ? (
        <div className={`relative w-full overflow-hidden bg-ink-800 ${imageHeight}`}>
          <Photo name={image} alt="" sizes={sizes} />
        </div>
      ) : (
        <div aria-hidden="true" className="h-1 w-full bg-accent" />
      )}
      <div
        className={`flex flex-1 flex-col gap-2.5 ${
          titleSize === "h3" ? "px-6 pb-7 pt-6" : "px-[22px] pb-6 pt-5"
        }`}
      >
        <Heading as="h3" size={titleSize}>
          {title}
          {arrow && <span aria-hidden="true"> →</span>}
        </Heading>
        {body && <p className="m-0 text-[15px] leading-[1.55] text-body md:text-base">{rt(body)}</p>}
        {cta && <span className="mt-1.5 text-[15px] font-bold text-accent">{cta}</span>}
      </div>
    </>
  );

  const shell =
    "flex h-full flex-col overflow-hidden rounded-card border border-rule bg-card text-heading";

  return href ? (
    <Link href={href} className={`${shell} no-underline transition-shadow hover:shadow-lg`}>
      {content}
    </Link>
  ) : (
    <div className={shell}>{content}</div>
  );
}

const colClass = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
} as const;

/** Responsive grid for cards. `cols` is the desktop column count. */
export function CardGrid({
  cols = 3,
  gap = "gap-5 md:gap-6",
  children,
}: {
  cols?: keyof typeof colClass;
  gap?: string;
  children: ReactNode;
}) {
  return <ul className={`m-0 grid list-none p-0 ${gap} ${colClass[cols]}`}>{children}</ul>;
}

export function CardItem({ children }: { children: ReactNode }) {
  return <li className="min-w-0">{children}</li>;
}
