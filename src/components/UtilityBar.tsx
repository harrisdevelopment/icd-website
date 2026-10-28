import { site } from "@content/site";
import { Container } from "./ui/Container";

export function UtilityBar() {
  return (
    <div className="border-b border-line-darker bg-ink-950">
      <Container className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-2.5 text-sm">
        <ul className="m-0 flex list-none flex-wrap gap-x-[18px] gap-y-1 p-0 text-[13px] font-semibold uppercase tracking-[0.06em] text-gold">
          {site.badges.map((badge, i) => (
            <li key={badge} className="flex gap-[18px]">
              {i > 0 && (
                <span aria-hidden="true" className="hidden text-ink-soft sm:inline">
                  |
                </span>
              )}
              <span>{badge}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-x-6 gap-y-1">
          <a href={site.phone.href} className="text-nav no-underline hover:text-gold-hover">
            {site.phone.display}
          </a>
          <a href={`mailto:${site.email}`} className="text-nav no-underline hover:text-gold-hover">
            {site.email}
          </a>
        </div>
      </Container>
    </div>
  );
}
