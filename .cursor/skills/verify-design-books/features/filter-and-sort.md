# Filter and sort

Filter and sort lets a user narrow the home grid by topic and switch between alphabetical and recently-added order without leaving `/`.

## Sub-features

- `filter-topic-open` opens the topic dropdown from the `Filter by topic:` summary.
- `filter-topic-apply` keeps books tagged with the chosen topic and updates the summary label.
- `filter-topic-clear` returns to `All` / `All topics`.
- `sort-az` orders titles A–Z (default when `sort` is absent).
- `sort-recent` orders by authored `addedAt` descending when `Recently added` is chosen.

## How to get to it (user POV)

- On `/`, open the topic control (summary shows the current topic, default `All topics`) and choose a topic link such as `Typography`.
- Choose `A-Z` or `Recently added` in the sort pair on `/`.
- Open deep links `/?topic=<slug>` or `/?sort=recent`.

## Driving it with control-design-books

Preconditions:

- Design Books is healthy; topic `Typography` exists and has at least one book.

- **Open topic menu.** Go to `/`. Run `control-design-books browser goto /` then `control-design-books browser click-text "All topics"`. The topic panel lists `All` and topic titles including `Typography`.
- **Apply topic.** Choose Typography. Run `control-design-books browser click-text "Typography"`. The summary reads `Typography`, the URL contains `topic=typography`, and every visible card is a typography-tagged book.
- **Sort recent.** Choose Recently added. Run `control-design-books browser click --role link --name "Recently added"`. The URL contains `sort=recent` and `Recently added` is current.
- **Sort A-Z.** Choose A-Z. Run `control-design-books browser click --role link --name "A-Z"`. `sort` leaves the URL and `A-Z` is current.
- **Clear topic.** Re-open the menu and choose All. Run `control-design-books browser click-text "Typography"` (to open if closed), then `control-design-books browser click --role link --name "All"`. The summary returns to `All topics`.
- **Proof.** Run `control-design-books browser goto "/?topic=typography&sort=recent"`, then snapshot and screenshot into `$VERIFY_DESIGN_BOOKS_RUN_DIR/evidence/filter-and-sort/`. Artifacts show the Typography filter and recent sort.

## Gotchas

- Topic options live inside a `<details>` panel; click outside or press Escape to close it.
- Default sort is A-Z with no `sort` query param; only `recent` is written to the URL.
- Topic filtering is by topic slug on the book; the accessible summary uses the topic title.
