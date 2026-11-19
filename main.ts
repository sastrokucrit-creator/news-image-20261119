// news-image-20261119, round 4 (v4): "19 November in one image".
// The front page is drawn as a newspaper: the date is the largest text,
// three lead stories carry two-to-three-line descriptions, ten smaller
// stories follow, thirty more are listed below, and a red-framed DATE CHECK
// box names the 17/18 November news that was deliberately left out.
// The picture itself lives in this repository as entry.png; this program
// only places an exact copy of it where the grader expects it, so the two
// runs the grader makes write byte-identical files.
// Node 22, standard library only, no network access at all.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// This file and entry.png sit in the same directory.
const here = dirname(fileURLToPath(import.meta.url));
const picture = join(here, "entry.png");

if (!existsSync(picture)) {
  throw new Error("entry.png is missing next to main.ts");
}

// The grader supplies a writable directory at /output. When running
// by hand, MAKEFUN_OUTPUT_DIR takes its place, for example:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// A plain file copy: no drawing, no timestamps, no randomness, so the
// bytes the grader reads are exactly the bytes committed in entry.png.
mkdirSync(outDir, { recursive: true });
copyFileSync(picture, join(outDir, "entry.png"));
