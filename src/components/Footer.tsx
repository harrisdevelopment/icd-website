import Image from "next/image";
import Link from "next/link";
import { logos } from "@content/images";
import { footerColumns, pages } from "@content/pages";
import { site } from "@content/site";
import { Container } from "./ui/Container";

const colTitle =
  "font-display text-[18px] font-bold uppercase tracking-[0.06em] text-text-strong";
const footLink = "text-text no-underline hover:text-gold-hover";

export function Footer() {
  return (
    <footer className="border-t border-line-darker bg-ink-950 text-[15px]" data-surface="dark">
      <Container className="flex flex-wrap gap-x-16 gap-y-10 pb-8 pt-16">
        <div className="flex min-w-0 flex-[1_1_280px] flex-col gap-4">
          <Image
            src={logos.icd.src}
            alt={logos.icd.alt}
            width={150}
            height={146}
            className="h-auto w-[150px]"
          />
          <p className="m-0 leading-relaxed text-text-dim">{site.footerBlurb}</p>
        </div>

        {footerColumns.map((col) => (
          <nav
            key={col.title}
            aria-label={col.title}
            className="flex min-w-0 flex-[1_1_200px] flex-col gap-2.5"
          >
            <p className={`m-0 ${colTitle}`}>{col.title}</p>
            {col.links.map((link) => (
              <Link key={link.key} href={pages[link.key].path} className={footLink}>
                {link.label}
              </Link>
            ))}
          </nav>
        ))}

        <div className="flex min-w-0 flex-[1_1_220px] flex-col gap-2.5 text-text">
          <p className={`m-0 ${colTitle}`}>Contact</p>
          <span>{site.owner}</span>
          <a href={site.phone.href} className={footLink}>
            {site.phone.display}
          </a>
          <a href={`mailto:${site.email}`} className={footLink}>
            {site.email}
          </a>
          <address className="not-italic">{site.address.oneLine}</address>
        </div>
      </Container>

      <Container className="flex flex-wrap justify-between gap-x-6 gap-y-2 border-t border-line-darker pb-8 pt-5 text-[13px] text-text-muted">
        <span className="flex flex-wrap gap-x-4 gap-y-1">
          <span>© {new Date().getFullYear()} {site.legalName}</span>
          <Link href={pages.privacy.path} className="text-text-muted underline hover:text-gold-hover">
            Privacy
          </Link>
        </span>
        <span>
          NAICS {site.naics} · PSC {site.psc} · Veteran-Owned · SDVOSB
        </span>
      </Container>
    </footer>
  );
}
