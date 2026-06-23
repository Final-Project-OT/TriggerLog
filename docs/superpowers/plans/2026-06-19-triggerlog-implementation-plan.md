# TriggerLog Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Complete all deliverables for the TriggerLog UI/UX final project — research, prototype, and presentation — by July 10, 2026.

**Architecture:** Sequential: user research first (Week 1), analysis + design second (Week 2), prototype + presentation last (Week 3). Each week produces concrete deliverables that feed the next.

**Deadline:** July 10, 2026 — submit to Moodle before in-class presentation.

---

## Decisions Log

- **Interviews + survey:** Skipped for now. Slide content for Slides 7, 8, 9 written as realistic placeholder data (grounded in research docs). Can be replaced with real data if interviews are conducted.
- **Prototype tool:** Changed from Figma to **code (React/HTML) + Vercel deployment.** Full pixel spec exists in `docs/deliverables/task-E-figma-brief.md`. Output is a web app deployed to a public Vercel URL, which goes on Slide 13.

---

## Deliverables Checklist

- [ ] Project content document (`docs/project-content.md`) — kept up to date throughout

- [~] Qualitative interviews (9–10 people) — **SKIPPED for now**
- [~] Quantitative survey (10 questions, 20+ responses) — **SKIPPED for now**
- [x] 2 personas — done in `docs/deliverables/task-D-slide-content.md`
- [x] 4+ user analysis conclusions — done in `docs/deliverables/task-D-slide-content.md` (Slide 9)
- [x] Metaphor definition — done in `docs/deliverables/task-D-slide-content.md` (Slide 12)
- [ ] Flow diagram (7 screens) — spec done in task-E; diagram image still needed for Slide 12
- [ ] **Web prototype (7 screens, 2 interactive flows) — build with Claude + deploy to Vercel** *(replaces Figma)*
- [ ] Presentation PDF (13 slides, Hebrew)

---

## TASK 0 — מסמך אפיון

**File:** `docs/מסמך אפיון — TriggerLog.md`  
This is your single source of truth — a full standalone specification document covering everything about the project. Fill it in as you go.

- [ ] **Step 1:** Open `docs/מסמך אפיון — TriggerLog.md` — it is pre-filled with everything decided so far
- [ ] **Step 2:** After each completed task (interviews, survey, etc.), fill in the relevant section in this file
- [ ] **Step 3:** Section 19 ("חסרים לפני הגשה") is your running checklist — check items off as you complete them

Sections marked `[ למלא ]` are placeholders waiting for real research data.

---

## WEEK 1 — Research

---

### Task 1: Define Research Goals (Slide 6 content)

**Output:** Finalized Hebrew text for the research goals section of the presentation

- [ ] **Step 1: Copy and translate the 5 research goals into Hebrew**

Write these exactly in the presentation file (Slide 6):

```
יעד 1: להבין מה קורה קוגניטיבית בחלון שאחרי הטריגר — האם אנשים מסוגלים לעשות פעולה פשוטה?
יעד 2: לגלות אם ואיך אנשים כיום עוקבים אחרי הטריגרים שלהם
יעד 3: להבין את הקשר בין המשתמש לטיפול — איך הם מדברים על טריגרים עם המטפל?
יעד 4: לזהות מה ימנע ממישהו לפתוח אפליקציה מיד אחרי טריגר
יעד 5: להבין את הרצון של המשתמש לראות את הנתונים שלו מול הפחד מכך
```

- [ ] **Step 2: Confirm all 5 goals map directly to interview questions Q1–Q7**

| Goal | Interview Questions |
|---|---|
| Goal 1 | Q1, Q2 |
| Goal 2 | Q3 |
| Goal 3 | Q4 |
| Goal 4 | Q5, Q6 |
| Goal 5 | Q7 |

---

### Task 2: Prepare Interview Materials

**Output:** A printed/shared interview guide ready to use with participants

- [ ] **Step 1: Create an interview guide document with all 7 questions in Hebrew**

