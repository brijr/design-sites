# Browse taxonomy

Browse taxonomy lets a user inspect the topic index, author index, and their detail pages that list books for one topic or author.

## Sub-features

- `topics-index` loads `/topics` with topic tiles and counts.
- `topic-detail` loads `/topics/<slug>` for one topic.
- `authors-index` loads `/authors` with author entries.
- `author-detail` loads `/authors/<slug>` for one author.
- `taxonomy-from-book` reaches topic/author pages from links on a book detail page.

## How to get to it (user POV)

- Open `/topics` or `/authors` directly.
- From a book page, choose a topic link or an author link.

## Driving it with control-design-books

Preconditions:

- Design Books is healthy at the launched URL (doctor ok).

- **Topics index.** Run `control-design-books browser goto /topics`. The H1 is `Topics` and tiles such as `Typography` appear.
- **Topic detail.** Run `control-design-books browser goto /topics/typography`. The page title/heading identifies Typography books and lists book cards.
- **Authors index.** Run `control-design-books browser goto /authors`. The H1 is `Authors`.
- **Author from book.** Open a book and follow the author. Run `control-design-books browser goto /dont-make-me-think` then `control-design-books browser click --role link --name "Steve Krug"`. The URL is under `/authors/` and lists that author's books.
- **Proof.** Snapshot `/topics` and `/authors` into `$VERIFY_DESIGN_BOOKS_RUN_DIR/evidence/browse-taxonomy/`. Artifacts show Design Books branding and the index headings.

## Gotchas

- There is no primary-nav link to `/topics` or `/authors` on the home chrome; URL entry and in-page links are the supported paths.
- Author slugs are derived from names; prefer clicking the visible author link over guessing the slug when proving the user path.
