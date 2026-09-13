# Filter by category

Category radios narrow the term list to one vocabulary bucket and update the live count.

## Sub-features

- `filter-select` hides terms outside the chosen category.
- `filter-all` restores the full list.
- `filter-count` updates the polite live region with the visible term count.

## How to get to it (user POV)

- On `/`, choose a category radio label such as `Typography` or `All`.

## Driving it with control-design-dictionary

Preconditions:

- Design Dictionary is healthy at the launched URL (doctor ok).
- Home shows category radios including `Typography`.

- **Filter + proof (one session).** Category selection is client-only on `/`; keep click and evidence in one `browser steps` session:

```bash
RUN_DIR="${VERIFY_DESIGN_DICTIONARY_RUN_DIR:-/tmp/verify-design-dictionary}"
mkdir -p "$RUN_DIR/evidence/filter-category"
cat > /tmp/dictionary-filter-typography.json <<EOF
[
  {"action":"goto","positionals":["/"]},
  {"action":"click","flags":{"role":"radio","name":"Typography"}},
  {"action":"snapshot","flags":{"path":"$RUN_DIR/evidence/filter-category/typography.aria.yml"}},
  {"action":"screenshot","flags":{"path":"$RUN_DIR/evidence/filter-category/typography.png"}}
]
EOF
control-design-dictionary browser steps --file /tmp/dictionary-filter-typography.json
```

Visible rows are typography terms only; count drops below the full catalog.

- **Restore all.** Run a separate session that clicks `All`, or navigate to `/` again (default is All).

## Gotchas

- Radios use visually hidden inputs; drive by accessible name, not coordinates.
- Category state is not in the URL. Separate `click` then `screenshot` commands reopen `/` on All — always use `browser steps` for action + evidence.
- Category and search compose: a query plus a category must both match.
- Letter jump links dim when a letter group has no visible terms.
