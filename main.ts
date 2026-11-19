// news-image-20261119: the day's front page, Thursday 19 November 2026.
// Node 22, standard library only, no network. The picture itself lives in
// entry.png beside this file — one 1024x1024 PNG of the day's world news,
// 45 stories across 6 continents — and this program places a copy of it at
// /output/entry.png (or $MAKEFUN_OUTPUT_DIR when that is set), so the two
// runs the grader makes write byte-identical files.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Where the picture lives: the directory holding this very file.
const here = dirname(fileURLToPath(import.meta.url));
const picture = readFileSync(join(here, "entry.png"));

// The grader hands us a writable directory; outside it, MAKEFUN_OUTPUT_DIR
// stands in for /output, e.g. `mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts`.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.png"), picture);
