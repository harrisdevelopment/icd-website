import { ctaBand } from "@content/home";
import { site } from "@content/site";
import { Button } from "./ui/Button";
import { Heading } from "./ui/Heading";
import { Photo } from "./ui/Photo";
import { Section } from "./ui/Section";

/**
 * Closing call to action. "centered" is the Home version over a photo;
 * "inline" is the interior-page version (heading left, button right).
 */
export function CtaBand({
  variant = "inline",
  title = ctaBand.title,
}: {
  variant?: "centered" | "inline";
  title?: string;
}) {
  if (variant === "centered") {
    return (
      <section data-surface="dark" className="relative overflow-hidden bg-ink-900">
        <Photo name="gov-b" alt="" sizes="100vw" className="opacity-[0.22]" />
        <div className="relative mx-auto flex w-full max-w-[1280px] flex-col items-center gap-[22px] px-5 py-20 text-center md:px-8 md:py-28">
          <Heading size="cta">{title}</Heading>
          <p className="m-0 max-w-[640px] text-[19px] leading-[1.6] text-lead">{ctaBand.body}</p>
          <Button href={site.ctaHref} className="mt-2">
            {site.ctaLabel}
          </Button>
        </div>
      </section>
    );
  }

  return (
    <Section
      tone="ink-900"
      size="md"
      className="border-t border-line-darker"
      innerClassName="flex flex-wrap items-center justify-between gap-x-12 gap-y-6"
    >
      <Heading size="h2-md" className="max-w-[720px]">
        {title}
      </Heading>
      <Button href={site.ctaHref}>{site.ctaLabel}</Button>
    </Section>
  );
}
