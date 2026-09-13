#!/usr/bin/env node
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
process.stdout.write(good.stdout);
process.stderr.write(good.stderr);
if (good.status !== 0) {
  process.exit(good.status ?? 1);
}

const bad = run("bad.theme-profile.css");
process.stdout.write(bad.stdout);
process.stderr.write(bad.stderr);
if (bad.status === 1 && /FAIL unknown tokens/.test(bad.stderr)) {
  console.log("PASS bad fixture rejected");
  process.exit(0);
}

console.error("FAIL expected bad fixture to exit 1 with unknown tokens");
process.exit(1);
