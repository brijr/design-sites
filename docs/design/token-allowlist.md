# Token allowlist

Approved semantic CSS custom properties for every app theme profile.

| Token | Role |
| --- | --- |
| `--background` | Page and chrome surface |
| `--foreground` | Primary text |
| `--muted` | Secondary text; must clear 4.5:1 on `--background` |
| `--border` | Dividers and hairlines |
| `--accent` | Links and emphasis |
| `--radius` | Default corner radius |
| `--font-sans` | Body and UI face |
| `--font-display` | Headings; may equal `--font-sans` |
| `--prose-measure` | Max measure for `.prose` |
| `--container` | Max content width for chrome layouts |

`packages/ui/src/tokens.css` declares these names and light or dark plumbing only.
It must not hardcode brand hex fills. Values live in each app `theme-profile.css`.

Unknown custom properties in a profile fail `check-theme-profile.mjs`. Missing
allowlist entries also fail.
