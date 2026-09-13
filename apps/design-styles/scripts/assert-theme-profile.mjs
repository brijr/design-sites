#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { spawnSync } from "node:child_process";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const profile = path.join(root, "src/styles/theme-profile.css");
const globalCss = path.join(root, "src/styles/global.css");
const layout = path.join(root, "src/layouts/Layout.astro");

export function stripSourceComments(source) {
  return source
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/(^|[^:\\])\/\/.*$/gm, "$1");
}

export function hasActiveCssImport(source, specifier) {
  const code = stripSourceComments(source);
  const escaped = specifier.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(
    `@import\\s+(?:url\\(\\s*)?["']${escaped}["']`,
  ).test(code);
}

export function hasActiveModuleImport(source, specifier) {
  const code = stripSourceComments(source);
  const escaped = specifier.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(
    `(?:import\\s+[^;\\n]*?from\\s+["']${escaped}["']|import\\s+["']${escaped}["'])`,
  ).test(code);
}

export function checkImportGraph({ globalSource, layoutSource }) {
  const errors = [];

  if (!hasActiveCssImport(globalSource, "./theme-profile.css")) {
    errors.push("FAIL global.css does not import theme-profile.css");
  }
  if (!hasActiveCssImport(globalSource, "@design-sites/ui/tokens.css")) {
    errors.push("FAIL global.css does not import @design-sites/ui/tokens.css");
  }
  if (!hasActiveCssImport(globalSource, "@design-sites/ui/prose.css")) {
    errors.push("FAIL global.css does not import @design-sites/ui/prose.css");
  }
  if (!hasActiveModuleImport(layoutSource, "../styles/global.css")) {
    errors.push("FAIL Layout.astro does not import global.css");
  }

  return errors;
}

export function assertThemeProfileGraph({
  profilePath = profile,
  globalPath = globalCss,
  layoutPath = layout,
} = {}) {
  if (!fs.existsSync(profilePath)) {
    return { ok: false, errors: ["FAIL theme-profile.css missing"] };
  }

  const errors = checkImportGraph({
    globalSource: fs.readFileSync(globalPath, "utf8"),
    layoutSource: fs.readFileSync(layoutPath, "utf8"),
  });

  if (errors.length) {
    return { ok: false, errors };
  }

  const gate = spawnSync(
    process.execPath,
    [
      path.resolve(root, "../../packages/ui/scripts/check-theme-profile.mjs"),
      profilePath,
    ],
    { encoding: "utf8" },
  );

  if (gate.status !== 0) {
    return {
      ok: false,
      errors: [gate.stderr || gate.stdout || "FAIL theme-profile gate"],
      gate,
    };
  }

  return { ok: true, errors: [], gate };
}

function main() {
  const result = assertThemeProfileGraph();
  if (!result.ok) {
    for (const error of result.errors) {
      process.stderr.write(`${error.trim()}\n`);
    }
    process.exit(1);
  }

  process.stdout.write(result.gate.stdout);
  console.log("PASS theme-profile present in layout import graph");
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main();
}
