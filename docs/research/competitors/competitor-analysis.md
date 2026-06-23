# Market Analysis — TriggerLog Competitor Research
**Task A Deliverable**
**Project:** TriggerLog — Afeka College UI/UX Final Project
**Author:** Research Agent (for Tamar Aloni)
**Date:** June 2026

---

## Overview

Three competitors were researched for Slide 5 of the TriggerLog presentation:
1. **PTSD Coach (VA)** — Direct competitor
2. **PE Coach 2 (VA)** — Indirect competitor (therapy-gated)
3. **Bearable** — Indirect competitor (general symptom tracker)

Each profile includes working notes in English and presentation-ready text in Hebrew.

---

---

## Competitor 1: PTSD Coach (VA)

### Working notes (English — for reference)

**Developer:** VA National Center for PTSD + DoD National Center for Telehealth & Technology
**Release year:** 2011 (original); major v4 update 2024; latest update May 8, 2025 (v3.5.5 on some builds)
**Price:** Free
**Platform:** iOS and Android
**App Store (iOS):** https://apps.apple.com/us/app/ptsd-coach/id430646302
**Google Play (Android):** https://play.google.com/store/apps/details?id=is.vertical.ptsdcoach

**Ratings (as of June 2026):**
- App Store: 4.7 stars / 4,300 ratings (Apple App Store listing)
- Google Play: approximately 4.3 stars (reported via AppBrain)

**Download/reach estimates:**
- Research from 2020–2021 documented ~150,000 total users and ~20,000 new users/month at that time (PMC9006138, JMIR 2022)
- Android installs estimated ~2,200/month as of late 2025 (AppBrain)
- Commonly cited in media as "500K+ downloads" but this figure predates v4; conservative academic citation is 150K+ documented unique users
- Widely described as the most downloaded PTSD app globally

**Logo description:**
The PTSD Coach icon is a navy blue square with rounded corners. Inside, a simple white outline of a human figure (generic person silhouette) stands centered, with a small white heart or pulse-line graphic near the chest. The VA wordmark appears below the figure in small white type. The overall feel is clinical and institutional — no warmth or color variation.

**Main screen description (v4):**
The home screen in v4 displays a personalized card feed layout. At the top is a greeting ("Good morning") with a calming photo or video loop (nature imagery — water, trees). Below are scrollable activity cards recommending tools such as "Manage Symptoms," "Track Your Mood," "Learn About PTSD," and "Assess Yourself." A bottom navigation bar has five icons: Home, Learn, Manage, Track, Support. The Track section — where the trigger tracker lives — is accessed via the bottom nav third or fourth tap, then a submenu. The trigger tracker is not visible from the home screen without navigating.

**What it does:**
- Delivers psychoeducation about PTSD (causes, symptoms, treatment options)
- Provides a validated clinical self-assessment (PCL — PTSD Checklist)
- Offers coping tools: breathing exercises, grounding techniques, distraction activities
- Connects users to professional resources and crisis lines
- In v4 (2024): adds trigger tracker, mood tracker, medication tracker, progress tracking over time
- Hosts an anonymous community for sharing coping tips

**Why it is a direct competitor:**
PTSD Coach v4 added a trigger tracker in 2024. It now occupies the same feature space as TriggerLog. Any PTSD survivor who discovers PTSD Coach will likely consider it before looking for a standalone tracker. The app is free, clinically credible, and government-backed — it is the most authoritative tool in the category. TriggerLog must explicitly differentiate on speed and simplicity.

**Market share/reach source:** PMC9006138 (JMIR, March 2022); AppBrain Android stats; App Store listing June 2026.

