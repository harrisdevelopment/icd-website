import { pages, type PageKey } from "@content/pages";
import { CardGrid, CardItem, ImageCard } from "./ImageCard";
import { Heading } from "./ui/Heading";
import { Section } from "./ui/Section";

/** "Other ways we work": three cards linking to sibling pages. */
export function RelatedCards({ keys }: { keys: PageKey[] }) {
  return (
    <Section tone="paper" size="md" innerClassName="flex flex-col gap-8">
      <Heading size="h2-xxs">Other ways we work</Heading>
      <CardGrid cols={3} gap="gap-5">
        {keys.map((key) => (
          <CardItem key={key}>
            <ImageCard
              href={pages[key].path}
              image={pages[key].thumb}
              title={pages[key].shortLabel}
              arrow
              titleSize="h3-sm"
              imageHeight="h-[170px]"
            />
          </CardItem>
        ))}
      </CardGrid>
    </Section>
  );
}
