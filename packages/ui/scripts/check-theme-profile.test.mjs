#!/usr/bin/env node
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const checker = path.join(root, "scripts", "check-theme-profile.mjs");

function run(fixture) {
  return spawnSync(process.execPath, [checker, path.join(root, "fixtures", fixture)], {
    encoding: "utf8",
  });
}

const good = run("good.theme-profile.css");
assert.equal(good.status, 0);
assert.match(good.stdout, /^PASS /);

const bad = run("bad.theme-profile.css");
assert.equal(bad.status, 1);
assert.match(bad.stderr, /FAIL unknown tokens/);

console.log("PASS check-theme-profile.test.mjs");
