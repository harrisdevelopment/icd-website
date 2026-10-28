import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { buildMetadata } from "@/lib/metadata";
import { rt } from "@/lib/text";
import { pages } from "@content/pages";
import { privacyPage } from "@content/privacy";

export const metadata = buildMetadata({
  title: privacyPage.meta.title,
  description: privacyPage.meta.description,
  path: pages.privacy.path,
});

export default function PrivacyPage() {
  return (
    <Section tone="ink-900" size="lg" innerClassName="flex max-w-[820px] flex-col gap-8">
      <Heading as="h1" size="h1-sm">
        {privacyPage.title}
      </Heading>
      <p className="m-0 text-[17px] leading-[1.6]">{rt(privacyPage.placeholderNote)}</p>
      {privacyPage.sections.map((section) => (
        <div key={section.title} className="flex flex-col gap-2">
          <Heading size="h3-md">{section.title}</Heading>
          <p className="m-0 text-[17px] leading-[1.65]">{rt(section.body)}</p>
        </div>
      ))}
    </Section>
  );
}
