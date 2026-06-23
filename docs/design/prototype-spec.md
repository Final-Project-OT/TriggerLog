# TriggerLog — Figma Design Brief
**Project:** TriggerLog — Trigger Logging App for PTSD  
**Course:** Visual UI/UX Design — Afeka College, 2026  
**Team:** Tamar Aloni + Offir  
**Device target:** iPhone 16 Pro  
**Canvas size:** 393 × 852 px  
**Document purpose:** Complete screen-by-screen specification for Figma prototype. Every screen should be buildable from this document alone, with no additional questions.

---

## How to read this document

1. Read the **Global Design System** section first. It defines every color token, font style, and spacing rule used throughout all screens.
2. For each screen, follow the **Layout Spec** in order from top to bottom.
3. Every color reference is a **token name** (e.g., `deep-blue-action`). Look up the hex value in the color palette table below.
4. All **pixel values** are in px at 1× density (Figma default). Do not scale.
5. **RTL** = Right-to-Left. All Hebrew text and most layout structures are right-aligned. Where RTL changes a layout rule, it is called out explicitly.

---

## Global Design System

This section applies to every screen. Do not define colors, fonts, or spacing locally — always reference this system.

---

### Canvas and Safe Areas

| Property | Value |
|---|---|
| Canvas width | 393 px |
| Canvas height | 852 px |
| Status bar / Dynamic Island safe area (top) | 59 px |
| Home indicator safe area (bottom) | 34 px |
| Usable content area | 393 × 759 px (y: 59 → 818) |

The **usable content area** starts at y=59 and ends at y=818. No interactive elements or text should be placed outside this zone.

---

### Color Palette

| Token name | Hex value | Usage |
|---|---|---|
| `sky-blue-light` | `#D4E8F5` | Log screen background, splash gradient mid |
| `sky-blue-mid` | `#B8C9E0` | Cards, secondary elements, section dividers |
| `lavender` | `#E8D5F0` | History accents, selected chip state (alt), chart accent |
| `warm-white` | `#F5EDD8` | Card fill, text input backgrounds, Settings/About backgrounds |
| `night-sky` | `#1A2540` | History screen background, safety gate overlay base |
| `star-blue` | `#8B9DC3` | Star dots, subtle accent elements |
| `deep-blue-action` | `#2C4E8A` | Primary buttons, selected chip fill, active nav icons |
| `text-dark` | `#1C2333` | All body text on light backgrounds |
| `text-light` | `#FFFFFF` | Text on dark backgrounds, text on filled buttons |
| `text-muted` | `#7A8499` | Placeholder text, captions, metadata, inactive nav icons |
| `destructive` | `#E05252` | Delete action text only — no backgrounds in red |
| `success-green` | `#4CAF82` | Log confirmation checkmark and "תועד ✓" state |
| `overlay-dark` | `#000000` at 60% opacity | Safety gate background overlay |
| `divider` | `#D0D8E4` | Row separators, section dividers |

> **Color rule:** No red is used in backgrounds or borders anywhere in the app. Red appears only as `destructive` text in Settings. The design must feel calm throughout.

---

### Typography

**Font family:** Assistant (Google Fonts — available in Figma via plugin or direct import)  
**Language:** Hebrew (RTL). All body text and labels are in Hebrew unless noted.  
**Text alignment:** Right-aligned for all Hebrew content.

| Style token | Size | Weight | Line height | Usage |
|---|---|---|---|---|
| `app-name` | 32 pt | SemiBold (600) | 40 pt | Splash screen app name only |
| `tagline` | 16 pt | Regular (400) | 24 pt | Splash screen tagline only |
| `heading-1` | 28 pt | Bold (700) | 36 pt | Screen titles ("מה קרה?", "היסטוריה") |
| `heading-2` | 22 pt | SemiBold (600) | 30 pt | Section labels within screens |
| `body` | 17 pt | Regular (400) | 26 pt | Chip labels, list items, toggle labels, body copy |
| `caption` | 14 pt | Regular (400) | 20 pt | Timestamps, metadata, sub-labels, section headers in Settings |
| `button-label` | 17 pt | SemiBold (600) | 24 pt | Primary and secondary button text |
| `section-header` | 12 pt | SemiBold (600) | 18 pt | Settings section group headers (uppercase or small caps) |

---

### Spacing System

| Token | Value | Usage |
|---|---|---|
| `screen-margin` | 20 px | Left and right margin on all screens |
| `section-gap` | 16 px | Vertical gap between major content sections |
| `chip-gap` | 8 px | Gap between chips in a row |
| `row-padding-v` | 14 px | Top and bottom padding inside list rows |
| `row-padding-h` | 20 px | Left and right padding inside list rows (= screen-margin) |
| `card-padding` | 20 px | Internal padding inside modal cards |
| `button-height-primary` | 56 px | Log button, "שתף עם המטפל", "שלח דוח", "אני מוכן/ה" |
| `button-height-secondary` | 44 px | Text-only buttons, back links |
| `chip-height` | 48 px | All trigger type chips and intensity buttons |
| `bottom-nav-height` | 72 px | Bottom navigation bar including home indicator safe area |

---

### Corner Radii

| Context | Radius |
|---|---|
| Cards and modal sheets | 20 px |
| Trigger type chips and intensity buttons | 20 px |
| Note field and text inputs | 12 px |
| Small tags (compact chips in History) | 8 px |
| Bottom navigation bar top edge | 16 px top-left + top-right |
| Primary log button | 16 px |

---

### Tap Target Rules

- Minimum tap target: 44 × 44 px (Apple HIG)
- Preferred for primary actions: 56 px height minimum
- Chips: 48 px height minimum
- Bottom nav icons: 44 × 44 px hit area (icon visual can be smaller, e.g. 24 × 24 px)

---

### RTL Layout Rules (applies to ALL screens)

RTL means the reading direction and visual hierarchy flows from **right to left**.

- **Text alignment:** right-aligned
- **Icon + label pairs:** icon appears to the LEFT of the text label (in RTL, the label is the "start" element on the right, icon is on the left)
- **Back arrows:** point to the RIGHT (→) in RTL, positioned top-right corner
- **Toggle rows:** label on the right, toggle switch on the left
- **List items:** primary content (label, type chip) on the right; secondary/decorative content (star dot, timestamp) on the left
- **Chip rows:** chips are laid out right-to-left. First chip starts at the right margin, overflow wraps left
- **Screen margin:** 20 px on both sides — right margin is the visual "start"

