import Image from "next/image";
import { images, type ImageKey } from "@content/images";

/**
 * A photo from the registry in content/images.ts, filling its parent.
 * The parent must be `relative` and have a fixed height or aspect ratio, which
 * keeps layout stable (no shift). Pass alt="" for decorative images.
 */
export function Photo({
  name,
  alt,
  sizes,
  preload = false,
  quality,
  className = "",
}: {
  name: ImageKey;
  alt?: string;
  sizes: string;
  preload?: boolean;
  /** Must be listed in images.qualities in next.config.ts. */
  quality?: 55 | 70 | 75;
  className?: string;
}) {
  const img = images[name];
  return (
    <Image
      src={img.src}
      alt={alt ?? img.alt}
      fill
      sizes={sizes}
      preload={preload}
      quality={quality}
      className={`object-cover ${className}`}
    />
  );
}
