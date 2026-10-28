import { InteriorTemplate } from "@/components/InteriorTemplate";
import { buildMetadata } from "@/lib/metadata";
import { government } from "@content/interior";
import { pages } from "@content/pages";

export const metadata = buildMetadata({
  title: government.meta.title,
  description: government.meta.description,
  path: pages.government.path,
});

export default function Page() {
  return <InteriorTemplate page={government} />;
}
