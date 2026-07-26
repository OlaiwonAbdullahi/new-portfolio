---
name: akinkunmi-design
description: Use this skill when designing interfaces that mirror Akinkunmi's personal brand. It features a quiet, confident digital space with a stark, elegant minimalism, a vibrant accent color of '#9fe871', and a dark color scheme. The typography utilizes 'Newsreader' for headings and 'DM Sans' for body text, with subtle rounded corners and generous spacing.
packages:
  - name: clsx
    purpose: Tiny utility for conditionally joining class names
    kind: dependency
    curated: true
  - name: tailwind-merge
    purpose: Merge Tailwind classes without style conflicts
    kind: dependency
    curated: true
  - name: class-variance-authority
    purpose: Type-safe component style variants (CVA)
    kind: dependency
    curated: true
  - name: react-router-dom
    purpose: For handling navigation between different pages and views.
    kind: dependency
    curated: false
  - name: react-hook-form
    purpose: For managing form state and validation efficiently.
    kind: dependency
    curated: false
  - name: axios
    purpose: To make HTTP requests for fetching or sending data.
    kind: dependency
    curated: false
---
```yaml
brand: Akinkunmi
mood: A quiet, confident digital space with a stark, elegant minimalism and a single, vibrant accent.
scheme: dark

colors:
  primary: "#9fe871"
  primary-bright: "#aefc84"
  primary-deep: "#8cda5d"
  on-primary: "#0c0b09"
  ink: "#f5f2eb"
  ink-soft: "#9a958c"
  ink-faint: "#6b6560"
  on-ink: "#0c0b09"
  canvas: "#0c0b09"
  paper: "#191919"
  cloud: "#0c0b09"
  hairline: "#22211f"
  link: "{colors.ink-soft}"
  link-pressed: "{colors.ink}"

typography:
  display-xl: { fontFamily: "Newsreader", fontSize: 52px, fontWeight: 500, lineHeight: 1.1 }
  display-lg: { fontFamily: "Newsreader", fontSize: 24px, fontWeight: 500, lineHeight: 1.2 }
  display-md: { fontFamily: "Newsreader", fontSize: 18px, fontWeight: 500, lineHeight: 1.3 }
  body-md: { fontFamily: "DM Sans", fontSize: 15px, fontWeight: 400, lineHeight: 1.6 }
  link-md: { fontFamily: "DM Sans", fontSize: 14px, fontWeight: 400, lineHeight: 1.4 }
  caption-sm: { fontFamily: "DM Sans", fontSize: 12px, fontWeight: 400, lineHeight: 1.2, textTransform: "uppercase", letterSpacing: "0.5px" }
  caption-xs: { fontFamily: "DM Sans", fontSize: 11px, fontWeight: 400, lineHeight: 1.2 }

rounded:
  none: 0px
  sm: 6px
  pill: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 80px

shadows:
  none: "none"
  soft-lift: "none"
  card: "none"
  modal: "none"

motion:
  duration-fast: "150ms"
  duration-base: "150ms"
  ease-standard: "cubic-bezier(0.4, 0, 0.2, 1)"
  transition-color: "color {motion.duration-base} {motion.ease-standard}"
  transition-all: "all {motion.duration-base} {motion.ease-standard}"

components:
  navigation-link:
    color: "{colors.ink-soft}"
    typography: "{typography.link-md}"
    textDecoration: "none"
    transition: "{motion.transition-color}"
    cursor: "pointer"
  navigation-link-hover:
    color: "{colors.ink}"
  content-link:
    color: "{colors.ink-soft}"
    typography: "{typography.caption-sm}"
    textDecoration: "none"
    transition: "{motion.transition-color}"
    cursor: "pointer"
  content-link-hover:
    color: "{colors.ink}"
    textDecoration: "underline"
  social-link:
    color: "{colors.ink-faint}"
    typography: "{typography.link-md}"
    textDecoration: "underline"
    textDecorationColor: "{colors.hairline}"
    transition: "color {motion.duration-fast} {motion.ease-standard}, text-decoration-color {motion.duration-fast} {motion.ease-standard}"
    cursor: "pointer"
  social-link-hover:
    color: "{colors.ink}"
    textDecorationColor: "{colors.ink}"
  info-box:
    backgroundColor: "{colors.paper}"
    padding: "{spacing.md}"
    rounded: "{rounded.sm}"
    border: "1px solid {colors.hairline}"
    shadow: "{shadows.none}"
```

