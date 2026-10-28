import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { site } from "@content/site";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <Section tone="ink-900" size="xl" innerClassName="flex flex-col items-start gap-6">
      <Eyebrow>Error 404</Eyebrow>
      <Heading as="h1" size="h1-sm">
        That page isn&apos;t here.
      </Heading>
      <p className="m-0 max-w-[560px] text-[19px] leading-[1.6] text-lead">
        The link may be old or mistyped. Head back to the home page, or tell us about your roof and
        we&apos;ll take it from there.
      </p>
      <div className="mt-2 flex flex-wrap items-center gap-x-7 gap-y-4">
        <Button href={site.ctaHref}>{site.ctaLabel}</Button>
        <Button href="/" variant="secondary" size="lg">
          Back to home
        </Button>
      </div>
    </Section>
  );
}
