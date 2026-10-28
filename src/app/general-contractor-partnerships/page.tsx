import { InteriorTemplate } from "@/components/InteriorTemplate";
import { buildMetadata } from "@/lib/metadata";
import { gc } from "@content/interior";
import { pages } from "@content/pages";

export const metadata = buildMetadata({
  title: gc.meta.title,
  description: gc.meta.description,
  path: pages.gc.path,
});

export default function Page() {
  return <InteriorTemplate page={gc} />;
}
