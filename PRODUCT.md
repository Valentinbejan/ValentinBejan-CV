# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Three confirmed audiences for one surface, in priority order as stated by the owner:

1. **Recruiters and engineering managers hiring for AI/ML work**, often remote or outside Romania. They skim in English, on desktop, between many other candidate tabs. Their job: decide in under a minute whether this person is worth an interview slot.
2. **Romanian employers** (Galați / Bucharest / remote-RO) hiring junior–mid developers. They read Romanian, and frequently want the CV PDF to forward internally.
3. **Freelance and contract clients** who arrived from a project link or a referral and want to know whether he can build the specific thing they need, then reach him quickly.

All three arrive at the same single-page site. Bilingual RO/EN is a hard requirement, not a nicety.

## Product Purpose

A personal CV / portfolio site for Valentin Bejan. Success is a reply: an interview invitation, a message, or a downloaded CV that gets forwarded. It is not a blog, not a product, and not a place people return to — most visits are a single evaluative pass.

## Positioning

**A web engineer who also does AI** — confirmed by the owner over the alternatives.

The credibility for that claim is unusual and factual: the AI work is not API-calling. He fine-tunes models (ORPO pipeline for a custom Llama 3.2 1B, Stable Diffusion training), runs serverless GPU inference (Modal), builds retrieval over pgvector, and ships the result as a working Next.js product with a public URL. The web engineering is the spine; the AI is the differentiator hanging off it.

Not claimed: seniority, years of industry experience, or a large employment history. The record is a recent graduate with real shipped systems. The design must not paper over that with corporate-scale language.

## Operating Context

- Single-page scroll with anchor navigation: About, Experience, Education, Skills, Projects, Hobbies, Contact.
- Deployed on Vercel. Next.js 14 App Router, `next-intl` locale routing at `/ro` and `/en`, `ro` is the current default locale, `localeDetection` disabled.
- Light and dark themes both ship, via `next-themes` with `class` strategy.
- There is **one** CV and it exists in English only: `public/cv/CV_BejanValentin_2026_Summer.pdf`. Both locales link to it, and the Romanian labels carry an "(EN)" marker. `cv-ro.pdf`, `cv-en.pdf` and `CV_Valentin_Bejan_2026.pdf` remain in `public/cv/` but are superseded and no longer referenced by any code.
- Evaluation happens on desktop for recruiters and on phones for referral traffic; both matter.

## Capabilities and Constraints

- Content is authored entirely in `lib/translations.ts` as a single `ro` / `en` object tree consumed through `next-intl`. Every string added to one locale must exist in the other.
- No CMS, no database, no backend. Fully static/client rendering.
- Dependency set is deliberately small: `framer-motion`, `next-themes`, `next-intl`, `lucide-react`, `clsx`, `tailwind-merge`, Tailwind 3. New heavy dependencies are unwelcome.
- The site must remain readable and functional with JavaScript-driven animation reduced or disabled (`prefers-reduced-motion`).
- Existing loading screen gates the entire page behind a fixed 2s timer — a real cost to a recruiter's first impression, and not a product requirement.

## Brand Commitments

- Name shown as **Valentin Bejan**; the short mark **VB** is in existing use.
- The public denomination is fixed by the owner to match the CV subtitle exactly: **"Computer Engineering graduate & Artificial Intelligence Enthusiast"** (RO: "Absolvent de Calculatoare & pasionat de inteligență artificială"). The bearer's statement is the PROFILE section of `CV_BejanValentin_2026_Summer.pdf`, verbatim except for its closing sentence, which pointed readers to this site.
- Location: Galați, România.
- Tone in Romanian is first-person and plain; the English copy is a direct translation of it. No corporate-agency voice.
- No logo file, no brand guideline, no committed color or typeface exists. Nothing in the current visual treatment is binding.

## Evidence on Hand

Real, usable:

- **Portrait photo** — `DSC02945.JPG` at project root (6192×4128, 18.2 MB, EXIF orientation 8 so it needs a 90° CCW rotation). Graduation portrait: white patterned shirt, blue university sash, holding a mortarboard reading "Trust me, I'm an Engineer". Confirmed by the owner as the photo to use. Must be processed into web-sized assets before shipping; the raw file must not be served.
- **Live product URL** — `https://irodori-tts-studio.vercel.app/` (Japanese Voice Studio).
- **Public repositories** — `ollama-ui-llm-rag`, `maritime-db-monitor`, `thecon-2025`, and older student projects, all under `github.com/Valentinbejan`.
- **YouTube channel** — `@Valentinebej`, Blender/Premiere/After Effects animation.
- **Verifiable result** — TheCon 2025 hackathon: 4th overall out of ~30 teams, the only solo entrant in the top ranks.
- **Contact facts** — phone `(+40) 0770625029`, email `valentinbejan@yahoo.com`, LinkedIn `in/bejan-valentin-702b53287`, GitHub `valentinbejan`.
- **Education** — UDJ Galați, master's in Tehnologii Informatice Avansate (2025–present); bachelor's in Calculatoare și Tehnologia Informației (2021–2025); Liceul Teoretic „Dunărea", Matematică-Informatică (2017–2021).
- **Experience** — LILT AI, Romanian AI Content Expert, freelance, Jan 2026–present; Still-Co internship (Jun–Jul 2023); Thecon internship (Jan–Mar 2024).

Explicitly absent — must never be fabricated:

- No project screenshots or demo videos were provided.
- No testimonials, references, client names, metrics, salary, or availability dates.
- No claim of professional seniority beyond the two internships and the current freelance role.

## Product Principles

1. **A recruiter's first thirty seconds decide everything.** Whatever wins attention must be legible immediately and must not be gated behind an animation, a timer, or a scroll.
2. **Proof over adjectives.** Every claim on this site should point at something checkable — a live URL, a repo, a placement, a degree. Remove decoration that competes with proof.
3. **Both languages are first-class.** Romanian is not a translation of English or the reverse; a visitor in either language gets the complete, equally-considered site.
4. **Honest scale.** Present a strong recent graduate with real shipped systems, not a fictional senior engineer.
5. **Small and fast stays small and fast.** The stack is intentionally light; new weight must earn its place against load time on a phone.

## Accessibility & Inclusion

No user-specific requirement was established, so the standard applies: WCAG 2.2 AA contrast in both themes, full keyboard operability of the nav, language toggle and theme toggle, honored `prefers-reduced-motion`, and correct `lang` attributes per locale (the root layout currently hardcodes `lang="ro"` for both locales — a defect to fix).