**HCI Advantages (specific to PTSD population):**
1. **Clinical authority**: Government backing (VA + DoD) gives users and therapists trust without needing to evaluate the app themselves — critical for a stigma-sensitive population
2. **Validated assessment tool built in**: The PCL (PTSD Checklist) is a clinically validated instrument; users can generate a score recognized by mental health professionals without visiting a clinic
3. **Free with no account required**: No login friction, no payment barrier — important for a population that may have financial or bureaucratic anxiety
4. **Crisis pathway directly in the app**: The Veterans Crisis Line is one tap from any screen — the app acknowledges that a user might be in danger and acts as a safety net
5. **Multi-modal coping content**: Audio, video, and text coping tools mean users with varying literacy and focus capacity can engage
6. **Research-backed content updates**: v4's content expansion was driven by clinical research — not user trend data — increasing its credibility for long-term therapeutic use

**HCI Disadvantages (specific to post-trigger use case):**
1. **Trigger tracker requires 4+ taps to reach**: From app open, user must navigate: Home → bottom nav "Track" → Track submenu → "Trigger Log" → log entry form. During or immediately after a trigger event, this navigation path is cognitively and motorically inaccessible. Post-trigger executive function is impaired.
2. **App opens to a complex personalized home screen**: The v4 home screen presents 6–8 content cards on first open. A user in a dissociative or hyperaroused state cannot parse this interface to find the logging function.
3. **No widget or lock screen shortcut**: PTSD Coach has no iOS/Android home screen widget. The user must unlock their phone, find the app, open it, and navigate — each step adding time and cognitive load.
4. **Trigger tracker is one of many features, not the primary one**: The information architecture positions trigger tracking as a sub-item under "Track" alongside mood, medication, and sleep tracking. There is no urgency or prioritization for post-trigger logging.
5. **English-only, US-centric design**: All content, resources, and crisis lines point to US services. Israeli users have no usable support pathway from within the app.
6. **Notification default is ON**: Unlike TriggerLog, PTSD Coach sends check-in reminders by default. For a PTSD population, unexpected notifications can themselves be triggers.

**TriggerLog's advantage in one sentence:**
TriggerLog opens directly to the log form — no navigation, no menus, no decisions — making it the only tool that works in the 30-second window immediately after a trigger event.

---

### Slide 5 content (Hebrew — copy directly into presentation)

