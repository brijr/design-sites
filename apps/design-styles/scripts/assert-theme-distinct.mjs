#!/usr/bin/env node
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const stylesProfile = path.join(
  root,
  "design-styles/src/styles/theme-profile.css",
);
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

const styles = fs.readFileSync(stylesProfile, "utf8");
const dictionary = fs.readFileSync(dictionaryProfile, "utf8");
const books = fs.readFileSync(booksProfile, "utf8");

const keys = [
  "--font-sans",
  "--background",
  "--accent",
  "--muted",
  "--border",
  "--radius",
  "--font-display",
];

function diffsAgainst(otherSource, label) {
  return keys.filter((key) => {
    const left = readToken(styles, key);
    const right = readToken(otherSource, key);
    assert.ok(left, `styles missing ${key}`);
    assert.ok(right, `${label} missing ${key}`);
    return left !== right;
  });
}

const vsBooks = diffsAgainst(books, "books");
const vsDictionary = diffsAgainst(dictionary, "dictionary");

assert.ok(
  vsBooks.length >= 2,
  "styles theme-profile must differ from books on at least two allowlist tokens",
);
assert.ok(
  vsDictionary.length >= 2,
  "styles theme-profile must differ from dictionary on at least two allowlist tokens",
);

console.log(
  `PASS styles theme-profile differs from books on ${vsBooks.join(", ")} and from dictionary on ${vsDictionary.join(", ")}`,
);
