# TriggerLog — Complete Visual Redesign Spec
**Date:** 2026-06-22 (updated after instructor meeting)
**Approach:** Vitality Path-inspired redesign + instructor feedback
**Language:** Hebrew (RTL) throughout — English = -25 pts penalty
**Scope:** 8 screens total (Splash, Onboarding, Main, Cause Selection, Safety Gate modal, History, Report Preview, Settings)

---

## Decision Summary

Full visual and structural overhaul based on two inputs:
1. **Vitality Path** screenshots — visual style reference (teal/mint palette, white cards, card-based layouts, bottom nav)
2. **Instructor meeting** — new logging flow (Shazam-style button), new metaphor (whack-a-mole), export in Settings

### Key decisions
- Metaphor: **Whack-a-mole** — triggers pop up unexpectedly, you log them (whack them) quickly, move on. Conceptual metaphor — the app doesn't look like a game, but the feeling maps directly. Academically grounded: Pollmann (2024) shows consistent quick-logging reduces intrusion symptoms, matching the "fast tap and done" mechanic.
- Main interaction: **Shazam-style big button** — one tap logs time + location automatically. Cause is optional, selected on a second screen.
- Navigation: **3-tab bottom nav** — בית · היסטוריה · הגדרות
- Export to therapist: **lives in Settings**, bypasses History gate entirely

---

## Design System

### Color Tokens

| Token | Value | Usage |
|---|---|---|
| `--teal-primary` | `#3DBFAA` | CTAs, active states, big button |
| `--teal-dark` | `#2D9B8A` | Pressed states |
| `--teal-light` | `#E0F5F1` | Background gradient end, card accents |
| `--bg-screen` | `#F0FAF8` | All screen backgrounds |
| `--card-surface` | `#FFFFFF` | All card surfaces |
| `--accent-green` | `#7BC67A` | Success, confirmation flash |
| `--text-dark` | `#1A2B2B` | Headings, primary text |
| `--text-muted` | `#6B8585` | Labels, captions, placeholders |
| `--divider` | `#E0EFED` | Card separators, borders |
| `--destructive` | `#E05252` | Delete/danger only |
| `--shadow-card` | `0 2px 12px rgba(0,0,0,0.07)` | Card elevation |
| `--shadow-btn` | `0 4px 16px rgba(61,191,170,0.30)` | Teal button glow |

### Typography

Font: **Assistant** (Hebrew-compatible).

| Style | Size | Weight | Usage |
|---|---|---|---|
| heading-1 | 28px | 800 | Screen titles |
| heading-2 | 22px | 700 | Section headers |
| heading-3 | 18px | 600 | Card titles |
| body | 16px | 400 | Body text, descriptions |
| label | 12px | 600 | Uppercase section labels (letter-spacing: 0.6px) |
| caption | 14px | 400 | Timestamps, metadata |

### Navigation

3-tab bottom nav.

| Tab | Hebrew label | Icon | Screen |
|---|---|---|---|
| 1 | בית | home | Main (big button) |
| 2 | היסטוריה | calendar | History (behind Safety Gate) |
| 3 | הגדרות | settings | Settings (includes export) |

Active tab: teal icon + teal label. Inactive: muted icon + muted label.
Splash and Onboarding: no bottom nav.
Safety Gate: modal overlay — does not change active tab.

### Metaphor — Whack-a-Mole

**Conceptual, not literal.** The app doesn't look like a game.

- **Trigger moment** = a mole popping up unexpectedly. You didn't choose it.
- **Tapping the big button** = whacking it. Quick, decisive, done.
- **Cause selection** = optional extra info about which mole it was.
- **History** = the record of every mole you've whacked.
- **Report** = the pattern of which holes moles keep coming from.

**Presentation slide 12:**
- Image: a whack-a-mole arcade game (top-down or angle shot)
- Color palette: derived from the image (earthy greens + teal accent — aligns with our teal palette)
- Explanation: "טריגרים מופיעים פתאום, כמו חפרפרת שצצה — לא תכננת אותם ולא יכולת להתכונן. הקשה על הכפתור היא הפעולה הפשוטה של להכיר בכך שזה קרה. עם הזמן, ההיסטוריה מראה מאיזה 'חורים' החפרפרות מגיעות הכי הרבה — הדפוסים שלך."

---

## Screen Inventory

### Screen 1 — Splash

**Route:** entry point → auto-advances to Onboarding after 1.5s

**Layout:**
- Background: linear gradient `#F0FAF8` → `#C8EDE7`
- Center column: logo → app name → tagline → version
- Logo: new SVG (abstract mole-hole or simple circle-burst, teal + accent-green)
- App name: "TriggerLog" LTR, 32px, weight 700
- Tagline: "רק להכיר בכך שזה קרה" RTL, 16px, muted
- Version: "v1.0.0" at bottom, 12px, muted
- Entrance animations: fadeIn logo, slideUp name + tagline staggered

---

### Screen 2 — Onboarding (new)

**Route:** after Splash → Log (Main). Has "דלג" (skip) → goes directly to Main.