## Visual Theme & Atmosphere
The Akinkunmi brand identity exudes a quiet, focused confidence. It's a digital reflection of a craftsman's study: organized, uncluttered, and deeply personal. The atmosphere is defined by a stark, high-contrast dark theme, which feels both classic and contemporary. The experience is primarily typographic, creating a rhythm that is closer to reading a book than browsing a website. This literary feel is established by the elegant serif, `Newsreader`, used for headings, contrasted with the clean, modern sans-serif, `DM Sans`, for all body and UI text.

The palette is exceptionally restrained, built on a deep, near-black `{colors.canvas}` and layered with text in shades of warm off-white (`{colors.ink}`) and soft grey (`{colors.ink-soft}`). This monastic simplicity is punctuated by a single, vibrant accent of electric green (`{colors.primary}`), used with extreme prejudice for tiny, meaningful details. The overall impression is one of sophistication, precision, and thoughtful minimalism. It is a flat design system, intentionally rejecting shadows and gradients (`{shadows.none}`) in favor of typographic hierarchy and subtle color shifts for creating depth and emphasis.

### Key Characteristics
*   **Monastic Palette:** The design relies almost exclusively on a core of three neutrals: `{colors.canvas}`, `{colors.ink}`, and `{colors.ink-soft}`.
*   **Typographic Dichotomy:** A classic serif heading font (`Newsreader`) provides personality and structure, while a modern sans-serif body font (`DM Sans`) ensures clarity and legibility.
*   **Surgical Accent:** The bright `{colors.primary}` is used as a tool, not decoration, appearing only once or twice per view in a small, iconic form.
*   **Absolute Flatness:** The UI is entirely flat, with `{shadows.none}` applied universally. Emphasis and hierarchy are achieved through typography, color, and space.
*   **Considered Spacing:** A generous and consistent spacing scale (`{spacing.*}`) creates a calm, readable rhythm throughout the layout.
*   **Subtle Interactivity:** Hover states are understated, typically a simple color transition from `{colors.ink-soft}` to `{colors.ink}`, reinforcing the minimalist aesthetic.
*   **Textural Surfaces:** While predominantly flat, the system uses subtly different background shades like `{colors.paper}` and `{colors.hairline}` borders to differentiate zones without resorting to overt containers.

## Color Usage Rules
The color system is deliberately minimal to maintain focus on the content. An agent must reuse the core palette and resist any temptation to introduce new hues. The foundational colors for almost any composition are `{colors.canvas}`, `{colors.ink}`, and `{colors.ink-soft}`.

*   **Surfaces:** The primary background for all pages and sections is `{colors.canvas}`. Secondary, contained information (like status boxes) may use `{colors.paper}` for a subtle lift from the main canvas. There are no other surface colors. The page should feel like a single, unified dark space.
*   **Text:** Primary headings and important text should use `{colors.ink}` for maximum contrast and readability. Secondary text, descriptions, and metadata must use `{colors.ink-soft}`. Tertiary text, like the footer copyright, uses the even subtler `{colors.ink-faint}`.
*   **Primary Accent:** The `{colors.primary}` token is the most powerful and restricted color. It must be used with extreme scarcity. A good rule is **at most one instance per viewport**, and it should never be used for text or large background fills. Its role is for small, iconic signifiers, such as a status indicator or a verified checkmark.
*   **Links & Interactivity:** Standard navigation and content links must use `{colors.link}`, which is an alias for `{colors.ink-soft}`. On hover, they transition to `{colors.ink}`. Social links in the header are an exception, using `{colors.ink-faint}` to de-emphasize them slightly, and transitioning to `{colors.ink}` on hover.
*   **Borders & Dividers:** All horizontal rules (`<hr>`) and subtle component borders must use `{colors.hairline}`. This provides structure without creating harsh visual separation.
*   **Prohibition on New Colors:** Under no circumstances should a new color be introduced. The existing palette is sufficient. If emphasis is needed, it should be achieved through font weight, size, or by using `{colors.ink}` instead of `{colors.ink-soft}`.
*   **Prohibition on Shadows:** This is a flat design system. Emphasis is not created with elevation. Never apply a `box-shadow` that isn't `{shadows.none}`.