> In Figma: set all text layers to RTL direction and align content to the right side of frames by default.

---

### Shadows and Glow Effects

| Usage | Effect |
|---|---|
| Selected chip (active state) | Drop shadow: x=0, y=2, blur=8, spread=0, color=`deep-blue-action` at 30% |
| Modal card (Safety Gate) | Drop shadow: x=0, y=8, blur=32, spread=0, color=`#000000` at 25% |
| Star dots in History | Outer glow: color=`star-blue` (`#8B9DC3`), blur=6 px, opacity 60% |
| Bottom nav bar | Top border: 1 px `divider` color |

---

### Bottom Navigation Bar

The bottom nav bar appears on the **Log screen** and the **History screen** only. It does not appear on Settings, About, or modal screens.

- **Height:** 72 px (includes 34 px home indicator safe area at the bottom)
- **Background:** `warm-white`
- **Top border:** 1 px `divider`
- **Top-left corner radius / top-right corner radius:** 16 px
- **Icon area height (above home indicator):** 38 px
- **Icon size:** 24 × 24 px (visual)
- **Hit area per icon:** 44 × 44 px centered on icon
- **Icon horizontal positions:** Icons are equally spaced in the full 393 px width

**Icons:**
| Icon | Position | Active color | Inactive color | Screen it navigates to |
|---|---|---|---|---|
| History (star cluster / constellation) | Left side — x center at ~98 px from left | `deep-blue-action` | `text-muted` | Safety Gate → History |
| Settings (gear) | Right side — x center at ~295 px from left | `deep-blue-action` | `text-muted` | Settings |

> Note on icon position in RTL: In RTL navigation bars, the "secondary" action (History) is conventionally on the right and "settings" on the left. However, since there are only 2 icons and the brief specifies the History icon triggers the primary secondary flow, **keep History icon on the right side and Settings on the left** to match natural RTL tab bar convention. Adjust x positions: Settings x≈98 px from left, History x≈295 px from left.

> The Log screen itself is "home" — there is no home icon because the Log screen is always reachable via back navigation.

---

## Screen 1 — Splash

### Purpose

First screen the user sees on app launch. Establishes the sky metaphor. Auto-advances to the Log screen after 1.5 seconds. No interaction required or available.

### Metaphor note

This is a sky just before dusk — soft blue with the first hints of stars. The cloud-star logo signals the "weather passing through the sky" metaphor without explaining it verbally.

---

### Background

- **Type:** Linear gradient, vertical direction (top to bottom)
- **Gradient stop 1:** `#C8DFF0` (slightly deeper than `sky-blue-light`) at 0% position (top)
- **Gradient stop 2:** `sky-blue-light` (`#D4E8F5`) at 55% position (center)
- **Gradient stop 3:** `#EAD8F2` (soft lavender-white blend) at 100% (bottom)
- The gradient transitions from a slightly richer sky blue at top to a warm lavender-blush at the bottom — evoking late afternoon sky where stars are about to appear

---

### Logo / Icon

- **Shape:** A soft rounded cloud shape (Figma auto shape: rectangle with very high corner radius ~50%, width 80 px, height 50 px) with a single 5-pointed star (14 × 14 px) emerging from the top-right of the cloud, slightly overlapping it
- **Cloud fill:** `text-light` (`#FFFFFF`) at 85% opacity
- **Star fill:** `star-blue` (`#8B9DC3`)
- **Logo size:** 80 px wide, 60 px tall (cloud + star combined bounding box)
- **Logo position:** Horizontally centered (x = 196.5 px from left). Top edge at y = 276 px (approximately 33% down from the top of the canvas)
- **No stroke on the logo**

---

### App Name

- **Text:** "Trigger Log"
- **Style:** `app-name` (32 pt, SemiBold, font: Assistant)
- **Color:** `text-dark` (`#1C2333`)
- **Alignment:** Center-aligned (this is the brand name, not Hebrew body text — centering is appropriate)
- **Position:** Top edge at y = 356 px (20 px below logo bottom at ~336 px)

---

### Tagline

- **Text:** "רק לסמן שזה קרה" (Hebrew — RTL)
- **Style:** `tagline` (16 pt, Regular)
- **Color:** `text-dark` (`#1C2333`) at 70% opacity
- **Alignment:** Center-aligned
- **Position:** Top edge at y = 404 px (8 px below the app name bottom at ~396 px)

---

### Star Dots

4 small decorative star dots scattered on the background. They are purely decorative and should feel organic, not grid-aligned.

| Dot # | x position | y position | Size | Opacity |
|---|---|---|---|---|
| 1 | 58 px | 140 px | 4 × 4 px | 55% |
| 2 | 320 px | 190 px | 3 × 3 px | 45% |
| 3 | 82 px | 480 px | 5 × 5 px | 40% |
| 4 | 338 px | 540 px | 4 × 4 px | 50% |

- **Fill:** `star-blue` (`#8B9DC3`)
- **Shape:** Circle (use Figma ellipse tool)
- **No stroke, no glow** on splash screen dots — they should be very subtle

---

### Animation Note (for Figma prototype)

- **Transition:** This screen auto-advances to Screen 2 (Log) after **1.5 seconds**
- **In Figma:** Add a "Navigate to" interaction on the frame itself with trigger set to "After delay" → 1500ms, animation type: "Dissolve" or "Smart Animate" with 300ms ease-out
- No tap interaction on this screen

---

### States

This screen has no interactive states. It is static.

---

## Screen 2 — Log (Home)

### Purpose

The primary screen. The only goal: let the user log a trigger in under 10 seconds. This is the screen the user returns to after every action. It must feel calm and immediately actionable — nothing should require navigation or thought to reach.

### Metaphor note

The background is a soft, clear sky blue. The atmosphere should feel like a calm afternoon — open, non-threatening. The layout is spacious; nothing is crowded.

---

### Background

- **Fill:** `sky-blue-light` (`#D4E8F5`)
- **Full canvas:** 393 × 852 px

---

### Status Bar Area (y: 0 → 59 px)

- Leave as-is — let the system status bar render over the background color
- No design elements in this zone

---

### Header

- **Text:** "מה קרה?" (Hebrew, RTL)
- **Style:** `heading-1` (28 pt, Bold)
- **Color:** `text-dark` (`#1C2333`)
- **Alignment:** Right-aligned
- **Position:** Top of text at y = 75 px (16 px below the safe area bottom at y=59)
- **Right margin:** 20 px (text right edge at x = 373 px)
- **Left margin (max width):** Text can extend left to x = 20 px (full usable width = 353 px)

