---
name: Valentin Bejan — Self-Issued Credential
description: An intaglio-printed security document rendered in the browser, read under two lighting conditions.
colors:
  stock: "rgb(233 238 243)"
  stock-2: "rgb(222 230 238)"
  ink: "rgb(10 27 77)"
  ink-2: "rgb(53 71 126)"
  ink-3: "rgb(84 98 138)"
  rule: "rgb(176 190 214)"
  guilloche: "rgb(88 112 172)"
  foil: "rgb(166 122 34)"
  foil-text: "rgb(122 88 20)"
  stamp: "rgb(122 46 134)"
  verify: "rgb(11 100 88)"
  cover: "rgb(7 18 51)"
  cover-2: "rgb(12 30 78)"
  cover-ink: "rgb(242 246 255)"
  cover-ink-2: "rgb(159 180 232)"
  cover-foil: "rgb(224 183 92)"
  cover-guilloche: "rgb(90 124 210)"
typography:
  bearer:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontSize: "clamp(3rem, 10vw, 7.6rem)"
    fontWeight: 500
    lineHeight: 0.86
    letterSpacing: "-0.03em"
  denomination:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontSize: "clamp(1.7rem, 3.6vw, 3.1rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.018em"
  heading:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontSize: "clamp(1.9rem, 3.6vw, 2.9rem)"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.02em"
  entry:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.45
  record:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.55
  field:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "0.16em"
    fontVariation: "'wdth' 92"
  serial:
    fontFamily: "Courier Prime, ui-monospace, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    letterSpacing: "0.06em"
  microprint:
    fontFamily: "Courier Prime, ui-monospace, monospace"
    fontSize: "4px"
    lineHeight: 1
    letterSpacing: "0.24em"
rounded:
  none: "0px"
  hairline: "1px"
  pip: "9999px"
spacing:
  gutter: "1.25rem"
  gutter-wide: "2rem"
  row: "1.75rem"
  row-principal: "2.25rem"
  column-gap: "2.5rem"
  column-gap-wide: "3.5rem"
  header-gap: "3rem"
  band: "5rem"
  band-lg: "7rem"
  stub: "10.5rem"
  page: "64rem"
  document: "78rem"
components:
  button-certified-copy:
    backgroundColor: "{colors.cover-foil}"
    textColor: "{colors.cover}"
    typography: "{typography.field}"
    rounded: "{rounded.none}"
    padding: "0.875rem 1.5rem"
  button-verify:
    backgroundColor: "transparent"
    textColor: "{colors.cover-ink}"
    typography: "{typography.field}"
    rounded: "{rounded.none}"
    padding: "0.875rem 1.5rem"
  button-verify-hover:
    textColor: "{colors.cover-foil}"
  button-issue:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.stock}"
    typography: "{typography.field}"
    rounded: "{rounded.none}"
    padding: "0.5rem 1rem"
  button-issue-hover:
    backgroundColor: "{colors.stamp}"
  button-instrument:
    backgroundColor: "transparent"
    textColor: "{colors.ink-3}"
    typography: "{typography.field}"
    rounded: "{rounded.none}"
    padding: "0.5rem 0.75rem"
  button-instrument-hover:
    textColor: "{colors.stamp}"
  field-row:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "1.75rem 0"
  section-shell:
    backgroundColor: "{colors.stock}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "5rem 1.25rem"
    width: "{spacing.page}"
  section-shell-tinted:
    backgroundColor: "{colors.stock-2}"
  proof-link:
    backgroundColor: "transparent"
    textColor: "{colors.verify}"
    typography: "{typography.serial}"
    rounded: "{rounded.none}"
    padding: "0 0 0.125rem 0"
  stamp-mark:
    backgroundColor: "transparent"
    textColor: "{colors.stamp}"
    typography: "{typography.field}"
    rounded: "{rounded.none}"
    padding: "0.625rem 1rem"
---

# Design System: Valentin Bejan — Self-Issued Credential

## Overview

**Creative North Star: "The Self-Issued Credential"**

This is not a portfolio site wearing a document theme. It is a security document that happens to be rendered in a browser: a drenched cobalt cover, a machine-readable strip along its foot, tinted anti-photocopy stock inside, engine-turned guilloche cut by an actual geometric lathe algorithm, gold foil that catches light once, and violet office ink that presses onto the page when the declaration is read. Every claim on the interior pages carries a reference someone else can check — a repo host, a live URL, an institution — printed in verification teal so the eye finds the evidence before the prose.