**Layout:**
- Same gradient background
- Top right: "דלג" text button → Main
- Center logo (64px)
- Headline (28px, weight 800, RTL):
  `"הטריגרים שלך מופיעים פתאום."`
  `"עכשיו אתה מתעד אותם."` — "מתעד" in `--teal-primary`
- Subtitle (16px, muted, RTL): "הקשה אחת שומרת את המיקום, השעה, והסיבה. בלי לכתוב. בלי מאמץ."
- Single dot indicator (teal)
- Primary CTA: **"בוא נתחיל ←"** → Main
- Text link: "כבר השתמשתי באפליקציה" → Main

---

### Screen 3 — Main (Big Button)

**Route:** tab 1 (בית). The home screen.

**Layout:**
- Background: `--bg-screen`
- Status bar (44px)
- Header: app name "TriggerLog" centered, small (18px, weight 600)
- Center of screen: **large circular button**
  - Diameter: ~180px
  - Background: `--teal-primary`, radial glow effect
  - Inner icon: lightning bolt or fist SVG (teal-white), 48px
  - Label below button: "הקש לתיעוד" (caption, muted)
  - Tap interaction: button scales down (0.93) on press, scales back up with a ripple ring animation, then screen navigates to Cause Selection
- Below button (subtle, muted): last log timestamp — "תיעוד אחרון: היום, 09:14" or "עדיין לא תיעדת היום"
- On tap: captures current time + location silently in background

**No chip grid. No intensity selector. No notes field on this screen.**

---

### Screen 4 — Cause Selection (new)

**Route:** appears after tapping the big button. Has "דלג" (skip) → triggers confirmation flash + back to Main.

**Layout:**
- Background: `--bg-screen`
- Header row: "מה גרם לטריגר?" (heading-1, RTL) + "דלג" text button on left (inline-end in RTL)
- Subtitle (body, muted): "לא חייב/ת לדעת. אפשר לדלג."
- Section label: "נפוצים" (uppercase label)
- **Cause cards grid** (2 columns, RTL):
  Each card: white surface, shadow, icon (emoji or SVG), Hebrew label
  Most common shown first (initially research-based; over time, personalized per user)

**Preliminary cause list** (to be finalized after research):
Icons: SVG only — use Lucide React icons or custom inline SVGs. No emojis.

| id | Hebrew label | Lucide icon name |
|---|---|---|
| dog_bark | נביחת כלב | `volume-2` (sound wave) |
| fireworks | זיקוקים / פיצוצים | `sparkles` |
| car_horn | צפירת רכב | `car` |
| siren | אמבולנס / משטרה | `siren` or `bell-ring` |
| crowd | עומס / המון אנשים | `users` |
| dream | חלום / סיוט | `moon` |
| smell_smoke | ריח עשן / שריפה | `flame` |
| touch | מגע לא צפוי | `hand` |
| loud_voice | צעקה / קול רם | `megaphone` |
| news | חדשות / מדיה | `newspaper` |
| date | תאריך / יום שנה | `calendar` |
| unknown | לא יודע / אחר | `circle-help` |

Each icon: 28px, colored per category (teal for most, muted gray for unknown). White card background.

- Section label below grid: "הוסף חדש" — text input to type a custom cause, adds it to personal list

- After selecting a cause (or tapping "דלג"):
  → Brief "נשמר ✓" overlay flash (teal, centered, 1s)
  → Auto-returns to Main screen
  → Last log timestamp on Main updates

---

### Screen 5 — Safety Gate (modal overlay)

**Route:** overlay triggered when user navigates to History tab (tab 2). Not triggered when accessing export from Settings.

**Layout:**
- Background: semi-transparent scrim `rgba(0,0,0,0.45)`
- White card modal, centered, radius 24px
- Small icon at top (teal, 32px) — abstract mole-hole circle or neutral symbol
- Title (heading-2, RTL): "לפני שממשיכים"
- Body (body, muted, RTL): "אזור ההיסטוריה מציג את כל הטריגרים שתיעדת. אם אינך מוכן/ה לראות אותם כרגע, אפשר לחזור מאוחר יותר."
- Primary button: "אני מוכן/ה" (teal, full-width) → History
- Text link: "לא עכשיו" (muted) → dismisses modal, stays on Main

---

### Screen 6 — History

**Route:** tab 2 (היסטוריה), reached after Safety Gate confirmation.
**Inspiration:** Vitality Path "Symptom History" (frame 884)

**Layout:**
- Background: `--bg-screen`
- Status bar (44px)
- Header: "היסטוריה" (heading-1) + calendar icon (inline-start in RTL = right side)
- **Weekly/Monthly tab toggle**: two pills, teal active
- **7-day calendar strip**: Hebrew abbreviated weekdays — א׳ ב׳ ג׳ ד׳ ה׳ ו׳ ש׳ (RTL: שבת on the right, ראשון on the left). Today circled teal. Tap a day to filter.
- Section label: "סנן לפי סיבה"
- **Filter chips**: "הכל" (teal active) + one chip per cause type. Horizontal scroll.
- **Frequency Trends card** (white, shadow):
  - Title: "מגמת תדירות" + "+/-X% לעומת שבוע שעבר" badge
  - Line chart: teal line, days on X-axis, count on Y-axis. Tooltip on press.
