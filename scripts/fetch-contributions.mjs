#!/usr/bin/env node
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, '../src/data/contributions.json');

const fallback = {
  total: { 2025: 0, 2026: 0 },
  contributions: [],
  fetchedAt: null,
  ok: false,
};

try {
  const res = await fetch(
    'https://github-contributions-api.jogruber.de/v4/hamidmatiny',
    { headers: { Accept: 'application/json' } },
  );
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  const payload = {
    total: data.total ?? {},
    contributions: (data.contributions ?? []).map((c) => ({
      date: c.date,
      count: c.count,
      level: c.level,
    })),
    fetchedAt: new Date().toISOString(),
    ok: true,
  };
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, JSON.stringify(payload));
  console.log(
    `Wrote ${payload.contributions.length} contribution days (${JSON.stringify(payload.total)})`,
  );
} catch (err) {
  console.warn('Contribution fetch failed, writing fallback:', err.message);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, JSON.stringify(fallback));
}
