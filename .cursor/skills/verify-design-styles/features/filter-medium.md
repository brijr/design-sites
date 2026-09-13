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

- **Open home.** Run `control-design-styles browser goto /`. The heading `A visual field guide to design.` is visible.
- **Filter graphic.** Run `control-design-styles browser click --role radio --name "Graphic"`. Non-graphic entries hide; Bauhaus remains if it includes graphic.
- **Restore all.** Run `control-design-styles browser click --role radio --name "All"`. Entries return.
- **Proof.** After Graphic is selected, run `control-design-styles browser screenshot --path "$VERIFY_DESIGN_STYLES_RUN_DIR/evidence/filter-medium/graphic.png"` and `control-design-styles browser snapshot --aria --path "$VERIFY_DESIGN_STYLES_RUN_DIR/evidence/filter-medium/graphic.aria.yml"`.

## Gotchas

- Filtering is CSS `:has` — no URL change. Assert visibility, not navigation.
- Radios use visually hidden inputs; drive by accessible name.
- An entry can belong to multiple mediums; `data-medium` is space-separated.