- **Highlights row** (2 mini-cards):
  - "X ימים · מאז הטריגר האחרון"
  - "הסיבה הנפוצה · [cause]"
- **Entry list** (scrollable):
  Each row: cause icon + Hebrew label + timestamp + location (if captured). Teal dot on the right (inline-start in RTL).

---

### Screen 7 — Report Preview

**Route:** reached from Settings → "שתף עם המטפל". NOT a tab. No Safety Gate required.
**Inspiration:** Vitality Path "Export Report" (frame 2532)

**Layout:**
- Background: `--bg-screen`
- Back button (← inline-start = right in RTL) + Header: "הכן לפגישה" (heading-1)
- Subtitle (muted): "סיכום מקיף של הטריגרים שלך לסקירה קלינית."
- **PDF preview card** (white, shadow, slight rotation 1°):
  - "PDF READY" badge (teal pill)
  - Illustrated document lines (CSS-only)
  - Date range: "1 יוני – 22 יוני, 2026"
- "תצוגה מקדימה ▶" text link
- Section label: "סעיפים כלולים"
- **Checklist** (3 white cards, teal checkmark):
  - יומן טריגרים — תאריך, שעה, מיקום, סיבה ✓
  - עמידה בתיעוד — ימים פעילים ✓
  - ניתוח מגמות — שינויים לאורך זמן ✓
- Primary CTA: "הורד דוח PDF ↓" (teal, full-width)
- Text link: "שתף עם המטפל" (muted)

---

### Screen 8 — Settings (includes export + About)

**Route:** tab 3 (הגדרות)

**Layout:**
- Background: `--bg-screen`
- Status bar (44px)
- Header: "הגדרות" (heading-1)
- **Section: "שיתוף עם המטפל"** (white card):
  - Row: "שתף עם המטפל" → navigates to Report Preview ← **main export entry point**
- **Section: "העדפות"** (white card):
  - Row: "שיתוף מיקום אוטומטי" + toggle (teal when on)
  - Row: "תזכורות יומיות" + toggle
- **Section: "נתונים"** (white card):
  - Row: "מחק את כל הנתונים" (destructive red text)
- **Section: "אודות"** (white card):
  - Row: "על האפליקציה" → expand inline
  - Row: "כתב ויתור קליני" → expand inline
  - Row: "גרסה v1.0.0" (static, no chevron)

---

## Navigation & Flow

### Primary use-case flow (רוני on the train)
Splash → Onboarding → Main → tap big button → [location + time auto-captured] → Cause Selection → select "צפירת רכב" → "נשמר ✓" flash → back to Main

### Secondary use-case flow (before therapy, skip history)
Main → tab: הגדרות → "שתף עם המטפל" → Report Preview → "הורד דוח PDF"

### Secondary use-case flow (browse history)
Main → tab: היסטוריה → Safety Gate → "אני מוכן/ה" → History

### Skip/escape paths
- Onboarding: "דלג" → Main
- Cause Selection: "דלג" → confirmation flash → Main
- Safety Gate: "לא עכשיו" → stays on Main

---

## Component Checklist

| Component | Status | Notes |
|---|---|---|
| `AppLogo` (new SVG) | replace | Circle-burst or abstract mole-hole, teal |
| `BigButton` | new | 180px circle, ripple animation, teal glow |
| `CauseCard` | new | 2-col grid card, icon + label, white surface |
| `CauseInput` | new | Text input to add custom cause |
| `ConfirmationFlash` | new | Centered overlay, "נשמר ✓", 1s auto-dismiss |
| `BottomNav` (3-tab) | replace | Active teal highlight, 3 tabs |
| `WeekCalendarStrip` | new | Hebrew weekdays RTL, teal circle for today |
| `LineChart` | new | Simple SVG, teal line, day labels |
| `HighlightCard` | new | Mini stat card, icon + number + label |
| `FilterChip` | new | Smaller than current chip, horizontal scroll |
| `ChecklistItem` | new | Teal check icon + label + description |
| `SafetyGate` | replace | Softer copy, neutral icon, no red |
| `SettingsRow` | replace | New palette, teal toggle |
| `Toggle` | replace | Teal when on (same logic, new color) |
| `TriggerCard` (old) | remove | Replaced by BigButton + CauseCard |
| `SeveritySlider` (old) | remove | Not in new flow |
| `ChipRow` (old) | remove | Replaced by CauseCard grid |

---

## Presentation Updates Required (slide 12)

- **Metaphor image:** whack-a-mole arcade game photo
- **Color palette:** derived from that image (earthy greens align with teal palette)
- **Metaphor explanation (Hebrew):** "טריגרים מופיעים פתאום, כמו חפרפרת שצצה — לא תכננת אותם ולא יכולת להתכונן. הקשה על הכפתור היא הפעולה הפשוטה של להכיר בכך שזה קרה. עם הזמן, ההיסטוריה מראה מאיזה 'חורים' החפרפרות מגיחות הכי הרבה — הדפוסים שלך."
- **Flow diagram:** update to 8 screens, 3-tab nav, add Cause Selection screen
