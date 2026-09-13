#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const ALLOWLIST = new Set([
  "--background",
  "--foreground",
  "--muted",
  "--border",
  "--accent",
  "--radius",
  "--font-sans",
  "--font-display",
  "--prose-measure",
  "--container",
]);

const profilePath = process.argv[2];
if (!profilePath) {
  console.error("Usage: node check-theme-profile.mjs <theme-profile.css>");
  process.exit(2);
}

function stripCssComments(source) {
  return source.replace(/\/\*[\s\S]*?\*\//g, "");
}

const css = stripCssComments(fs.readFileSync(profilePath, "utf8"));
const decls = [...css.matchAll(/--([a-z0-9-]+)\s*:/gi)].map((m) => `--${m[1]}`);
const unknown = [...new Set(decls)].filter((name) => !ALLOWLIST.has(name));
const missing = [...ALLOWLIST].filter((name) => !decls.includes(name));

if (unknown.length) {
  console.error(`FAIL unknown tokens: ${unknown.join(", ")}`);
  process.exit(1);
}
if (missing.length) {
  console.error(`FAIL missing required tokens: ${missing.join(", ")}`);
  process.exit(1);
}
console.log(
  `PASS ${path.basename(profilePath)} covers allowlist (${ALLOWLIST.size} tokens)`,
);
