# Task E Brief: 7-Screen Figma Design Brief

## Your goal
Write a complete, detailed design brief for each of the 7 TriggerLog screens so that a designer (Tamar or Offir) can open Figma, read this document, and build each screen without asking questions.

## Output file
Write your complete deliverable to:
`/Users/tamaraloni/Desktop/Study/YearC/SemesterB/UIDesign/TriggerLog/docs/deliverables/task-E-figma-brief.md`

## Source documents to read
Read all of these before writing anything:
1. `/Users/tamaraloni/Desktop/Study/YearC/SemesterB/UIDesign/TriggerLog/docs/מסמך אפיון — TriggerLog.md` — full project spec (Sections 15–19 are most relevant: Metaphor, App Structure, Data Fields, Flow Diagram, Prototype Scope)
2. `/Users/tamaraloni/Desktop/Study/YearC/SemesterB/UIDesign/TriggerLog/docs/Trigger Log Design.md` — if this file exists, read it for any existing design decisions

## Project frame: iPhone 16 Pro
- Canvas size: 393 × 852 px
- Safe area top: 59px (dynamic island / status bar)
- Safe area bottom: 34px (home indicator)
- Usable area: 393 × 759 px

## Global design system (applies to ALL screens)
Write this section once at the top of the brief, then reference it per screen.

### Color palette
| Token | Hex | Usage |
|---|---|---|
| sky-blue-light | #D4E8F5 | Log screen background |
| sky-blue-mid | #B8C9E0 | Secondary elements, cards |
| lavender | #E8D5F0 | History accents, selected states |
| warm-white | #F5EDD8 | Cards, text surfaces |
| night-sky | #1A2540 | History screen background |
| star-blue | #8B9DC3 | Stars, subtle accent dots |
| deep-blue-action | #2C4E8A | Primary buttons, interactive elements |
| text-dark | #1C2333 | All body text |
| text-light | #FFFFFF | Text on dark backgrounds |

### Typography (font: Assistant)
| Style | Size | Weight | Usage |
|---|---|---|---|
| Heading 1 | 28pt | Bold | Screen titles |
| Heading 2 | 22pt | SemiBold | Section labels |
| Body | 17pt | Regular | Chip labels, list items |
| Caption | 14pt | Regular | Metadata, timestamps |
| App name | 32pt | SemiBold | Splash only |
| Tagline | 16pt | Regular | Splash only |

### Spacing system
- Screen margin: 20px on left and right
- Component gap: 16px between major sections
- Chip gap: 8px between chips in a row
- Corner radius: 12px for cards, 20px for chips, 8px for small elements
- Bottom navigation height: 72px (includes home indicator safe area)

### Tap target minimum
- Minimum: 44 × 44 px (Apple HIG)
- Preferred for primary actions: 56px height minimum
- Chips: at least 48px height

### Language direction
- Hebrew text = right-to-left
- Layout mirrors accordingly: primary content right-aligned
- Icons on the LEFT side of text in RTL layout

---

## Screen 1 — Splash

### Purpose
The first thing the user sees. Establishes the sky metaphor and brand identity. Auto-advances to the Log screen after ~1.5 seconds.

### Content
- App name: "Trigger Log" — centered, prominent
- Tagline: "רק לסמן שזה קרה" — below the name
- Logo/icon: a cloud shape with a single star emerging from it — centered above the name
- Background: sky gradient
- 3–4 soft star dots scattered asymmetrically on the background (small, ~4px)

### Layout spec
Write exact pixel positions or relative positioning for:
- Background gradient direction and stops
- Logo/icon size and position (centered, specific px from top)
- App name: font, size, color, position
- Tagline: font, size, color, position below name
- Star dots: approximate positions and sizes

### Animation note
- The screen auto-advances after 1.5 seconds with a soft fade transition (no click required)

---

## Screen 2 — Log (Home)

### Purpose
The primary screen. The user lands here after the splash and returns here after all other actions. The only goal: log a trigger as fast as possible.

