# Open a style entry

Opening an entry takes the user from the field guide to a detail page with definition, specimen rail, and adjacent style links.

## Sub-features

- `entry-open` navigates from a home title link to `/{slug}`.
- `entry-specimen` shows specimen or grammar content on the detail page.
- `entry-adjacent` exposes previous and next style navigation when present.

## How to get to it (user POV)

- On `/`, click a style title such as Bauhaus, or open `/bauhaus` directly.

## Driving it with control-design-styles

Preconditions:

- Design Styles is healthy at the launched URL (doctor ok).
- Catalog includes Bauhaus at `/bauhaus`.

- **Open home.** Run `control-design-styles browser goto /`.
- **Open Bauhaus.** Run `control-design-styles browser goto /bauhaus` or click the Bauhaus title link. The detail heading `Bauhaus` is visible with definition and specimen content.
- **Proof.** Run `control-design-styles browser screenshot --path "$VERIFY_DESIGN_STYLES_RUN_DIR/evidence/open-entry/bauhaus.png"` and `control-design-styles browser snapshot --aria --path "$VERIFY_DESIGN_STYLES_RUN_DIR/evidence/open-entry/bauhaus.aria.yml"`. Artifacts show Design Styles branding and Bauhaus specimen content.

## Gotchas

- Home has both jump links (`#bauhaus`) and detail links (`/bauhaus`); prefer the detail link when proving entry open.
- Specimen art is local to the entry; do not require shared token vars in the screenshot claim.
- Prefer `localhost` over `127.0.0.1`.
