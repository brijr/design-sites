# Open a book

Open a book lets a user leave the home grid for a detail page with title, author links, topics, optional purchase link, body prose, and related books.

## Sub-features

- `open-from-grid` follows a home card link into `/<slug>`.
- `open-identity` shows the book title as H1 and author name(s) as links.
- `open-topics` lists topic links on the detail page.
- `open-related` shows a Related books section when relatives exist.
- `open-home` returns via the `Design Books` brand link.

## How to get to it (user POV)

- On `/`, choose a book card link named `Read about <title> by <author>`.
- Open `/<slug>` directly (slug equals the content id, e.g. `/dont-make-me-think`).

## Driving it with control-design-books

Preconditions:

- Design Books is healthy at the launched URL (doctor ok).
- Book `dont-make-me-think` is in the catalog.

- **Open from grid.** From a search or full grid, open the book. Run `control-design-books browser goto /` then `control-design-books browser click --role link --name "Read about Don't Make Me Think by Steve Krug"`. The URL ends with `/dont-make-me-think` and the H1 is `Don't Make Me Think`.
- **Confirm author.** Observe the author link `Steve Krug`. Run `control-design-books browser wait-for-text "Steve Krug"`.
- **Confirm topics.** Observe topic links such as `Usability and UX`. Run `control-design-books browser wait-for-text "Usability and UX"`.
- **Return home.** Choose the brand link. Run `control-design-books browser click --role link --name "Design Books"`. The home hero heading returns.
- **Proof.** Run `control-design-books browser goto /dont-make-me-think`, then snapshot and screenshot into `$VERIFY_DESIGN_BOOKS_RUN_DIR/evidence/open-book/`. Artifacts show the title, author, and Design Books chrome.

## Gotchas

- Card accessible names include both title and author; use the full `Read about … by …` string.
- Purchase controls open an external Amazon (or other) URL in a new tab — do not treat that navigation as an in-app failure.
- Related books are optional; absence is not a failure when the catalog has no relatives.