### Content
- Header text: "מה קרה?" (large, top)
- 7 trigger type chips in 2 rows:
  - Row 1 (RTL): צליל | ויזואלי | המון אנשים / מרחב
  - Row 2 (RTL): ריח | זיכרון / מחשבה | תחושה גופנית | אחר / לא יודע
- Intensity selector: 3 large buttons: קל | בינוני | חזק
- Quick note: single-line text field, placeholder text "הערה קצרה (לא חובה)"
- Log button: full-width, primary blue (deep-blue-action), text "תיעוד"
- Bottom navigation bar: 2 icons — History (star cluster) + Settings (gear)

### Layout spec
Write pixel-level layout for:
- Header: position, size, color
- Chip section: label above it ("סוג הטריגר"), chip layout (2 rows, RTL), chip sizes and spacing
- Intensity section: label above it ("עצמה"), 3 equal-width buttons with horizontal dividers
- Note field: height, padding, placeholder style
- Log button: height, margin, corner radius, text style
- Bottom nav: height, icon sizes, background color, active/inactive state colors

### States
- Default chip state: white/warm-white fill, sky-blue-mid border, text-dark text
- Selected chip state: deep-blue-action fill, white text, subtle shadow
- Default intensity button: warm-white fill, light border
- Selected intensity: sky-blue-mid fill, text-dark text, visible selection indicator
- Log button default: deep-blue-action background, white text
- Log button confirmation state: green checkmark overlay + "תועד ✓" text for 1.5 seconds

---

## Screen 3 — Safety Gate (Modal)

### Purpose
A modal overlay that appears when the user taps the History icon. Warns them that reviewing trigger history can be emotionally intense, and asks if they're in a safe place. Design must feel caring, not bureaucratic.

