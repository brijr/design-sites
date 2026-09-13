# Design review checklist

Use this before merging a change that touches identity, chrome, or long-form
typography. Derived from ADR 0001.

## Identity

- [ ] App still looks distinct from its siblings. No shared face.
- [ ] Theme values live in `theme-profile.css`, not in `@design-sites/ui`.
- [ ] Shared CSS has no brand hex fills for palette tokens.
- [ ] `check-theme-profile.mjs` passes on the app profile.

## Reading

- [ ] Long-form content uses `.prose` from the shared package where the floor applies.
- [ ] `--muted` on `--background` clears at least 4.5:1.
- [ ] Focus styles remain visible on interactive prose links.

## Scope

- [ ] No React design-system components ported wholesale.
- [ ] Stubs still copy rather than import the shared layer.
- [ ] File boundaries for the cohesion PR id still hold.
