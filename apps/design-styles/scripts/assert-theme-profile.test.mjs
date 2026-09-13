#!/usr/bin/env node
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import {
  assertThemeProfileGraph,
  checkImportGraph,
  hasActiveCssImport,
  hasActiveModuleImport,
  stripSourceComments,
} from "./assert-theme-profile.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const fixtures = path.join(here, "fixtures");

const commentedCss = fs.readFileSync(
  path.join(fixtures, "commented-imports.global.css"),
  "utf8",
);
const commentedLayout = fs.readFileSync(
  path.join(fixtures, "commented-imports.Layout.astro"),
  "utf8",
);
const goodCss = fs.readFileSync(
  path.join(fixtures, "good-imports.global.css"),
  "utf8",
);
const goodLayout = fs.readFileSync(
  path.join(fixtures, "good-imports.Layout.astro"),
  "utf8",
);

assert.equal(
  hasActiveCssImport(commentedCss, "./theme-profile.css"),
  false,
  "commented theme-profile import must not count",
);
assert.equal(
  hasActiveCssImport(commentedCss, "@design-sites/ui/tokens.css"),
  false,
  "commented tokens import must not count",
);
assert.equal(
  hasActiveModuleImport(commentedLayout, "../styles/global.css"),
  false,
  "commented Layout import must not count",
);

const commentedErrors = checkImportGraph({
  globalSource: commentedCss,
  layoutSource: commentedLayout,
});
assert.ok(commentedErrors.length >= 4);
assert.match(commentedErrors.join("\n"), /theme-profile\.css/);

assert.equal(hasActiveCssImport(goodCss, "./theme-profile.css"), true);
assert.equal(
  hasActiveCssImport(goodCss, "@design-sites/ui/tokens.css"),
  true,
);
assert.equal(
  hasActiveCssImport(goodCss, "@design-sites/ui/prose.css"),
  true,
);
assert.equal(
  hasActiveModuleImport(goodLayout, "../styles/global.css"),
  true,
);
assert.deepEqual(
  checkImportGraph({ globalSource: goodCss, layoutSource: goodLayout }),
  [],
);

assert.match(
  stripSourceComments("/* @import \"./theme-profile.css\"; */\n"),
  /^\s*$/,
);

const live = assertThemeProfileGraph();
assert.equal(live.ok, true);
assert.match(live.gate.stdout, /^PASS /);

console.log("PASS assert-theme-profile.test.mjs");