### Content
- Background: semi-transparent dark overlay (60% opacity, #000000 or #1A2540)
- Modal card (white, rounded, centered on screen):
  - Text: "צפייה ביומן הטריגרים שלך יכולה לפעמים להיות מציפה. הוא הכי שימושי כשסוקרים אותו יחד עם המטפל. האם אתה/את במקום רגוע ובטוח כרגע?"
  - Button 1 (primary): "אני מוכן/ה" — full-width inside the card, deep-blue-action
  - Button 2 (text-only): "לא עכשיו" — centered below button 1, grey text, no background

### Layout spec
Write layout for:
- Overlay opacity and color
- Modal card: width (85% of screen = ~334px), padding, corner radius, shadow
- Text: size, line-height, color, alignment (centered)
- Button 1: height, corner radius, margin from text
- Button 2: font size, color, padding from button 1

---

## Screen 4 — History

### Purpose
A reverse-chronological list of all logged trigger entries. Visual metaphor: night sky with each entry as a glowing star dot. Dark background. Must feel calm, not clinical.

### Content
- Background: night-sky (#1A2540) — the screen becomes the night sky
- Header: "היסטוריה" — light text
- Each list entry:
  - Left: small glowing star dot (star-blue #8B9DC3, ~8px, with subtle glow)
  - Right (RTL order): date + time | trigger type chip (small) | intensity chip (small)
  - Separator: very faint horizontal line between entries
- "שתף עם המטפל" button: bottom of screen, white outline style (not filled), full-width minus margins
- Back arrow (top left): returns to Log screen

### Layout spec
Write layout for:
- Background color
- Header: color, size, top margin
- List item height (48–56px), padding, internal layout (RTL: date left, star right)
- Star dot size, glow effect description (for Figma: outer glow, color, size)
- Chip sizes in list (smaller than main screen — 12pt, compact)
- List separator style
- "שתף עם המטפל" button: position (above bottom nav safe area), style (outlined)
- Back navigation: top-left arrow or text link

---

## Screen 5 — Report Preview

### Purpose
A structured preview of the trigger data formatted for a therapist. Clean, legible, professional. The user reviews this before sharing. Uses constellation-style chart aesthetic.

### Content
- Header: "סיכום עבור המטפל"
- Date range selector or label (e.g., "חודש אחרון")
- Section 1: Time-of-day heatmap — a horizontal bar showing which hours had the most triggers (color density = intensity)
- Section 2: Trigger type donut chart — each of the 7 categories as a slice
- Section 3: Intensity trend line — week-over-week line chart showing mild/moderate/severe counts
- "שלח דוח" button: full-width, primary blue, bottom of screen
- Back arrow (top left): returns to History

### Layout spec
Write layout for:
- Background: warm-white or very light sky-blue (lighter than Log screen)
- Header: size, color
- Each chart section: label, chart height, chart style guidance (use deep-blue and lavender palette for charts)
- Chart visual style: describe the "constellation" aesthetic — dots connected by lines, not solid fills
- "שלח דוח" button: same style as Log button (deep-blue-action, full-width)

---

## Screen 6 — Settings

### Purpose
Simple settings. Nothing complex. The only toggles are the two that affect trust and safety.

### Content
- Header: "הגדרות"
- Section: "פרטיות ונתונים"
  - Toggle 1: "שמור מיקום בעת תיעוד" — off by default
  - Toggle 2: "הפעל התראות" — off by default, sub-label: "כבוי כברירת מחדל — התראות עלולות להיות טריגרים"
- Section: "הנתונים שלך"
  - Action: "מחק את כל הנתונים" — red text, destructive action (no toggle — tap to open confirmation dialog)
- Back arrow (top left): returns to Log screen

### Layout spec
Write layout for:
- Background: warm-white or sky-blue-light
- Section headers: small caps or uppercase, sky-blue-mid color, smaller font (12pt)
- Toggle rows: height, left icon, label, toggle position (right side in LTR but remember RTL — toggle goes LEFT in Hebrew layout)
- Sub-label style: caption size, muted color, below main toggle label
- Destructive action: color (red, #E05252 suggested), weight, padding
- Dividers between rows

---

## Screen 7 — About

### Purpose
Provides clinical disclaimer and project credits. Accessed rarely. Should feel calm, not defensive.

### Content
- Header: "על האפליקציה"
- App description (2–3 sentences in Hebrew):
  - "Trigger Log היא אפליקציה לתיעוד טריגרים רגשיים עבור אנשים שחוו טראומה."
  - "תוכנן כדי לעבוד בפחות מ-10 שניות — ברגע שהטריגר עבר."
  - "האפליקציה אינה מחליפה טיפול מקצועי."
- Credits:
  - "נבנה במסגרת קורס עיצוב ממשקי משתמש, מכללת אפקה, 2026"
  - "תמר אלוני + אופיר [שם משפחה]"
- Small logo (Afeka or app icon) centered below credits
- Back arrow (top left): returns to Log screen

### Layout spec
Write layout for:
- Background: warm-white
- Header: style, margin
- Body text: size, line-height, color, alignment (right-aligned for Hebrew RTL)
- Credits section: separated by light divider, smaller text, muted color
- Logo placement: size, bottom margin

---

## Navigation summary
At the end of the brief, write a navigation summary table:
| From | Action | To |
|------|--------|-----|
| Splash | Auto (1.5s) | Log |
| Log | Tap History icon | Safety Gate |
| Log | Tap Settings icon | Settings |
| Log | Tap Info icon | About |
| Safety Gate | Tap "אני מוכן/ה" | History |
| Safety Gate | Tap "לא עכשיו" | Log |
| History | Tap "שתף עם המטפל" | Report Preview |
| History | Back arrow | Log |
| Report Preview | Tap "שלח דוח" | System share sheet |
| Report Preview | Back arrow | History |
| Settings | Back arrow | Log |
| About | Back arrow | Log |

## Quality bar
- Every layout spec must give numbers (px, pt, or % of screen width) — no vague instructions like "big" or "centered" without measurement
- Every color must reference a token from the global design system
- States (default / selected / active / disabled) must be defined for interactive elements
- RTL layout must be accounted for on every screen
- The safety gate design must feel protective, not like a legal disclaimer
- The History screen night-sky aesthetic must be described clearly enough that a Figma beginner can implement it