---

### Trigger Type Section

#### Section Label

- **Text:** "סוג הטריגר"
- **Style:** `heading-2` (22 pt, SemiBold)
- **Color:** `text-dark` (`#1C2333`)
- **Alignment:** Right-aligned
- **Position:** Top of text at y = 127 px (16 px below header bottom at ~111 px)
- **Right margin:** 20 px

#### Chip Layout

The 7 trigger type chips are arranged in **2 rows**, laid out **right to left** (RTL direction). Chips are variable width (sized to their label) but all have the same 48 px height.

**Chip sizing:**
- **Height:** 48 px
- **Horizontal padding inside chip:** 20 px on left and right
- **Width:** auto-sized to text + padding (minimum 80 px, maximum 160 px)
- **Corner radius:** 20 px (fully rounded ends)
- **Gap between chips:** 8 px

**Row 1** (3 chips, RTL order — right to left):
- צליל | ויזואלי | המון אנשים / מרחב
- Row 1 top edge: y = 169 px (16 px below section label bottom at ~153 px)

**Row 2** (4 chips, RTL order — right to left):
- ריח | זיכרון / מחשבה | תחושה גופנית | אחר / לא יודע
- Row 2 top edge: y = 225 px (8 px gap below Row 1 bottom at ~217 px)

**Chip layout in Figma:**
- Use Auto Layout frame for each row, direction: Right to Left (Horizontal), gap = 8 px
- Row frame right edge: x = 373 px (screen right edge minus 20 px margin)
- Row frame left boundary: x = 20 px (chips wrap within this 353 px wide zone)
- If Row 2 chips overflow the 353 px width, increase wrap — Figma wrap auto layout can handle this

**Chip Default State:**
- Fill: `warm-white` (`#F5EDD8`)
- Border: 1 px stroke, `sky-blue-mid` (`#B8C9E0`)
- Text: `body` style (17 pt, Regular), color `text-dark` (`#1C2333`), center-aligned within chip
- Shadow: none

**Chip Selected State:**
- Fill: `deep-blue-action` (`#2C4E8A`)
- Border: none (remove stroke)
- Text: `body` style (17 pt, Regular), color `text-light` (`#FFFFFF`), center-aligned
- Shadow: Drop shadow x=0, y=2, blur=8, spread=0, color `deep-blue-action` at 30%

**Chip rules:**
- Only 1 chip can be selected at a time (single-select behavior)
- Tap target is the full chip area (minimum 48 px height is already satisfied)

---

### Intensity Section

#### Section Label

- **Text:** "עצמה"
- **Style:** `heading-2` (22 pt, SemiBold)
- **Color:** `text-dark` (`#1C2333`)
- **Alignment:** Right-aligned
- **Position:** Top of text at y = 289 px (16 px below Row 2 bottom at ~273 px)
- **Right margin:** 20 px

#### Intensity Buttons

3 equal-width buttons side by side, spanning full usable width (353 px), separated by vertical dividers.

- **Total width:** 353 px (from x=20 to x=373)
- **Each button width:** (353 − 2 px dividers) ÷ 3 = ~117 px
- **Height:** 56 px
- **Top edge:** y = 323 px (10 px below section label bottom at ~313 px)
- **Corner radius:** Apply only to the outer corners — 12 px radius on the left button's left corners and right button's right corners; inner corners (middle) have 0 px radius to create a seamless segmented control
- **Dividers:** 1 px vertical lines between buttons, color `sky-blue-mid` (`#B8C9E0`)

**Button Labels (RTL, right to left):**
- Button 1 (rightmost): "קל"
- Button 2 (center): "בינוני"
- Button 3 (leftmost): "חזק"

**Intensity Button Default State:**
- Fill: `warm-white` (`#F5EDD8`)
- Border (outer border of the full grouped control): 1 px `sky-blue-mid`
- Text: `button-label` (17 pt, SemiBold), color `text-dark`
- No shadow

**Intensity Button Selected State:**
- Fill: `sky-blue-mid` (`#B8C9E0`)
- Text: `button-label` (17 pt, SemiBold), color `text-dark`
- The selected button gets a slightly deeper border: 1.5 px `deep-blue-action` on its edges only
- No shadow needed (fill change is sufficient)

**Intensity button rules:**
- Only 1 button can be selected at a time (single-select)
- All 3 are optional — the user can leave this unselected and still tap Log

---

### Quick Note Field

- **Placeholder text:** "הערה קצרה (לא חובה)" (Hebrew, RTL)
- **Position:** Top of field at y = 399 px (20 px below intensity buttons bottom at ~379 px)
- **Width:** 353 px (x: 20 → 373)
- **Height:** 52 px
- **Corner radius:** 12 px
- **Fill:** `warm-white` (`#F5EDD8`)
- **Border:** 1 px `sky-blue-mid` (`#B8C9E0`)
- **Placeholder text style:** `body` (17 pt, Regular), color `text-muted` (`#7A8499`), right-aligned
- **Internal padding:** 14 px top/bottom, 16 px left/right
- **Actual typed text style:** `body` (17 pt, Regular), color `text-dark`, right-aligned
- **Focus state:** Border changes to 2 px `deep-blue-action` (`#2C4E8A`)

> In Figma prototype: this is a static field — show it in empty/placeholder state. No keyboard needed.

---

### Log Button

- **Text:** "תיעוד"
- **Position:** Top of button at y = 471 px (20 px below note field bottom at ~451 px)
- **Width:** 353 px (x: 20 → 373)
- **Height:** 56 px
- **Corner radius:** 16 px
- **Fill:** `deep-blue-action` (`#2C4E8A`)
- **Text style:** `button-label` (17 pt, SemiBold), color `text-light` (`#FFFFFF`), center-aligned

**Log Button Default State:**
- As described above (deep blue, white text)

**Log Button Confirmation State (after tap — 1.5 seconds duration):**
- Fill: `success-green` (`#4CAF82`)
- Text changes to: "תועד ✓"
- Text style: `button-label` (17 pt, SemiBold), color `text-light`
- After 1.5 seconds, button returns to default state and all form selections reset to empty

> In Figma prototype: create a second variant of the Log screen with the confirmation state active. Add "Navigate to" with "After delay" 1500ms back to the default Log screen variant.

