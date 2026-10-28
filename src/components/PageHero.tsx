import Link from "next/link";
import type { ImageKey } from "@content/images";
import { site } from "@content/site";
import type { Crumb } from "@content/types";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import { Eyebrow } from "./ui/Eyebrow";
import { Heading } from "./ui/Heading";
import { Photo } from "./ui/Photo";

function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  const all: Crumb[] = [{ label: "Home", href: "/" }, ...crumbs];
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-text-dim">
      <ol className="m-0 flex list-none flex-wrap items-center gap-x-2 gap-y-1 p-0">
        {all.map((crumb, i) => {
          const last = i === all.length - 1;
          return (
            <li key={crumb.label} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true">/</span>}
              {crumb.href && !last ? (
                <Link href={crumb.href} className="text-text-dim underline hover:text-gold-hover">
                  {crumb.label}
                </Link>
              ) : (
                <span aria-current={last ? "page" : undefined} className={last ? "text-text-strong" : ""}>
                  {crumb.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/** Interior-page hero: photo behind a dark overlay, breadcrumb, H1, lead, CTA. */
export function PageHero({
  image,
  eyebrow,
  breadcrumb,
  title,
  lead,
}: {
  image: ImageKey;
  eyebrow?: string;
  breadcrumb: Crumb[];
  title: string;
  lead: string;
}) {
  return (
    <section data-surface="dark" className="relative overflow-hidden bg-ink-900">
      <Photo name={image} alt="" sizes="100vw" preload quality={55} />
      <div aria-hidden="true" className="absolute inset-0 bg-ink-950/[0.82]" />
      <Container className="relative flex flex-col gap-5 pb-14 pt-12 md:pb-[88px] md:pt-20">
        <Breadcrumb crumbs={breadcrumb} />
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <Heading as="h1" size="h1" className="max-w-[860px]">
          {title}
        </Heading>
        <p className="m-0 max-w-[680px] text-[19px] leading-[1.55] text-lead md:text-[20px]">{lead}</p>
        <div className="mt-2 flex flex-wrap items-center gap-x-7 gap-y-4">
          <Button href={site.ctaHref}>{site.ctaLabel}</Button>
          <a
            href={site.capabilityStatement}
            target="_blank"
            rel="noopener"
            className="text-[17px] font-semibold text-text-strong underline decoration-gold decoration-2 underline-offset-4 hover:text-gold-hover"
          >
            {site.capabilityStatementLabel}
          </a>
        </div>
      </Container>
    </section>
  );
}
