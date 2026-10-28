import { home } from "@content/home";
import { site } from "@content/site";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import { Eyebrow } from "./ui/Eyebrow";
import { Heading } from "./ui/Heading";
import { Photo } from "./ui/Photo";

export function HomeHero() {
  const { hero } = home;
  return (
    <section
      data-surface="dark"
      className="relative flex min-h-[560px] items-center overflow-hidden bg-ink-900 md:min-h-[640px]"
    >
      <Photo name="hero" alt="" sizes="100vw" preload quality={70} className="object-[30%_50%]" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,9,11,0.94)_0%,rgba(8,9,11,0.82)_45%,rgba(8,9,11,0.35)_100%)] max-md:bg-[linear-gradient(90deg,rgba(8,9,11,0.92)_0%,rgba(8,9,11,0.82)_100%)]"
      />
      <Container className="relative py-16 md:py-24">
        <div className="flex max-w-[680px] flex-col gap-6">
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <Heading as="h1" size="hero">
            {hero.title[0]}
            <br />
            {hero.title[1]}
          </Heading>
          <p className="m-0 text-[19px] leading-[1.55] text-lead md:text-[20px]">{hero.lead}</p>
          <div className="mt-2 flex flex-wrap items-center gap-x-7 gap-y-4">
            <Button href={site.ctaHref}>{site.ctaLabel}</Button>
            <a
              href={site.phone.href}
              className="text-[17px] font-semibold text-text-strong no-underline hover:text-gold-hover"
            >
              Or call {site.phone.display}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
