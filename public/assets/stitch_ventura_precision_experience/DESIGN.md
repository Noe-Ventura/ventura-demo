---
name: Precision Engineering System
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#424750'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#727781'
  outline-variant: '#c2c7d1'
  surface-tint: '#2c6098'
  primary: '#003662'
  on-primary: '#ffffff'
  primary-container: '#104d84'
  on-primary-container: '#8fbffd'
  inverse-primary: '#a2c9ff'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#323537'
  on-tertiary: '#ffffff'
  tertiary-container: '#494c4e'
  on-tertiary-container: '#b9bcbe'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d3e4ff'
  primary-fixed-dim: '#a2c9ff'
  on-primary-fixed: '#001c38'
  on-primary-fixed-variant: '#05487f'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#e0e3e5'
  tertiary-fixed-dim: '#c4c7c9'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#444749'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  button:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.0'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  bento-gap: 16px
---

## Brand & Style

This design system embodies the principles of **Swiss Modernism** and **Technical Precision**. It is designed for high-performance environments where clarity, efficiency, and structural integrity are paramount. The target audience includes engineers, data analysts, and professionals who value rigor over decoration.

The aesthetic is rooted in **Minimalism** with a **Bento-grid** layout structure. It utilizes a strict mathematical approach to white space, creating a "breathable" yet dense information architecture. The emotional response is one of absolute reliability, transparency, and sophisticated industrial power. Visual interest is generated through perfect alignment, high-contrast typography, and purposeful geometric shapes rather than illustrative flourishes.

## Colors

The palette is anchored by **Pure White (#FFFFFF)** to establish an uncompromisingly clean canvas. **Deep Blue (#104D84)** serves as the primary brand color, used strategically for critical actions, navigation states, and structural accents to project authority and depth.

- **Surface:** Pure White is the mandatory background for all primary containers to maximize contrast.
- **Action:** Deep Blue is reserved for primary buttons, active icons, and progress indicators.
- **Typography:** The "Neutral" Slate Black (#0F172A) provides maximum legibility against the white background.
- **Accents:** Use subtle greys (#F1F5F9) for secondary layout partitions and "Bento" card backgrounds to maintain the grid without adding visual noise.

## Typography

Typography is the primary vehicle for the "Swiss Engineering" feel. **Space Grotesk** is used for headlines to provide a technical, slightly futuristic edge with its unique geometric apertures. For body text, **Inter** provides maximum legibility and a neutral, functional tone. 

**JetBrains Mono** is introduced as a utility font for labels, data points, and technical metadata to reinforce the precision-engineered narrative. All headings should favor tighter letter-spacing for a "locked-in" look, while labels should have increased tracking for clarity at small sizes.

## Layout & Spacing

The layout utilizes a **Fixed Grid** philosophy inspired by editorial design. Content is organized into a modular **Bento-grid** system where elements are housed in distinct, logically grouped rectangular containers.

- **Desktop:** 12-column grid with a 1200px max-width, 24px gutters, and 48px outer margins.
- **Mobile:** 4-column fluid grid with 16px margins. 
- **Rhythm:** Use an 8px base unit for all padding and internal spacing. Larger "Bento" cards should utilize generous internal padding (32px or 40px) to emphasize the minimalist, premium feel. 
- **Reflow:** On mobile, Bento cards stack vertically, maintaining a consistent 16px gap.

## Elevation & Depth

This design system rejects traditional shadows in favor of **Low-Contrast Outlines** and **Tonal Layers**. 

Hierarchy is established through structural separation rather than perceived height. Bento cards should use a 1px solid border (#E2E8F0) or a very subtle off-white fill (#F8FAFC) against the pure white background. For rare instances where depth is required (e.g., modals), use a "hard" shadow: a 4px offset with 0 blur and 10% opacity of the Primary Deep Blue color to maintain the architectural, non-fuzzy aesthetic.

## Shapes

To maintain the "Engineering" feel, shapes are kept **Soft (0.25rem)**. This provides just enough approachable modernism without losing the disciplined, structural rigidity of the grid. 

- **Primary Elements:** 4px (0.25rem) corner radius.
- **Large Bento Containers:** 8px (0.5rem) corner radius for a slightly more defined container feel.
- **Buttons:** Match the primary element radius (4px). Avoid fully rounded or pill shapes as they conflict with the grid's precision.

## Components

- **Buttons:** Primary buttons use Deep Blue (#104D84) with White text. Secondary buttons use a 1px Slate border with no fill. Transitions should be instantaneous or very fast (150ms) to feel "mechanical."
- **Bento Cards:** The core organizational unit. Every card must have a consistent internal padding of 32px. Use JetBrains Mono for card "tags" or "IDs" in the top right corner.
- **Inputs:** High-contrast 1px borders. On focus, the border thickens to 2px in Deep Blue. No inner shadows.
- **Navigation:** A vertical sidebar or a strictly aligned top-tier bar. Use Deep Blue for the active state indicator—a 3px vertical line or "pip" is preferred over a background highlight.
- **Data Tables:** No vertical lines. Use subtle horizontal rules (#F1F5F9). Headers should be in JetBrains Mono, all-caps, at 10px or 12px.
- **Chips:** Rectangular with 2px radius. Use a light grey background (#F1F5F9) with Slate text for a "tag" appearance.