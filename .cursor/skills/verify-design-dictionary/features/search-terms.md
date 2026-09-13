# Search terms

Search lets a user narrow the A–Z term list by name or definition text, see a live count, and distinguish no matches from a populated list.

## Sub-features

- `search-type` filters rows as the user types in the search field.
- `search-match` keeps matching terms and drops others.
- `search-empty` shows `No terms match that search.` when nothing matches.

## How to get to it (user POV)

- Focus the search field on `/` (accessible name `Search terms`) and type a query.

## Driving it with control-design-dictionary

Preconditions:

- Design Dictionary is healthy at the launched URL (doctor ok).
- Catalog includes `Kerning`.

- **Match + proof (one session).** Search state is client-only on `/`; keep fill and evidence in one `browser steps` session:

```bash
RUN_DIR="${VERIFY_DESIGN_DICTIONARY_RUN_DIR:-/tmp/verify-design-dictionary}"
mkdir -p "$RUN_DIR/evidence/search-terms"
cat > /tmp/dictionary-search-match.json <<EOF
[
  {"action":"goto","positionals":["/"]},
  {"action":"fill","flags":{"role":"searchbox","name":"Search terms","value":"kerning"}},
  {"action":"wait-for-text","positionals":["1 term"]},
  {"action":"snapshot","flags":{"path":"$RUN_DIR/evidence/search-terms/match.aria.yml"}},
  {"action":"screenshot","flags":{"path":"$RUN_DIR/evidence/search-terms/match.png"}}
]
EOF
control-design-dictionary browser steps --file /tmp/dictionary-search-match.json
```

The count becomes `1 term` and a Kerning row remains; artifacts show the filtered result.

- **Empty state (one session).**

```bash
cat > /tmp/dictionary-search-empty.json <<EOF
[
  {"action":"goto","positionals":["/"]},
  {"action":"fill","flags":{"role":"searchbox","name":"Search terms","value":"zzzx-no-such-term"}},
  {"action":"wait-for-text","positionals":["No terms match that search."]},
  {"action":"screenshot","flags":{"path":"$RUN_DIR/evidence/search-terms/empty.png"}}
]
EOF
control-design-dictionary browser steps --file /tmp/dictionary-search-empty.json
```

## Gotchas

- Search is client-side on `input` and does not change the URL. Separate `fill` then `screenshot` commands reopen `/` empty — always use `browser steps` for action + evidence.
- Matching is case-insensitive substring across term name and definition.
- Prefer `localhost` URLs; `127.0.0.1` may fail while the server is healthy.
- Clearing search restores the full list — prove empty and match as separate sessions.
