import Image from "next/image";
import { floridaBand } from "@content/home";
import { logos } from "@content/images";
import { pages } from "@content/pages";
import { Button } from "./ui/Button";
import { Eyebrow } from "./ui/Eyebrow";
import { Heading } from "./ui/Heading";
import { Section } from "./ui/Section";

/** Epic Roofing teaser. Home, and above the CTA band on every interior page. */
export function FloridaPartnerBand() {
  return (
    <Section
      tone="ink-950"
      size="sm"
      label="Florida partner"
      className="border-y border-line-darker"
      innerClassName="flex flex-wrap items-center gap-x-16 gap-y-10"
    >
      <Image
        src={logos.epic.src}
        alt={logos.epic.alt}
        width={logos.epic.width}
        height={logos.epic.height}
        sizes="(min-width: 1024px) 560px, 100vw"
        className="h-auto w-full max-w-[560px] min-w-0 flex-[1_1_420px]"
      />
      <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-4">
        <Eyebrow>{floridaBand.eyebrow}</Eyebrow>
        <Heading size="h2-xs">{floridaBand.title}</Heading>
        <p className="m-0 text-[18px] leading-[1.6] text-body">{floridaBand.body}</p>
        <div>
          <Button href={pages.florida.path} variant="secondary" size="md">
            {floridaBand.buttonLabel}
          </Button>
        </div>
      </div>
    </Section>
  );
}
