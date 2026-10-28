// Lists every [BRACKETED] placeholder in the content files, with file and line.
// Run `npm run placeholders` and compare with PLACEHOLDERS.md after editing copy.
// When the client supplies a value, replace the bracketed text in /content.
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const dir = "content";
let total = 0;
for (const file of readdirSync(dir).filter((f) => f.endsWith(".ts")).sort()) {
  const lines = readFileSync(join(dir, file), "utf8").split("\n");
  lines.forEach((line, i) => {
    // Skip comments; match only bracketed text inside string literals.
    if (/^\s*\/\//.test(line)) return;
    for (const m of line.matchAll(/"[^"]*?(\[[^\]]+\])[^"]*"/g)) {
      for (const p of m[0].matchAll(/\[[^\]]+\]/g)) {
        console.log(`${file}:${i + 1}  ${p[0]}`);
        total++;
      }
    }
  });
}
console.log(`\n${total} placeholder(s) in /content`);
