---
name: verify-design-dictionary
description: "Drive the Design Dictionary Astro site (apps/design-dictionary) — launch local dev, exercise search, category filter, and term open in Chrome, and capture screenshots plus ARIA evidence. Use when proving design-dictionary UI behavior."
---

# Verify Design Dictionary

Project-local verification for **Design Dictionary** (`apps/design-dictionary`). Sibling apps are separate Astro sites on fixed ports; this skill only owns design-dictionary.

Surface: web UI (Astro + inline catalog script for search and category filter). Drive: Chrome through `control-design-dictionary`. Observe: HTTP status, ARIA snapshots, screenshots. Isolate: use a non-default `--port` when 4325 is taken; never drive an instance you did not launch.

## Launch

From the monorepo root after `pnpm install`:

```bash
export PATH="$PWD/.cursor/skills/verify-design-dictionary/bin:$PATH"
export VERIFY_DESIGN_DICTIONARY_PORT=4325
export VERIFY_DESIGN_DICTIONARY_RUN_DIR=/tmp/verify-design-dictionary-$USER

control-design-dictionary launch --port "${VERIFY_DESIGN_DICTIONARY_PORT:-4325}"
```

Ready when the command prints JSON with `"ok": true` and `url` like `http://localhost:4325`.

Teardown: `control-design-dictionary cleanup` (stops Astro; **keeps evidence**).

Do not use root `pnpm dev` for verification.

## Doctor

```bash
control-design-dictionary doctor
```

Requires exit `0` and `"ok": true`. Checks instance file, `astro dev status` for this port, home HTTP 200 with brand `Design Dictionary` and the hundred-words hero, search and category controls, and Chrome.

If doctor fails, stop driving.

## Drive

```bash
control-design-dictionary doctor
control-design-dictionary browser goto /
```

Stable handles:

| Control | Handle |
| --- | --- |
| Brand / home | link text `Design Dictionary`; H1 `One hundred words every designer should know.` |
| Search | role `searchbox`, name `Search terms` |
| Category filter | radio labels `All`, `Principles`, `Typography`, `Interface`, `Layout`, `Color`, `Perception` |
| Term row | link whose name starts with the term, e.g. `Kerning` |
| Letter jump | nav `Jump to letter` |

Prefer those over CSS. Filter and search are client-side and do not change the URL; assert visible count and rows, not navigation. Keep action + screenshot/snapshot in one `control-design-dictionary browser steps --file …` session so evidence is not taken on a fresh default `/`.

Set mobile width with `control-design-dictionary browser viewport --width 390 --height 844` (persists on the instance for later browser commands).

## Evidence

Root: `$VERIFY_DESIGN_DICTIONARY_RUN_DIR/evidence/` (default `/tmp/verify-design-dictionary/evidence/`).

## Cleanup

```bash
control-design-dictionary cleanup
```

Stops the Astro server this harness started. Deletes `instance.json`. **Does not delete** evidence.

## Helpers

Executable: `.cursor/skills/verify-design-dictionary/bin/control-design-dictionary`

First browser use installs `playwright-core` into `.cursor/skills/verify-design-dictionary/helpers/`. Prefer `/opt/google/chrome/chrome`.

Feature recipes: [`features/`](features/README.md).

## Isolation notes

- Default port **4325**. Concurrent runs need distinct ports and `VERIFY_DESIGN_DICTIONARY_RUN_DIR` values.
- Prefer `http://localhost:<port>` over `http://127.0.0.1:<port>`.
- Do not drive a shared `pnpm dev` roster.
