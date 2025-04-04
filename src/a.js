import { setTimeout } from 'node:timers/promises';

import('./b.js')

await setTimeout(1000);

export const a = 1;
