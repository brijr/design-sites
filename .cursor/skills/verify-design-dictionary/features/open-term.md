# Open a term

Opening a term takes the user from the home list to a detail page with the definition, longer detail, and related terms.

## Sub-features

- `term-open` navigates from a home row link to `/{slug}`.
- `term-detail` shows the term heading, definition, and related links.
- `term-adjacent` exposes previous and next term navigation when present.

## How to get to it (user POV)

- On `/`, click a term row such as Kerning, or open `/{slug}` directly.

## Driving it with control-design-dictionary

Preconditions:

- Design Dictionary is healthy at the launched URL (doctor ok).
- Catalog includes Kerning at `/kerning`.

- **Open home.** Run `control-design-dictionary browser goto /`.
- **Open Kerning.** Run `control-design-dictionary browser click-text Kerning` or `control-design-dictionary browser goto /kerning`. The detail heading `Kerning` is visible with definition copy.
- **Proof.** Run `control-design-dictionary browser screenshot --path "$VERIFY_DESIGN_DICTIONARY_RUN_DIR/evidence/open-term/kerning.png"` and `control-design-dictionary browser snapshot --aria --path "$VERIFY_DESIGN_DICTIONARY_RUN_DIR/evidence/open-term/kerning.aria.yml"`.

## Gotchas

- Home list links use the term name as the primary accessible text; prefer that over slug guessing when proving the list path.
- Related-term links stay on the dictionary origin.
- Prefer `localhost` over `127.0.0.1`.
