// Generates favicon, apple-touch icon, and the Open Graph image from the
// source art in /public/images. Re-run with `npm run assets` if the logo or
// hero photo is replaced.
import sharp from "sharp";
import { writeFileSync } from "node:fs";

const logo = "public/images/logo-icd.png";
const hero = "public/images/hero.jpg";

// Square crop around the gold building mark (source art is 614x598).
const mark = { left: 162, top: 58, width: 270, height: 270 };
const markBuffer = await sharp(logo).extract(mark).toBuffer();

const png = (size) => sharp(markBuffer).resize(size, size).png().toBuffer();

writeFileSync("src/app/icon.png", await png(512));
writeFileSync("src/app/apple-icon.png", await png(180));

// favicon.ico: a single 32x32 PNG wrapped in an ICO container.
const ico32 = await png(32);
const header = Buffer.alloc(22);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(1, 4); // image count
header.writeUInt8(32, 6); // width
header.writeUInt8(32, 7); // height
header.writeUInt16LE(1, 10); // color planes
header.writeUInt16LE(32, 12); // bits per pixel
header.writeUInt32LE(ico32.length, 14); // image size
header.writeUInt32LE(22, 18); // image offset
writeFileSync("src/app/favicon.ico", Buffer.concat([header, ico32]));

// Open Graph image: 1200x630 crop of the hero photo, dark overlay, ICD logo.
const W = 1200;
const H = 630;
const background = await sharp(hero)
  .resize(W, H, { fit: "cover", position: "left" })
  .modulate({ brightness: 0.55 })
  .toBuffer();
const overlay = Buffer.from(
  `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
     <defs><linearGradient id="g" x1="0" x2="1" y1="0" y2="0">
       <stop offset="0" stop-color="#08090B" stop-opacity="0.95"/>
       <stop offset="0.55" stop-color="#08090B" stop-opacity="0.6"/>
       <stop offset="1" stop-color="#08090B" stop-opacity="0.15"/>
     </linearGradient></defs>
     <rect width="${W}" height="${H}" fill="url(#g)"/>
     <rect x="0" y="${H - 8}" width="${W}" height="8" fill="#D4AA4F"/>
   </svg>`,
);
const logoSized = await sharp(logo).resize(420, 409).toBuffer();
await sharp(background)
  .composite([
    { input: overlay, top: 0, left: 0 },
    { input: logoSized, top: Math.round((H - 409) / 2), left: 72 },
  ])
  .jpeg({ quality: 86 })
  .toFile("public/og-image.jpg");

console.log("Generated icon.png, apple-icon.png, favicon.ico, og-image.jpg");
