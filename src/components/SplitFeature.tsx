import type { ReactNode } from "react";
import type { ImageKey } from "@content/images";
import { rt } from "@/lib/text";
import { Eyebrow } from "./ui/Eyebrow";
import { Heading } from "./ui/Heading";
import { Photo } from "./ui/Photo";

/** Photo (or photo pair) beside text. `imageSide` flips the layout. */
export function SplitFeature({
  images,
  imageSide = "left",
  eyebrow,
  title,
  body,
  list,
  listMarker = "check",
  children,
}: {
  images: ImageKey[];
  imageSide?: "left" | "right";
  eyebrow?: string;
  title: string;
  body?: string;
  list?: string[];
  listMarker?: "check" | "number";
  children?: ReactNode;
}) {
  const pair = images.length > 1;
  return (
    <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-14">
      {/* Photos come first on small screens, whichever side they sit on. */}
      <div
        className={`grid min-w-0 gap-4 ${pair ? "grid-cols-2" : "grid-cols-1"} ${
          imageSide === "right" ? "lg:order-2" : ""
        }`}
      >
        {images.map((name, i) => (
          <div
            key={name}
            className={`relative overflow-hidden rounded-card bg-ink-800 ${
              pair ? "h-[240px] md:h-[420px]" : "h-[280px] md:h-[460px]"
            } ${pair && i === 1 ? "mt-8 md:mt-12" : ""}`}
          >
            <Photo
              name={name}
              sizes={pair ? "(min-width: 1024px) 320px, 45vw" : "(min-width: 1024px) 640px, 100vw"}
            />
          </div>
        ))}
      </div>

      <div className={`flex min-w-0 flex-col gap-5 ${imageSide === "right" ? "lg:order-1" : ""}`}>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <Heading size="h2-sm">{title}</Heading>
        {body && <p className="m-0 text-[18px] leading-[1.6] text-body">{rt(body)}</p>}
        {list && (
          <ul className="m-0 flex list-none flex-col gap-3.5 p-0 text-[17px] text-lead">
            {list.map((item, i) => (
              <li key={item} className="flex gap-3.5">
                <span aria-hidden="true" className="font-bold text-accent">
                  {listMarker === "check" ? "✓" : String(i + 1).padStart(2, "0")}
                </span>
                {item}
              </li>
            ))}
          </ul>
        )}
        {children}
      </div>
    </div>
  );
}