The system has exactly two lighting conditions, not two themes. **Daylight** (`:root`) is the document read on a desk: cool pale stock, deep navy ink, muted gold. **UV** (`.uv`) is the same document under an inspection lamp: near-black violet-blue stock, fluorescing lilac ink, hot teal and hot violet where the security features are. `next-themes` maps light→daylight and dark→UV; the mental model is the lamp, not the palette. Contrast clears AA in both conditions by computation, not by eye — `ink-3` and `verify` were picked against both `stock` and `stock-2`.

Density is that of a printed form: hairline rules instead of containers, a fixed left stub column that every ledger row aligns to, tabular numerals so periods and references stack in a column, and body copy held to a 68ch measure. Motion is nearly absent by design. There is one authored moment — the raking light crossing the cover, driven by `--lx`/`--ly` from the pointer — and two quiet finishes: lathe rules drawing across a section header and the violet stamp pressing once. Nothing animates in or out that isn't already readable when it arrives.

**Key Characteristics:**
- Ruled fields and ledgers; no cards, no boxes, no elevated containers
- Two lighting conditions (daylight / UV), one document
- Every verifiable claim rendered in verification teal with its host visible
- Zero corner radius everywhere except the focus ring (1px) and the lamp pip
- Flat by construction: two shadows exist in the whole system, both for mounted physical objects
- Guilloche is generated geometry, not decoration stock
- Cobalt bookends: the cover opens the record, the countersignature closes it

## Colors

A cool navy-on-pale-stock document with three signal inks — gold, violet, teal — each holding one job and never borrowed for another.

### Primary
- **Cobalt Cover** (`{colors.cover}` / `{colors.cover-2}`): The full-bleed ground of the two covers only — the opening hero and the closing countersignature block. Never appears on interior pages. `cover-2` is the lighter pole of the radial that lifts one corner of each cover.
- **Document Ink** (`{colors.ink}`): Every engraved heading, every primary entry, and the solid fill of the interior download action. This is the body text colour on stock.

### Secondary
- **Gold Foil** (`{colors.cover-foil}` on cover, `{colors.foil}` on stock): Reserved for issuance marks — the seal, the certified-copy action, the photo mount's ring, the daylight lamp pip. Foil is a specular sweep (`.foil-text`), never a flat gold fill.
- **Foil Legible** (`{colors.foil-text}`): The one darkened gold, used where foil has to be read rather than admired — the credential status label on pale stock. Under UV it collapses back onto `foil`, which is already bright enough.
- **Stamp Violet** (`{colors.stamp}`): Office ink. The declaration's stamp, the focus ring, the selection highlight, and the hover state of every interior link and nav underline. This is the only colour that ever marks an interaction on stock.
- **Verification Teal** (`{colors.verify}`): Proof, and only proof. The host of an outbound link, the SOURCE / LIVE tier label, the underline beneath a checkable reference. Chosen by contrast computation against both stock grounds.

### Neutral
- **Security Stock** (`{colors.stock}` / `{colors.stock-2}`): The two interior grounds. Sections alternate between them down the page and both carry the `.security-tint` crossed line screen; without the screen they read as flat colour, not paper.
- **Rule** (`{colors.rule}`): Hairline dividers, field-row tops, perforation dots, the scrolled header band's bottom edge, the pipe separators between list entries.
- **Guilloche** (`{colors.guilloche}` / `{colors.cover-guilloche}`): The engine-turned line work — rosettes, lathe rules, and the security tint's screen. Deliberately dark enough on pale stock to read as engraving rather than a ghost.
- **Ink Secondary / Tertiary** (`{colors.ink-2}` / `{colors.ink-3}`): Supporting prose and metadata. `ink-3` carries field labels and whole secondary columns, which is why it is a computed AA value rather than a faded `ink`.
- **Cover Ink** (`{colors.cover-ink}` / `{colors.cover-ink-2}`): Type on cobalt. `cover-ink-2` at 25–45% alpha is also the cover's rule colour; cobalt surfaces never borrow `rule`.

### Named Rules
**The One Job Rule.** Gold means issuance, violet means the bearer acted or a control is focused, teal means this claim is checkable. No ink is used for emphasis, decoration, or mood. If a colour appears where its job isn't happening, it's wrong.

**The Two Lamps Rule.** Every colour decision must be made in both `:root` and `.uv`. A token that exists in only one lighting condition is a bug, not a variant. Contrast is verified against both `stock` and `stock-2` before a value ships.

**The Cobalt Bookends Rule.** Cobalt is a cover colour. It appears exactly twice — first viewport and countersignature — and the foot carries `cover-2`. Any third cobalt band would turn a document into a striped page.

