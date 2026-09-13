# Design Books verification map

This directory is the maintained source for verifying user-facing behavior of Design Books (`apps/design-books`). Read the index before driving the app, then use the matching feature file as the recipe.

## Baseline preconditions

- Launch with `control-design-books launch` (optional `--port` / `VERIFY_DESIGN_BOOKS_PORT`).
- Confirm `control-design-books doctor` reports `"ok": true` for this run's URL and port.
- Put `.cursor/skills/verify-design-books/bin` on `PATH`.
- Never drive an instance that was not started by this verification run.
- Sibling monorepo apps on 4322–4325 are out of scope for these recipes.

## Driving conventions

- Start every recipe from `/` unless its preconditions say otherwise.
- Prefer ARIA roles and accessible names (`Search design books`, `Submit a book`, `Read about …`) over CSS selectors.
- Treat every command as literal. Keep quoted names and flags unchanged.
- Run browser actions through `control-design-books browser`.
- Run API checks through `control-design-books http`.
- Restore filter state by navigating to `/` after a mutation of query params. Do not remove proof artifacts during cleanup.

## Proof and skip reporting

- Capture the user action and the resulting state, not only the final screen.
- UI proof includes an ARIA snapshot and a screenshot with `Design Books` visible.
- API proof includes method, path, status, and body.
- Record the feature ID and entry point used with every artifact under `$VERIFY_DESIGN_BOOKS_RUN_DIR/evidence/<feature-id>/`.
- Report an unreachable path with the attempted command and the unmet precondition.
- Do not report a skipped entry point as verified through a different path.

## Feature entry contract

Each feature file starts with an H1 title and one paragraph describing the user-visible behavior. It then uses exactly four H2 sections in this order.

1. `Sub-features` lists short IDs with one line for each behavior.
2. `How to get to it (user POV)` lists every user entry point.
3. `Driving it with control-design-books` starts with `Preconditions:` and uses labeled bullets that pair each user action with an exact command and observable result.
4. `Gotchas` lists traps that can waste or invalidate a verification run.

Keep implementation details out of the map. Name only user paths, stable handles, required state, commands, and observable proof.

## Features

- [Search books](./search-books.md) covers the home search field, matches, empty state, and query-param deep link.
- [Filter and sort](./filter-and-sort.md) covers topic filter and A-Z / Recently added sorting.
- [Open a book](./open-book.md) covers opening a book from the home grid and reading the detail page.
- [Browse taxonomy](./browse-taxonomy.md) covers `/topics`, `/authors`, and topic/author detail pages.
- [Submit a book](./submit-book.md) covers the submit dialog, validation, cancel, and the unconfigured-webhook path.
