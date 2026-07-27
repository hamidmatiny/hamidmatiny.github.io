#!/usr/bin/env node
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Resvg } from '@resvg/resvg-js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '../public');
const out = join(outDir, 'og.png');

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0b0d10"/>
      <stop offset="55%" stop-color="#10151c"/>
      <stop offset="100%" stop-color="#0e1a18"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="48" y="48" width="1104" height="534" rx="8" fill="none" stroke="#243038" stroke-width="2"/>
  <text x="96" y="160" font-family="ui-sans-serif, system-ui, -apple-system, sans-serif" font-size="28" font-weight="600" fill="#7dd3c0" letter-spacing="4">HAMID MATINY</text>
  <text x="96" y="280" font-family="Georgia, 'Times New Roman', serif" font-size="58" font-weight="600" fill="#e8ebe9">AI Infrastructure &amp; MLOps</text>
  <text x="96" y="350" font-family="Georgia, 'Times New Roman', serif" font-size="58" font-weight="600" fill="#e8ebe9">Engineer</text>
  <text x="96" y="430" font-family="ui-sans-serif, system-ui, -apple-system, sans-serif" font-size="26" fill="#9aa3a0">LLM serving · GPU orchestration · production observability</text>
  <text x="96" y="520" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="22" fill="#5c6b68">hamidmatiny.github.io</text>
  <circle cx="1080" cy="520" r="8" fill="#7dd3c0"/>
</svg>`;

mkdirSync(outDir, { recursive: true });
const resvg = new Resvg(svg, {
  fitTo: { mode: 'width', value: 1200 },
});
const png = resvg.render().asPng();
writeFileSync(out, png);
console.log(`Wrote ${out} (${png.length} bytes)`);