## Typography

**Display Font:** Bodoni Moda (variable, with Georgia / Times New Roman fallback) — the engraved register
**Body Font:** Archivo (variable, `wdth` axis loaded, with system-ui fallback) — the form grotesque
**Label/Mono Font:** Courier Prime (400/700, with ui-monospace fallback) — serials and measurements

**Character:** A high-contrast didone doing the engraving and a compressed grotesque doing the form-filling, with a typewriter mono for anything that is a number, a code, or a host. The pairing is the exact division of labour on a real certificate: the plate, the printed form, the serial.

### Hierarchy
- **Bearer** (`{typography.bearer}`): The name on the cover, and nothing else. Set in two blocks, one per name, tightly leaded so it reads as a single struck mass.
- **Denomination** (`{typography.denomination}`): The positioning line under the name. Deliberately outranks every interior heading — a three-to-one step down from bearer — so what he does is louder than the word "Education".
- **Heading** (`{typography.heading}`): Section titles, always paired with a serial reference on the same baseline and a lathe rule beneath.
- **Annex** (`{typography.annex}`): The title of a principal annex, and the loudest engraved entity in the interior.
- **Entity** (`{typography.entity}`): The engraved title of a record entry — employer, qualification, interest. Paired with `text-2xl` below `sm`.
- **Entity, Minor** (`{typography.entity-sm}`): Competence category titles in the schedule's stub column. Paired with `text-xl` below `sm`.
- **Entry** (`{typography.entry}`): Primary record values — job position, institution name, competence items, cover standfirst at `sm` and up.
- **Lede** (`{typography.lede}`): Annex descriptions at `sm` and up. The single prose step between record and entry.
- **Record** (`{typography.record}`): Descriptive prose in a field, section notes, footer rights. Held to the 68ch `.measure` (58ch `.measure-tight` in narrow columns).
- **Field** (`{typography.field}`, uppercase, `wdth` 92): Every label that names a box on the form — nav items, buttons, stub labels, tier labels. This is also the button typography; there is no separate button type style.
- **Serial** (`{typography.serial}`, tabular): Dates, periods, reference codes, hosts, the machine-readable strip. Always tabular; `.tnum` adds lining numerals where columns must align. The serial family is a five-step ramp of its own, because a printed form uses more than one size of small: **Data** (`{typography.data}`) for periods and cover data values, **Proof** (`{typography.proof}`) for verification links and annex materials, **Reference** (`{typography.ref}`) for reference codes, hosts and the strip at `sm` and up, **Index** (`{typography.index}`) for nav fields, index numerals and the stamp date, and **Strip** (`{typography.mrz}`) for the machine-readable band on narrow screens. All five are declared without leading so inline measurement text keeps its inherited line box.
- **Microprint** (`{typography.microprint}`, 4px / 5px ≥768px): The band under the cover and above the foot. Decorative, `aria-hidden` in effect, `user-select: none`, and never carries information.

### Named Rules
**The Engraved Register Rule.** Bodoni is used only for names, denominations, headings, entity titles, and the signature. It never sets a paragraph and never sets a label. `.engraved` carries its own weight (500), tracking (-0.018em) and leading (0.94); do not restate them.

**The Number Is a Measurement Rule.** Anything a reader could verify, count, or dial — dates, periods, references, hosts, phone, annex numbers — is set in Courier Prime with tabular figures. Mono is measurement, never costume; it is not used for prose or for atmosphere.

**The No Kicker Rule.** No eyebrow, kicker, or all-caps micro-label sits above a heading. The reference code sits beside the heading on the same baseline, right-aligned. That is the only heading companion this system has.

## Layout

Two containers only: `{spacing.document}` (78rem) for the cover and the fixed header band, `{spacing.page}` (64rem) for every interior section and the foot. Gutters are `{spacing.gutter}` rising to `{spacing.gutter-wide}` at `sm`. Interior sections are vertical bands of `{spacing.band}` padding, rising to 6rem at `sm` and `{spacing.band-lg}` at `lg`, alternating `stock` and `stock-2` down the page and all carrying `.security-tint`.

The interior grid is a two-column form: a fixed `{spacing.stub}` (10.5rem) stub on the left carrying the period, place, status or annex number, and a fluid record column on the right. It collapses to a single stacked column below `sm`. The gap is `{spacing.column-gap}`, widening to `{spacing.column-gap-wide}` at `lg`. Rows are separated by a hairline top border (`.field-row`) with `{spacing.row}` of vertical padding; principal-tier annexes get `{spacing.row-principal}` and up. Section headers reserve `{spacing.header-gap}` beneath themselves.

