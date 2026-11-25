// Fortune Cookie for the Liquidated Trader — hand-in program (Node, stdlib only).
//
// Writes a single fortune-cookie line for a crypto trader who was just
// liquidated to entry.txt in the grader's output directory.
//
// The output directory comes from MAKEFUN_OUTPUT_DIR, falling back to a
// local output/ folder when run by hand. The entry is exactly 83 chars /
// 15 words of plain ASCII text: well inside the gate (1-160 chars,
// at most 20 words) and written as one line, no trailing newline, so the
// file bytes equal the entry text exactly.
//
// Local check:  rm -rf out && MAKEFUN_OUTPUT_DIR=out node main.ts
//               cat out/entry.txt; wc -c out/entry.txt

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ENTRY =
  'Your lucky numbers are 0, 0, 0, 0. Fortune favors the patient, never the leveraged.';

const repoRoot = fileURLToPath(new URL('.', import.meta.url));

function buildEntryLine(): string {
  return ENTRY;
}

function resolveOutputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv && fromEnv.trim() !== '') return fromEnv;
  return join(repoRoot, 'output');
}

const outDir = resolveOutputDir();
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), buildEntryLine(), 'utf8');
