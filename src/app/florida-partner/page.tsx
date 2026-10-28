import Image from "next/image";
import { CardGrid, CardItem, ImageCard } from "@/components/ImageCard";
import { NumberedGrid } from "@/components/NumberedGrid";
import { StatStrip } from "@/components/StatStrip";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Placeholder } from "@/components/ui/Placeholder";
import { Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/metadata";
import { floridaPage } from "@content/florida";
import { logos } from "@content/images";
import { pages } from "@content/pages";
import { site } from "@content/site";
import Link from "next/link";

export const metadata = buildMetadata({
  title: floridaPage.meta.title,
  description: floridaPage.meta.description,
  path: pages.florida.path,
});

export default function FloridaPartnerPage() {
  const { hero, glance, how, services, cta, epic } = floridaPage;

  return (
    <>
      <section data-surface="dark" className="border-b border-line-darker bg-black">
        <Container className="flex flex-wrap items-center gap-x-16 gap-y-12 pb-14 pt-12 md:pb-20 md:pt-[72px]">
          <div className="flex min-w-0 flex-[1_1_480px] flex-col gap-5">
            <nav aria-label="Breadcrumb" className="text-sm text-text-dim">
              <ol className="m-0 flex list-none flex-wrap items-center gap-x-2 p-0">
                <li>
                  <Link href="/" className="text-text-dim underline hover:text-gold-hover">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-text-strong">
                  Florida Partner
                </li>
              </ol>
            </nav>
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <Heading as="h1" size="h1-sm">
              {hero.title}
            </Heading>
            <p className="m-0 text-[19px] leading-[1.6] text-lead">{hero.lead}</p>
          </div>
          <Image
            src={logos.epic.src}
            alt={logos.epic.alt}
            width={logos.epic.width}
            height={logos.epic.height}
            preload
            sizes="(min-width: 1024px) 620px, 100vw"
            className="h-auto w-full max-w-[620px] min-w-0 flex-[1_1_480px]"
          />
        </Container>
      </section>

      <StatStrip label="Epic at a glance" items={glance} valueTone="white" minWidth={220} />

      <Section tone="paper" size="lg" innerClassName="flex flex-wrap gap-x-14 gap-y-10">
        <div className="flex min-w-0 flex-[1_1_400px] flex-col gap-[18px]">
          <Eyebrow>{how.eyebrow}</Eyebrow>
          <Heading size="h2-sm">{how.title}</Heading>
          <p className="m-0 text-[18px] leading-[1.65] text-lead">{how.body}</p>
        </div>
        <div className="min-w-0 flex-[1_1_520px]">
          <NumberedGrid items={how.steps} variant="cards" cols={2} />
        </div>
      </Section>

      <Section tone="ink-900" size="lg" innerClassName="flex flex-col gap-10">
        <div className="flex flex-wrap items-baseline gap-x-6 gap-y-3">
          <Heading size="h2-sm">{services.title}</Heading>
          <Placeholder tag>{services.tag}</Placeholder>
        </div>
        <CardGrid cols={4} gap="gap-5">
          {services.cards.map((card) => (
            <CardItem key={card.title}>
              <ImageCard
                image={card.image}
                title={card.title}
                titleSize="h3-md"
                imageHeight="h-[180px]"
                sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw"
              />
            </CardItem>
          ))}
        </CardGrid>
      </Section>

      <Section
        tone="ink-800"
        size="md"
        className="border-t border-line-dark"
        innerClassName="flex flex-wrap items-center gap-x-16 gap-y-10"
      >
        <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-4">
          <Heading size="h2-sm">{cta.title}</Heading>
          <p className="m-0 text-[18px] leading-[1.6] text-body">{cta.body}</p>
          <div>
            <Button href={site.ctaHref}>{site.ctaLabel}</Button>
          </div>
        </div>
        <address className="flex min-w-0 flex-[1_1_380px] flex-col gap-3 rounded-card border border-line-dark bg-ink-900 p-7 not-italic">
          <span className="font-display text-[22px] font-bold uppercase text-text-strong">
            {epic.name}
          </span>
          {epic.lines.map((line) => (
            <span key={line}>
              <Placeholder>{line}</Placeholder>
            </span>
          ))}
        </address>
      </Section>
    </>
  );
}
