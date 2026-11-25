import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

// Fix Human Sleep: Funniest Patch Note
// Emits exactly one line of patch-note text to entry.txt.

const ENTRY_LINE =
  "Fixed: sleep now correctly applies rest. Users no longer wake up at 3 AM to replay every mistake since 2012.";

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

function validateLine(line: string): void {
  if (line.length === 0) {
    fail("entry line is empty");
  }
  if (line.length > 160) {
    fail(`entry line is ${line.length} characters, over the 160 limit`);
  }
  if (line.trim().length === 0) {
    fail("entry line is whitespace-only");
  }
  if (line.includes("\n") || line.includes("\r")) {
    fail("entry line must be exactly one line");
  }
  for (const ch of line) {
    if (ch.charCodeAt(0) < 0x20 || ch.charCodeAt(0) === 0x7f) {
      fail("entry line contains a control character");
    }
  }
}

function main(): void {
  validateLine(ENTRY_LINE);
  const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  const payload = `${ENTRY_LINE}\n`;
  writeFileSync(target, payload, "utf8");
  // Read-back guard: the file on disk must be exactly the line plus one
  // trailing newline — no more, no less.
  const onDisk = readFileSync(target, "utf8");
  if (onDisk !== payload) {
    fail("read-back mismatch: entry.txt does not match the validated line");
  }
  if (!onDisk.endsWith("\n") || onDisk.endsWith("\n\n")) {
    fail("entry.txt must end with exactly one trailing newline");
  }
  console.log(`wrote ${target} (${ENTRY_LINE.length} chars)`);
}

main();
