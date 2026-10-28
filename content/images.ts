// Photo registry. To swap a photo, replace the file in /public/images (keep
// the filename) or point `src` at a new file and update the dimensions and alt.
// `alt` is the default description; components pass alt="" for decorative use.
export const images = {
  hero: {
    src: "/images/hero.jpg",
    width: 1120,
    height: 468,
    alt: "Roofer in a safety harness operating a seam welder on a white roof, with a crew and city skyline behind",
  },
  "gov-a": {
    src: "/images/gov-a.jpg",
    width: 696,
    height: 540,
    alt: "Crew installing metal roofing on a large facility",
  },
  "gov-b": {
    src: "/images/gov-b.jpg",
    width: 664,
    height: 540,
    alt: "Crew working on a large low-slope roof",
  },
  "mf-a": {
    src: "/images/mf-a.jpg",
    width: 640,
    height: 418,
    alt: "Roofing crew working on a multifamily apartment building",
  },
  "mf-b": {
    src: "/images/mf-b.jpg",
    width: 642,
    height: 418,
    alt: "Aerial view of a roofing crew on an apartment community",
  },
  "mt-a": {
    src: "/images/mt-a.jpg",
    width: 640,
    height: 378,
    alt: "Technician inspecting a roof drain",
  },
  "mt-b": {
    src: "/images/mt-b.jpg",
    width: 658,
    height: 378,
    alt: "Technician checking metal edge flashing",
  },
  "sys-ins": {
    src: "/images/sys-ins.jpg",
    width: 422,
    height: 274,
    alt: "Crew laying insulation boards on a low-slope roof",
  },
  "sys-metal": {
    src: "/images/sys-metal.jpg",
    width: 386,
    height: 274,
    alt: "Crew installing metal roof panels",
  },
  "sys-mod": {
    src: "/images/sys-mod.jpg",
    width: 378,
    height: 274,
    alt: "Crew installing a torch-applied modified bitumen roof",
  },
  "sys-tpo": {
    src: "/images/sys-tpo.jpg",
    width: 404,
    height: 274,
    alt: "Crew rolling out a single-ply membrane on a low-slope roof",
  },
  "t-com": {
    src: "/images/t-com.jpg",
    width: 336,
    height: 242,
    alt: "Crew working on a metal panel roof",
  },
  "t-gc": {
    src: "/images/t-gc.jpg",
    width: 320,
    height: 242,
    alt: "Large industrial building with a lift beside it",
  },
  "t-gov": {
    src: "/images/t-gov.jpg",
    width: 316,
    height: 242,
    alt: "Crew welding seams on a white membrane roof",
  },
  "t-maint": {
    src: "/images/t-maint.jpg",
    width: 260,
    height: 242,
    alt: "Technician with a tablet inspecting a roof",
  },
  "t-mf": {
    src: "/images/t-mf.jpg",
    width: 334,
    height: 242,
    alt: "Aerial view of an apartment community",
  },
} as const;

export type ImageKey = keyof typeof images;

export const logos = {
  icd: {
    src: "/images/logo-icd.png",
    width: 614,
    height: 598,
    alt: "Innovation Construction Development logo",
  },
  epic: {
    src: "/images/logo-epic.png",
    width: 1610,
    height: 602,
    alt: "Epic Roofing Services Inc., Commercial Roofing Solutions, Florida License CCC1326917",
  },
} as const;