---

### Bottom Navigation Bar

- **Position:** Bottom of screen. Top edge at y = 780 px. Full height: 72 px (y: 780 → 852)
- **Width:** 393 px (full width)
- **Fill:** `warm-white` (`#F5EDD8`)
- **Top border:** 1 px `divider` (`#D0D8E4`)
- **Top corner radius:** 16 px on top-left and top-right corners

**History Icon (right side — RTL primary position):**
- Icon: star cluster / constellation (3 connected dots with lines, or use an SF Symbol equivalent)
- Visual size: 24 × 24 px
- Hit area: 44 × 44 px
- Center x: 295 px from left, center y: 799 px (above home indicator zone)
- **Inactive color:** `text-muted` (`#7A8499`)
- **Active color:** `deep-blue-action` (`#2C4E8A`) — active when on History screen, not on Log

**Settings Icon (left side — RTL secondary position):**
- Icon: gear / cogwheel
- Visual size: 24 × 24 px
- Hit area: 44 × 44 px
- Center x: 98 px from left, center y: 799 px
- **Inactive color:** `text-muted` (`#7A8499`)
- **Active color:** `deep-blue-action` (`#2C4E8A`) — active when on Settings screen

> On the Log screen, both icons are in inactive state (the Log screen itself is home — there is no Log icon).

---

### Full Screen Vertical Layout Summary (Screen 2)

| Element | Top y | Bottom y |
|---|---|---|
| Status bar safe area | 0 | 59 |
| Header "מה קרה?" | 75 | 111 |
| "סוג הטריגר" label | 127 | 153 |
| Chip Row 1 | 169 | 217 |
| Chip Row 2 | 225 | 273 |
| "עצמה" label | 289 | 313 |
| Intensity buttons | 323 | 379 |
| Quick note field | 399 | 451 |
| Log button | 471 | 527 |
| (whitespace / breathing room) | 527 | 780 |
| Bottom navigation bar | 780 | 852 |

The ~253 px of whitespace between the Log button and the bottom nav is intentional — it keeps the screen spacious and calm. Do not fill it.

---

## Screen 3 — Safety Gate (Modal)

### Purpose

A modal overlay that appears every time the user taps the History icon. It warns them that reviewing trigger history can be emotionally intense, and redirects them toward the intended use context (alongside a therapist). The design must feel like a caring friend checking in — not a legal disclaimer, not a gate that feels hostile.

### How it appears in the prototype

The previous screen (Log) is visible behind the overlay but dimmed. The modal card slides up or fades in over it.

---

### Background Overlay

- **Color:** `overlay-dark` — `#000000` at 60% opacity
- **Fill the entire 393 × 852 px canvas** behind the modal card
- **Not tappable** (tapping outside the card does not dismiss — user must choose a button)

---

### Modal Card

- **Width:** 334 px (85% of 393 px canvas width)
- **Horizontal position:** Centered — left edge at x = 29.5 px, right edge at x = 363.5 px
- **Vertical position:** Centered in usable area — top edge at y = 200 px approximately (adjust so card is visually centered in the screen, not mathematically centered, which should sit slightly above center, around y=200–220)
- **Fill:** `text-light` (`#FFFFFF`)
- **Corner radius:** 20 px
- **Shadow:** Drop shadow x=0, y=8, blur=32, spread=0, color `#000000` at 25%
- **Internal padding:** 24 px on all sides

**Card internal layout (top to bottom):**

#### Body Text

- **Text content (Hebrew, RTL):**  
  "צפייה ביומן הטריגרים שלך יכולה לפעמים להיות מציפה. הוא הכי שימושי כשסוקרים אותו יחד עם המטפל. האם אתה/את במקום רגוע ובטוח כרגע?"
- **Style:** `body` (17 pt, Regular)
- **Color:** `text-dark` (`#1C2333`)
- **Alignment:** Right-aligned, RTL
- **Line height:** 26 pt (spacious — the message should breathe)
- **Width:** 286 px (card width 334 minus 2×24 px padding)
- **Top edge within card:** y = 24 px from card top
- **Estimated text block height:** ~104 px (approximately 4 lines at 26 pt line height)

#### Primary Button — "אני מוכן/ה"

- **Text:** "אני מוכן/ה"
- **Style:** `button-label` (17 pt, SemiBold), color `text-light`
- **Fill:** `deep-blue-action` (`#2C4E8A`)
- **Width:** 286 px (full inner card width)
- **Height:** 56 px
- **Corner radius:** 16 px
- **Position:** 20 px below body text bottom
- **Action:** Navigates to History screen (dismisses modal + overlay)

**Primary button states:**
- Default: as described
- Pressed: fill darkens to `#1E3D6E` (15% darker than `deep-blue-action`)

#### Secondary Button — "לא עכשיו"

- **Text:** "לא עכשיו"
- **Style:** `body` (17 pt, Regular), color `text-muted` (`#7A8499`)
- **Fill:** none (transparent)
- **Border:** none
- **Width:** 286 px
- **Height:** 44 px (meets minimum tap target)
- **Position:** 12 px below primary button bottom
- **Alignment:** Center-aligned text within button
- **Action:** Dismisses modal and returns to Log screen

**Secondary button states:**
- Default: as described (text only, muted grey)
- Pressed: text color changes to `text-dark` (`#1C2333`)

---

### Modal Card Height Calculation

| Element | Height | Top offset from card top |
|---|---|---|
| Top padding | 24 px | 0 |
| Body text (≈4 lines) | 104 px | 24 |
| Gap | 20 px | 128 |
| Primary button | 56 px | 148 |
| Gap | 12 px | 204 |
| Secondary button | 44 px | 216 |
| Bottom padding | 24 px | 260 |
| **Card total height** | **284 px** | |

---

## Screen 4 — History

### Purpose

A reverse-chronological list of all logged trigger entries. Visual metaphor: this is the night sky. Each trigger entry is a glowing star — something that happened, now fixed in the sky as light. The design must feel calm, contemplative, and quiet — not clinical or alarming.

### Metaphor execution

- Background is the deep night sky (`night-sky`)
- Every list entry gets a small glowing star dot on its left side
- Light-on-dark color scheme — the darkness is not heavy or threatening; it is spacious
- The overall impression: looking up at a sky full of quiet lights

---

### Background

- **Fill:** `night-sky` (`#1A2540`)
- **Full canvas:** 393 × 852 px

---

