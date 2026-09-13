# Filter by medium

Medium radios hide style entries that do not include the chosen medium and keep matching articles and jump links visible.

## Sub-features

- `filter-medium` hides non-matching `[data-medium]` entries.
- `filter-all` restores every entry.
- `filter-era-groups` hides era groups that have no remaining entries.

## How to get to it (user POV)

- On `/`, choose a medium radio label such as `Graphic` or `All`.

## Driving it with control-design-styles

Preconditions:

- Design Styles is healthy at the launched URL (doctor ok).
- Home lists Bauhaus and other movements.

- **Filter + proof (one session).** Medium selection is CSS-only on `/` and does not change the URL; keep click and evidence in one `browser steps` session:

```bash
RUN_DIR="${VERIFY_DESIGN_STYLES_RUN_DIR:-/tmp/verify-design-styles}"
mkdir -p "$RUN_DIR/evidence/filter-medium"
cat > /tmp/styles-filter-graphic.json <<EOF
[
  {"action":"goto","positionals":["/"]},
  {"action":"click","flags":{"role":"radio","name":"Graphic"}},
  {"action":"snapshot","flags":{"path":"$RUN_DIR/evidence/filter-medium/graphic.aria.yml"}},
  {"action":"screenshot","flags":{"path":"$RUN_DIR/evidence/filter-medium/graphic.png"}}
]
EOF
control-design-styles browser steps --file /tmp/styles-filter-graphic.json
```

Non-graphic entries hide; Bauhaus remains when it includes graphic.

- **Restore all.** Run a separate session that clicks `All`, or navigate to `/` again (default is All).

## Gotchas

- Filtering is CSS `:has` — no URL change. Separate `click` then `screenshot` commands reopen `/` on All — always use `browser steps` for action + evidence.
- Radios use visually hidden inputs; drive by accessible name.
- An entry can belong to multiple mediums; `data-medium` is space-separated.
