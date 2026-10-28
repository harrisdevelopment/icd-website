import { CtaBand } from "@/components/CtaBand";
import { FloridaPartnerBand } from "@/components/FloridaPartnerBand";
import { CardGrid, CardItem, ImageCard } from "@/components/ImageCard";
import { NumberedGrid } from "@/components/NumberedGrid";
import { PageHero } from "@/components/PageHero";
import { RelatedCards } from "@/components/RelatedCards";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/metadata";
import { rt } from "@/lib/text";
import { pages } from "@content/pages";
import { systemsPage } from "@content/systems";

export const metadata = buildMetadata({
  title: systemsPage.meta.title,
  description: systemsPage.meta.description,
  path: pages.systems.path,
});

export default function RoofingSystemsPage() {
  const { hero, systems, options, certifications } = systemsPage;

  return (
    <>
      <PageHero
        image={hero.image}
        breadcrumb={hero.breadcrumb}
        title={hero.title}
        lead={hero.lead}
      />

      <Section tone="paper" size="lg" innerClassName="flex flex-col gap-10">
        <div className="flex max-w-[720px] flex-col gap-3.5">
          <Eyebrow>{systems.eyebrow}</Eyebrow>
          <Heading size="h2-sm">{systems.title}</Heading>
        </div>
        <CardGrid cols={3}>
          {systems.cards.map((card) => (
            <CardItem key={card.title}>
              <ImageCard
                image={"image" in card ? card.image : undefined}
                title={card.title}
                body={card.body}
                titleSize="h3-md"
              />
            </CardItem>
          ))}
        </CardGrid>
      </Section>

      <Section tone="ink-900" size="lg" innerClassName="flex flex-col gap-10">
        <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-4">
          <Heading size="h2-sm">{options.title}</Heading>
          <p className="m-0 max-w-[520px] text-[17px] leading-[1.6] text-body">{options.intro}</p>
        </div>
        <NumberedGrid items={options.items} />
      </Section>

      <Section tone="ink-800" size="sm" className="border-t border-line-dark">
        <div className="flex flex-wrap items-center gap-x-10 gap-y-3">
          <Heading as="h2" size="h3">
            {certifications.title}
          </Heading>
          <p className="m-0 text-[18px] font-bold text-text-strong">{rt(certifications.value)}</p>
        </div>
      </Section>

      <RelatedCards keys={systemsPage.related} />
      <FloridaPartnerBand />
      <CtaBand />
    </>
  );
}