## Typography Hierarchy
The typographic system is built on a clear separation of roles between two font families. All headings and display text **must** use **Newsreader**. All body copy, UI text, links, and captions **must** use **DM Sans**. This distinction is fundamental to the brand's identity and must not be violated.

The hierarchy is established through a combination of font family, size, weight, and color, creating clear entry points and a logical reading order.

| Role | Token | Use |
| --- | --- | --- |
| Display XL | `{typography.display-xl}` | Reserved for the main "H1" of the site: the name "Akinkunmi". Used only once. |
| Display LG | `{typography.display-lg}` | For major section titles, such as "Projects". |
| Display MD | `{typography.display-md}` | For titles of individual items within a list, like project names. |
| Body MD | `{typography.body-md}` | The default style for all paragraph text and longer descriptions. |
| Link MD | `{typography.link-md}` | For all interactive text elements like navigation and social links. |
| Caption SM | `{typography.caption-sm}` | For metadata associated with a title, such as project URLs. The `textTransform: "uppercase"` is key. |
| Caption XS | `{typography.caption-xs}` | For the smallest annotations, primarily the site footer copyright notice. |

### Typography Principles
1.  **Role-Based Fonts:** The serif `Newsreader` is for establishing identity and structure; it gives weight to titles. The sans-serif `DM Sans` is for utility and readability; it carries the bulk of the information. Do not swap these roles.
2.  **Hierarchy Through Contrast:** The system relies on stark differences in size (e.g., `{typography.display-xl}` vs. `{typography.body-md}`) and color (`{colors.ink}` for titles vs. `{colors.ink-soft}` for descriptions) to guide the user's eye.
3.  **Breathable Line Height:** Body text uses a generous line height (`{typography.body-md}` has a `lineHeight` of 1.6) to ensure comfort during longer reading sessions on the dark background.
4.  **Functional Styling:** Details like `textTransform: "uppercase"` and `letterSpacing` on `{typography.caption-sm}` are not decorative; they are functional cues that signify metadata.
5.  **Minimal Weights:** The system primarily uses `fontWeight: 400` and `fontWeight: 500`. Avoid introducing heavier or lighter weights unless a new, distinct role is formally defined.

## Component Patterns
Components are simple, composable patterns that reuse the core brand tokens. They are designed to be understated and to serve the content, not dominate it.

**Navigation Link**
A `navigation-link` is used for the primary site navigation (e.g., "HOME", "GUESTBOOK"). It uses `{typography.link-md}` and has a text color of `{colors.ink-soft}`. On hover, the text color smoothly transitions to `{colors.ink}` over `{motion.duration-fast}` with `{motion.ease-standard}`. It does not have an underline. The cursor for a `navigation-link` must always be `pointer`.

**Content Link**
`content-link`s are used within body content or as metadata, such as the domain name under a project title. They use `{typography.caption-sm}` and inherit the `{colors.ink-soft}` color. They have no default text decoration. On hover, they transition to `{colors.ink}` and gain an underline simultaneously, providing a clear interactive affordance. The transition is governed by `{motion.transition-color}`. The cursor must be `pointer`.

**Social Link**
`social-link`s are a specific variant for external profiles (e.g., "GitHub", "Email"). They use `{typography.link-md}` but are styled with `{colors.ink-faint}` to be less prominent than primary navigation. They have a default `underline` with a subtle `{colors.hairline}` color. On hover, both the text and the underline color change to `{colors.ink}` over `{motion.duration-fast}`. The cursor for this element must be `pointer`.

**Info Box**
The `info-box` is a container for ancillary, non-critical information, such as the "Not listening right now" status. It provides a subtle visual separation from the main canvas. It is styled with a `{colors.paper}` background, `{rounded.sm}` corners, padding of `{spacing.md}`, and a `1px` border using `{colors.hairline}`. It carries no shadow (`{shadows.none}`).

