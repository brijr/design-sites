# Design Styles verification map

This directory is the maintained source for verifying user-facing behavior of Design Styles (`apps/design-styles`).

## Baseline preconditions

- Launch with `control-design-styles launch` (optional `--port` / `VERIFY_DESIGN_STYLES_PORT`).
- Confirm `control-design-styles doctor` reports `"ok": true`.
- Put `.cursor/skills/verify-design-styles/bin` on `PATH`.
- Never drive an instance that was not started by this verification run.

## Driving conventions

- Start every recipe from `/` unless preconditions say otherwise.
- Prefer ARIA roles and accessible names (medium radio labels, style titles) over CSS selectors.
- Run browser actions through `control-design-styles browser`.
- Do not remove proof artifacts during cleanup.

## Proof and skip reporting

- Capture the user action and the resulting state.
- UI proof includes an ARIA snapshot and a screenshot with `Design Styles` visible.
- Record the feature ID under `$VERIFY_DESIGN_STYLES_RUN_DIR/evidence/<feature-id>/`.

## Feature entry contract

Each feature file starts with an H1 title and one paragraph describing the user-visible behavior. It then uses exactly four H2 sections in this order: `Sub-features`, `How to get to it (user POV)`, `Driving it with control-design-styles`, `Gotchas`.

## Features

- [Filter by medium](./filter-medium.md) covers medium radios and hidden non-matching entries.
- [Open a style entry](./open-entry.md) covers opening a specimen entry such as Bauhaus.