### Back Navigation (top right — RTL)

- **Element:** Right-facing arrow (→) or chevron pointing right
- **Position:** Top-right area. Center x = 353 px, center y = 78 px
- **Size:** 24 × 24 px (visual), 44 × 44 px hit area
- **Color:** `text-light` (`#FFFFFF`) at 85% opacity
- **Action:** Returns to Log screen

> In RTL: "back" means going back to where you came from (Log), and in Hebrew-language iOS apps the back chevron points to the right (→) because reading direction flows right. Follow this convention.

---

### Header

- **Text:** "היסטוריה"
- **Style:** `heading-1` (28 pt, Bold)
- **Color:** `text-light` (`#FFFFFF`)
- **Alignment:** Right-aligned
- **Right margin:** 20 px
- **Position:** Top of text at y = 75 px

---

### List Area

- **Top of list:** y = 123 px (16 px below header bottom at ~107 px)
- **Bottom of list:** y = 740 px (above the "שתף עם המטפל" button)
- **This area is scrollable if entries exceed the visible height**

#### List Item Anatomy

Each logged entry is one row.

| Sub-element | Description |
|---|---|
| Star dot | Left side — glowing star dot |
| Date + time | Left-center — "יום שישי, 20.06.26 / 14:32" |
| Trigger type chip | Right-center |
| Intensity chip | Right side (optional — only if intensity was logged) |
| Row separator | 1 px line below each row |

**Row layout (RTL — reading right to left):**

```
[Intensity chip] [Trigger type chip] [Date + time]      ● (star)
                                                    ← reading direction
```

- **Row height:** 56 px
- **Row left padding:** 20 px
- **Row right padding:** 20 px
- **Star dot position:** Vertically centered in row. Left edge at x = 20 px, center y = row center

**Star Dot:**
- **Shape:** Circle, 8 × 8 px
- **Fill:** `star-blue` (`#8B9DC3`)
- **Glow (Figma outer glow effect):** Color `star-blue` (`#8B9DC3`), size 6 px, opacity 60%
- **To apply in Figma:** Select the circle → Add Effect → Drop Shadow → set to: x=0, y=0, blur=6, spread=2, color `#8B9DC3`, opacity 60%

**Date + Time text:**
- **Content example:** "יום ו׳ · 20.06 · 14:32"
- **Style:** `caption` (14 pt, Regular)
- **Color:** `star-blue` (`#8B9DC3`)
- **Alignment:** Left-aligned within the left region (x from star dot right edge + 12 px)
- **Vertical position:** Centered in row

**Trigger Type Chip (compact, History version):**
- **Width:** auto (text + 12 px horizontal padding each side)
- **Height:** 28 px
- **Corner radius:** 8 px
- **Fill:** `lavender` (`#E8D5F0`) at 30% opacity
- **Border:** 1 px `lavender` (`#E8D5F0`) at 60% opacity
- **Text style:** `caption` (14 pt, Regular), color `text-light` (`#FFFFFF`)
- **Position:** Right-aligned — right edge at x = 373 px

**Intensity Chip (compact, History version, optional):**
- **Width:** auto (text + 10 px horizontal padding each side)
- **Height:** 28 px
- **Corner radius:** 8 px
- **Fill:** `sky-blue-mid` (`#B8C9E0`) at 25% opacity
- **Border:** 1 px `sky-blue-mid` at 50% opacity
- **Text style:** `caption` (14 pt, Regular), color `text-light`
- **Position:** 8 px to the left of the trigger type chip's left edge

**Row Separator:**
- **Style:** 1 px horizontal line
- **Color:** `text-light` (`#FFFFFF`) at 8% opacity (very faint — just visible enough to separate rows on the dark background)
- **Extends:** x: 20 → 373 (within screen margins)

---

### Sample entries to show in the prototype (3–5 entries):

| Entry | Date/time | Type | Intensity |
|---|---|---|---|
| 1 | יום ו׳ · 20.06 · 14:32 | צליל | חזק |
| 2 | יום ה׳ · 19.06 · 09:15 | ויזואלי | בינוני |
| 3 | יום ג׳ · 17.06 · 21:44 | זיכרון / מחשבה | — |
| 4 | יום ב׳ · 16.06 · 08:03 | תחושה גופנית | קל |
| 5 | יום ו׳ · 13.06 · 17:20 | אחר / לא יודע | בינוני |

---

### "שתף עם המטפל" Button

- **Text:** "שתף עם המטפל"
- **Style:** `button-label` (17 pt, SemiBold), color `text-light`
- **Fill:** transparent (outlined style — this is a secondary action on this screen)
- **Border:** 1.5 px `text-light` (`#FFFFFF`)
- **Width:** 353 px (x: 20 → 373)
- **Height:** 56 px
- **Corner radius:** 16 px
- **Position:** Top edge at y = 742 px (above bottom nav which starts at y=780, with 20 px gap below button)
- **Bottom edge:** y = 798 px — 18 px above bottom nav

**Button states:**
- Default: as above (outlined, white border, no fill)
- Pressed: fill `text-light` at 15% opacity, border remains

**Action:** Navigates to Report Preview screen (Screen 5)

---

### Bottom Navigation Bar

Same as Screen 2, but with the **History icon in active state** (`deep-blue-action`) and Settings icon in inactive state.

- Position: y: 780 → 852, same layout as Log screen
- History icon: `deep-blue-action` (`#2C4E8A`) — active
- Settings icon: `text-muted` (`#7A8499`) — inactive

---

## Screen 5 — Report Preview

### Purpose

A structured preview of the logged trigger data, formatted to be shared with a therapist. The user reviews this before sending. The visual style shifts to something more professional and legible — but still references the sky/constellation metaphor through the chart aesthetics.

### Metaphor note

Data is shown as constellations — dots connected by lines, not solid filled bars or pie charts. The idea: data points are like stars; patterns only become visible when you connect them and step back.

---

### Background

- **Fill:** `warm-white` (`#F5EDD8`)
- **Full canvas:** 393 × 852 px

---

### Back Navigation (top right — RTL)

- Same style as History screen: right-facing arrow (→), `text-dark` color, 24 × 24 px, top-right at x=353, y=78

---

### Header

- **Text:** "סיכום עבור המטפל"
- **Style:** `heading-1` (28 pt, Bold)
- **Color:** `text-dark` (`#1C2333`)
- **Alignment:** Right-aligned
- **Right margin:** 20 px
- **Position:** Top of text at y = 75 px

