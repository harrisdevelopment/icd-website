import { CardGrid, CardItem, ImageCard } from "@/components/ImageCard";
import { CtaBand } from "@/components/CtaBand";
import { FloridaPartnerBand } from "@/components/FloridaPartnerBand";
import { HomeHero } from "@/components/HomeHero";
import { JsonLd } from "@/components/JsonLd";
import { NumberedGrid } from "@/components/NumberedGrid";
import { PastPerformance } from "@/components/PastPerformance";
import { SplitFeature } from "@/components/SplitFeature";
import { StatStrip } from "@/components/StatStrip";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { rt } from "@/lib/text";
import { buildMetadata } from "@/lib/metadata";
import { home, whyPartner } from "@content/home";
import { pages } from "@content/pages";
import { site } from "@content/site";

export const metadata = buildMetadata({
  title: home.meta.title,
  description: home.meta.description,
  path: "/",
  absoluteTitle: true,
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: site.name,
  url: site.url,
  telephone: site.phone.e164,
  email: site.email,
  logo: `${site.url}/images/logo-icd.png`,
  image: `${site.url}/og-image.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "US",
  },
  areaServed: "United States",
};

export default function HomePage() {
  const { serve, government, systems, maintenance } = home;

  return (
    <>
      <JsonLd data={jsonLd} />
      <HomeHero />
      <StatStrip label="Credentials" items={[...home.credentials]} />

      <Section tone="paper" size="xl" id="serve" innerClassName="flex flex-col gap-12">
        <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-4">
          <div className="flex max-w-[620px] flex-col gap-3.5">
            <Eyebrow>{serve.eyebrow}</Eyebrow>
            <Heading size="h2">{serve.title}</Heading>
          </div>
          <p className="m-0 max-w-[460px] text-[18px] leading-[1.6] text-body">{serve.intro}</p>
        </div>
        <CardGrid cols={3}>
          {serve.cards.map((card) => (
            <CardItem key={card.title}>
              <ImageCard
                href={pages[card.page].path}
                image={card.image}
                title={card.title}
                body={card.body}
                cta="Learn more →"
                titleSize="h3"
                imageHeight="h-[220px]"
              />
            </CardItem>
          ))}
        </CardGrid>
      </Section>

      <Section tone="ink-900" size="xl">
        <SplitFeature
          images={[...government.images]}
          eyebrow={government.eyebrow}
          title={government.title}
          body={government.body}
          imageSide="left"
        >
          <dl className="m-0 grid grid-cols-2 gap-px overflow-hidden rounded-card border border-line-dark bg-line-dark">
            {government.codes.map((code) => (
              <div key={code.label} className="bg-ink-800 px-[18px] py-4">
                <dt className="text-xs uppercase tracking-[0.12em] text-text-muted">{code.label}</dt>
                <dd className="m-0 mt-1 text-[18px] font-bold text-text-strong">{rt(code.value)}</dd>
              </div>
            ))}
          </dl>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3.5">
            <Button href={pages.government.path} variant="secondary" size="md">
              {government.buttonLabel}
            </Button>
            <a
              href={site.capabilityStatement}
              target="_blank"
              rel="noopener"
              className="text-base font-semibold text-gold underline underline-offset-4 hover:text-gold-hover"
            >
              {site.capabilityStatementLabel}
            </a>
          </div>
        </SplitFeature>
      </Section>

      <Section tone="paper" size="xl" id="systems" innerClassName="flex flex-col gap-11">
        <div className="flex max-w-[720px] flex-col gap-3.5">
          <Eyebrow>{systems.eyebrow}</Eyebrow>
          <Heading size="h2">{systems.title}</Heading>
          <p className="m-0 text-[18px] leading-[1.6] text-body">{systems.intro}</p>
        </div>
        <CardGrid cols={4} gap="gap-5">
          {systems.cards.map((card) => (
            <CardItem key={card.title}>
              <ImageCard
                image={card.image}
                title={card.title}
                body={card.body}
                imageHeight="h-[190px]"
                sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw"
              />
            </CardItem>
          ))}
        </CardGrid>
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="mr-1.5 text-[15px] font-bold">Also:</span>
          <ul className="m-0 flex list-none flex-wrap gap-2.5 p-0">
            {systems.others.map((item) => (
              <li
                key={item}
                className="rounded-full border border-pill-line bg-white px-4 py-2 text-sm font-semibold text-[#2c3036]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="ink-900" size="xl" id="maintenance">
        <SplitFeature
          images={[...maintenance.images]}
          imageSide="right"
          eyebrow={maintenance.eyebrow}
          title={maintenance.title}
          body={maintenance.body}
          list={[...maintenance.list]}
          listMarker="number"
        >
          <div>
            <Button href={pages.maintenance.path} variant="secondary" size="md">
              {maintenance.buttonLabel}
            </Button>
          </div>
        </SplitFeature>
      </Section>

      <Section
        tone="ink-800"
        size="xl"
        id="why"
        className="border-t border-line-dark"
        innerClassName="flex flex-col gap-12"
      >
        <div className="flex max-w-[720px] flex-col gap-3.5">
          <Eyebrow>{whyPartner.eyebrow}</Eyebrow>
          <Heading size="h2">{whyPartner.title}</Heading>
        </div>
        <NumberedGrid items={whyPartner.items} />
      </Section>

      <FloridaPartnerBand />
      <PastPerformance />
      <CtaBand variant="centered" />
    </>
  );
}
