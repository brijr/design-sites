---
name: verify-design-styles
description: "Drive the Design Styles Astro site (apps/design-styles) — launch local dev, exercise medium filter and entry open in Chrome, and capture screenshots plus ARIA evidence. Use when proving design-styles UI behavior."
---

# Verify Design Styles

Project-local verification for **Design Styles** (`apps/design-styles`). Sibling apps are separate Astro sites on fixed ports; this skill only owns design-styles.

Surface: web UI (Astro; medium filter via CSS `:has`). Drive: Chrome through `control-design-styles`. Observe: HTTP status, ARIA snapshots, screenshots. Isolate: use a non-default `--port` when 4322 is taken; never drive an instance you did not launch.

## Launch

From the monorepo root after `pnpm install`:

```bash
export PATH="$PWD/.cursor/skills/verify-design-styles/bin:$PATH"
export VERIFY_DESIGN_STYLES_PORT=4322
export VERIFY_DESIGN_STYLES_RUN_DIR=/tmp/verify-design-styles-$USER

control-design-styles launch --port "${VERIFY_DESIGN_STYLES_PORT:-4322}"
```

Ready when the command prints JSON with `"ok": true` and `url` like `http://localhost:4322`.

Teardown: `control-design-styles cleanup` (stops Astro; **keeps evidence**).

Do not use root `pnpm dev` for verification.

## Doctor

```bash
control-design-styles doctor
```

Requires exit `0` and `"ok": true`. Checks instance file, `astro dev status` for this port, home HTTP 200 with brand `Design Styles` and the field-guide hero, medium filter, style entries, and Chrome.

If doctor fails, stop driving.

## Drive

```bash
control-design-styles doctor
control-design-styles browser goto /
```

Stable handles:

| Control | Handle |
| --- | --- |
| Brand / home | link text `Design Styles`; H1 `A visual field guide to design.` |
| Medium filter | radio labels `All`, `Graphic`, `Editorial`, `Identity`, `Interface`, `Product` |
| Style jump | nav `Jump to a style`; in-page links like `Bauhaus` |
| Entry | link to `/bauhaus` (or other slug); detail H1 matches the style title |
| Adjacent | nav `Adjacent styles` |

Medium filtering is CSS-only and does not change the URL; assert hidden vs visible articles after clicking a medium label. Keep action + screenshot/snapshot in one `control-design-styles browser steps --file …` session so evidence is not taken on a fresh default `/`.

Set mobile width with `control-design-styles browser viewport --width 390 --height 844`.

## Evidence

Root: `$VERIFY_DESIGN_STYLES_RUN_DIR/evidence/` (default `/tmp/verify-design-styles/evidence/`).

## Cleanup

```bash
control-design-styles cleanup
```

Stops the Astro server this harness started. Deletes `instance.json`. **Does not delete** evidence.

## Helpers

Executable: `.cursor/skills/verify-design-styles/bin/control-design-styles`

First browser use installs `playwright-core` into `.cursor/skills/verify-design-styles/helpers/`. Prefer `/opt/google/chrome/chrome`.

Feature recipes: [`features/`](features/README.md).

## Isolation notes

- Default port **4322**. Concurrent runs need distinct ports and `VERIFY_DESIGN_STYLES_RUN_DIR` values.
- Prefer `http://localhost:<port>` over `http://127.0.0.1:<port>`.
- Do not drive a shared `pnpm dev` roster.
