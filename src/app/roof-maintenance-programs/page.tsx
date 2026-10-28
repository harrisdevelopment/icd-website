import { InteriorTemplate } from "@/components/InteriorTemplate";
import { buildMetadata } from "@/lib/metadata";
import { maintenance } from "@content/interior";
import { pages } from "@content/pages";

export const metadata = buildMetadata({
  title: maintenance.meta.title,
  description: maintenance.meta.description,
  path: pages.maintenance.path,
});

export default function Page() {
  return <InteriorTemplate page={maintenance} />;
}
