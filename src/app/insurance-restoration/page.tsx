import { InteriorTemplate } from "@/components/InteriorTemplate";
import { buildMetadata } from "@/lib/metadata";
import { insurance } from "@content/interior";
import { pages } from "@content/pages";

export const metadata = buildMetadata({
  title: insurance.meta.title,
  description: insurance.meta.description,
  path: pages.insurance.path,
});

export default function Page() {
  return <InteriorTemplate page={insurance} />;
}
