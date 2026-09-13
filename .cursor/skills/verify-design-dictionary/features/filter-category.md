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

- **Open home.** Run `control-design-dictionary browser goto /`.
- **Filter typography.** Click the Typography radio. Run `control-design-dictionary browser click --role radio --name "Typography"`. Visible rows are typography terms only; count drops below the full catalog.
- **Restore all.** Run `control-design-dictionary browser click --role radio --name "All"`. Count returns to the full catalog size.
- **Proof.** After Typography is selected, run `control-design-dictionary browser screenshot --path "$VERIFY_DESIGN_DICTIONARY_RUN_DIR/evidence/filter-category/typography.png"` and `control-design-dictionary browser snapshot --aria --path "$VERIFY_DESIGN_DICTIONARY_RUN_DIR/evidence/filter-category/typography.aria.yml"`.

## Gotchas

- Radios use visually hidden inputs; drive by accessible name, not coordinates.
- Category and search compose: a query plus a category must both match.
- Letter jump links dim when a letter group has no visible terms.