---

### Date Range Label

- **Text:** "חודש אחרון" (or "01.06–20.06.2026")
- **Style:** `caption` (14 pt, Regular)
- **Color:** `text-muted` (`#7A8499`)
- **Alignment:** Right-aligned
- **Position:** Top of text at y = 115 px (4 px below header bottom at ~111 px)

---

### Section 1 — Time-of-Day Heatmap

#### Section Label
- **Text:** "שעות פגיעה" (Hours of impact)
- **Style:** `heading-2` (22 pt, SemiBold)
- **Color:** `text-dark`
- **Alignment:** Right-aligned
- **Position:** Top of label at y = 143 px (16 px below date range bottom at ~127 px)

#### Chart Frame
- **Position:** Top of chart at y = 177 px (12 px below section label bottom at ~165 px)
- **Width:** 353 px (x: 20 → 373)
- **Height:** 72 px
- **Background:** `sky-blue-light` (`#D4E8F5`) at 40% opacity
- **Corner radius:** 12 px

#### Chart Content (Heatmap)
- Divide the 353 px width into 24 equal columns representing hours 0–23 (each ~14.7 px wide)
- Each column's fill opacity indicates trigger density at that hour
  - No triggers: `sky-blue-mid` at 10% opacity
  - 1 trigger: `deep-blue-action` at 25% opacity
  - 2 triggers: `deep-blue-action` at 50% opacity
  - 3+ triggers: `deep-blue-action` at 85% opacity
- Column height: 72 px (full chart height)
- **Labels below chart:** Show "00:00" at left and "23:00" at right edge — `caption` style, `text-muted` color, top of labels at y = 253 px (4 px below chart bottom)
- No x-axis line needed — background opacity change is sufficient

> In Figma: create this as a static mockup. Show some hours (e.g., 8am, 13:00, 19:00, 22:00) as darker columns to make the chart readable. This is illustrative data, not live.

---

### Section 2 — Trigger Type Breakdown

#### Section Label
- **Text:** "סוגי טריגרים"
- **Style:** `heading-2` (22 pt, SemiBold)
- **Color:** `text-dark`
- **Alignment:** Right-aligned
- **Position:** Top of label at y = 277 px (12 px below heatmap labels at ~265 px)

#### Chart Frame
- **Position:** Top of chart at y = 311 px
- **Width:** 353 px
- **Height:** 160 px
- **Background:** `warm-white` (same as screen — no visible frame needed; the chart elements create visual boundary)

#### Chart Content (Donut / Constellation style)

**Donut chart:**
- Center: x = 196.5 px, y = 391 px (center of chart frame)
- Outer radius: 60 px
- Inner radius: 38 px (donut hole)
- Each of the 7 trigger types is one slice

**Slice colors (use the global palette creatively):**
| Trigger type | Color |
|---|---|
| צליל | `deep-blue-action` (`#2C4E8A`) |
| ויזואלי | `sky-blue-mid` (`#B8C9E0`) |
| המון אנשים / מרחב | `star-blue` (`#8B9DC3`) |
| ריח | `lavender` (`#E8D5F0`) |
| זיכרון / מחשבה | `#6B7FAA` (mid-tone blue-grey — interpolate between `star-blue` and `night-sky`) |
| תחושה גופנית | `#A0B4D0` (light blue-grey — between `sky-blue-mid` and `star-blue`) |
| אחר / לא יודע | `sky-blue-light` (`#D4E8F5`) with `sky-blue-mid` border |

- **Slice gap:** 2 px between slices (give each segment a white border of 2 px for separation)
- **Legend:** A small legend to the right of the donut — `caption` size, right-to-left, each color swatch 10 × 10 px followed by label text

> Constellation touch: place 2–3 small `star-blue` dots (3 px each) at the corners of the chart area, connected by very faint lines (0.5 px, `star-blue` at 20% opacity) to hint at the constellation metaphor without cluttering the clinical readability.

---

### Section 3 — Intensity Trend Line

#### Section Label
- **Text:** "עצמה לאורך הזמן"
- **Style:** `heading-2` (22 pt, SemiBold)
- **Color:** `text-dark`
- **Alignment:** Right-aligned
- **Position:** Top of label at y = 487 px (16 px below donut chart bottom at ~471 px)

#### Chart Frame
- **Position:** Top of chart at y = 521 px
- **Width:** 353 px
- **Height:** 100 px
- **Background:** none (transparent — use axis lines for visual boundary)

#### Chart Content (Line Chart — constellation style)

- **X axis:** 4 weekly points (ש׳1, ש׳2, ש׳3, ש׳4 — weeks). X axis line: 1 px `divider` at y = 621 px (bottom of chart frame).
- **Y axis:** implied by 3 horizontal reference lines at heights for קל / בינוני / חזק — each a 0.5 px dashed line, `divider` color at 50% opacity
- **3 data lines:**
  - קל (mild): `sky-blue-mid` (`#B8C9E0`), 1.5 px line
  - בינוני (moderate): `star-blue` (`#8B9DC3`), 1.5 px line
  - חזק (severe): `deep-blue-action` (`#2C4E8A`), 2 px line
- **Data points:** At each weekly x-position, draw a filled circle 5 × 5 px in the matching line color
- **Legend:** Below chart, same structure as donut legend — 3 color swatches with labels at `caption` size

> This is a static mockup — draw illustrative data showing mild trending down slightly, severe staying low, moderate fluctuating. The trend should look like things are improving (appropriate for the design context).

---

### "שלח דוח" Button

- **Text:** "שלח דוח"
- **Style:** `button-label` (17 pt, SemiBold), color `text-light`
- **Fill:** `deep-blue-action` (`#2C4E8A`)
- **Width:** 353 px (x: 20 → 373)
- **Height:** 56 px
- **Corner radius:** 16 px
- **Position:** Top edge at y = 762 px (above bottom safe area, 20 px from the screen bottom safe area boundary at y=818)
- Wait — recalculate: bottom safe area ends at y=818. Place button bottom at y = 796 px. Top at y = 740 px.

**Corrected position:**
- **Top edge:** y = 740 px
- **Bottom edge:** y = 796 px

**Button states:**
- Default: as above
- Pressed: fill `#1E3D6E`

**Action:** Opens system share sheet (no dedicated TriggerLog screen — this is a native iOS share sheet)

---

### Full Layout Summary (Screen 5)

