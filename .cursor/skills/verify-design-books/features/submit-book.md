# Submit a book

Submit a book lets a user open a dialog from the site chrome, enter a recommendation, cancel without sending, see validation errors, and learn when notifications are not configured.

## Sub-features

- `submit-open` opens the dialog from `Submit a book`.
- `submit-cancel` closes via `Close` or the backdrop without sending.
- `submit-validate` rejects an empty title with an inline error.
- `submit-unconfigured` shows the not-configured message when no Discord webhook is set (HTTP 503).
- `submit-api` exercises `POST /api/book-submissions` with the same payload shape.

## How to get to it (user POV)

- Choose `Submit a book` in the top nav on any page using the site layout.
- Call `POST /api/book-submissions` with JSON fields `title`, `author`, `link`, `notes`, `contact` (and leave honeypot `website` empty).

## Driving it with control-design-books

Preconditions:

- Design Books is healthy at the launched URL (doctor ok).
- No `DISCORD_BOOK_SUBMISSIONS_WEBHOOK_URL` in `.dev.vars` unless the run intentionally tests Discord delivery.

- **Open + cancel (one session).** Dialog state is in-memory; use `browser steps` so open and close share one Chrome process:

```bash
RUN_DIR="${VERIFY_DESIGN_BOOKS_RUN_DIR:-/tmp/verify-design-books}"
mkdir -p "$RUN_DIR/evidence/submit-book"
cat > /tmp/submit-open-close.json <<EOF
[
  {"action":"goto","positionals":["/"]},
  {"action":"click","flags":{"role":"button","name":"Submit a book"}},
  {"action":"wait-for-text","positionals":["Send a recommendation for the reading list."]},
  {"action":"click","flags":{"role":"button","name":"Close"}},
  {"action":"screenshot","flags":{"path":"$RUN_DIR/evidence/submit-book/after-close.png"}}
]
EOF
control-design-books browser steps --file /tmp/submit-open-close.json
```

- **Unconfigured webhook (API).** Run `control-design-books http POST /api/book-submissions --body '{"title":"Verification Probe","author":"Harness","notes":"local verify"}' --expect-status 503`. Expect status `503` and message `Submission notifications are not configured yet.` when no webhook is set.
- **Proof.** Keep API JSON and dialog screenshots under `$VERIFY_DESIGN_BOOKS_RUN_DIR/evidence/submit-book/`. Do not claim Discord delivery unless a webhook was configured and the side effect was observed.

## Gotchas

- The honeypot field `website` must stay empty; filling it returns a fake success without notifying Discord.
- A 503 without webhook is a valid local outcome, not a harness failure.
- Do not commit real webhook URLs; `.dev.vars` is gitignored.
- While `Submitting...` is shown, Close is disabled — wait for idle/error/success before cancel assertions.
- Ephemeral dialog state does not survive per-command browser launches. Use `control-design-books browser steps --file …` for open/cancel/validate sequences.