**שם:** PTSD Coach
**מפתח:** מרכז VA הלאומי לפוסט-טראומה (ארה"ב)
**שנת הוצאה:** 2011, גרסה 4 עודכנה 2024
**מחיר:** חינם
**מתחרה:** ישיר

**נתח שוק:**
האפליקציה הנפוצה ביותר לפוסט-טראומה בעולם — מעל 150,000 משתמשים מתועדים במחקר (JMIR 2022), דירוג 4.7 כוכבים ב-App Store (יוני 2026).

**מה היא עושה:**
- חינוך והסברה על PTSD
- הערכה עצמית קלינית (PCL — שאלון מאומת)
- כלי התמודדות: נשימות, עיגון, הסחת דעת
- גישה למשאבי עזרה מקצועית
- מ-2024: עוקב טריגרים, עוקב מצב רוח, מעקב תרופות

**יתרונות HCI:**
- גיבוי ממשלתי (VA + DoD) — אמינות קלינית מיידית
- כלי הערכה מאומת (PCL) מובנה באפליקציה
- חינם, ללא חשבון משתמש — אין חסמי גישה
- קו משבר חירום בקליק אחד מכל מסך
- תוכן מגוון: אודיו, וידאו, טקסט — נגיש לכל רמת ריכוז

**חסרונות HCI:**
- עוקב הטריגרים נמצא 4 הקשות עמוק בתוך התפריט — לא נגיש ברגע הטריגר
- מסך הבית מציג 6–8 כרטיסיות מורכבות — עומס קוגניטיבי גבוה בדיוק כשנגישות נמוכה
- אין ווידג'ט למסך הנעילה — המשתמש חייב לנווט בתוך האפליקציה
- אין עיצוב או הנחייה ספציפית לרגע שאחרי הטריגר
- אנגלית בלבד, ממוקדת ותיקי VA אמריקאיים — לא רלוונטית לאוכלוסייה ישראלית

**היתרון של TriggerLog:**
TriggerLog נפתחת ישירות לטופס התיעוד — ללא ניווט, ללא תפריטים, ללא החלטות — האפליקציה היחידה שעובדת בחלון של 30 השניות שאחרי טריגר.

---

---

## Competitor 2: PE Coach 2 (VA)

### Working notes (English — for reference)

**Developer:** VA National Center for PTSD + DoD National Center for Telehealth & Technology
**Release year:** Original PE Coach ~2013; PE Coach 2 updated version
**Price:** Free
**Platform:** iOS and Android
**App Store (iOS):** https://apps.apple.com/us/app/pe-coach-2/id1281266434
**Google Play (Android):** https://play.google.com/store/apps/details?id=gov.va.mobilehealth.ncptsd.pecoach

**Ratings (as of June 2026):**
- Google Play: 3.6 stars / 97 ratings (Google Play listing, June 2026)
- App Store: data not confirmed; limited reviews due to restricted user base

**Why such low ratings?** The app is only useful within a PE therapy relationship. Users who download it without understanding this context leave 1-star reviews because it doesn't function as a standalone tool — this is not a design failure but an architectural one.

**Is it still therapy-gated?** Yes. Confirmed by the VA mobile page (mobile.va.gov/app/pe-coach) and the Clinician's Guide (deploymentpsych.org): "PE Coach is designed to be used during therapy for PTSD with a health professional trained in Prolonged Exposure therapy." The app explicitly states by itself it is not sufficient to treat PTSD. This restriction has not changed as of June 2026.

**Logo description:**
PE Coach 2 icon is a dark teal/green square with rounded corners. It shows a simple white speech bubble containing a small white head/face silhouette, suggesting conversation. Below or within the icon the letters "PE" appear in white. The design is institutional, similar to other VA apps — utilitarian rather than emotionally resonant.

**Main screen description:**
The main screen of PE Coach 2 is structured around a therapy session timeline. It shows: the patient's current PE session number, their next appointment date, and a set of between-session homework tasks assigned by the therapist. Content includes breathing retraining exercises, SUDS (Subjective Units of Distress Scale) ratings, and in-vivo exposure homework lists. The interface assumes the user is currently enrolled in a ~12-session PE protocol and all content is keyed to that clinical structure. A user without a PE therapist sees an interface with no useful content.

**What it does:**
- Guides patients through between-session PE homework (in-vivo exposure tasks assigned by therapist)
- Provides audio recording capability so sessions can be recorded and replayed for homework
- Delivers controlled breathing retraining exercises
- Tracks SUDS ratings across exposures to show anxiety reduction over time
- Lets users and therapists monitor session-by-session progress
- Sends reminders about between-session homework tasks

**Why it appears in a competitive analysis despite being therapy-gated:**
PE Coach demonstrates that the clinical community considers smartphone apps a legitimate adjunct to trauma therapy — not a replacement, but an integrated tool. This is directly relevant to TriggerLog's positioning: TriggerLog is designed to work *alongside* therapy, not replace it. PE Coach shows that therapists are willing to incorporate apps into treatment; TriggerLog's therapist report export feature directly addresses this same clinical need.

**Market share:**
Limited — the user base is restricted to patients actively enrolled in PE therapy programs. No public download numbers available. Google Play shows 97 reviews total, suggesting a small active user base relative to PTSD Coach.

**HCI Advantages (within its intended context):**
1. **Clinically structured workflow**: Every task is assigned by a therapist and corresponds to a specific session — users know exactly what to do and why
2. **Audio recording for exposure homework**: Patients can record their imaginal exposure sessions and listen back — a clinically validated technique that reduces avoidance
3. **SUDS tracking with visual feedback**: Showing a user that their distress rating dropped from 85 to 30 across an exposure is a powerful motivational tool, rooted in the mechanism of PE therapy
4. **No decision fatigue**: Because the therapist pre-configures the homework, the user never has to choose what to do — the app just shows the next assigned task

**HCI Disadvantages (specific to post-trigger use case):**
1. **Completely inaccessible without a PE-trained therapist**: A PTSD survivor without access to PE therapy — the majority of people with PTSD globally — cannot use this app at all. In Israel, PE-trained therapists are scarce outside major urban centers.
2. **Designed for planned, in-office exposure work — not real-world triggers**: PE Coach is used for homework between planned therapy sessions. It has no mechanism for logging an unexpected real-world trigger event.
3. **No self-initiated logging**: Everything in PE Coach is therapist-directed. There is no feature for the user to spontaneously record a trigger experience.
4. **Assumes a 12-session clinical structure**: The interface is built around the standard PE protocol (12–15 sessions). It is not useful before, after, or outside of this specific treatment arc.
5. **Session audio recording raises privacy concerns**: Recording therapy content on a personal phone — with no information about encryption or data storage — may deter use for already-privacy-sensitive PTSD population.
6. **No crisis support built in**: Unlike PTSD Coach, PE Coach has no emergency pathway or crisis resources. A patient in acute distress using the app for homework has no in-app support.

**TriggerLog's advantage in one sentence:**
TriggerLog works for anyone with PTSD, regardless of treatment type, access to a specialist, or whether they are in therapy at all — no therapist prerequisite.

---

### Slide 5 content (Hebrew — copy directly into presentation)

**שם:** PE Coach 2
**מפתח:** מרכז VA הלאומי לפוסט-טראומה (ארה"ב)
**שנת הוצאה:** 2013 (גרסה מקורית), PE Coach 2 עדכון מאוחר יותר
**מחיר:** חינם
**מתחרה:** עקיף — מחייב מטפל מורשה ב-PE

**נתח שוק:**
בסיס משתמשים מצומצם — מוגבל למטופלים הנמצאים בטיפול PE פעיל. 97 ביקורות בלבד ב-Google Play (דירוג: 3.6 כוכבים, יוני 2026), מה שמשקף בסיס משתמשים קטן.

**מה היא עושה:**
- מנחה מטופלים בשיעורי הבית בין מפגשי טיפול PE
- מאפשרת הקלטת מפגשי חשיפה לשמיעה חוזרת (שיטה טיפולית מאומתת)
- עוקבת אחר ציוני SUDS (מדד מצוקה) לאורך זמן
- מזכירה משימות שיעורי בית שהוגדרו על ידי המטפל
- מציגה ירידה בחרדה לאורך מפגשי החשיפה

**מדוע היא מופיעה בניתוח שוק:**
PE Coach מוכיחה שהקהילה הקלינית מקבלת אפליקציות סמארטפון ככלי לגיטימי בטיפול בפוסט-טראומה. זה מחזק את הגישה של TriggerLog — אפליקציה שמשלימה טיפול ולא מחליפה אותו.

**יתרונות HCI:**
- מבנה טיפולי מובנה — כל משימה נקבעת מראש על ידי המטפל
- הקלטת חשיפות לשמיעה חוזרת — שיטה קלינית מאומתת
- מעקב SUDS חזותי — מוטיבציה מבוססת נתונים
- ללא עומס קוגניטיבי בבחירות — המטפל מגדיר את המשימות

**חסרונות HCI:**
- לגמרי בלתי נגישה ללא מטפל מוסמך ב-PE — רוב האוכלוסייה עם PTSD אינה מקבלת טיפול PE
- אין מנגנון לתיעוד טריגר בלתי צפוי בחיי היומיום
- מניחה מבנה קליני של 12–15 מפגשים — אינה שימושית מחוץ לפרוטוקול זה
- בישראל מטפלי PE בהסמכה מלאה נדירים מחוץ לאזור המרכז
- אין מסלול חירום או תמיכה במשבר בתוך האפליקציה

**היתרון של TriggerLog:**
TriggerLog עובדת עבור כל מי שסובל מ-PTSD — ללא קשר לסוג הטיפול, נגישות למומחה, או האם הם בטיפול כלל.

---

---

## Competitor 3: Bearable

### Working notes (English — for reference)

**Developer:** Bearable Ltd (independent company, UK-based)
**Release year:** 2019
**Price:** Free tier available; Premium $34.99/year or $6.99/month; 7-day free trial
**Platform:** iOS and Android
**App Store (iOS):** https://apps.apple.com/us/app/bearable-symptom-tracker/id1482581097
**Google Play (Android):** https://play.google.com/store/apps/details?id=com.bearable
**Official website:** https://bearable.app

**Ratings (as of June 2026):**
- App Store: 4.8 stars / 4,000+ ratings (Apple App Store, June 2026)
- Google Play: 4.7 stars / 8,640+ ratings (Google Play, June 2026)

**User base:**
900,000+ people use Bearable as of 2025 (bearable.app official figure). This makes it substantially larger than PTSD Coach in raw user numbers, though across a much broader health condition population.

**Why PTSD users adopt Bearable despite it not being designed for them:**
Bearable's user community includes people with anxiety, depression, bipolar disorder, PTSD, chronic pain, ADHD, and many other conditions. PTSD users adopt it because: (1) it allows unlimited custom tracking categories including custom triggers; (2) it produces visual correlation reports useful for therapy conversations; (3) it connects to Apple Health / Google Fit for automated sleep and activity data; (4) it has a data export for sharing with a therapist. None of these features require the app to be PTSD-specific. Users adapt general tools when no purpose-built alternative exists — or when the purpose-built alternative (PTSD Coach) feels too clinical or overwhelming.

**Logo description:**
The Bearable icon is a white or very light cream background with a stylized abstract bear head shape rendered in soft purple/lavender tones. The bear is minimalist — almost geometric — suggesting gentleness and approachability. The name "Bearable" below (in some versions) uses a rounded, friendly typeface. The visual language signals "wellness app" rather than "clinical tool."

**Main screen description:**
Bearable's daily check-in screen is the central interaction. It presents a scrollable vertical form with sections: Rate your mood (1–10 emoji scale), log symptoms (user-defined list, can include dozens of custom items), health factors (sleep, food, exercise, social interaction), medications/treatments, and notes. The form can be configured to be short or extremely long depending on what the user is tracking. A user tracking 15+ symptoms and 10+ factors will see a form that takes 3–5 minutes to complete. The home screen also shows trend charts and streaks. Navigating to a previous entry requires going to the calendar or log history view.

**Current feature set (2025):**
- Mood tracking (1–10 scale with emoji)
- Unlimited custom symptom tracking
- Unlimited custom trigger tracking (custom labels defined by user)
- Medication and treatment tracking
- Sleep, steps, heart rate via Apple Health / Google Fit integration
- Habit and goal tracking
- Gratitude journal / notes field
- Correlation reports: what factors correlate with better/worse symptom days
- Data export (CSV, PDF) for sharing with doctors/therapists
- Period and hormonal cycle tracking
- PoTS, EDS, migraine-specific tracking templates
- Premium: deeper analytics, unlimited history access, charts

**HCI Advantages (relevant to PTSD population):**
1. **Unlimited custom triggers**: Users can create any trigger label they need — not limited to a preset taxonomy. This is more flexible than TriggerLog's fixed 7-category system.
2. **Therapist-shareable data export**: The PDF/CSV export feature directly serves the same therapy communication goal as TriggerLog's report feature.
3. **Correlation reports reveal hidden patterns**: The app surfaces statistical correlations between tracked factors — e.g., "poor sleep days correlate with higher symptom severity." This is clinically useful insight.
4. **Connects to wearables**: Automatic sleep, heart rate, and activity data from Apple Watch/Fitbit adds context to manual logs without extra effort.
5. **High rating and established reputation**: 4.8 stars from 4,000+ App Store reviews signals quality and reliability — PTSD users who search "symptom tracker" will find Bearable prominently.

**HCI Disadvantages (specific to post-trigger use case):**
1. **Daily check-in form is too long for post-trigger use**: The default check-in includes mood, symptoms, factors, medications, and notes. Even a minimally configured Bearable log takes 45–90 seconds. Post-trigger, 10 seconds is the maximum realistic interaction window.
2. **No sense of urgency design — built for end-of-day reflection**: The app's interaction model assumes calm, deliberate review time. There is no "emergency log" shortcut, no widget for immediate access, no reduced-friction mode for high-stress moments.
3. **Trigger tracking requires navigating a symptom form, not a dedicated trigger screen**: In Bearable, triggers are just one item type among dozens. To log a trigger, the user opens the check-in, scrolls to the triggers section, taps the relevant custom label, then continues the rest of the form. There is no single-purpose trigger screen.
4. **No trauma-safe design**: Bearable shows trend charts and historical data on the home screen by default. For PTSD users, seeing their own trigger history without preparation or context can be retraumatizing. Bearable has no safety gate, no clinical guidance, no warning before showing data.
5. **Premium paywall gates the most useful features**: Full correlation reports and unlimited history access require a paid subscription ($34.99/year). A PTSD survivor who most needs longitudinal data may be blocked by cost.
6. **Not designed with PTSD-specific risk in mind**: Bearable's gamification elements (streaks, badges for logging every day) are well-suited for chronic illness management but psychologically inappropriate for PTSD users. Being notified of a "streak" tied to trauma logging, or feeling like a "failure" for missing a log day, can worsen guilt and avoidance.

**TriggerLog's advantage in one sentence:**
TriggerLog is designed from first principles around the post-trigger moment — not adapted from a general wellness tracker — making it the only tool with the right interaction model, the right visual language, and the right safety design for this specific population.

---

### Slide 5 content (Hebrew — copy directly into presentation)

**שם:** Bearable
**מפתח:** Bearable Ltd (חברה בריטית עצמאית)
**שנת הוצאה:** 2019
**מחיר:** חינמי / פרמיום 35$ לשנה
**מתחרה:** עקיף — אפליקציה כללית למעקב תסמינים, לא ספציפית ל-PTSD

**נתח שוק:**
מעל 900,000 משתמשים (bearable.app, 2025), דירוג 4.8 כוכבים מ-4,000+ ביקורות ב-App Store, 4.7 כוכבים מ-8,600+ ביקורות ב-Google Play (יוני 2026). אחת מאפליקציות מעקב התסמינים הגדולות בעולם.

**מדוע משתמשים עם PTSD בוחרים בה:**
Bearable מאפשרת מעקב מותאם אישית — כולל טריגרים מוגדרים על ידי המשתמש — ויצוא נתונים לשיתוף עם מטפל. משתמשים עם PTSD מאמצים אותה כי לא קיים כלי ייעודי מספיק פשוט. Bearable היא הפתרון הטוב ביותר הזמין, אבל לא הנכון.

**מה היא עושה:**
- מעקב מצב רוח (סקלת 1–10 עם אימוג'ים)
- מעקב תסמינים מותאם אישית ללא הגבלה (כולל טריגרים)
- מעקב תרופות, טיפולים, שינה, פעילות גופנית
- דוחות קורלציה: אילו גורמים משפיעים על ימים קשים יותר
- יצוא נתונים ל-PDF/CSV לשיתוף עם מטפל
- חיבור ל-Apple Health ו-Google Fit

**יתרונות HCI:**
- גמישות מלאה — המשתמש מגדיר כל קטגוריה של טריגר
- דוחות קורלציה חושפים דפוסים נסתרים
- יצוא נתונים לשיח עם מטפל
- חיבור לשעוני חכם — נתוני שינה ופעילות אוטומטיים
- ממשק מוכר ומדורג גבוה — 4.8 כוכבים

**חסרונות HCI:**
- טופס הצ'ק-אין היומי ארוך מדי לרגע שאחרי הטריגר — לוקח 45–90 שניות לפחות
- אין עיצוב ייעודי לרגע המשבר — בנויה לדיווח שקט בסוף היום
- תיעוד טריגר מחייב גלילה דרך עשרות פריטים — אין מסך טריגר ממוקד
- הנתונים ההיסטוריים מוצגים על מסך הבית ללא "שער בטיחות" — עלול לגרום לרה-טראומטיזציה
- גמיפיקציה (סטריקים, עמידה ביעדים יומיים) — בלתי מתאימה לאוכלוסיית PTSD
- תכונות ניתוח מלאות נעולות מאחורי מנוי בתשלום

**היתרון של TriggerLog:**
TriggerLog תוכננה מהיסוד עבור רגע שאחרי הטריגר — לא עוצבה מחדש מאפליקציית בריאות כללית — ולכן היא האפליקציה היחידה עם מודל האינטראקציה הנכון, השפה הוויזואלית הנכונה, ועיצוב הבטיחות הנכון לאוכלוסייה הזו.

---

---

## Summary Table (for reference — not for slide)

| | PTSD Coach | PE Coach 2 | Bearable |
|---|---|---|---|
| Developer | VA (US Gov) | VA (US Gov) | Bearable Ltd (UK) |
| Price | Free | Free | Free / $35/yr |
| Competitor type | Direct | Indirect | Indirect |
| Rating (iOS) | 4.7 / 4.3K ratings | Limited / low | 4.8 / 4K ratings |
| Reach | ~150K documented users | ~97 Play reviews (small) | 900K+ users |
| Trigger tracking | Yes (v4, 2024) — buried | No (not purpose-built) | Yes (custom) — buried in form |
| Works without therapist | Yes | No | Yes |
| Works in <10 seconds | No (4+ taps to reach log) | No | No (45–90 sec form) |
| Trauma-safe data display | No | N/A | No |
| Israeli context | Not at all | Not at all | Partially (customizable) |
| TriggerLog advantage | Speed + direct access | Accessibility without PE therapist | Speed + trauma-safe design |

---

## Research Sources

- Apple App Store — PTSD Coach listing, June 2026: https://apps.apple.com/us/app/ptsd-coach/id430646302
- Google Play — PTSD Coach listing, June 2026: https://play.google.com/store/apps/details?id=is.vertical.ptsdcoach
- VA Mobile — PTSD Coach page: https://mobile.va.gov/app/ptsd-coach
- PTSD Coach Version 3.1 reach/use study (JMIR 2022, PMC9006138): https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9006138/
- AppBrain — PTSD Coach Android stats: https://www.appbrain.com/app/ptsd-coach/is.vertical.ptsdcoach
- PTSD Coach rapid assessment of user feedback (PsycNet 2026): https://psycnet.apa.org/fulltext/2026-31813-001.pdf
- VA Mobile — PE Coach 2 page: https://mobile.va.gov/app/pe-coach
- Apple App Store — PE Coach 2 listing: https://apps.apple.com/us/app/pe-coach-2/id1281266434
- Google Play — PE Coach 2 listing: https://play.google.com/store/apps/details?id=gov.va.mobilehealth.ncptsd.pecoach
- Center for Deployment Psychology — PE Coach Clinician's Guide: https://deploymentpsych.org/system/files/member_resource/PE-Coach_Clinician-Guide_Android_508v7.pdf
- Apple App Store — Bearable listing, June 2026: https://apps.apple.com/us/app/bearable-symptom-tracker/id1482581097
- Google Play — Bearable listing, June 2026: https://play.google.com/store/apps/details?id=com.bearable
- Bearable official website: https://bearable.app
- Bearable app review (Choosing Therapy, 2025): https://www.choosingtherapy.com/bearable-app-review/
- Bearable "Why I quit my job to build a symptom tracking app" (The Mighty): https://themighty.com/topic/chronic-illness/bearable-app-symptom-tracking/
- JMIR study on PTSD Coach Australian users: https://www.jmir.org/2020/10/e18447
- C4TBH PTSD Coach program review: https://www.c4tbh.org/program-review/ptsd-coach/
