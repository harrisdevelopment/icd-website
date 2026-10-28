import { CtaBand } from "@/components/CtaBand";
import { FloridaPartnerBand } from "@/components/FloridaPartnerBand";
import { NumberedGrid } from "@/components/NumberedGrid";
import { PageHero } from "@/components/PageHero";
import { PastPerformance } from "@/components/PastPerformance";
import { RelatedCards } from "@/components/RelatedCards";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/metadata";
import { rt } from "@/lib/text";
import { whyPartner } from "@content/home";
import { pages } from "@content/pages";
import { site } from "@content/site";
import { whyPage } from "@content/why";

export const metadata = buildMetadata({
  title: whyPage.meta.title,
  description: whyPage.meta.description,
  path: pages.why.path,
});

export default function WhyPartnerPage() {
  const { hero, certifications, leadership } = whyPage;

  return (
    <>
      <PageHero
        image={hero.image}
        breadcrumb={hero.breadcrumb}
        title={hero.title}
        lead={hero.lead}
      />

      <Section tone="ink-800" size="lg" innerClassName="flex flex-col gap-10">
        <div className="flex max-w-[720px] flex-col gap-3.5">
          <Eyebrow>{whyPartner.eyebrow}</Eyebrow>
          <Heading size="h2-sm">{whyPartner.title}</Heading>
        </div>
        <NumberedGrid items={whyPartner.items} />
      </Section>

      <Section tone="paper" size="lg" innerClassName="flex flex-col gap-10">
        <div className="flex max-w-[720px] flex-col gap-3.5">
          <Eyebrow>{certifications.eyebrow}</Eyebrow>
          <Heading size="h2-sm">{certifications.title}</Heading>
        </div>
        <NumberedGrid items={certifications.items} variant="cards" numbered={false} cols={3} />
      </Section>

      <Section tone="ink-900" size="lg" innerClassName="flex flex-wrap items-center gap-x-14 gap-y-10">
        <div
          role="img"
          aria-label="Headshot placeholder"
          className="flex aspect-[4/5] w-full max-w-[320px] flex-[0_1_320px] items-center justify-center rounded-card border-2 border-dashed border-gold bg-ink-800 text-center"
        >
          <span className="px-4 font-bold text-gold">{leadership.headshot}</span>
        </div>
        <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-4">
          <Eyebrow>{leadership.eyebrow}</Eyebrow>
          <Heading size="h2-sm">{leadership.name}</Heading>
          <p className="m-0 font-display text-[22px] font-bold uppercase tracking-[0.04em] text-gold">
            {leadership.role}
          </p>
          <p className="m-0 text-[18px] leading-[1.6] text-lead">{leadership.summary}</p>
          <p className="m-0 text-[18px] leading-[1.6] text-body">{rt(leadership.bio)}</p>
          <div className="mt-2">
            <Button href={site.capabilityStatement} variant="secondary" size="md" external>
              {site.capabilityStatementLabel}
            </Button>
          </div>
        </div>
      </Section>

      <PastPerformance />
      <RelatedCards keys={whyPage.related} />
      <FloridaPartnerBand />
      <CtaBand />
    </>
  );
}