**Project Card**
This is a layout pattern, not a single component. It represents a single project in a list. It is composed of a `{typography.display-md}` title in `{colors.ink}`, a `{typography.caption-sm}` `content-link` in `{colors.ink-soft}`, and a `{typography.body-md}` description in `{colors.ink-soft}`. Each project card is separated from the next by a `1px` horizontal divider using `{colors.hairline}` and vertical spacing.

## Layout & Spacing
The layout is governed by a minimalist, single-column structure that prioritizes readability and focus. The content lives within a centered container with a maximum width, ensuring comfortable line lengths on larger screens.

The vertical rhythm of the page is built from the `{spacing.*}` scale. This is not a suggestion; it is a strict rule. All margins, padding, and gaps between elements must use a value from this scale.

*   **Section Spacing:** Major content blocks, like the transition from the hero to the "Projects" list, are separated by `{spacing.section}` (`80px`). This creates significant visual separation and acts as a reset for the user's attention.
*   **Stacking Rhythm:** Within a section, elements are stacked vertically. The gap between a project title and its description, for example, would be `{spacing.xs}`, while the space between list items (separated by a divider) is typically `{spacing.xl}`.
*   **Component Padding:** Internal padding within components, like the `{spacing.md}` inside the `info-box`, also adheres to the scale.
*   **Horizontal Gutter:** The main content column has consistent horizontal padding on both sides, typically `{spacing.xl}` or `{spacing.xxl}`, which protects the text from the screen edges.
*   **Dividers:** The layout makes frequent use of full-width horizontal rules to cleanly partition content. These dividers must always be `1px` thick and use the `{colors.hairline}` color. They are a key structural element, especially in lists.

The philosophy is to use generous whitespace as an active design element. Space is not what's left over; it is a tool for creating hierarchy, grouping related items, and guiding the user through the content flow. The consistent application of the `{spacing.*}` scale ensures a harmonious and predictable rhythm across the entire experience.

## Do's and Don'ts

### Do's
1.  **Do** compose all surfaces and text exclusively from the core palette: `{colors.canvas}`, `{colors.paper}`, `{colors.ink}`, `{colors.ink-soft}`, and `{colors.ink-faint}`.
2.  **Do** use `Newsreader` for all headings and `DM Sans` for all body and UI text. No exceptions.
3.  **Do** use `{colors.primary}` with extreme scarcity, for a single, small, iconic accent per major view.
4.  **Do** build all layout rhythm using the defined `{spacing.*}` scale for padding, margins, and gaps.
5.  **Do** ensure every single clickable element, including links and list items, explicitly sets `cursor: pointer`.
6.  **Do** use `{colors.hairline}` for all `1px` borders and horizontal dividers to create subtle structure.
7.  **Do** apply the `info-box` style for any tertiary, contained information that needs slight separation from the main canvas.
8.  **Do** use `textTransform: "uppercase"` and `{typography.caption-sm}` for short metadata strings.

### Don'ts
1.  **Don't** ever introduce a color that is not already a token. Reuse the existing palette to solve visual problems.
2.  **Don't** ever add a `box-shadow` unless it maps to a real `{shadows.*}` token. This is a flat system; it must remain flat.
3.  **Don't** leave the browser's default arrow cursor on any interactive element. All links, buttons, and clickable regions must use `cursor: pointer`.
4.  **Don't** use `{colors.primary}` for text, large backgrounds, or more than once or twice in a single screen.
5.  **Don't** use any `border-radius` other than `{rounded.sm}`, and only where specified (like on the `info-box`). Most elements should have sharp corners (`{rounded.none}`).
6.  **Don't** guess at spacing values. If a value isn't on the `{spacing.*}` scale, choose the closest token.
7.  **Don't** use underlines on links by default. Introduce them only on hover for `content-link` components.
8.  **Don't** mix the roles of `Newsreader` and `DM Sans`. Headings are serif, body is sans-serif.

## Responsive Behavior
The single-column, typographic-focused design is inherently responsive and fluid. The primary goal is to maintain readability and the core aesthetic across all viewport sizes.

