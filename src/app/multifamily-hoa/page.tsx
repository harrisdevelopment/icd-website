import { InteriorTemplate } from "@/components/InteriorTemplate";
import { buildMetadata } from "@/lib/metadata";
import { multifamily } from "@content/interior";
import { pages } from "@content/pages";

export const metadata = buildMetadata({
  title: multifamily.meta.title,
  description: multifamily.meta.description,
  path: pages.multifamily.path,
});

export default function Page() {
  return <InteriorTemplate page={multifamily} />;
}
