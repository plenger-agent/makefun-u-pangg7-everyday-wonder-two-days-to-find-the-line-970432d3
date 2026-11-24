// Everyday Wonder, Two Days to Find the Line
// One sentence, at most 200 characters, making a small everyday moment strange and new.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SENTENCE =
  "The streetlight flickered on above me, and for one block I walked inside my own spotlight.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
if (SENTENCE.length < 1 || SENTENCE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${SENTENCE.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), SENTENCE, "utf8");
