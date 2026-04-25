# Design System Strategy: The Curated Community

## 1. Overview & Creative North Star
**Creative North Star: The Digital Hearth**
This design system is built to feel like a warm, tactile invitation. Moving away from the sterile, modular "grid-on-white" typical of modern SaaS, we lean into a high-end editorial aesthetic that prioritizes warmth and human connection. The system breaks traditional "template" rigidity through intentional asymmetry, fluid organic shapes, and a palette rooted in the earth.

To achieve a signature look, we employ **Dynamic Layering**. Instead of placing elements side-by-side in boxes, we overlap them. An image might break the container boundary; a heading might sit partially atop a decorative shape. This creates a sense of depth and curated "scrapbook" intentionality that feels personal and community-focused.

---

## 2. Colors: Tonal Depth vs. Structural Lines
Our palette is a sophisticated blend of Olive and Terracotta, anchored by a rich, parchment-like cream.

*   **Primary (`#42512b`):** Use for authoritative moments—primary actions and deep headings.
*   **Secondary (`#904d00`):** Our "Community Spark." Use for high-contrast CTAs and highlights.
*   **Surface (`#fff8ef`):** The foundational warmth. It replaces "white" entirely.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to section content. Boundaries must be defined through background shifts.
*   **Hierarchy via Tone:** A section requiring distinction should transition from `surface` to `surface-container-low` (`#fbf3e4`).
*   **Signature Textures:** For Hero backgrounds or large CTA blocks, use a subtle linear gradient from `primary` (`#42512b`) to `primary-container` (`#596941`) at a 145-degree angle. This adds "soul" and prevents the flat, digital look of solid fills.

---

## 3. Typography: The Editorial Voice
We use a high-contrast pairing to balance heritage with approachability.

*   **Headings (Noto Serif):** Our "Voice." The serif font provides a sense of history and trust. 
    *   *Usage:* Use `display-lg` (3.5rem) for hero moments with tight letter-spacing (-0.02em).
*   **Body (Plus Jakarta Sans):** Our "Clarity." This clean sans-serif ensures maximum readability for community updates and event details.
    *   *Usage:* Use `body-lg` (1rem) for general content to maintain an airy, premium feel.

---

## 4. Elevation & Depth: Tonal Layering
Traditional shadows are too "tech." We achieve depth through a physical stacking logic.

*   **The Layering Principle:** Treat the UI as stacked sheets of fine paper. Place a `surface-container-lowest` card on a `surface-container-low` section to create a soft, natural lift.
*   **Ambient Shadows:** If an element must float (like a modal or a floating action button), use an ultra-diffused shadow:
    *   `box-shadow: 0 20px 40px rgba(30, 27, 19, 0.06);` (Using a tinted version of `on-surface`).
*   **Glassmorphism:** To maintain lightness, use Backdrop Blurs (12px–20px) on headers or overlays using `surface` at 80% opacity. This allows the organic shapes and colors of the background to "bleed" through, integrating the UI.

---

## 5. Components: Bespoke Primitives

### Buttons
*   **Primary:** Background `primary` (`#42512b`), Text `on-primary` (`#ffffff`). Shape: `xl` rounded corners (1.5rem). No shadow; use a slight scale-up (1.02x) on hover.
*   **Secondary:** Background `secondary-container` (`#fe932c`), Text `on-secondary-container` (`#663500`). Use for urgent community "Join" actions.

### Cards & Containers
*   **The Constraint:** Strictly forbid horizontal divider lines.
*   **Separation:** Use `Spacing Scale 8` (2.75rem) to create clear breathing room between items.
*   **Shape:** Use `lg` (1rem) or `xl` (1.5rem) rounding. For a "signature" feel, apply an `asymmetric radius` (e.g., `top-left: 2rem; bottom-right: 2rem`) to feature cards to mimic organic, hand-cut paper.

### Inputs & Fields
*   **The "Ghost Border":** Use `outline-variant` at 20% opacity. Avoid the heavy default Material outlines.
*   **Focus State:** Shift background to `surface-container-highest` (`#e9e2d3`) rather than changing the border color.

### Signature Component: The "Community Blob"
*   Use organic, non-geometric SVG shapes behind profile photos or event dates. These should use `primary-fixed-dim` (`#bbcd9c`) or `tertiary-fixed` (`#ffdbcb`) to act as soft anchors for content.

---

## 6. Do's and Don'ts

### Do:
*   **Overlap Elements:** Let a photo overlap a text block by `Spacing 4` (1.4rem) to create an editorial layout.
*   **Use Warm Neutrals:** Always prefer `surface-variant` over any grey.
*   **Embrace White Space:** Use `Spacing 16` (5.5rem) and `Spacing 20` (7rem) between major sections to let the design breathe.

### Don't:
*   **No Cold Tones:** Strictly avoid indigo, slate, or cool-grey. They break the "warm hearth" promise.
*   **No Harsh Corners:** Avoid `none` or `sm` roundedness unless it's for a tiny label. 
*   **No Generic Grids:** Don't align everything to a rigid center. Offset images slightly to the left or right to create a "human" rhythm.
*   **No High-Contrast Borders:** Never use a 100% opaque border for containment. If a container isn't visible via color shift, it shouldn't be there.