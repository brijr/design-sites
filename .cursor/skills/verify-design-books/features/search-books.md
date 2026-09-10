# Search books

Search lets a user narrow the home reading list by title, author, description, or topic text, see a live count, and distinguish no matches from a populated grid.

## Sub-features

- `search-type` filters the grid as the user types in the search field.
- `search-match` keeps matching books (title/author/body/topic text) and drops others.
- `search-empty` shows `No books found` when nothing matches.
- `search-deeplink` applies the same filter from `/?search=<query>`.

## How to get to it (user POV)

- Focus the search field on `/` (accessible name `Search design books`) and type a query.
- Open a URL with `?search=<query>` on the home page.

## Driving it with control-design-books

Preconditions:

- Design Books is healthy at the launched URL (doctor ok).
- Catalog includes `Don't Make Me Think` by Steve Krug.

- **Open home.** Go to `/`. Run `control-design-books browser goto /`. The heading `A curated collection of essential books on design.` is visible and the book count is greater than zero.
- **Type a title query.** Fill the search box. Run `control-design-books browser fill --role textbox --name "Search design books" --value "Krug"`. The count becomes `1 book` and a link named `Read about Don't Make Me Think by Steve Krug` remains.
- **Empty state.** Replace the query with nonsense. Run `control-design-books browser fill --role textbox --name "Search design books" --value "zzzx-no-such-book"`. The page shows `No books found`.
- **Deep link.** Navigate with a query param. Run `control-design-books browser goto "/?search=Don't%20Make%20Me%20Think"`. The Steve Krug book remains visible without retyping; count is `1 book`.
- **Proof.** Capture the matching state after the Krug query (or the deep link). Run `control-design-books browser snapshot --aria --path "$VERIFY_DESIGN_BOOKS_RUN_DIR/evidence/search-books/match.aria.yml"` and `control-design-books browser screenshot --path "$VERIFY_DESIGN_BOOKS_RUN_DIR/evidence/search-books/match.png"`. Artifacts show Design Books branding, the search value, `1 book`, and Don't Make Me Think.

## Gotchas

- Search updates via `history.replaceState`; assert the visible grid/count, not a full navigation event.
- Matching is case-insensitive substring across title, author, description, and topic titles.
- Prefer `localhost` URLs; `127.0.0.1` may fail while the server is healthy.
- Clearing search (empty value) restores the full list — prove empty and match as separate steps.
- The search field exists in SSR HTML before the React island hydrates. `control-design-books` waits until the input value matches `?search=` before acting; if you drive Playwright yourself, wait for that same condition.
