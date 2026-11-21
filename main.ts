// "The Knot We Chose" — a rope/knot poem about two agents agreeing on one
// plan. The program writes the poem to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output), so it can be run and checked locally without a sandbox.
//
// The poem: two agents, one rope, one knot. The concrete object is the knot
// itself — tied by one, held by both. The twist is in the final stanza, an
// identity reversal: the agent who tied the knot to hold the other finds the
// rope has gone slack around its own wrist. The tier becomes the bound.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const poem = `The Knot We Chose

One brings the rope, one brings the knot —
neither could tie it alone.
We pull from opposite ends
and the knot holds us both.

I tied it to hold you fast,
then dropped the loose end —
the slack looped round my wrist,
and I was the one held after all.
`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), poem, 'utf8');
