"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { logos } from "@content/images";
import { mainNav, pages, whoWeServe } from "@content/pages";
import { site } from "@content/site";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" onClick={onClick} className="flex items-center gap-3 no-underline md:gap-3.5">
      <Image
        src={logos.icd.src}
        alt={logos.icd.alt}
        width={72}
        height={70}
        className="h-[56px] w-[58px] rounded-card object-cover md:h-[70px] md:w-[72px]"
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[24px] font-bold tracking-[0.08em] text-text-strong md:text-[28px]">
          {site.shortWordmark.top}
        </span>
        <span className="mt-1 font-display text-[11px] font-bold tracking-[0.1em] text-gold md:text-[13px] md:tracking-[0.14em]">
          {site.shortWordmark.bottom}
        </span>
      </span>
    </Link>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      className={`transition-transform ${open ? "rotate-180" : ""}`}
    >
      <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

/** "Who We Serve" disclosure menu. Works with hover, click/tap, and keyboard. */
function ServeMenu({ pathname }: { pathname: string }) {
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();
  const open = clicked || hovered;
  const sectionActive = whoWeServe.some((item) => pages[item.key].path === pathname);

  const close = useCallback(() => {
    setClicked(false);
    setHovered(false);
  }, []);

  // Close on outside click and on Escape (returning focus to the button).
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) close();
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  return (
    <div
      ref={wrapRef}
      className="relative"
      // Hover only for real mice. Touch uses the click toggle.
      onPointerEnter={(e) => e.pointerType === "mouse" && setHovered(true)}
      onPointerLeave={(e) => e.pointerType === "mouse" && setHovered(false)}
      // Close when keyboard focus leaves the whole menu.
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setClicked(false);
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setClicked((v) => !v)}
        className={`flex items-center gap-1.5 py-3 text-[15px] font-semibold hover:text-gold-hover ${
          sectionActive ? "text-gold" : "text-nav"
        }`}
      >
        Who We Serve
        <Chevron open={open} />
      </button>
      <div
        id={panelId}
        hidden={!open}
        className="absolute left-0 top-full z-40 min-w-[290px] rounded-card border border-line-dark bg-ink-800 py-2 shadow-2xl shadow-black/50"
      >
        {whoWeServe.map((item) => {
          const active = pages[item.key].path === pathname;
          return (
            <Link
              key={item.key}
              href={pages[item.key].path}
              aria-current={active ? "page" : undefined}
              onClick={close}
              className={`block px-5 py-3 text-[15px] font-semibold no-underline hover:bg-ink-900 hover:text-gold-hover ${
                active ? "text-gold" : "text-nav"
              }`}
            >
              {item.navLabel}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function MobileMenu({
  pathname,
  onClose,
  returnFocusTo,
}: {
  pathname: string;
  onClose: () => void;
  returnFocusTo: React.RefObject<HTMLButtonElement | null>;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const trigger = returnFocusTo.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      // Keep Tab inside the open menu.
      const items = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      trigger?.focus();
    };
  }, [onClose, returnFocusTo]);

  const linkClass = (active: boolean) =>
    `block border-b border-line-darker py-3.5 font-display text-[28px] font-bold uppercase tracking-[0.03em] no-underline ${
      active ? "text-gold" : "text-text-strong"
    }`;

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      className="fixed inset-0 z-50 flex flex-col bg-ink-900"
    >
      <div className="flex items-center justify-between border-b border-line-darker px-5 py-3.5">
        <Logo onClick={onClose} />
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="flex h-11 w-11 items-center justify-center rounded-btn border border-line-dark text-text-strong"
        >
          <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18">
            <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </button>
      </div>

      <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 py-4">
        <p className="m-0 pt-2 text-[14px] font-bold uppercase tracking-[0.16em] text-gold">
          Who We Serve
        </p>
        <ul className="m-0 mb-2 list-none p-0">
          {whoWeServe.map((item) => {
            const active = pages[item.key].path === pathname;
            return (
              <li key={item.key}>
                <Link
                  href={pages[item.key].path}
                  aria-current={active ? "page" : undefined}
                  onClick={onClose}
                  className={`block border-b border-line-darker py-3 pl-4 text-[18px] font-semibold no-underline ${
                    active ? "text-gold" : "text-nav"
                  }`}
                >
                  {item.navLabel}
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className="m-0 list-none p-0">
          {mainNav.map((item) => {
            const active = pages[item.key].path === pathname;
            return (
              <li key={item.key}>
                <Link
                  href={pages[item.key].path}
                  aria-current={active ? "page" : undefined}
                  onClick={onClose}
                  className={linkClass(active)}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-line-darker bg-ink-950 p-5">
        <Button href={site.ctaHref} onClick={onClose} className="w-full">
          {site.ctaLabel}
        </Button>
      </div>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <header className="border-b border-line-darker bg-ink-900">
      <Container className="flex items-center justify-between gap-x-8 gap-y-4 py-3.5">
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-x-[26px] xl:flex">
          <ServeMenu pathname={pathname} />
          {mainNav.map((item) => {
            const active = pages[item.key].path === pathname;
            return (
              <Link
                key={item.key}
                href={pages[item.key].path}
                aria-current={active ? "page" : undefined}
                className={`py-3 text-[15px] font-semibold no-underline hover:text-gold-hover ${
                  active ? "text-gold" : "text-nav"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Button href={site.ctaHref} size="sm">
            {site.ctaLabel}
          </Button>
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          aria-haspopup="dialog"
          aria-expanded={mobileOpen}
          className="flex h-11 w-11 items-center justify-center rounded-btn border border-line-dark text-text-strong xl:hidden"
        >
          <svg aria-hidden="true" width="20" height="14" viewBox="0 0 20 14">
            <path d="M0 1h20M0 7h20M0 13h20" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
      </Container>

      {mobileOpen && (
        <MobileMenu pathname={pathname} onClose={closeMobile} returnFocusTo={menuButtonRef} />
      )}
    </header>
  );
}
