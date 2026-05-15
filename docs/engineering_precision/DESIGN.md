---
name: Engineering Precision
colors:
  surface: '#131314'
  surface-dim: '#131314'
  surface-bright: '#3a393a'
  surface-container-lowest: '#0e0e0f'
  surface-container-low: '#1c1b1c'
  surface-container: '#201f20'
  surface-container-high: '#2a2a2b'
  surface-container-highest: '#353436'
  on-surface: '#e5e2e3'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#e5e2e3'
  inverse-on-surface: '#313031'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#4ae176'
  on-secondary: '#003915'
  secondary-container: '#00b954'
  on-secondary-container: '#004119'
  tertiary: '#ffb783'
  on-tertiary: '#4f2500'
  tertiary-container: '#d97721'
  on-tertiary-container: '#452000'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#6bff8f'
  secondary-fixed-dim: '#4ae176'
  on-secondary-fixed: '#002109'
  on-secondary-fixed-variant: '#005321'
  tertiary-fixed: '#ffdcc5'
  tertiary-fixed-dim: '#ffb783'
  on-tertiary-fixed: '#301400'
  on-tertiary-fixed-variant: '#703700'
  background: '#131314'
  on-background: '#e5e2e3'
  surface-variant: '#353436'
typography:
  headline-xl:
    fontFamily: Geist
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.03em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  meta-sm:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1.5'
    letterSpacing: 0.02em
  meta-xs:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: '1.5'
  headline-xl-mobile:
    fontFamily: Geist
    fontSize: 36px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.03em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap: 128px
---

## Brand & Style

This design system is built for a high-end personal portfolio that communicates technical mastery and architectural intentionality. The brand personality is rooted in **Engineering Precision**: it is disciplined, cold-toned, and focused on the beauty of logic. It avoids the fluff of traditional marketing, opting instead for a "developer-tool" aesthetic that feels like a premium IDE or a high-performance dashboard.

The style is **Modern Minimalism mixed with Technical Brutalism**. It prioritizes high-density information layouts, sharp borders, and monospaced accents to evoke the feeling of a sophisticated software environment. The emotional response should be one of trust in the subject's technical competence and attention to detail.

## Colors

The palette is strictly dark-mode, inspired by obsidian-glass interfaces and modern code editors. 

- **Primary (#6366F1):** "Electric Indigo" is used sparingly for interactive states, primary calls to action, and syntax highlighting.
- **Success (#22C55E):** Used specifically for status indicators (e.g., "Available for work") and terminal-style successes.
- **Neutrals:** The background is a deep, true-black (#0A0A0B) to ensure the hardware bezel disappears, while the surface (#14141A) provides subtle depth for cards and containers.
- **Borders (#26262E):** These are the structural backbone of the design, used to define the 8px grid without relying on heavy shadows.

## Typography

The typography system relies on the interplay between the geometric "Geist" for communication and "JetBrains Mono" for technical metadata.

- **Headlines:** Use tight tracking (negative letter spacing) to create a high-fashion, "Swiss" feel. Headlines should be bold and impactful, acting as the primary visual anchor.
- **Body:** Set with generous line height to ensure maximum readability against the dark background.
- **Technical Metadata:** Every date, category, or code snippet must use JetBrains Mono. This reinforces the software engineering narrative.
- **Labels:** Small caps or uppercase monospaced text should be used for section overlines (e.g., "01 / EXPERIENCE").

## Layout & Spacing

The design system operates on a rigorous **8px Grid System**. Every margin, padding, and height increment must be a multiple of 8.

- **Grid Model:** A 12-column fluid grid for desktop with 24px gutters. Content should often be offset (e.g., spanning columns 3 through 10) to create sophisticated whitespace.
- **Vertical Rhythm:** Sections are separated by large gaps (128px+) to allow the "precision" of the work to breathe.
- **Mobile Adaptivity:** At the 768px breakpoint, the grid collapses to 4 columns with 20px side margins. Large display type scales down aggressively to maintain visual hierarchy without horizontal scrolling.

## Elevation & Depth

This design system rejects traditional "soft" shadows in favor of **Tonal Layering and Sharp Outlines**.

- **Depth:** Surfaces are distinguished by color shifts rather than elevation. Background (#0A0A0B) is the lowest level; Surface (#14141A) is used for cards or "floating" panels.
- **Borders:** All containers must have a 1px solid border (#26262E). This "blueprint" aesthetic emphasizes the engineering aspect.
- **Active States:** Instead of a shadow, an active card or button might feature a subtle 1px border of the Primary Indigo color or a faint inner glow.
- **Glass Effects:** On scroll-based navigation bars, use a backdrop-blur (20px) with a semi-transparent version of the background color (rgba(10, 10, 11, 0.8)).

## Shapes

The shape language is "Soft-Sharp." While entirely square corners feel overly aggressive (Brutalist), we use a very tight radius to maintain the feeling of technical precision.

- **Base Radius:** 4px (0.25rem) for buttons, input fields, and small tags.
- **Container Radius:** 8px (0.5rem) for cards and project previews.
- **Interactive Elements:** Use sharp geometric lines. Avoid circles unless they are functional status indicators.

## Components

- **Buttons:** Primary buttons use the Indigo background with white text. Secondary buttons are "Ghost" style: a 1px border (#26262E) with white text that fills with a subtle grey on hover. No rounded-pill shapes; stick to the 4px radius.
- **Project Cards:** Large, border-only containers. Instead of a "Read More" button, use a JetBrains Mono "VIEW_PROJECT //" text link in the bottom right corner.
- **Status Indicators:** A small, 8px solid circle of Success Green (#22C55E) paired with "AVAILABLE_FOR_WORK" in JetBrains Mono.
- **Input Fields:** Styled like a terminal. 1px border on all sides, JetBrains Mono font, and a flashing Indigo cursor animation for the active state.
- **Lists:** Experience items should be separated by 1px horizontal lines, featuring the company name in Geist Bold and the tech stack in JetBrains Mono at a smaller scale.
- **Code Snippets:** Frameless blocks using a slightly darker surface color (#0D0D0F) with syntax highlighting that uses the Primary Indigo and Success Green.