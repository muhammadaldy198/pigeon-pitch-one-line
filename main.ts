// One line, 140 characters: a city pigeon runs due diligence on the investor, then invests in them.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const PICK = "We did due diligence on you: you feed 38 of us at noon, you own a bakery, and your statue is the warmest in the square, so we invest in you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, PICK, "utf8");
chmodSync(target, 0o644);