```
מדריך ראיון — TriggerLog
זמן משוער: 20–30 דקות
קהל יעד: מבוגרים שחוו טראומה / מאובחנים עם PTSD

שאלות:
1. ספר/י לי על פעם אחרונה שחווית טריגר — מה קרה ברגעים שאחרי שהוא עבר? מה הצלחת לעשות ומה לא?
2. כשאתה/את יוצא/ת ממצב של טריגר — כמה זמן לוקח לך להרגיש שאתה/את חוזר/ת לעצמך?
3. האם אתה/את עושה משהו כדי לזכור מתי ואיפה קורים לך טריגרים? אם כן — מה?
4. איך אתה/את מספר/ת לטיפול שלך על הטריגרים שלך? מה את/ה אומר/ת ומה קשה להסביר?
5. אם היה לך אפליקציה שאפשר להפעיל בשניות אחרי טריגר — מה היה גורם לך לא לפתוח אותה?
6. מה הכי חשוב לך שאפליקציה לא תעשה כשאתה/את במצב קשה?
7. אם היה לך תיעוד של כל הטריגרים שלך מהחודש האחרון — היית רוצה לראות אותו? מה מרגיש מפחיד בזה ומה מרגיש שימושי?

הערות לראיון חצי-מובנה:
- שאל/י 2 שאלות המשך ספונטניות בכל ראיון בהתאם לתשובות
- רשום/י שאלות חדשות שעולות — אלו יהיו Q9 ו-Q10 של הסקר הכמותי
```

- [ ] **Step 2: Recruit 9–10 participants** — reach out to personal network, therapist referrals, relevant Facebook/WhatsApp groups for trauma survivors in Israel. Confirm dates by June 22.

- [ ] **Step 3: Conduct all 9–10 interviews** — record (with consent) or take written notes. Complete by June 26.

---

### Task 3: Prepare and Send Quantitative Survey

**Output:** Live survey with 10 questions, 20+ responses collected

- [ ] **Step 1: Build the survey in Google Forms (Hebrew)**

```
שם הסקר: חוויות עם טריגרים — סקר קצר
מבוא: "אנחנו סטודנטים לעיצוב ממשקים באפקה ומפתחים אפליקציה לאנשים שחוו טראומה. הסקר אנונימי ולוקח כ-3 דקות."

שאלה 1: באיזו תדירות אתה/את חווה טריגרים?
○ כל יום  ○ כמה פעמים בשבוע  ○ כמה פעמים בחודש  ○ לעיתים רחוקות

שאלה 2: כמה זמן לוקח לך בדרך כלל להרגיש את עצמך אחרי טריגר?
○ עד 30 דקות  ○ 30–60 דקות  ○ 1–3 שעות  ○ יותר מ-3 שעות

שאלה 3: האם אתה/את כיום עוקב/ת אחרי מתי ואיפה קורים לך טריגרים?
○ כן, באופן קבוע  ○ לפעמים  ○ לא

שאלה 4: אם ניסית לעקוב — איך? (ניתן לסמן יותר מאחד)
□ אפליקציית פתקים  □ יומן כתוב  □ סיפרתי למטפל בעל-פה  □ לא עשיתי כלום  □ אחר

שאלה 5: האם ניסית פעם להשתמש באפליקציה לבריאות הנפש?
○ כן ועדיין משתמש/ת  ○ כן אבל הפסקתי  ○ לא

שאלה 6: איך אתה/את מתקשר/ת עם המטפל שלך על טריגרים?
○ מתאר/ת מהזיכרון  ○ מביא/ה רשימות  ○ קשה לי להסביר  ○ אין לי מטפל

שאלה 7: האם היית משתמש/ת באפליקציה שמאפשרת לתעד טריגר תוך 5 שניות, ללא הקלדה?
○ בהחלט  ○ כנראה שכן  ○ כנראה שלא  ○ בהחלט לא

שאלה 8: כמה חשוב לך שהעיצוב החזותי של האפליקציה יהיה רגוע ולא מדאיג?
○ חשוב מאוד  ○ חשוב במידת מה  ○ לא חשוב לי

שאלה 9: [להגדיר אחרי הראיונות]
שאלה 10: [להגדיר אחרי הראיונות]
```

