import { rt } from "@/lib/text";
import { pages } from "@content/pages";
import type { InteriorPage } from "@content/types";
import { ContractingInfoCard } from "./ContractingInfoCard";
import { CtaBand } from "./CtaBand";
import { FloridaPartnerBand } from "./FloridaPartnerBand";
import { CardGrid, CardItem } from "./ImageCard";
import { NumberedGrid } from "./NumberedGrid";
import { PageHero } from "./PageHero";
import { RelatedCards } from "./RelatedCards";
import { SplitFeature } from "./SplitFeature";
import { Eyebrow } from "./ui/Eyebrow";
import { Heading } from "./ui/Heading";
import { Section } from "./ui/Section";

/** The Government layout, driven by content/interior.ts. */
export function InteriorTemplate({ page }: { page: InteriorPage }) {
  const { hero, deliver, split, steps } = page;

  return (
    <>
      <PageHero
        image={hero.image}
        eyebrow={hero.eyebrow}
        breadcrumb={hero.breadcrumb}
        title={hero.title}
        lead={hero.lead}
      />

      <Section tone="paper" size="lg" innerClassName="flex flex-wrap gap-x-14 gap-y-12">
        <div className="flex min-w-0 flex-[3_1_560px] flex-col gap-[22px]">
          <Eyebrow>What We Deliver</Eyebrow>
          <Heading size="h2-sm">{deliver.title}</Heading>
          <p className="m-0 text-[18px] leading-[1.65] text-lead">{rt(deliver.intro)}</p>
          <div className="mt-2">
            <CardGrid cols={deliver.side ? 2 : 3} gap="gap-4">
              {deliver.scope.map((item) => (
                <CardItem key={item.title}>
                  <div className="flex h-full flex-col gap-2 rounded-card border border-rule bg-card px-[22px] pb-6 pt-[22px]">
                    <Heading as="h3" size="h3-sm">
                      {item.title}
                    </Heading>
                    {item.body && (
                      <p className="m-0 text-[15px] leading-[1.55] text-body">{rt(item.body)}</p>
                    )}
                  </div>
                </CardItem>
              ))}
            </CardGrid>
          </div>
        </div>
        {deliver.side && (
          <div className="flex min-w-0 flex-[1_1_320px] flex-col self-start">
            <ContractingInfoCard
              title={deliver.side.title}
              rows={deliver.side.rows}
              capabilityLink={deliver.side.capabilityLink}
            />
          </div>
        )}
      </Section>

      <Section tone="ink-900" size="lg">
        <SplitFeature
          images={split.images}
          eyebrow={split.eyebrow}
          title={split.title}
          body={split.body}
          list={split.list}
        />
      </Section>

      <Section
        tone="ink-800"
        size="md"
        className="border-t border-line-dark"
        innerClassName="flex flex-col gap-9"
      >
        <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-4">
          <Heading size="h2-sm">{steps.title}</Heading>
          {steps.intro && (
            <p className="m-0 max-w-[520px] text-[17px] leading-[1.6] text-body">{steps.intro}</p>
          )}
        </div>
        <NumberedGrid items={steps.items} />
      </Section>

      <RelatedCards keys={page.related.filter((key) => key in pages)} />
      <FloridaPartnerBand />
      <CtaBand title={page.cta?.title} />
    </>
  );
}
