#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const profile = path.join(root, "src/styles/theme-profile.css");
const globalCss = path.join(root, "src/styles/global.css");
const layout = path.join(root, "src/layouts/Layout.astro");

if (!fs.existsSync(profile)) {
  console.error("FAIL theme-profile.css missing");
  process.exit(1);
}

const globalSource = fs.readFileSync(globalCss, "utf8");
if (!globalSource.includes('./theme-profile.css')) {
  console.error("FAIL global.css does not import theme-profile.css");
  process.exit(1);
}
if (!globalSource.includes("@design-sites/ui/tokens.css")) {
  console.error("FAIL global.css does not import @design-sites/ui/tokens.css");
  process.exit(1);
}
if (!globalSource.includes("@design-sites/ui/prose.css")) {
  console.error("FAIL global.css does not import @design-sites/ui/prose.css");
  process.exit(1);
}

const layoutSource = fs.readFileSync(layout, "utf8");
if (!layoutSource.includes("../styles/global.css")) {
  console.error("FAIL Layout.astro does not import global.css");
  process.exit(1);
}

const gate = spawnSync(
  process.execPath,
  [
    path.resolve(root, "../../packages/ui/scripts/check-theme-profile.mjs"),
    profile,
  ],
  { encoding: "utf8" },
);

if (gate.status !== 0) {
  process.stderr.write(gate.stderr || gate.stdout || "FAIL theme-profile gate\n");
  process.exit(gate.status ?? 1);
}

process.stdout.write(gate.stdout);
console.log("PASS theme-profile present in layout import graph");