Responsive behaviour is stated at three breakpoints — `sm` (640px), `lg` (1024px), and `xl` (1280px) for the cover seal only. The cover's engraved portrait plate is repositioned at each: high and behind the name on mobile so it never competes with body copy for contrast, then right-of-centre and larger from `sm`. Document flow is fixed: cover → microprint band → declaration → service record → credentials → competences → annexes → interests → countersignature (cobalt) → foot. `scroll-padding-top` is 5.5rem to clear the fixed 4rem header band.

## Elevation & Depth

**This system is flat.** There is no elevation scale, no ambient shadow vocabulary, and no surface-container hierarchy. Depth is conveyed the way it is on printed security stock: by ink density, by crossed line screens, by hairline rules, and by masked line work sitting under type. Two shadows exist in the entire build and both describe a physical object mounted on paper, not a UI layer.

### Shadow Vocabulary
- **Photo Mount** (`box-shadow: 0 1px 2px rgb(var(--ink) / 0.16), 0 12px 28px -10px rgb(var(--ink) / 0.4)`): Only for a photograph mounted on the page — the cover portrait and the declaration figure. Always paired with a 1px foil ring.
- **Intaglio Relief** (`text-shadow: 0 1px 0 rgb(var(--stock) / 0.8), 0 -1px 1px rgb(var(--ink) / 0.14)` on stock; the `cover-relief` variant on cobalt): Applied to engraved headings so ink sits proud of the paper. It is a text effect, not a container effect.

### Named Rules
**The Flat Paper Rule.** A surface never lifts. If a region needs to separate from its neighbour, it changes stock (`stock` ↔ `stock-2`), gains a hairline rule, or gains a perforation — never a shadow and never a border radius.

**The Screen-Not-Fill Rule.** Every interior ground carries `.security-tint`: two crossed repeating line screens at ±58° in guilloche at 7% and 4%. A section painted in flat `stock` without the tint is flat colour pretending to be paper.

## Shapes

Corner radius is zero. Every button, every field, every mounted photograph, every stamp is a hard rectangle; the only radii in the build are the 1px on the focus ring, the fully-round lamp pip in the theme control, and the scrollbar thumb. Borders are hairlines (1px `rule` on stock, `cover-ink-2` at 25–45% on cobalt), with two deliberate exceptions: the stamp's 2.5px violet rule, drawn heavy because it is inked rather than printed, and the seal's concentric stroke set.

The recurring geometry is guilloche: a closed rosette and a woven rule, both generated by `scripts/gen-guilloche.mjs` into static SVGs and applied as `mask-image` over a token-driven background colour (so callers tint with `bg-*`, never `text-*`). Stroke width in those SVGs is pre-divided by the render scale — 0.025 user units in a 200-unit viewBox for roughly a 6.5× render — because `vector-effect` does not survive mask rasterisation. **Every rosette instance is therefore sized to approximately the same render scale on purpose**; scaling one instance far larger or smaller than the others changes its hairline weight and breaks the set. The perforation is a repeating radial dot at 11px pitch, used once per document as the boundary where the register changes.

## Components

### Buttons
- **Shape:** Hard rectangle, zero radius, `{typography.field}` label in all caps. There is no button type style other than the field label.
- **Certified Copy (cover primary):** Solid gold foil on cobalt (`{components.button-certified-copy}`), 0.875rem × 1.5rem padding. Hover raises brightness 110% over 300ms `ease-settle`; focus ring switches to `cover-foil` so it stays visible on cobalt.
- **Verify (cover secondary):** Transparent with a `cover-ink-2/45` hairline. Hover moves both the border and the text to `cover-foil`.
- **Issue (interior primary):** Solid `ink` with `stock` text; hover fills `stamp`. This is the download action once the reader is off the cover, and the only solid-fill action on stock.
- **Instrument (lamp / language / copy):** Hairline-bordered, `ink-3` on stock or `cover-ink-2` on cobalt, hover to `stamp` / `cover-foil`. These are controls, not calls to action, and never take a fill.

### Fields (the card replacement)
- **Shape:** A row with a single hairline top border (`.field-row`) and no side or bottom borders, no background, no radius, no padding inset. A field is defined by its rule and its column alignment, nothing else.
- **Structure:** Stub column (period / place / status / annex number, in serial + field label) then record column (engraved title, entry line, record prose, proof link).
- **Padding:** `{spacing.row}` vertical; principal annexes `{spacing.row-principal}` and up.
- **Hover (linked rows only):** A whole-row hit target via `after:absolute after:inset-0` on the title link; the title moves to `stamp` and on principal annexes a guilloche rosette fades in behind the row to 40% opacity over 500ms.

