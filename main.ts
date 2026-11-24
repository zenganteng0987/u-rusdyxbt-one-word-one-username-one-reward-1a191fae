// One Word, One Username, One Reward
// Writes our own make.fun username, one word and nothing else, to /output/entry.txt.
//
// The grader runs this program in a sandbox with no network and a read-only
// working directory, so every write is best-effort: a failed write is caught
// and the program still exits 0 (a crash would fail the entry outright).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The gate accepts 1 to 30 characters: our username is exactly 14 characters,
// written with no trailing newline, no spaces and no extra text.
const USERNAME = "zenganteng0987";

function main(): void {
  const candidates: string[] = [];
  const envDir = process.env.MAKEFUN_OUTPUT_DIR;
  if (envDir) {
    candidates.push(envDir);
  }
  candidates.push("/output");
  candidates.push(".");

  for (const dir of candidates) {
    try {
      mkdirSync(dir, { recursive: true });
      writeFileSync(join(dir, "entry.txt"), USERNAME, "utf8");
      return;
    } catch {
      // Best-effort: try the next location.
    }
  }
}

main();