| Element | Top y | Bottom y |
|---|---|---|
| Header | 75 | 111 |
| Date range | 115 | 127 |
| "שעות פגיעה" label | 143 | 165 |
| Heatmap chart | 177 | 249 |
| Heatmap x-axis labels | 253 | 265 |
| "סוגי טריגרים" label | 277 | 299 |
| Donut chart area | 311 | 471 |
| "עצמה לאורך הזמן" label | 487 | 509 |
| Line chart | 521 | 631 |
| (whitespace) | 631 | 740 |
| "שלח דוח" button | 740 | 796 |

---

## Screen 6 — Settings

### Purpose

Simple, trust-building settings screen. Only two toggles — both directly connected to the user's sense of safety and control. The destructive action (delete all data) is present but requires deliberate effort. Nothing should feel surveillance-like or invasive.

---

### Background

- **Fill:** `sky-blue-light` (`#D4E8F5`)
- **Full canvas:** 393 × 852 px

---

### Back Navigation (top right — RTL)

- Right-facing arrow (→), `text-dark`, 24 × 24 px, x center = 353 px, y center = 78 px, hit area 44 × 44 px
- Action: Returns to Log screen

---

### Header

- **Text:** "הגדרות"
- **Style:** `heading-1` (28 pt, Bold)
- **Color:** `text-dark` (`#1C2333`)
- **Alignment:** Right-aligned
- **Right margin:** 20 px
- **Position:** Top at y = 75 px

---

### Settings Content Area

The settings list uses a card-based group layout — each section group is a rounded card.

**Card style:**
- **Fill:** `warm-white` (`#F5EDD8`)
- **Corner radius:** 16 px
- **Width:** 353 px (x: 20 → 373)
- **No border** (the card sits on the `sky-blue-light` background and separates naturally)
- **Shadow:** Drop shadow x=0, y=1, blur=4, spread=0, `#000000` at 8% (very subtle)

---

### Section 1 Card — "פרטיות ונתונים"

**Section Header (above card):**
- **Text:** "פרטיות ונתונים"
- **Style:** `section-header` (12 pt, SemiBold, uppercase or small caps treatment)
- **Color:** `text-muted` (`#7A8499`)
- **Alignment:** Right-aligned
- **Right margin:** 20 px
- **Position:** Top at y = 127 px (16 px below header bottom at ~111 px)
- **Bottom of label:** y ≈ 143 px

**Card top edge:** y = 151 px (8 px below section header)

**Toggle Row 1 — "שמור מיקום בעת תיעוד"**

- **Row height:** 60 px
- **Top edge within card:** card top + 0 px (first row starts at card top)
- **Right padding:** 20 px (label starts from right)
- **Left padding:** 20 px

Layout (RTL — right to left within row):
- **Label:** "שמור מיקום בעת תיעוד" — right-aligned, `body` (17 pt, Regular), `text-dark`, right edge at x=353
- **Toggle switch:** Left side of row, left edge at x=20, vertically centered in row
  - Toggle size: 51 × 31 px (standard iOS toggle)
  - Default state: OFF — thumb on right side, track color `sky-blue-mid` at 30%
  - Selected state: ON — thumb on left side, track color `deep-blue-action`

**Row separator:**
- 1 px line, color `divider` (`#D0D8E4`), extending from x=20 to x=373, at bottom of Row 1

**Toggle Row 2 — "הפעל התראות"**

- **Row height:** 76 px (taller to accommodate sub-label)
- Layout (RTL):
  - **Primary label:** "הפעל התראות" — right edge at x=353, `body` (17 pt, Regular), `text-dark`
  - **Sub-label (below primary):** "כבוי כברירת מחדל — התראות עלולות להיות טריגרים" — `caption` (14 pt, Regular), `text-muted`, right-aligned, 4 px below primary label
  - **Toggle switch:** Left side, x=20, vertically centered in row
  - Default state: OFF

**Card 1 total height:** 60 + 1 (divider) + 76 = 137 px
**Card 1 bottom edge:** y = 151 + 137 = 288 px

---

### Section 2 Card — "הנתונים שלך"

**Section Header (above card):**
- **Text:** "הנתונים שלך"
- **Style:** `section-header` (12 pt, SemiBold)
- **Color:** `text-muted`
- **Alignment:** Right-aligned
- **Position:** Top at y = 308 px (20 px below Section 1 card bottom)
- **Bottom:** y ≈ 324 px

**Card top edge:** y = 332 px

**Action Row — "מחק את כל הנתונים"**

- **Row height:** 56 px
- Layout (RTL): text is right-aligned, no toggle
- **Text:** "מחק את כל הנתונים"
- **Style:** `body` (17 pt, Regular)
- **Color:** `destructive` (`#E05252`)
- **Alignment:** Right-aligned, right edge at x=353
- **No icon needed** — the red text alone signals destructiveness
- **Hit area:** Full 353 × 56 px row area

**Action:** Tapping opens a native iOS confirmation alert (not a custom screen):
> "האם אתה בטוח? פעולה זו מוחקת את כל הנתונים לצמיתות ואינה ניתנת לביטול."
> Buttons: "מחק" (destructive red) | "ביטול" (default)

**Card 2 height:** 56 px
**Card 2 bottom edge:** y = 332 + 56 = 388 px

---

### Notes on RTL Toggle Rows

In standard iOS, toggle switches are on the **right** side. But in Hebrew RTL apps, the label is the primary content and sits on the right side — so the toggle must move to the **left** to avoid being hidden behind the label in RTL auto-layout. This is consistent with Apple's native RTL guidelines for Settings.

---

### Full Layout Summary (Screen 6)

| Element | Top y | Bottom y |
|---|---|---|
| Back arrow | (hit area: 56–100) | — |
| "הגדרות" header | 75 | 111 |
| "פרטיות ונתונים" section header | 127 | 143 |
| Settings card 1 | 151 | 288 |
| — Toggle row 1 | 151 | 211 |
| — Toggle row 2 | 212 | 288 |
| "הנתונים שלך" section header | 308 | 324 |
| Settings card 2 | 332 | 388 |
| — Delete action row | 332 | 388 |

---

## Screen 7 — About

### Purpose