### Proof Link
The system's signature affordance. A serial-set host name in verification teal with a `verify/40` bottom border and an inline 12–13px arrow, sitting under any claim that can be checked. Hover deepens the border to full `verify` and, in the principal tier, nudges the arrow up-and-right by 2px. The host is shown rather than a "view project" label, because the domain is itself the evidence.

### Navigation
The fixed document header band, 4rem tall, `{spacing.document}` wide. Over the cover it is fully transparent with cover-ink type; past the cover it becomes `stock/90` with a backdrop blur and a `rule` bottom border, transitioning colours over 500ms `ease-settle`. Nav items are 0.625rem field labels with an underline that scales in from the left on hover — `cover-foil` over the cover, `stamp` on stock. Below `lg` the nav collapses to a full-screen index page on opaque `stock`: each entry is a `field-row` with a Bodoni title and its two-digit ordinal in serial, closing with the download action as a full-width `ink` bar.

### Section Shell
Every interior section is the same shell: alternating tinted stock ground, `{spacing.page}` container, a header pairing the engraved title with its right-aligned serial reference, a lathe rule beneath that draws in via `scaleX(0→1)` over 1100ms `ease-settle` when the section enters view, and an optional `.measure` note. Reveal state comes from a single `IntersectionObserver` hook with a 4-second failsafe; content is rendered and readable before the observer ever runs.

### Seal & Stamp
The seal is an inline SVG in `currentColor`: three concentric rings (one dashed), a circular `textPath` legend, and a Bodoni "VB" monogram. It appears twice — cover (≥`xl` only, with the foil-catch sweep on entry) and countersignature. The stamp is violet office ink: a 2.5px `stamp/75` rule, `multiply` blend on daylight and `screen` under UV, that presses once (rotate -14°→-7°, scale 1.5→1) when the declaration comes into view, and holds at `opacity: 0` until then.

### Cover Watermark
Two mask-image plates in exact register on the same `PLATE` box: a base plate at 13–22% opacity that is always present, and a lit plate at 45–75% opacity masked by the intersection of the portrait and a radial spot at `--lx`/`--ly`. Those two custom properties are registered with `@property` as percentages so they can be animated, driven from `pointermove` on rAF, and fall back to a 22-second `lamp-sweep` until a pointer is seen. Touch pointers are ignored. **The two plates must share the `PLATE` constant**; separate positioning values will drift out of register.

## Do's and Don'ts

### Do:
- **Do** define every new colour in both `:root` and `.uv`, and check it against `stock` and `stock-2` before shipping it.
- **Do** separate records with hairline rules and column alignment (`.field-row`, the 10.5rem stub) instead of containers.
- **Do** set every date, period, reference, host and count in Courier Prime with tabular figures.
- **Do** put a visible host name in verification teal under any claim a reader could check.
- **Do** apply `.security-tint` to every interior ground, and alternate `stock` / `stock-2` between adjacent sections.
- **Do** size guilloche rosettes to roughly the same render scale across instances, so the shared mask's hairlines carry the same weight everywhere.
- **Do** render content readable first and let `useInView` add finish only; keep the 4-second failsafe on any new reveal.
- **Do** use `ease-settle` (`cubic-bezier(0.16, 1, 0.3, 1)`) for every transition — the document settles, it never bounces.

### Don't:
- **Don't** build cards: no rounded container with a shadow, a background and an icon at the top. Corner radius stays at 0 outside the focus ring and the lamp pip.
- **Don't** build an icon + heading + paragraph grid for competences, services, or anything else. Those are ledger rows.
- **Don't** put a kicker, eyebrow, or all-caps micro-label above a heading; the reference code goes beside it on the same baseline.
- **Don't** apply a decorative gradient to type. The one legitimate gradient-on-text is `.foil-text`, the gold specular sweep, and it is only for foil.
- **Don't** borrow the signal inks: gold is not an accent, violet is not an error colour, teal is not a "success" state.
- **Don't** add a third cobalt band, or use cobalt as an interior section ground.
- **Don't** add a shadow to make something feel raised; change the stock, add a rule, or add a perforation.
- **Don't** add a second authored motion moment. The cover's raking light is the one; interior motion is the drawing rule and the single stamp press, both honouring `prefers-reduced-motion`.
- **Don't** introduce a motion library. Everything here is IntersectionObserver plus CSS, and it should stay that way.
