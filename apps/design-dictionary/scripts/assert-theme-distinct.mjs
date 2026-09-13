#!/usr/bin/env node
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const dictionaryProfile = path.join(
  root,
  "design-dictionary/src/styles/theme-profile.css",
);
const booksProfile = path.join(
  root,
  "design-books/src/styles/theme-profile.css",
);

function readToken(source, name) {
  const match = source.match(
    new RegExp(`${name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*:\\s*([^;]+);`),
  );
  return match?.[1]?.trim() ?? null;
}

const dictionary = fs.readFileSync(dictionaryProfile, "utf8");
const books = fs.readFileSync(booksProfile, "utf8");

const keys = ["--font-sans", "--background", "--accent"];
const diffs = keys.filter((key) => {
  const left = readToken(dictionary, key);
  const right = readToken(books, key);
  assert.ok(left, `dictionary missing ${key}`);
  assert.ok(right, `books missing ${key}`);
  return left !== right;
});

assert.ok(
  diffs.length >= 1,
  "dictionary theme-profile must differ from books on --font-sans, --background, or --accent",
);

console.log(
  `PASS dictionary theme-profile differs from books on ${diffs.join(", ")}`,
);
