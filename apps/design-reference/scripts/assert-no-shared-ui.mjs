#!/usr/bin/env node
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const pkgPath = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "../package.json",
);
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
const deps = { ...pkg.dependencies, ...pkg.devDependencies };

assert.equal(
  deps["@design-sites/ui"],
  undefined,
  "design-reference must not depend on @design-sites/ui",
);

console.log("PASS design-reference package.json has no @design-sites/ui");
