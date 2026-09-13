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

- **Open home.** Go to `/`. Run `control-design-dictionary browser goto /`. The heading `One hundred words every designer should know.` is visible and the count is greater than zero.
- **Type a term query.** Fill the search box. Run `control-design-dictionary browser fill --role searchbox --name "Search terms" --value "kerning"`. The count becomes `1 term` and a Kerning row remains.
- **Empty state.** Replace the query with nonsense. Run `control-design-dictionary browser fill --role searchbox --name "Search terms" --value "zzzx-no-such-term"`. The page shows `No terms match that search.`
- **Proof.** Capture the matching state after the kerning query. Run `control-design-dictionary browser snapshot --aria --path "$VERIFY_DESIGN_DICTIONARY_RUN_DIR/evidence/search-terms/match.aria.yml"` and `control-design-dictionary browser screenshot --path "$VERIFY_DESIGN_DICTIONARY_RUN_DIR/evidence/search-terms/match.png"`.

## Gotchas

- Search is client-side on `input`; assert the visible count and rows, not a navigation event.
- Matching is case-insensitive substring across term name and definition.
- Prefer `localhost` URLs; `127.0.0.1` may fail while the server is healthy.
- Clearing search restores the full list — prove empty and match as separate steps.
