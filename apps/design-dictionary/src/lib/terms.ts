export const CATEGORIES = [
  "principles",
  "typography",
  "interface",
  "layout",
  "color",
  "perception",
] as const;

export type Category = (typeof CATEGORIES)[number];

export interface Term {
  slug: string;
  term: string;
  category: Category;
  definition: string;
  detail: string;
  related: string[];
}

export const CATEGORY_LABELS: Record<Category, string> = {
  principles: "Principles",
  typography: "Typography",
  interface: "Interface",
  layout: "Layout",
  color: "Color",
  perception: "Perception",
};

export const terms: Term[] = [
  {
    slug: "affordance",
    term: "Affordance",
    category: "interface",
    definition:
      "A cue in an object’s form that suggests how it can be used — a handle invites pulling, a button invites pressing.",
    detail:
      "In interface design, affordances are perceived as much as they are real. A raised control looks pressable; a text field looks editable. Strong affordances reduce learning cost; weak or false ones create hesitation and error.",
    related: ["signifier", "feedback", "mental-model"],
  },
  {
    slug: "alignment",
    term: "Alignment",
    category: "principles",
    definition:
      "The deliberate lining-up of elements along shared edges or axes so the layout reads as ordered rather than scattered.",
    detail:
      "Alignment creates invisible structure. Even without a visible grid, consistent left edges, baselines, and centers help the eye group related content and scan faster.",
    related: ["grid", "proximity", "hierarchy"],
  },
  {
    slug: "analogy",
    term: "Analogy",
    category: "interface",
    definition:
      "Explaining a new interface through a familiar real-world counterpart — folders, desktops, shopping carts.",
    detail:
      "Analogies accelerate first-use understanding, but they break when the digital system outgrows the metaphor. Use them as onboarding bridges, not as permanent constraints on capability.",
    related: ["mental-model", "skeuomorphism", "affordance"],
  },
  {
    slug: "ascender",
    term: "Ascender",
    category: "typography",
    definition:
      "The part of a lowercase letter that rises above the x-height, as in b, d, f, h, k, and l.",
    detail:
      "Ascender height affects perceived size and vertical rhythm. Fonts with tall ascenders often need more leading to avoid collisions between lines.",
    related: ["descender", "x-height", "baseline"],
  },
  {
    slug: "aspect-ratio",
    term: "Aspect Ratio",
    category: "layout",
    definition:
      "The proportional relationship between width and height of a frame, image, or screen — expressed as width:height.",
    detail:
      "Common ratios include 16:9 for video, 1:1 for square media, and 3:2 for many photos. Locking aspect ratio prevents awkward cropping when layouts reflow across breakpoints.",
    related: ["breakpoint", "responsive-design", "cropping"],
  },
  {
    slug: "balance",
    term: "Balance",
    category: "principles",
    definition:
      "The distribution of visual weight so a composition feels stable — symmetrically equal, or asymmetrically resolved.",
    detail:
      "Symmetrical balance is calm and formal. Asymmetrical balance uses contrast of size, color, or position to achieve equilibrium without mirroring. Imbalance can be intentional when you want tension.",
    related: ["contrast", "hierarchy", "whitespace"],
  },
  {
    slug: "baseline",
    term: "Baseline",
    category: "typography",
    definition:
      "The invisible line on which most letters sit; the reference for vertical type alignment.",
    detail:
      "Baseline grids keep multi-column text and mixed type sizes feeling cohesive. Aligning captions, body, and UI labels to a shared baseline is a hallmark of disciplined layout.",
    related: ["leading", "x-height", "baseline-grid"],
  },
  {
    slug: "baseline-grid",
    term: "Baseline Grid",
    category: "layout",
    definition:
      "A vertical rhythm system where text and often other elements snap to evenly spaced horizontal lines.",
    detail:
      "Typically derived from body leading (for example, 4 px or 8 px increments). A baseline grid makes long-form pages feel composed even when components vary in height.",
    related: ["baseline", "leading", "modular-scale"],
  },
  {
    slug: "breakpoint",
    term: "Breakpoint",
    category: "layout",
    definition:
      "A viewport width (or condition) at which a layout changes structure, spacing, or component behavior.",
    detail:
      "Breakpoints should follow content needs, not device catalogs. Prefer a few meaningful shifts — single column to multi-column, stacked actions to inline — over dozens of micro-adjustments.",
    related: ["responsive-design", "container", "grid"],
  },
  {
    slug: "call-to-action",
    term: "Call to Action",
    category: "interface",
    definition:
      "The primary action you want a user to take on a screen or in a flow — usually expressed as a button or link.",
    detail:
      "A strong CTA is specific, visible, and singular. Competing primary actions dilute hierarchy. Support secondary actions with quieter visual weight.",
    related: ["hierarchy", "signifier", "progressive-disclosure"],
  },
  {
    slug: "cap-height",
    term: "Cap Height",
    category: "typography",
    definition:
      "The height of capital letters measured from the baseline to the top of flat capitals like H or E.",
    detail:
      "Cap height and x-height together shape a typeface’s apparent size. Matching cap heights across mixed fonts helps UI chrome look intentional.",
    related: ["x-height", "baseline", "ascender"],
  },
  {
    slug: "cognitive-load",
    term: "Cognitive Load",
    category: "interface",
    definition:
      "The mental effort required to understand and use an interface at a given moment.",
    detail:
      "Design reduces cognitive load by chunking information, revealing complexity progressively, using familiar patterns, and removing unnecessary choices. High load shows up as hesitation, errors, and abandonment.",
    related: ["hicks-law", "progressive-disclosure", "mental-model"],
  },
  {
    slug: "color-harmony",
    term: "Color Harmony",
    category: "color",
    definition:
      "A pleasing relationship among colors, often built from structured schemes like complementary, analogous, or triadic.",
    detail:
      "Harmony is a starting point, not a rulebook. Context, brand, and accessibility contrast matter more than wheel geometry alone. Use schemes to explore, then tune for hierarchy and meaning.",
    related: ["complementary-color", "analogous-color", "contrast"],
  },
  {
    slug: "complementary-color",
    term: "Complementary Color",
    category: "color",
    definition:
      "Colors opposite each other on the color wheel — for example, blue and orange — that create strong contrast when paired.",
    detail:
      "Complements energize accents and calls to action, but full-strength complements side by side can vibrate optically. Soften one side for large surfaces; reserve intensity for emphasis.",
    related: ["color-harmony", "contrast", "hue"],
  },
  {
    slug: "analogous-color",
    term: "Analogous Color",
    category: "color",
    definition:
      "Colors adjacent on the color wheel — such as blue, blue-green, and green — that create calm, cohesive palettes.",
    detail:
      "Analogous schemes feel natural and low-drama. Differentiate roles with value and saturation changes so the interface still has clear hierarchy.",
    related: ["color-harmony", "hue", "saturation"],
  },
  {
    slug: "consistency",
    term: "Consistency",
    category: "principles",
    definition:
      "Using the same patterns, language, and visual treatment for the same kinds of things throughout a product.",
    detail:
      "Internal consistency builds trust inside a product; external consistency borrows from platform conventions users already know. Break consistency only when the difference communicates something meaningful.",
    related: ["design-system", "mental-model", "pattern"],
  },
  {
    slug: "container",
    term: "Container",
    category: "layout",
    definition:
      "A width-constrained wrapper that keeps content readable and centered within a larger viewport.",
    detail:
      "Containers prevent line lengths from sprawling on wide screens. Pair max-width with responsive padding so edges never feel cramped on small devices.",
    related: ["measure", "breakpoint", "margin"],
  },
  {
    slug: "contrast",
    term: "Contrast",
    category: "principles",
    definition:
      "Difference between elements — in size, color, weight, texture, or form — used to create emphasis and clarity.",
    detail:
      "Contrast is how hierarchy becomes visible. Low contrast can feel elegant but often fails accessibility. Aim for deliberate contrast on meaning, not decoration for its own sake.",
    related: ["hierarchy", "contrast-ratio", "balance"],
  },
  {
    slug: "contrast-ratio",
    term: "Contrast Ratio",
    category: "color",
    definition:
      "A numeric measure of luminance difference between foreground and background, used for accessibility checks.",
    detail:
      "WCAG thresholds (commonly 4.5:1 for normal text, 3:1 for large text) are floors, not aesthetics. High-contrast type is readable; pair it with color roles so status and brand still communicate.",
    related: ["contrast", "accessibility", "value"],
  },
  {
    slug: "accessibility",
    term: "Accessibility",
    category: "interface",
    definition:
      "Designing so people with a wide range of abilities can perceive, understand, navigate, and interact with an interface.",
    detail:
      "Accessibility covers vision, hearing, motor, cognitive, and situational constraints. Practical pillars include semantic structure, keyboard support, sufficient contrast, clear labels, and alternatives for non-text content.",
    related: ["contrast-ratio", "affordance", "feedback"],
  },
  {
    slug: "cropping",
    term: "Cropping",
    category: "layout",
    definition:
      "Selecting a portion of an image or composition and discarding the rest to strengthen focus or fit a frame.",
    detail:
      "Cropping is editorial. It can clarify subject, improve aspect fit, or destroy meaning if critical context is cut. Prefer crops that preserve the subject’s gesture and reading direction.",
    related: ["aspect-ratio", "hierarchy", "figure-ground"],
  },
  {
    slug: "descender",
    term: "Descender",
    category: "typography",
    definition:
      "The part of a lowercase letter that drops below the baseline, as in g, j, p, q, and y.",
    detail:
      "Deep descenders need generous leading. In UI, cramped descenders collide with underlines, borders, and the next line of text.",
    related: ["ascender", "baseline", "leading"],
  },
  {
    slug: "design-system",
    term: "Design System",
    category: "interface",
    definition:
      "A shared set of principles, components, patterns, and tokens that keep products coherent as they scale.",
    detail:
      "A system is more than a component library: it encodes decisions about voice, spacing, color roles, and interaction. Governance matters as much as the Figma file.",
    related: ["consistency", "token", "pattern"],
  },
  {
    slug: "emphasis",
    term: "Emphasis",
    category: "principles",
    definition:
      "Making one element stand out so the viewer knows where to look first.",
    detail:
      "Emphasis comes from contrast — size, color, isolation, motion, or weight. If everything is emphasized, nothing is. Limit primary emphasis to one job per view.",
    related: ["hierarchy", "contrast", "call-to-action"],
  },
  {
    slug: "empty-state",
    term: "Empty State",
    category: "interface",
    definition:
      "The screen shown when there is no content yet — a new inbox, a cleared filter, a first-run workspace.",
    detail:
      "Good empty states teach, reassure, and offer a next step. Avoid dead ends; explain why the space is empty and how to populate it.",
    related: ["onboarding", "call-to-action", "feedback"],
  },
  {
    slug: "feedback",
    term: "Feedback",
    category: "interface",
    definition:
      "A system’s response that confirms an action was received and shows what happened as a result.",
    detail:
      "Feedback can be visual, auditory, or haptic. It should be timely and proportional: a subtle press state for a toggle, a clear confirmation for a destructive delete.",
    related: ["affordance", "signifier", "error-prevention"],
  },
  {
    slug: "figure-ground",
    term: "Figure–Ground",
    category: "perception",
    definition:
      "The perceptual separation of a subject (figure) from its surroundings (ground).",
    detail:
      "Designers control figure–ground with contrast, blur, density, and edges. Ambiguous figure–ground can create interesting posters — and unusable forms.",
    related: ["gestalt", "contrast", "whitespace"],
  },
  {
    slug: "fitts-law",
    term: "Fitts’s Law",
    category: "interface",
    definition:
      "A model predicting that the time to acquire a target rises with distance and falls with target size.",
    detail:
      "Practical takeaways: make frequent controls larger and closer; place destructive actions away from easy reaches; use screen edges and corners as easy targets on desktop.",
    related: ["hicks-law", "call-to-action", "affordance"],
  },
  {
    slug: "focal-point",
    term: "Focal Point",
    category: "principles",
    definition:
      "The area of a composition that draws the eye first and anchors the reading order.",
    detail:
      "Establish a focal point with scale, contrast, isolation, or imagery. Supporting elements should lead toward it, not compete with it.",
    related: ["emphasis", "hierarchy", "visual-flow"],
  },
  {
    slug: "font",
    term: "Font",
    category: "typography",
    definition:
      "A specific delivery of a typeface at a particular weight, width, and style — historically a set of metal sorts, today often a file.",
    detail:
      "In casual speech, font and typeface are used interchangeably. Precision still helps: Helvetica is a typeface; Helvetica Bold is a font.",
    related: ["typeface", "weight", "style"],
  },
  {
    slug: "gestalt",
    term: "Gestalt Principles",
    category: "perception",
    definition:
      "A set of perceptual rules describing how humans group visual elements into wholes — proximity, similarity, continuity, closure, and more.",
    detail:
      "Interfaces lean on Gestalt constantly: related controls sit together; similar items share style; disconnected items feel unrelated even if they are not.",
    related: ["proximity", "similarity", "figure-ground"],
  },
  {
    slug: "grid",
    term: "Grid",
    category: "layout",
    definition:
      "A structure of columns, rows, and gutters that organizes content into a predictable spatial system.",
    detail:
      "Grids speed layout decisions and create alignment across pages. Break the grid deliberately for emphasis — after the system is clear enough that the break reads as intentional.",
    related: ["gutter", "margin", "alignment", "modular-scale"],
  },
  {
    slug: "gutter",
    term: "Gutter",
    category: "layout",
    definition:
      "The space between columns in a grid, separating content without needing heavy borders.",
    detail:
      "Gutters that are too tight fuse columns; gutters that are too wide disconnect related content. Match gutter size to content density and type size.",
    related: ["grid", "margin", "whitespace"],
  },
  {
    slug: "hierarchy",
    term: "Hierarchy",
    category: "principles",
    definition:
      "The ordered ranking of importance among elements, guiding what is noticed and read first.",
    detail:
      "Typographic hierarchy uses size, weight, and spacing. Interface hierarchy uses placement, contrast, and component priority. Test hierarchy by squinting: the main path should still emerge.",
    related: ["contrast", "emphasis", "visual-flow"],
  },
  {
    slug: "hicks-law",
    term: "Hick’s Law",
    category: "interface",
    definition:
      "The observation that decision time increases as the number and complexity of choices increase.",
    detail:
      "Reduce simultaneous choices, chunk options, and use progressive disclosure. Defaults and smart recommendations shorten decisions without removing control.",
    related: ["cognitive-load", "progressive-disclosure", "fitts-law"],
  },
  {
    slug: "hue",
    term: "Hue",
    category: "color",
    definition:
      "The attribute of color that we name — red, green, blue — independent of lightness or intensity.",
    detail:
      "Hue carries cultural and brand meaning. In UI systems, define hues as roles (brand, danger, success) rather than one-off swatches so meaning stays stable.",
    related: ["saturation", "value", "color-harmony"],
  },
  {
    slug: "iconography",
    term: "Iconography",
    category: "interface",
    definition:
      "The system of symbols used to represent actions, objects, and status in an interface.",
    detail:
      "Icons should share optical size, stroke logic, and metaphor. Pair ambiguous icons with labels. A coherent icon set is a language, not a folder of SVGs.",
    related: ["signifier", "affordance", "consistency"],
  },
  {
    slug: "information-architecture",
    term: "Information Architecture",
    category: "interface",
    definition:
      "The organization, labeling, and navigation structure that determines how content is found and understood.",
    detail:
      "Good IA mirrors user mental models. Techniques include card sorting, tree testing, and clear taxonomies. Pretty UI cannot rescue a confusing structure.",
    related: ["mental-model", "navigation", "hierarchy"],
  },
  {
    slug: "kerning",
    term: "Kerning",
    category: "typography",
    definition:
      "The adjustment of space between specific letter pairs so spacing looks even, not mathematically equal.",
    detail:
      "Automatic kerning handles most text. Manual kerning matters for logos, large headlines, and awkward pairs like AV or To. Prefer optical rhythm over rigid metrics.",
    related: ["tracking", "letter-spacing", "measure"],
  },
  {
    slug: "leading",
    term: "Leading",
    category: "typography",
    definition:
      "The vertical distance from baseline to baseline between lines of type; also called line height.",
    detail:
      "Body text usually needs leading greater than the type size for comfortable reading. Tight leading suits large display type; loose leading can feel airy or disconnected.",
    related: ["baseline", "measure", "x-height"],
  },
  {
    slug: "letter-spacing",
    term: "Letter Spacing",
    category: "typography",
    definition:
      "Uniform adjustment of space across a range of characters — often used interchangeably with tracking.",
    detail:
      "Slightly open letter spacing can help small caps and uppercase labels. Over-spacing body text harms readability. Tighten large display type carefully to keep words cohesive.",
    related: ["tracking", "kerning", "weight"],
  },
  {
    slug: "ligature",
    term: "Ligature",
    category: "typography",
    definition:
      "A single glyph that combines two or more characters, such as ﬁ or ﬂ, for smoother letterfit.",
    detail:
      "Discretionary ligatures can add personality in editorial settings. In UI and data-heavy contexts, prefer fonts and settings that avoid surprising character substitutions.",
    related: ["typeface", "kerning", "glyph"],
  },
  {
    slug: "glyph",
    term: "Glyph",
    category: "typography",
    definition:
      "A specific drawn form of a character — the shape you see for A, a, or @ in a given font.",
    detail:
      "One character can have many glyphs (small caps, alternates, italics). Font quality shows in glyph consistency across the character set.",
    related: ["typeface", "font", "ligature"],
  },
  {
    slug: "margin",
    term: "Margin",
    category: "layout",
    definition:
      "The outer space between content and the edge of a page, screen, or container.",
    detail:
      "Margins protect content from the viewport edge and give compositions room to breathe. In print, margins also accommodate binding; in UI, they absorb safe areas and gestures.",
    related: ["padding", "whitespace", "container"],
  },
  {
    slug: "measure",
    term: "Measure",
    category: "typography",
    definition:
      "The length of a line of text, typically counted in characters or words per line.",
    detail:
      "A comfortable measure for body text is often roughly 45–75 characters. Lines that are too long tire the eye; lines that are too short create choppy reading and awkward rags.",
    related: ["leading", "container", "rag"],
  },
  {
    slug: "mental-model",
    term: "Mental Model",
    category: "interface",
    definition:
      "A user’s internal idea of how a system works — which may or may not match the actual system model.",
    detail:
      "Design succeeds when the interface’s conceptual model aligns with the user’s mental model. Research reveals the gap; clear structure, language, and feedback close it.",
    related: ["affordance", "analogy", "information-architecture"],
  },
  {
    slug: "modular-scale",
    term: "Modular Scale",
    category: "typography",
    definition:
      "A sequence of type sizes (and sometimes spacing) generated from a ratio, such as 1.25 or 1.333.",
    detail:
      "Scales create harmony between headings and body without arbitrary sizes. Combine with a spacing system so type and layout share a common rhythm.",
    related: ["hierarchy", "baseline-grid", "token"],
  },
  {
    slug: "motion",
    term: "Motion",
    category: "interface",
    definition:
      "Purposeful animation that explains state change, guides attention, or expresses brand character.",
    detail:
      "Useful motion clarifies cause and effect. Decorative motion that delays tasks or ignores reduced-motion preferences becomes noise. Prefer short, meaningful transitions.",
    related: ["feedback", "hierarchy", "progressive-disclosure"],
  },
  {
    slug: "navigation",
    term: "Navigation",
    category: "interface",
    definition:
      "The set of controls and paths that help users move through content and understand where they are.",
    detail:
      "Clear labels, persistent orientation, and shallow structure beat clever menus. Navigation should answer: where am I, where can I go, and how do I get back?",
    related: ["information-architecture", "wayfinding", "hierarchy"],
  },
  {
    slug: "negative-space",
    term: "Negative Space",
    category: "principles",
    definition:
      "The unmarked areas around and between subjects; another name for whitespace used as an active design element.",
    detail:
      "Negative space defines shapes, separates groups, and gives content emphasis through isolation. Treating it as leftover is a common source of cluttered layouts.",
    related: ["whitespace", "proximity", "figure-ground"],
  },
  {
    slug: "onboarding",
    term: "Onboarding",
    category: "interface",
    definition:
      "The experience that helps a new user understand value and reach their first success in a product.",
    detail:
      "Effective onboarding is short, contextual, and skippable. Teach by doing when possible. Empty states and progressive disclosure often beat multi-step tours.",
    related: ["empty-state", "progressive-disclosure", "mental-model"],
  },
  {
    slug: "opacity",
    term: "Opacity",
    category: "color",
    definition:
      "How opaque or transparent an element is, from fully solid to fully see-through.",
    detail:
      "Opacity creates depth and secondary emphasis, but transparent text often fails contrast checks. Prefer solid tokens for critical content; use opacity for overlays and decorative layers.",
    related: ["contrast-ratio", "value", "layering"],
  },
  {
    slug: "padding",
    term: "Padding",
    category: "layout",
    definition:
      "The inner space between a component’s edge and its content.",
    detail:
      "Padding affects touch targets, readability, and perceived density. Consistent padding tokens across buttons, cards, and inputs make a UI feel systematic.",
    related: ["margin", "whitespace", "token"],
  },
  {
    slug: "pattern",
    term: "Pattern",
    category: "interface",
    definition:
      "A reusable solution to a recurring design problem — such as a searchable list, stepped form, or confirmation dialog.",
    detail:
      "Patterns encode interaction decisions, not just visuals. Document when to use a pattern and when not to, so teams reuse judgment rather than only components.",
    related: ["design-system", "consistency", "progressive-disclosure"],
  },
  {
    slug: "pixel",
    term: "Pixel",
    category: "interface",
    definition:
      "The smallest addressable unit of a digital image or screen; in UI, also a CSS length unit that may map to device pixels differently.",
    detail:
      "Device pixel ratio means one CSS pixel can cover multiple hardware pixels. Design in density-independent units and export assets for the resolutions you ship.",
    related: ["responsive-design", "vector", "token"],
  },
  {
    slug: "progressive-disclosure",
    term: "Progressive Disclosure",
    category: "interface",
    definition:
      "Revealing advanced options or detail only when needed, keeping the default view simple.",
    detail:
      "Accordions, advanced filters, and “more options” menus are common forms. The goal is lower cognitive load without permanently hiding power features.",
    related: ["cognitive-load", "hicks-law", "onboarding"],
  },
  {
    slug: "proximity",
    term: "Proximity",
    category: "principles",
    definition:
      "Grouping related elements near each other and separating unrelated ones so relationships are obvious.",
    detail:
      "Proximity is one of the fastest ways to clarify forms and lists: a label sits with its field; sections breathe apart. Space communicates structure before lines do.",
    related: ["gestalt", "whitespace", "alignment"],
  },
  {
    slug: "rag",
    term: "Rag",
    category: "typography",
    definition:
      "The uneven vertical edge of unjustified text, usually on the right side of left-aligned paragraphs.",
    detail:
      "A good rag avoids deep indents, long short lines, and stacked hyphens. Designers sometimes manually break lines in headlines to improve shape and meaning.",
    related: ["measure", "justification", "widow"],
  },
  {
    slug: "justification",
    term: "Justification",
    category: "typography",
    definition:
      "Aligning text so both left and right edges form a straight edge, by varying word and letter spacing.",
    detail:
      "Justified text can look formal in print but often creates rivers and awkward spacing on narrow screens. For UI body copy, left-aligned text is usually clearer.",
    related: ["rag", "measure", "tracking"],
  },
  {
    slug: "repetition",
    term: "Repetition",
    category: "principles",
    definition:
      "Reusing visual elements — colors, shapes, type styles, spacing — to unify a composition or product.",
    detail:
      "Repetition creates rhythm and brand recognition. Vary enough to avoid monotony; repeat enough that the system feels intentional.",
    related: ["consistency", "rhythm", "pattern"],
  },
  {
    slug: "responsive-design",
    term: "Responsive Design",
    category: "layout",
    definition:
      "Building layouts that adapt fluidly across viewport sizes rather than targeting a single fixed canvas.",
    detail:
      "Responsive work combines fluid grids, flexible images, and thoughtful breakpoints. Design for content reflow, not only for a short list of device widths.",
    related: ["breakpoint", "container", "grid"],
  },
  {
    slug: "rhythm",
    term: "Rhythm",
    category: "principles",
    definition:
      "A sense of paced repetition in spacing, type, or form that makes a layout feel musical rather than arbitrary.",
    detail:
      "Vertical rhythm from consistent spacing scales, and typographic rhythm from modular sizes, help pages feel calm. Broken rhythm draws attention — use it on purpose.",
    related: ["repetition", "baseline-grid", "modular-scale"],
  },
  {
    slug: "rivers",
    term: "Rivers",
    category: "typography",
    definition:
      "Unintentional light streaks that appear in justified text when word spaces align down a paragraph.",
    detail:
      "Rivers distract from reading. Fix them by adjusting measure, tracking, hyphenation, or switching to ragged alignment.",
    related: ["justification", "measure", "tracking"],
  },
  {
    slug: "saturation",
    term: "Saturation",
    category: "color",
    definition:
      "The intensity or purity of a color — from vivid chroma to muted grayish tones.",
    detail:
      "High saturation grabs attention; muted saturation supports long reading and complex UIs. Pair saturated accents with quieter neutrals for hierarchy.",
    related: ["hue", "value", "contrast"],
  },
  {
    slug: "scale",
    term: "Scale",
    category: "principles",
    definition:
      "The size of elements relative to each other and to the canvas, used to signal importance and create depth.",
    detail:
      "Dramatic scale shifts create focal points. Subtle scale shifts create hierarchy without shouting. In UI, scale must also respect touch targets and readability.",
    related: ["hierarchy", "modular-scale", "emphasis"],
  },
  {
    slug: "serif",
    term: "Serif",
    category: "typography",
    definition:
      "A typeface style with small finishing strokes at the ends of letterforms, traditionally associated with print body text.",
    detail:
      "Serifs can aid reading flow in long text at high resolution, but classification matters more than cliché. Choose for tone, metrics, and rendering quality on target screens.",
    related: ["sans-serif", "typeface", "x-height"],
  },
  {
    slug: "sans-serif",
    term: "Sans Serif",
    category: "typography",
    definition:
      "A typeface without serifs — typically cleaner on screens and common in interface chrome.",
    detail:
      "Sans faces range from geometric to humanist. Humanist sans often reads more warmly in long text; geometric sans can feel modern but needs careful sizing.",
    related: ["serif", "typeface", "x-height"],
  },
  {
    slug: "signifier",
    term: "Signifier",
    category: "interface",
    definition:
      "A perceivable indicator of where an action is possible — an underline on a link, a handle on a slider, a caret on a menu.",
    detail:
      "Don Norman distinguishes affordances (possible actions) from signifiers (signals of those actions). Flat UI often removes affordances, so clear signifiers become essential.",
    related: ["affordance", "feedback", "iconography"],
  },
  {
    slug: "similarity",
    term: "Similarity",
    category: "perception",
    definition:
      "The Gestalt tendency to group elements that share visual attributes such as color, shape, or size.",
    detail:
      "Use similarity to show relatedness — same button style for same action type. Break similarity when items are not alike, or users will assume they behave the same.",
    related: ["gestalt", "consistency", "proximity"],
  },
  {
    slug: "skeuomorphism",
    term: "Skeuomorphism",
    category: "interface",
    definition:
      "Interface styling that imitates real-world materials and objects — leather textures, glossy buttons, wooden shelves.",
    detail:
      "Skeuomorphism can teach through analogy, but heavy texture often adds noise. Modern practice borrows the clarity of metaphor without literal material theater.",
    related: ["analogy", "affordance", "flat-design"],
  },
  {
    slug: "flat-design",
    term: "Flat Design",
    category: "interface",
    definition:
      "A visual approach that minimizes skeuomorphic depth cues in favor of simple shapes, solid color, and typography.",
    detail:
      "Flat design can feel clean and fast, but removing shadows and bevels can weaken affordances. Many products now use a middle path: flat color with subtle elevation.",
    related: ["skeuomorphism", "signifier", "hierarchy"],
  },
  {
    slug: "spacing",
    term: "Spacing",
    category: "layout",
    definition:
      "The system of distances between elements — margins, padding, gaps — that defines density and grouping.",
    detail:
      "A spacing scale (4, 8, 12, 16…) keeps layouts coherent. Uneven spacing is one of the fastest ways a UI starts to feel unfinished.",
    related: ["padding", "margin", "proximity", "token"],
  },
  {
    slug: "style",
    term: "Style",
    category: "typography",
    definition:
      "A variant within a typeface family such as italic, oblique, or display, distinct from weight alone.",
    detail:
      "True italics are drawn separately; obliques are slanted romans. Use style for emphasis and voice, not as the only signal of interactivity.",
    related: ["font", "typeface", "weight"],
  },
  {
    slug: "symmetry",
    term: "Symmetry",
    category: "principles",
    definition:
      "Mirror-like balance across an axis, producing a formal, stable composition.",
    detail:
      "Symmetry communicates order and ceremony. Asymmetry often feels more dynamic for product UI, while symmetry still shines in logos, covers, and moments of focus.",
    related: ["balance", "alignment", "hierarchy"],
  },
  {
    slug: "texture",
    term: "Texture",
    category: "perception",
    definition:
      "The visual or tactile quality of a surface — grain, pattern, noise — that adds depth and atmosphere.",
    detail:
      "In digital design, texture can enrich a brand moment but should not reduce text contrast or compete with content. Use it as ground, not as clutter on the figure.",
    related: ["figure-ground", "contrast", "opacity"],
  },
  {
    slug: "token",
    term: "Design Token",
    category: "interface",
    definition:
      "A named design decision — color, space, type size, radius — stored as data so products share the same values.",
    detail:
      "Tokens separate meaning (color.text.primary) from raw values (#102029). They enable themes, dark mode, and multi-platform consistency without hunting hex codes.",
    related: ["design-system", "spacing", "modular-scale"],
  },
  {
    slug: "tracking",
    term: "Tracking",
    category: "typography",
    definition:
      "The uniform adjustment of spacing across a whole word, line, or paragraph.",
    detail:
      "Tracking differs from kerning, which targets pairs. Uppercase labels often benefit from slight positive tracking; body text usually should stay near the font’s default.",
    related: ["kerning", "letter-spacing", "measure"],
  },
  {
    slug: "typeface",
    term: "Typeface",
    category: "typography",
    definition:
      "The designed family of letterforms as a whole — the creative work — independent of a particular weight file.",
    detail:
      "Choosing a typeface sets tone before a word is read. Evaluate x-height, contrast, language support, and screen rendering, not only aesthetics at display size.",
    related: ["font", "serif", "sans-serif"],
  },
  {
    slug: "type-scale",
    term: "Type Scale",
    category: "typography",
    definition:
      "The set of named text sizes used in a product — from caption to display — often derived from a modular scale.",
    detail:
      "A restrained type scale prevents one-off sizes from proliferating. Pair each step with clear roles: which size is a page title, a section title, body, or meta.",
    related: ["modular-scale", "hierarchy", "token"],
  },
  {
    slug: "usability",
    term: "Usability",
    category: "interface",
    definition:
      "How effectively, efficiently, and satisfactorily users can achieve goals with an interface.",
    detail:
      "Usability is measured through tasks, not opinions alone. Heuristic evaluation and usability testing catch different classes of problems; both matter.",
    related: ["accessibility", "cognitive-load", "feedback"],
  },
  {
    slug: "value",
    term: "Value",
    category: "color",
    definition:
      "The lightness or darkness of a color, independent of its hue.",
    detail:
      "Value contrast is what makes text readable and shapes separable. Many “color” problems are actually value problems — two hues can clash yet still fail if their values match.",
    related: ["hue", "saturation", "contrast-ratio"],
  },
  {
    slug: "vector",
    term: "Vector",
    category: "interface",
    definition:
      "Artwork defined by mathematical paths rather than pixels, so it scales cleanly to any resolution.",
    detail:
      "Icons and logos are typically vector (SVG). Complex photographs remain raster. Choose based on the content, not a blanket rule.",
    related: ["pixel", "iconography", "responsive-design"],
  },
  {
    slug: "visual-flow",
    term: "Visual Flow",
    category: "perception",
    definition:
      "The path the eye travels through a composition, shaped by hierarchy, direction, and grouping.",
    detail:
      "Western interfaces often assume top-left entry, but imagery, faces, and strong diagonals can redirect flow. Design the path you want users to take.",
    related: ["hierarchy", "focal-point", "gestalt"],
  },
  {
    slug: "wayfinding",
    term: "Wayfinding",
    category: "interface",
    definition:
      "Cues that help people orient themselves and navigate a space — digital or physical.",
    detail:
      "In products, wayfinding includes breadcrumbs, selected nav states, page titles, and progress indicators. Users should rarely need to ask where they are.",
    related: ["navigation", "information-architecture", "signifier"],
  },
  {
    slug: "weight",
    term: "Weight",
    category: "typography",
    definition:
      "The thickness of letter strokes, typically labeled thin, regular, medium, bold, and black.",
    detail:
      "Weight creates hierarchy without changing size. On screens, very light weights can disappear; very heavy weights can clog small sizes. Test at real UI sizes.",
    related: ["hierarchy", "contrast", "typeface"],
  },
  {
    slug: "whitespace",
    term: "Whitespace",
    category: "principles",
    definition:
      "Empty space intentionally left in a layout to improve clarity, grouping, and emphasis.",
    detail:
      "Whitespace is active structure, not unused canvas. Crowding is often a hierarchy problem: if everything sits tight, nothing can stand out.",
    related: ["negative-space", "proximity", "balance"],
  },
  {
    slug: "widow",
    term: "Widow",
    category: "typography",
    definition:
      "A short final line of a paragraph that sits alone at the top of a column or page, looking stranded.",
    detail:
      "Widows (and orphans) are polish issues in editorial design. Fix with copy edits, tracking tweaks, or reflow — especially in print and marketing pages.",
    related: ["orphan", "rag", "measure"],
  },
  {
    slug: "orphan",
    term: "Orphan",
    category: "typography",
    definition:
      "A short first line of a paragraph left alone at the bottom of a column or page.",
    detail:
      "Definitions vary by tradition; some use orphan for a single word on the last line. Regardless of naming, stranded scraps of text weaken the page’s silhouette.",
    related: ["widow", "rag", "measure"],
  },
  {
    slug: "wireframe",
    term: "Wireframe",
    category: "interface",
    definition:
      "A low-fidelity structural sketch of a screen that prioritizes layout and hierarchy over visual style.",
    detail:
      "Wireframes help teams debate information architecture and flow before investing in polish. Keep them intentionally unfinished so feedback stays on structure.",
    related: ["prototype", "information-architecture", "hierarchy"],
  },
  {
    slug: "prototype",
    term: "Prototype",
    category: "interface",
    definition:
      "An interactive simulation of a product used to test ideas before full implementation.",
    detail:
      "Fidelity should match the question: paper for flow, mid-fi for structure, high-fi for visual or motion details. Prototype to learn, not to impress.",
    related: ["wireframe", "usability", "feedback"],
  },
  {
    slug: "x-height",
    term: "X-Height",
    category: "typography",
    definition:
      "The height of lowercase letters excluding ascenders and descenders — literally the height of the letter x.",
    detail:
      "Large x-height often improves screen readability at small sizes. It also makes a typeface look larger than its point size suggests, which affects leading choices.",
    related: ["ascender", "cap-height", "leading"],
  },
  {
    slug: "z-index",
    term: "Z-Index",
    category: "interface",
    definition:
      "The stacking order of overlapping elements along the depth axis in a UI.",
    detail:
      "Manage z-index as a system of layers (base, dropdown, modal, toast) rather than arbitrary large numbers. Uncontrolled stacking creates unclickable traps.",
    related: ["layering", "modal", "feedback"],
  },
  {
    slug: "layering",
    term: "Layering",
    category: "layout",
    definition:
      "Stacking surfaces or content in depth — cards over backgrounds, sheets over pages — to express structure.",
    detail:
      "Layering creates focus through elevation and dimming. Too many layers confuse; each new surface should earn its place by changing context or priority.",
    related: ["z-index", "modal", "figure-ground"],
  },
  {
    slug: "modal",
    term: "Modal",
    category: "interface",
    definition:
      "A dialog that interrupts the main flow and requires interaction before returning to the underlying screen.",
    detail:
      "Use modals for focused, blocking decisions. Overusing them trains users to dismiss without reading. Prefer inline or non-modal patterns for non-critical tasks.",
    related: ["progressive-disclosure", "feedback", "z-index"],
  },
  {
    slug: "error-prevention",
    term: "Error Prevention",
    category: "interface",
    definition:
      "Designing flows so mistakes are unlikely — constraints, confirmations, and clear defaults — rather than only offering recovery later.",
    detail:
      "Disable impossible actions, confirm destructive ones, and validate early. Prevention is kinder than a clever error message after the fact.",
    related: ["feedback", "usability", "affordance"],
  },
  {
    slug: "microcopy",
    term: "Microcopy",
    category: "interface",
    definition:
      "The small bits of interface text — labels, hints, errors, empty states — that guide action and reduce uncertainty.",
    detail:
      "Microcopy is product design in words. Specific beats clever. Write for the moment of use: what do they need to know to proceed confidently?",
    related: ["empty-state", "feedback", "accessibility"],
  },
  {
    slug: "density",
    term: "Density",
    category: "layout",
    definition:
      "How tightly information and controls are packed into a given space.",
    detail:
      "Enterprise tools often need higher density; marketing pages need more air. Density should match task frequency and expertise, and remain adjustable when audiences differ.",
    related: ["spacing", "whitespace", "hierarchy"],
  },
  {
    slug: "optical-alignment",
    term: "Optical Alignment",
    category: "typography",
    definition:
      "Adjusting elements by eye so they look aligned, even when geometric centers or edges are mathematically off.",
    detail:
      "Rounded letters, icons, and play triangles often need optical nudges. Trust perception over raw bounding boxes for polished UI.",
    related: ["alignment", "iconography", "kerning"],
  },
  {
    slug: "palette",
    term: "Palette",
    category: "color",
    definition:
      "The curated set of colors used in a brand or product, usually organized by role rather than as a flat list of swatches.",
    detail:
      "A useful palette defines neutrals, brand accents, and semantic colors with accessible pairings. Limit freeform hues so the system stays recognizable.",
    related: ["token", "color-harmony", "contrast-ratio"],
  },
  {
    slug: "unity",
    term: "Unity",
    category: "principles",
    definition:
      "The sense that all parts of a composition belong together as one coherent whole.",
    detail:
      "Unity comes from shared type, color, spacing, and motif. Variety keeps unity from becoming monotony; the craft is holding both at once.",
    related: ["repetition", "consistency", "balance"],
  },
];

export function sortTerms(list: Term[] = terms): Term[] {
  return [...list].sort((a, b) => a.term.localeCompare(b.term, "en"));
}

export function getTerm(slug: string): Term | undefined {
  return terms.find((entry) => entry.slug === slug);
}

export function relatedTerms(term: Term): Term[] {
  return term.related
    .map((slug) => getTerm(slug))
    .filter((entry): entry is Term => entry !== undefined);
}

export function lettersInUse(list: Term[] = terms): string[] {
  const letters = new Set(
    list.map((entry) => entry.term.charAt(0).toUpperCase()),
  );
  return [...letters].sort();
}

export function termsByLetter(list: Term[] = terms): Map<string, Term[]> {
  const sorted = sortTerms(list);
  const map = new Map<string, Term[]>();

  for (const entry of sorted) {
    const letter = entry.term.charAt(0).toUpperCase();
    const bucket = map.get(letter);
    if (bucket) {
      bucket.push(entry);
    } else {
      map.set(letter, [entry]);
    }
  }

  return map;
}