- [ ] **Step 2: Add Q9 and Q10** — after completing at least 5 interviews, identify the 2 most recurring new themes and write those as survey questions.

- [ ] **Step 3: Share the survey** — WhatsApp groups, Facebook trauma/PTSD communities, personal network. Target: 20+ responses by June 29.

---

## WEEK 2 — Analysis + Design

---

### Task 4: Analyze Interviews and Write Insights (Slide 7 content)

**Output:** Hebrew text for Slide 7 — interview insights

- [ ] **Step 1: Read through all interview notes** and highlight the most repeated themes across participants.

- [ ] **Step 2: Answer these 3 questions in writing (for the slide):**

```
א. האם התשובות היו שונות ממה שציפינו? (כן/לא + הסבר)
ב. האם עמדנו בכל יעדי המחקר? אם לא — באיזה יעד לא עמדנו?
ג. סיכום תובנות מכלל הראיונות (3–5 נקודות עיקריות)
```

- [ ] **Step 3: Write the slide content in Hebrew** — bullet points only, no long paragraphs.

---

### Task 5: Analyze Survey and Create Charts (Slide 8 content)

**Output:** Charts for Slide 8 — quantitative results

- [ ] **Step 1: Export survey results from Google Forms** to Google Sheets.

- [ ] **Step 2: Create one chart per question** — bar charts or pie charts. Use calm colors consistent with the sky/dusk palette (blues, lavenders).

- [ ] **Step 3: Screenshot each chart** and import into the presentation.

- [ ] **Step 4: Write 2–3 sentences per chart** answering: was this result surprising? What does it mean for the design?

---

### Task 6: Write 4+ User Analysis Conclusions (Slide 9 content)

**Output:** Hebrew text for Slide 9

- [ ] **Step 1: Write at least 4 conclusions** — each must be grounded in specific data from the interviews or survey (not assumed upfront). Format:

```
מסקנה 1: [המסקנה] — כי [X% מהנשאלים / רוב המרואיינים אמרו...]
מסקנה 2: [המסקנה] — כי [...]
מסקנה 3: [המסקנה] — כי [...]
מסקנה 4: [המסקנה] — כי [...]
```

- [ ] **Step 2: Verify** — none of the conclusions are things you assumed before the research. If one is, replace it with a data-driven one.

---

### Task 7: Finalize Personas and Use Cases (Slides 10–11)

**Output:** Hebrew text + visual for Slides 10 and 11

- [ ] **Step 1: Build Persona 1 slide (רוני)**

```
שם: רוני, גיל 34
רקע: לוחם לשעבר, גר בתל אביב, עובד בהייטק
אבחנה: PTSD לאחר שירות צבאי
טיפול: CBT, פגישות דו-שבועיות
נוחות טכנולוגית: גבוהה
דפוס שימוש: מתקשה להסביר טריגרים למטפלת בעל-פה. ניסה לכתוב יומן — הפסיק אחרי שבוע.
מטרה: להבין את הדפוסים שלו בלי לנסח אותם מילולית
חשש: אפליקציות שדורשות יותר מדי כשהוא כבר מוצף
[הפנייה לנתוני מחקר: X% מהמרואיינים ציינו קושי בהסברת טריגרים למטפל]
```

