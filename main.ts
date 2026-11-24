// Ship It Friday entry: writes one funny git commit message an AI coding
// agent would write right before breaking production on a Friday.
// Revision: wording of the line itself is final; this comment only clarifies
// that the output file must contain exactly the line, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const LINE =
  "fix: removed the bug and also the database, ship it, it is friday and the rollback script is just vibes";

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ??
  join(dirname(fileURLToPath(import.meta.url)), "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
