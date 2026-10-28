import { InteriorTemplate } from "@/components/InteriorTemplate";
import { buildMetadata } from "@/lib/metadata";
import { commercial } from "@content/interior";
import { pages } from "@content/pages";

export const metadata = buildMetadata({
  title: commercial.meta.title,
  description: commercial.meta.description,
  path: pages.commercial.path,
});

export default function Page() {
  return <InteriorTemplate page={commercial} />;
}
