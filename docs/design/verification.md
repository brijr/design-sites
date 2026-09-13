# Verification skills

Live verification for the three interactive design sites uses project-local control binaries plus the shared `control-ui` practice from cursor-team-kit.

## Skills

| App | Port | Skill | Control binary |
| --- | --- | --- | --- |
| design-books | 4321 | [`.cursor/skills/verify-design-books/`](../../.cursor/skills/verify-design-books/SKILL.md) | `control-design-books` |
| design-styles | 4322 | [`.cursor/skills/verify-design-styles/`](../../.cursor/skills/verify-design-styles/SKILL.md) | `control-design-styles` |
| design-dictionary | 4325 | [`.cursor/skills/verify-design-dictionary/`](../../.cursor/skills/verify-design-dictionary/SKILL.md) | `control-design-dictionary` |

Each skill launches only its own Astro app, refuses to drive an instance it did not record, and keeps evidence under its run directory after cleanup.

## Shared practice

- Prefer these harnesses over root `pnpm dev` for live lanes.
- Use `doctor` until `"ok": true` before feature recipes.
- Capture screenshots and ARIA snapshots under the skill evidence root.
- For generic CDP or one-off probes outside these apps, use `control-ui` from cursor-team-kit.

## Feature recipes

- Books: `.cursor/skills/verify-design-books/features/`
- Styles: `.cursor/skills/verify-design-styles/features/`
- Dictionary: `.cursor/skills/verify-design-dictionary/features/`