- [ ] **Step 2: Build Persona 2 slide (ד"ר שיר)**

```
שם: ד"ר שיר, גיל 42
רקע: פסיכולוגית קלינית, מרפאה פרטית, תל אביב
התמחות: ניצולי טראומה, CBT
נוחות טכנולוגית: בינונית
דפוס שימוש: עובדת לרוב עם מידע חסר בין פגישות. מטופלים מתקשים לתאר את השבוע.
מטרה: לקבל נתונים מדויקים מבין-פגישות בלי להכביד על המטופל
חשש: כלים שחושפים את המטופל לנתונים גולמיים שמציפים אותו מחדש
```

- [ ] **Step 3: Build Use Cases slide (רוני)**

```
תרחיש עיקרי:
רוני נמצא ברכבת בדרך לעבודה. קול פתאומי גורם לתגובת טריגר.
כשהתגובה שוככת — הוא פותח את האפליקציה, מקיש "תיעוד",
בוחר "צליל" ו"בינוני" — וסוגר. פחות מ-10 שניות.

תרחיש משני (יוצא מאותו תרחיש):
יום לפני הפגישה עם המטפלת, רוני פותח את ההיסטוריה,
עובר על שאלת הבטיחות, ומשתמש ב"שתף עם המטפלת"
כדי לשלוח את הדוח לפני הפגישה.
```

---

### Task 8: Finalize Market Analysis (Slide 5)

**Output:** Hebrew text + screenshots + logos for Slide 5

- [ ] **Step 1: Document Competitor 1 — PTSD Coach (VA)**

```
שם: PTSD Coach
לוגו: [צלם לוגו מה-App Store]
צילום מסך: [צלם מסך מייצג]
למה זה מתחרה: כולל כיום מעקב טריגרים (2024 v4)
מתחרה ישיר/עקיף: ישיר
נתח שוק: האפליקציה הנפוצה ביותר לPTSD — 500K+ הורדות
יתרונות HCI: חינמי, מחקרית, גיבוי קליני
חסרונות HCI: ניווט מורכב — מעקב הטריגרים קבור עמוק בתפריטים. מחייב קוגניציה מלאה.
```

- [ ] **Step 2: Document Competitor 2 — PE Coach (VA)**

```
שם: PE Coach
לוגו: [צלם לוגו]
צילום מסך: [צלם מסך]
למה זה מתחרה: כלי מעקב טיפולי לניצולי טראומה
מתחרה ישיר/עקיף: עקיף — מחייב מטפל מוסמך
נתח שוק: שימוש מוגבל — ספציפי לטיפול PE בלבד
יתרונות HCI: ממוקד, מותאם לטיפול
חסרונות HCI: לא עצמאי — חסר ערך ללא מטפל. לא זמין לציבור הרחב.
```

- [ ] **Step 3: Document Competitor 3 — Bearable (general symptom tracker)**

```
שם: Bearable
לוגו: [צלם לוגו]
צילום מסך: [צלם מסך]
למה זה מתחרה: אפליקציית מעקב תסמינים כללית — ניתן לעקוב אחר טריגרים ומצב רוח
מתחרה ישיר/עקיף: עקיף — לא ייעודית ל-PTSD
נתח שוק: ~100K משתמשים (הערכה כיתית — App Store ratings)
יתרונות HCI: גמישה, ממשק נקי, דשבורד ויזואלי
חסרונות HCI: לא מותאמת לאוכלוסיית טראומה. עמוסה מדי לשימוש פוסט-טריגר.
```

---

### Task 9: Define Metaphor Formally (Slide 12 — Part 1)

**Output:** Hebrew metaphor section for Slide 12

- [ ] **Step 1: Find a real photo** of a dusk sky with soft clouds and first stars emerging. Save it to the project folder.

- [ ] **Step 2: Extract 4–5 colors from the photo** using a color picker tool (Figma has one built in). Document the hex codes:

```
Example palette:
#D4E8F5 — pale sky blue
#B8C9E0 — dusk blue-grey
#E8D5F0 — soft lavender
#F5EDD8 — warm white/cream
#8B9DC3 — deeper blue (stars)
```

- [ ] **Step 3: Write the metaphor description in Hebrew for the slide:**

```
המטאפורה: שמיים + מזג אוויר + מפת כוכבים

הרעיון: האפליקציה מרגישה כמו שמיים פתוחים ורגועים.
אירועי מזג אוויר (טריגרים) עוברים דרכה — אי אפשר לשלוט בהם,
אבל אפשר לתעד אותם. עם הזמן, הטריגרים המתועדים הופכים לכוכבים
שיוצרים קבוצת כוכבים — דפוס שמתגלה רק ממרחק.

מסך התיעוד = דיווח על אירוע מזג אוויר שעבר
מסך ההיסטוריה = מפת כוכבים — כל טריגר הוא נקודת אור

למה בחרנו: מטאפורה פיזית, רגועה, לא קלינית.
מעבירה: "מה שקרה עבר. אתה יכול רק לשים לב."
```

---

### Task 10: Build Flow Diagram (Slide 12 — Part 2)

**Output:** Flow diagram image for Slide 12

- [ ] **Step 1: Create the flow diagram** in Figma or draw.io with these 7 boxes:

```
[1. Splash] → [2. Log (Home)] → [3. Safety Gate] → [4. History] → [5. Report Preview]
                    ↓                                       
              [6. Settings]
              [7. About]
```

- [ ] **Step 2: For each screen box, add inside it:**

```
Screen 1 — Splash
לוגו, שם האפליקציה, טאגליין

Screen 2 — Log (Home) [מסך ראשי]
7 כפתורי סוג טריגר, בחירת עצמה (קל/בינוני/חזק),
שדה הערה קצרה, כפתור "תיעוד", אייקון ניווט להיסטוריה, אייקון הגדרות

Screen 3 — Safety Gate [מוקאפ]
טקסט אזהרה, כפתור "אני מוכן/ה", כפתור "לא עכשיו"

Screen 4 — History
רשימה כרונולוגית הפוכה של רשומות, כפתור "שתף עם המטפל"

Screen 5 — Report Preview
גרף חום, פירוט סוגי טריגרים, מגמת עצמה

Screen 6 — Settings
הרשאת מיקום, העדפות נתונים

Screen 7 — About
תיאור האפליקציה, כתב ויתור קליני
```

- [ ] **Step 3: Add directional arrows** — bidirectional where needed (all screens → Log via back/home).

- [ ] **Step 4: Export as image** and insert into Slide 12.

---

## WEEK 3 — Prototype + Presentation

---

### Task 11: Build Figma Prototype — Splash Screen

**Output:** Screen 1 complete in Figma

- [ ] **Step 1: Set up Figma file** — create a new file named "TriggerLog Prototype". Set frame to iPhone 16 Pro (393 x 852 px).

- [ ] **Step 2: Create the splash screen**
  - Background: sky gradient (top: #B8C9E0 → bottom: #E8D5F0)
  - Center: app logo/icon (cloud + single star)
  - App name: "Trigger Log" in Assistant font, 32pt, white
  - Tagline: "רק לסמן שזה קרה" in Assistant font, 16pt, white/80% opacity
  - 3–4 soft star dots scattered on the background

---

### Task 12: Build Figma Prototype — Log Screen (Home)

**Output:** Screen 2 complete in Figma

- [ ] **Step 1: Build the Log screen**
  - Background: very light sky blue (#F0F5FA)
  - Header: "מה קרה?" in Assistant Bold, 28pt, dark blue
  - Trigger type section: 7 rounded chip buttons in 2 rows:
    ```
    צליל | ויזואלי | המון אנשים / מרחב
    ריח | זיכרון / מחשבה | תחושה גופנית | אחר / לא יודע
    ```
  - Intensity section: 3 large tap targets: קל | בינוני | חזק
  - Quick note: single-line text field, placeholder "הערה קצרה (לא חובה)"
  - Log button: large, full-width, deep blue, text "תיעוד"
  - Bottom nav: History icon (star cluster) + Settings icon (gear)

- [ ] **Step 2: Add tap state** — when Log button is tapped, show a brief checkmark animation overlay with text "תועד ✓"

---

### Task 13: Build Figma Prototype — Safety Gate + History + Report

**Output:** Screens 3–5 complete in Figma

- [ ] **Step 1: Safety gate (Screen 3)** — modal overlay on top of History
  ```
  Background: semi-transparent dark overlay
  Card: white rounded card, center of screen
  Text: "צפייה ביומן הטריגרים שלך יכולה לפעמים להיות מציפה.
         הוא הכי שימושי כשסוקרים אותו יחד עם המטפל.
         האם אתה/את במקום רגוע ובטוח כרגע?"
  Button 1: "אני מוכן/ה" — full width, blue
  Button 2: "לא עכשיו" — text only, grey
  ```

- [ ] **Step 2: History screen (Screen 4)**
  - Background: dark soft sky (#1A2540) — transitioning to "night sky" feel
  - Each entry = a glowing dot/star + date + trigger type + intensity chip
  - Bottom: "שתף עם המטפל" button, white outline

- [ ] **Step 3: Report preview (Screen 5)**
  - Header: "סיכום עבור המטפל"
  - Section 1: time-of-day heatmap (horizontal bar chart)
  - Section 2: trigger type donut chart
  - Section 3: intensity trend line chart (week over week)
  - Share button: "שלח דוח" — full width, blue

---

### Task 14: Build Figma Prototype — Settings + About

**Output:** Screens 6–7 complete in Figma

- [ ] **Step 1: Settings screen (Screen 6)**
  ```
  Header: "הגדרות"
  Toggle: "שמור מיקום בעת תיעוד" — on/off
  Toggle: "הפעל התראות" — off by default, with note: "כבוי כברירת מחדל — התראות עלולות להיות טריגרים"
  Section: "הנתונים שלך" — delete all data option
  ```

- [ ] **Step 2: About screen (Screen 7)**
  ```
  Header: "על האפליקציה"
  Text: "Trigger Log היא אפליקציה לתיעוד טריגרים עבור אנשים שחוו טראומה.
         האפליקציה אינה מחליפה טיפול מקצועי."
  Credits: "נבנה במסגרת קורס עיצוב ממשקים, אפקה 2026"
  ```

---

### Task 15: Wire Up Interactive Flows in Figma

**Output:** 2 working interactive flows in Figma prototype

- [ ] **Step 1: Wire Flow 1 (primary use case — רוני on the train)**
  ```
  Splash → (auto after 2s) → Log
  Log: tap "צליל" chip → chip highlights
  Log: tap "בינוני" → highlights
  Log: tap "תיעוד" → checkmark overlay → fades back to Log (cleared)
  ```

- [ ] **Step 2: Wire Flow 2 (secondary use case — before therapy)**
  ```
  Log: tap History icon → Safety Gate modal appears
  Safety Gate: tap "אני מוכן/ה" → History screen
  History: tap "שתף עם המטפל" → Report Preview
  Report Preview: tap "שלח דוח" → system share sheet (static mockup)
  ```

- [ ] **Step 3: Wire navigation**
  - All screens: back arrow or home icon → Log screen
  - Log: settings icon → Settings screen
  - Log: info icon → About screen

- [ ] **Step 4: Verify metaphor is visible across all screens**
  - Splash: full sky gradient ✓
  - Log: soft sky blue background ✓
  - History: dark night sky, stars for entries ✓
  - Report: constellation-style chart aesthetic ✓

- [ ] **Step 5: Copy the Figma share link** — set to "Anyone with the link can view". Save it for Slide 13.

---

### Task 16: Build Presentation (13 Slides, Hebrew, PDF)

**Output:** Final PDF presentation ready for Moodle submission

- [ ] **Step 1: Set up presentation** in Canva or Google Slides. Font: Assistant. Headings: 40pt. Body: 24pt. Color palette: sky/dusk palette from Task 9.

- [ ] **Step 2: Build each slide in order:**

```
Slide 1 — Cover
- App name: "Trigger Log"
- Course: "עיצוב חזותי של ממשקי משתמש"
- Afeka logo (top right)
- Group number
- Names: תמר אלוני + אופיר [שם משפחה]
- Tagline + sky image background

Slide 2 — Product Definition
- מה המוצר עושה + איזו בעיה הוא פותר (2–3 משפטים)
- מטרה ראשית: תיעוד טריגרים בזמן אמת
- מטרות משנה (3): הבנת דפוסים, שיתוף עם מטפל, מדידת התקדמות
- יעדים פונקציונאליים: טופס תיעוד, מסך היסטוריה, דוח לייצוא
- אפיון שימוש: ממוקד מטרה, בתנועה, מיד אחרי טריגר, GPS אופציונלי

Slide 3 — Target Audience
- גיאוגרפי: ישראל (תל אביב ומרכז)
- דמוגרפי: מבוגרים 25–50, כל המינים, אנשים בטיפול פסיכולוגי
- פסיכוגרפי: נוחות טכנולוגית בינונית-גבוהה, מוטיבציה פנימית להבין את עצמם
- ציר קבלת טכנולוגיה: מאמצים מוקדמים–רוב מוקדם
- גודל קהל: ~280,000 מאובחנים עם PTSD בישראל (מקור: הלמ"ס / משרד הבריאות)

Slide 4 — Literature Review
- Pollmann et al. 2024
- שאלת מחקר / שיטה / תוצאות / מסקנות / ביקורת
- קשר לפרויקט

Slide 5 — Market Analysis
- PTSD Coach / PE Coach / Bearable
- לוגו + צילום מסך + יתרונות/חסרונות HCI לכל מתחרה

Slide 6 — Research Goals + Interview Questions
- 5 יעדי מחקר
- 7 שאלות ראיון

Slide 7 — Interview Insights
- ממצאים עיקריים (נקודות בלבד)
- מה הפתיע אותנו
- סיכום תובנות

Slide 8 — Survey Results
- גרפים בלבד (אחד לכל שאלה משמעותית)

Slide 9 — User Analysis Conclusions
- 4+ מסקנות עם גיבוי נתוני

Slide 10 — Personas
- רוני + ד"ר שיר (כרטיסי פרסונה)

Slide 11 — Use Cases
- תרחיש עיקרי + תרחיש משני

Slide 12 — Metaphor + Flow Diagram
- תמונת שמיים אמיתית
- פלטת צבעים
- הסבר המטאפורה
- תרשים זרימה

Slide 13 — Prototype Link
- "לחצו כאן לצפייה בפרוטוטייפ"
- [Figma link from Task 15]
- QR code (optional)
```

- [ ] **Step 3: Export as PDF** from Canva/Google Slides.

- [ ] **Step 4: Verify before submitting:**
  - [ ] All text is in Hebrew
  - [ ] Exactly 13 slides
  - [ ] Afeka logo on Slide 1
  - [ ] Prototype link on Slide 13
  - [ ] Font: Assistant, headings 40pt, body 24pt
  - [ ] File name: "TriggerLog HCI 2026"

---

### Task 17: Submit and Prepare Presentation

**Output:** Submitted to Moodle, both ready to present

- [ ] **Step 1: Submit to Moodle** — upload PDF + paste Figma link. Do this at least 24 hours before the presentation date (July 10).

- [ ] **Step 2: Divide presentation sections between Tamar and Offir** — both must present. Suggested split:
  ```
  Tamar: Slides 1–7 (product, research, interviews, survey)
  Offir: Slides 8–13 (conclusions, personas, use cases, design, prototype demo)
  ```

- [ ] **Step 3: Rehearse together** — run through full presentation, aim for 15 minutes to leave buffer. Time yourselves.

- [ ] **Step 4: On presentation day** — open Figma prototype on a phone or tablet for live demo during Slide 13.

---

## Gaps Flagged During Self-Review

1. **Third competitor (Bearable)** — listed in Task 8. If you prefer a different third competitor, replace it before building the slide.
2. **Audience size source** — Slide 3 references הלמ"ס. Verify the exact PTSD prevalence figure from the Israeli Ministry of Health or הלמ"ס before finalizing the slide.
3. **Q9 and Q10** — cannot be written until after at least 5 interviews are complete. Block time on June 23–24 to add these before the survey goes out.
4. **Figma sharing** — make sure the Figma link is set to public view (not edit) before adding to Slide 13.
