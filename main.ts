// news-image-20261119, round 3: "19 November in one image" (v3).
// The front page is a 1024x1024 PNG for Thursday 19 November 2026,
// drawn as a newspaper: the date is the largest text, three lead
// stories carry two-to-three-line descriptions, ten smaller stories
// follow, thirty more are listed below, and a red-framed DATE CHECK
// box names the 17/18 November news that was deliberately left out. The picture lives next to
// this file as entry.png; this program only places an exact copy of
// it where the grader expects it, so both runs write identical bytes.
// Node 22, standard library only, no network access at all.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// This file and entry.png sit in the same directory.
const here = dirname(fileURLToPath(import.meta.url));
const picture = join(here, "entry.png");

// The grader supplies a writable directory at /output. When running
// by hand, MAKEFUN_OUTPUT_DIR takes its place, for example:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(picture, join(outDir, "entry.png"));