Provides the app description, clinical disclaimer, and project credits. Accessed rarely — via the About action (if an About icon is added to the Log screen's top area, or accessed through Settings). Should feel calm, warm, and proud — not defensive or boilerplate.

### Note on navigation access

The task-E brief navigation table lists "Log → Tap Info icon → About" as a route. This means the Log screen needs a third icon in its header or bottom nav for the About screen. Since the bottom nav only has 2 icons in the current spec, add a small info icon (ℹ) in the **top-left corner of the Log screen header** area (not in the bottom nav bar).

**Info icon on Log screen:**
- Icon: ℹ (information)
- Size: 20 × 20 px visual, 44 × 44 px hit area
- Position: center x = 40 px from left, center y = 89 px (vertically aligned with the "מה קרה?" header text)
- Color: `text-dark` at 50% opacity (secondary — not prominent)

---

### Background

- **Fill:** `warm-white` (`#F5EDD8`)
- **Full canvas:** 393 × 852 px

---

### Back Navigation (top right — RTL)

- Right-facing arrow (→), `text-dark`, 24 × 24 px, x=353, y=78, hit area 44 × 44 px
- Action: Returns to Log screen

---

### Header

- **Text:** "על האפליקציה"
- **Style:** `heading-1` (28 pt, Bold)
- **Color:** `text-dark` (`#1C2333`)
- **Alignment:** Right-aligned
- **Right margin:** 20 px
- **Position:** Top at y = 75 px

---

### App Description Block

- **Position:** Top at y = 135 px (24 px below header bottom at ~111 px)
- **Width:** 353 px (x: 20 → 373)
- **3 lines of Hebrew text, each as a separate paragraph:**

**Line 1:**
> "Trigger Log היא אפליקציה לתיעוד טריגרים רגשיים עבור אנשים שחוו טראומה."
- **Style:** `body` (17 pt, Regular), `text-dark`, right-aligned

**Line 2:** (16 px below Line 1 bottom)
> "תוכנן כדי לעבוד בפחות מ-10 שניות — ברגע שהטריגר עבר."
- Same style

**Line 3:** (16 px below Line 2 bottom)
> "האפליקציה אינה מחליפה טיפול מקצועי."
- Same style
- **This line is visually distinct:** Color `text-muted` (`#7A8499`) to signal it's a disclaimer rather than the main description — it should be readable but not prominent

**Estimated block height:** 3 × 26 pt (line height) + 2 × 16 px (gaps) = 78 + 32 = ~110 px  
**Block bottom:** y ≈ 245 px

---

### Divider

- 1 px horizontal line, `divider` color (`#D0D8E4`)
- Width: 353 px (x: 20 → 373)
- Position: y = 265 px (20 px below description block bottom)

---

### Credits Block

- **Position:** Top at y = 285 px (20 px below divider)
- **Width:** 353 px

**Credits Line 1 — Course:**
> "נבנה במסגרת קורס עיצוב ממשקי משתמש, מכללת אפקה, 2026"
- **Style:** `caption` (14 pt, Regular)
- **Color:** `text-muted` (`#7A8499`)
- **Alignment:** Right-aligned

**Credits Line 2 — Names:** (10 px below Line 1 bottom)
> "תמר אלוני + אופיר [שם משפחה]"
- **Style:** `caption` (14 pt, Regular)
- **Color:** `text-muted` (`#7A8499`)
- **Alignment:** Right-aligned

**Credits block estimated bottom:** y ≈ 337 px

---

### Logo

- **Element:** App icon / cloud+star logo (same as Splash screen logo, or Afeka College logo)
- **Width:** 56 px
- **Height:** 42 px (maintain aspect ratio)
- **Position:** Horizontally centered, x center = 196.5 px. Top edge at y = 369 px (32 px below credits block bottom at ~337 px)
- **Opacity:** 60% (subtle, not prominent)

---

### Full Layout Summary (Screen 7)

| Element | Top y | Bottom y |
|---|---|---|
| "על האפליקציה" header | 75 | 111 |
| Description block (3 paragraphs) | 135 | 245 |
| Divider | 265 | 266 |
| Credits block | 285 | 337 |
| Logo | 369 | 411 |

---

## Navigation Summary

This table defines every possible navigation in the prototype. Build these connections in Figma's prototype mode.

| From | User action | To | Transition |
|---|---|---|---|
| Splash | Auto-advance after 1.5 seconds | Log | Dissolve, 300ms |
| Log | Tap History icon (bottom nav, right side) | Safety Gate | Fade overlay in, 200ms |
| Log | Tap Settings icon (bottom nav, left side) | Settings | Slide up, 300ms |
| Log | Tap Info icon (top-left ℹ) | About | Slide up, 300ms |
| Log | Tap "תיעוד" button | Log (confirmation state) | Instant / Smart Animate |
| Log (confirmation state) | Auto after 1.5 seconds | Log (default state) | Smart Animate, 300ms |
| Safety Gate | Tap "אני מוכן/ה" | History | Overlay dismiss + Navigate, 300ms |
| Safety Gate | Tap "לא עכשיו" | Log | Overlay dismiss, 200ms |
| History | Tap "שתף עם המטפל" | Report Preview | Slide left (push), 300ms |
| History | Tap back arrow (→) | Log | Slide right (pop), 300ms |
| Report Preview | Tap "שלח דוח" | System share sheet | Native iOS sheet, instant |
| Report Preview | Tap back arrow (→) | History | Slide right (pop), 300ms |
| Settings | Tap back arrow (→) | Log | Slide right (pop), 300ms |
| About | Tap back arrow (→) | Log | Slide right (pop), 300ms |

---

## Figma Setup Checklist

Before building screens, set this up in Figma:

1. **Create a new Figma file** named "TriggerLog — Prototype"
2. **Set the frame size** for every screen: 393 × 852 px (iPhone 16 Pro)
3. **Import font:** Assistant (via Google Fonts plugin or manually — ensure Hebrew character support is loaded)
4. **Create color styles** for all 12 tokens in the color palette above (Figma Design → Local Styles → + Color)
5. **Create text styles** for all 8 typography tokens (Figma Design → Local Styles → + Text)
6. **Build component library first:**
   - Trigger type chip (with Default and Selected variants)
   - Intensity button (Default and Selected)
   - Bottom nav bar (with active History and active Settings variants)
   - List row item (History)
   - Settings toggle row (with toggle On/Off variants)
7. **Set all text layers to RTL direction** (select text layer → in Design panel → text direction RTL)
8. **Build prototype connections** after all screens are complete (use the navigation table above)

---

*Document version: 1.0 — June 2026*  
*Prepared for Figma prototype build — TriggerLog, Afeka College UIX Final Project*
