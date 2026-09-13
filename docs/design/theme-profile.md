# Theme profile rules

Each app owns one `theme-profile.css` that assigns values to the token allowlist.
That file is the only place app identity lives: palette, fonts, radius, accent,
and container width.

## Rules

1. Cover every token in `docs/design/token-allowlist.md`.
2. Do not invent custom properties outside the allowlist in the profile file.
3. Do not put brand hex fills into `@design-sites/ui`. Shared CSS names tokens only.
4. Apps must stay visually distinct. Do not ship one shared skin across sites.
5. Run `node packages/ui/scripts/check-theme-profile.mjs path/to/theme-profile.css`
   before merge. Exit 0 is required.

## Stub exception

Stub apps copy what they borrow. They do not import `@design-sites/ui`. Distinct
placeholder skins still apply so stubs do not twin each other.