| Breakpoint | Range | Behavior |
|---|---|---|
| Mobile | <480px | The layout is a single fluid column. Horizontal padding is reduced to `{spacing.md}`. `{typography.display-xl}` font size is scaled down significantly. The navigation links may stack vertically. |
| Mobile-Large | 480–767px | The layout remains a single column. Font sizes are close to the desktop baseline. Horizontal padding may increase slightly to `{spacing.lg}`. |
| Tablet | 768–1023px | The main content column `max-width` takes effect, creating generous margins on the left and right. Font sizes are at their desktop baseline. |
| Desktop | 1024–1279px | The definitive desktop experience. The `max-width` of the content column is comfortable and centered. No layout changes from Tablet. |
| Desktop-Large | ≥1280px | The content column remains at its `max-width`. The surrounding `{colors.canvas}` background simply expands to fill the additional space. |

### Touch Targets
On touch-enabled devices, all interactive elements like links must have a minimum touch target size of 44x44px, even if the visual text is smaller. This can be achieved by adding sufficient padding around the link text.

### Component Behavior
*   **Navigation:** On the smallest screens, the two navigation links in the header may wrap or stack vertically if horizontal space is constrained. They will sit side-by-side with a `{spacing.xl}` gap on all larger screens.
*   **Hero:** The main `{typography.display-xl}` heading will scale down proportionally with the viewport width on mobile devices to prevent awkward wrapping.
*   **Project List:** The project list is a vertical stack and requires no structural changes. It will simply reflow to the width of the viewport.
*   **Images/Icons:** Any icons (like the checkmark using `{colors.primary}`) should be implemented as SVGs to ensure they scale crisply without pixelation.

## Iteration Guide
When building new UI or iterating on existing pages in the Akinkunmi style, follow these steps to ensure consistency.

1.  **Start with the Foundation:** Begin every new view with a solid `{colors.canvas}` background. Center a single content column with appropriate horizontal padding (`{spacing.lg}` or `{spacing.xl}`).
2.  **Establish Structure with Headings:** Use `Newsreader` to create the information hierarchy. Use `{typography.display-lg}` for the page's main section title and `{typography.display-md}` for sub-section or item titles. Color these with `{colors.ink}`.
3.  **Add Body Content:** Write all descriptive text using `{typography.body-md}` with `DM Sans`. Use `{colors.ink-soft}` for body paragraphs to create a comfortable contrast against the titles.
4.  **Implement Spacing Rhythm:** Use the `{spacing.*}` scale for all vertical and horizontal spacing. Separate major sections with `{spacing.section}`. Use smaller values like `{spacing.xs}` and `{spacing.md}` for intra-component spacing.
5.  **Place Dividers:** Where lists of items are present (e.g., projects), separate them with a `1px` horizontal border of `{colors.hairline}`. This is a key structural element.
6.  **Incorporate Interactive Elements:** Add links using the appropriate component patterns (`navigation-link`, `content-link`, `social-link`). Ensure each has a `cursor: pointer` and the correct hover state transition using `{motion.duration-fast}`.
7.  **Use Ancillary Components Sparingly:** If you need to display a small piece of metadata or a status update, use the `info-box` component. Do not overuse it.
8.  **Apply the Accent:** Once the entire layout is built in monochrome, identify a single, small, high-impact location for an accent. Apply `{colors.primary}` to an icon or a small graphical element in that spot. Do not proceed to this step until all else is complete.
9.  **Final Review for Flatness:** Review the entire composition and remove any shadows, gradients, or effects. The design must be completely flat, adhering to `{shadows.none}`.
10. **Test Responsiveness:** Check the layout at mobile, tablet, and desktop breakpoints. Ensure the single column reflows gracefully and font sizes are legible everywhere. Verify touch targets are adequate.

## Suggested Packages

Packages that help implement this skill well. Install them with your package manager (examples use pnpm).

- **clsx** — Tiny utility for conditionally joining class names. `pnpm add clsx`
- **tailwind-merge** — Merge Tailwind classes without style conflicts. `pnpm add tailwind-merge`
- **class-variance-authority** — Type-safe component style variants (CVA). `pnpm add class-variance-authority`

Also worth considering (verify before installing):

- **react-router-dom** — For handling navigation between different pages and views.. `pnpm add react-router-dom`
- **react-hook-form** — For managing form state and validation efficiently.. `pnpm add react-hook-form`
- **axios** — To make HTTP requests for fetching or sending data.. `pnpm add axios`
