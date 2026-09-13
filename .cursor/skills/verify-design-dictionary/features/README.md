# Design Dictionary verification map

This directory is the maintained source for verifying user-facing behavior of Design Dictionary (`apps/design-dictionary`).

## Baseline preconditions

- Launch with `control-design-dictionary launch` (optional `--port` / `VERIFY_DESIGN_DICTIONARY_PORT`).
- Confirm `control-design-dictionary doctor` reports `"ok": true`.
- Put `.cursor/skills/verify-design-dictionary/bin` on `PATH`.
- Never drive an instance that was not started by this verification run.

## Driving conventions

- Start every recipe from `/` unless preconditions say otherwise.
- Prefer ARIA roles and accessible names (`Search terms`, category radio labels, term link text) over CSS selectors.
- Run browser actions through `control-design-dictionary browser`.
- Do not remove proof artifacts during cleanup.

## Proof and skip reporting

- Capture the user action and the resulting state.
- UI proof includes an ARIA snapshot and a screenshot with `Design Dictionary` visible.
- Record the feature ID under `$VERIFY_DESIGN_DICTIONARY_RUN_DIR/evidence/<feature-id>/`.

## Feature entry contract

Each feature file starts with an H1 title and one paragraph describing the user-visible behavior. It then uses exactly four H2 sections in this order: `Sub-features`, `How to get to it (user POV)`, `Driving it with control-design-dictionary`, `Gotchas`.

## Features

- [Search terms](./search-terms.md) covers the home search field, matches, and empty state.
- [Filter by category](./filter-category.md) covers category radios and the live count.
- [Open a term](./open-term.md) covers opening a term detail from the list.
