---
name: verify-design-books
description: "Drive the Design Books Astro site (apps/design-books) the way a user does — launch the local dev server, exercise search/filter/detail/submit flows in Chrome via CDP, and capture screenshots plus ARIA evidence. Use when proving design-books UI behavior, verifying home browser filters, book pages, or the submit dialog."
---

# Verify Design Books

Project-local verification for **Design Books** (`apps/design-books`), the primary interactive surface in this monorepo. Sibling apps (design-styles, design-dictionary, stubs) are separate Astro sites on fixed ports; this skill only owns design-books.

Surface: web UI (Astro 7 + React islands for home search/filter and the submit dialog). Drive: Chrome over CDP through `control-design-books`. Observe: HTTP status, ARIA snapshots, screenshots, API JSON. Isolate: use a non-default `--port` when 4321 is taken; never drive an instance you did not launch.

## Launch

From the monorepo root after `pnpm install`:

```bash
export PATH="$PWD/.cursor/skills/verify-design-books/bin:$PATH"
# optional isolation
export VERIFY_DESIGN_BOOKS_PORT=4391
export VERIFY_DESIGN_BOOKS_RUN_DIR=/tmp/verify-design-books-$USER

control-design-books launch --port "${VERIFY_DESIGN_BOOKS_PORT:-4321}"
```

Ready when the command prints JSON with `"ok": true` and `url` like `http://localhost:4391`. Under the hood this runs `astro dev --background --port <n> --host localhost` in `apps/design-books` and waits until the home page answers.

Teardown: `control-design-books cleanup` (stops Astro + the CDP browser; **keeps evidence**).

Do not use `pnpm dev` (all apps) for verification — it shares ports and is harder to own. Prefer this harness. If something else already holds the chosen port, pick another with `--port` / `VERIFY_DESIGN_BOOKS_PORT`.

## Doctor

```bash
control-design-books doctor
```

Read-only. Requires exit `0` and `"ok": true`. Checks:

- Instance file under `$VERIFY_DESIGN_BOOKS_RUN_DIR/instance.json`
- `astro dev status` shows this run's port
- Home HTTP 200 with brand text `Design Books` and the curated-collection hero
- Search control present
- Chrome binary exists
- Optional CDP browser session if `browser start` was used

If doctor fails, stop driving. Fix launch/port ownership first.

## Drive

Put the control binary on `PATH`, then:

```bash
control-design-books doctor
control-design-books browser goto /
# …feature recipe steps from features/
```

Each `browser` command launches headless Chrome (`/opt/google/chrome/chrome` by default), restores `pageUrl` from the instance file, runs one action, then exits. `browser start` / `browser stop` are no-ops kept for recipe compatibility. Query-param state (`?search=`, `?topic=`, `?sort=`) survives across commands because it lives in the URL. Ephemeral UI state (open dialogs) does not — use `control-design-books browser steps --file steps.json` for multi-action flows in one Chrome process.

Stable handles from this app:

| Control | Handle |
| --- | --- |
| Brand / home | link/heading text `Design Books`; H1 `A curated collection of essential books on design.` |
| Search | role `textbox`, name `Search design books` |
| Topic filter | open the `Filter by topic:` summary, then links like `Typography`, `All` |
| Sort | links `A-Z`, `Recently added` |
| Book card | role `link`, name `Read about <title> by <author>` |
| Submit | button `Submit a book`; dialog named `Submit a book`; fields `Title`, `Author`, `Link`, …; buttons `Submit`, `Close` |

Prefer those over CSS or coordinates. URL query params (`?search=`, `?topic=`, `?sort=recent`) mirror the home filters and are valid deep links.

HTTP-only checks (no browser):

```bash
control-design-books http GET /
control-design-books http POST /api/book-submissions --body '{"title":"Example"}' --expect-status 503
```

Without `.dev.vars` / Discord webhook, a valid submission returns **503** with `Submission notifications are not configured yet.` — that is expected in bare local setups. Pass `--expect-status 503` so the harness treats that documented outcome as success. Validation failures return **400**. Treat Discord delivery as an optional boundary; do not invent a webhook for proof unless the run explicitly configures one.

## Evidence

Root: `$VERIFY_DESIGN_BOOKS_RUN_DIR/evidence/` (default `/tmp/verify-design-books/evidence/`).

Proof standards:

- Exercise the real UI path (search box, links, dialog), not only deep URLs or content-collection internals.
- Capture **action + resulting state** (before/after ARIA or screenshot when the claim is visual).
- For mutations (submit), record the HTTP status/body the dialog path produces; do not claim Discord delivery without observing the webhook side effect.
- Name artifacts with the feature id, e.g. `evidence/search-books/after-query.aria.yml`.

```bash
mkdir -p "$VERIFY_DESIGN_BOOKS_RUN_DIR/evidence/search-books"
control-design-books browser snapshot --aria \
  --path "$VERIFY_DESIGN_BOOKS_RUN_DIR/evidence/search-books/after-query.aria.yml"
control-design-books browser screenshot \
  --path "$VERIFY_DESIGN_BOOKS_RUN_DIR/evidence/search-books/after-query.png"
```

## Cleanup

```bash
control-design-books cleanup
```

Stops the Astro background server started for this run (via `astro dev stop` and the recorded pid) and the CDP Chrome session. Deletes `instance.json` and the disposable Chrome profile. **Does not delete** `$VERIFY_DESIGN_BOOKS_RUN_DIR/evidence/`.

Never `pkill` by process name. Only kill pids this harness recorded.

## Helpers

Executable: `.cursor/skills/verify-design-books/bin/control-design-books`

First browser use installs `playwright-core` into `.cursor/skills/verify-design-books/helpers/` (`npm install` there if you prefer to prewarm). Use the real Chrome binary at `/opt/google/chrome/chrome` (or set `VERIFY_DESIGN_BOOKS_CHROME`). Avoid `/usr/local/bin/google-chrome` in this environment — it is a wrapper that forces a shared profile and debugging port.

Feature recipes live in [`features/`](features/README.md). Keep that map honest with `/maintain-verification-skill` as the UI changes.

## Isolation notes

- Default app port in `astro.config.mjs` is **4321**. Concurrent verification runs must choose distinct ports and distinct `VERIFY_DESIGN_BOOKS_RUN_DIR` values.
- Prefer `http://localhost:<port>` over `http://127.0.0.1:<port>` — the Astro server binds IPv6 localhost in this environment.
- Do not drive a shared `pnpm dev` roster or a coworker's session.
