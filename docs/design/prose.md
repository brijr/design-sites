# Prose rules

`.prose` is the shared long-form reading floor in `@design-sites/ui`. It styles
against the token contract so each app keeps its own voice.

## Rules

1. Article and content flows use the shared `.prose` class for the reading floor.
2. Prose CSS reads token names only (`--foreground`, `--muted`, `--accent`,
   `--font-sans`, `--font-display`, `--prose-measure`, `--border`).
3. Default measure is `65ch` via `--prose-measure`. Override in the theme profile
   when an app needs a different column.
4. Muted body copy uses `--muted`, not raw zinc utilities that fail contrast.
5. Specimens, covers, and one-off art stay local. They may use local vars. Chrome
   and article prose stay on the contract.
