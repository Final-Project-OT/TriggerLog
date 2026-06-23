# TriggerLog — Project Spec
**Course:** UI/UX Design, Afeka College
**Team:** Tamar Aloni + Offir
**Deadline:** July 10, 2026
**Tool:** Figma (prototype)
**Deliverables:** PDF presentation (Hebrew, 13 slides) + interactive Figma prototype

---

## Scoring Breakdown
- 20 pts — Research
- 20 pts — Presentation
- 20 pts — Prototype
- **Total: 60 pts**

Critical rules:
- Everything in **Hebrew** (English = -25 pts automatically)
- Max 13 slides, PDF only
- Afeka logo on cover
- Prototype link on last slide
- Everyone presents (-5 per absent student)
- NO separate login/registration screen in flow diagram
- Submit to Moodle **before** the in-class presentation

---

## Timeline

**Week 1 (June 19–26) — Research**
- Define research goals (done in spec)
- Write 7 interview questions (done in spec)
- Recruit and interview 9–10 people from target audience
- Write quantitative survey (10 questions)
- Send survey, collect 20+ responses

**Week 2 (June 27 – July 3) — Analysis + Design**
- Analyze interview insights + survey results
- Write 4+ conclusions grounded in data
- Build 2 personas + use cases
- Define metaphor formally
- Build flow diagram
- Start Figma prototype

**Week 3 (July 4–9) — Prototype + Presentation**
- Finish Figma prototype (7 screens)
- Build presentation (13 slides, Hebrew, PDF)
- Review everything together
- Submit to Moodle

---

## Research Goals

1. **The post-trigger window** — Can people actually do anything in the window after a trigger passes? How long does it last for them?
2. **Current tracking behavior** — Do people currently track when/where triggers happen? How?
3. **Therapist communication** — How do people describe triggers to their therapist? What's hard to explain?
4. **Barriers to app use** — What would stop someone from opening an app right after a trigger?
5. **Relationship with own data** — Would users want to see their own trigger history? What feels scary vs. useful about that?

---

## Qualitative Interview Questions (7)

To be conducted with 9–10 people from target audience. Semi-structured — ask 2 spontaneous follow-up questions per interview based on the interviewee's answers.

**Q1** — *Goal 1: Post-trigger window*
"ספר/י לי על פעם אחרונה שחווית טריגר — מה קרה ברגעים שאחרי שהוא עבר? מה הצלחת לעשות ומה לא?"

**Q2** — *Goal 1: Recovery time*
"כשאתה/את יוצא/ת ממצב של טריגר — כמה זמן לוקח לך להרגיש שאתה/את חוזר/ת לעצמך?"

**Q3** — *Goal 2: Current tracking*
"האם אתה/את עושה משהו כדי לזכור מתי ואיפה קורים לך טריגרים? אם כן — מה?"

**Q4** — *Goal 3: Therapist communication*
"איך אתה/את מספר/ת לטיפול שלך על הטריגרים שלך? מה את/ה אומר/ת ומה קשה להסביר?"

**Q5** — *Goal 4: Barriers*
"אם היה לך אפליקציה שאפשר להפעיל בשניות אחרי טריגר — מה היה גורם לך לא לפתוח אותה?"

**Q6** — *Goal 4: What NOT to do*
"מה הכי חשוב לך שאפליקציה לא תעשה כשאתה/את במצב קשה?"

**Q7** — *Goal 5: Relationship with own data*
"אם היה לך תיעוד של כל הטריגרים שלך מהחודש האחרון — היית רוצה לראות אותו? מה מרגיש מפחיד בזה ומה מרגיש שימושי?"

After all interviews: identify **2 recurring new questions** → these become Q9 and Q10 of the quantitative survey.

---

## Quantitative Survey (10 Questions)

Min 20 responses. Present results as charts only.

**Q1** — How often do you experience triggers?
- Every day / A few times a week / A few times a month / Rarely

**Q2** — How long does it usually take to feel like yourself again after a trigger?
- Under 30 min / 30–60 min / 1–3 hours / More than 3 hours

**Q3** — Do you currently track when or where triggers happen?
- Yes, regularly / Sometimes / No

**Q4** — If you've tried tracking triggers — how? (select all that apply)
- Notes app / Physical journal / Told therapist verbally / Nothing / Other

**Q5** — Have you ever tried using a mental health app?
- Yes and I still use it / Yes but I stopped / No

**Q6** — How do you currently communicate about triggers with your therapist?
- I describe from memory / I bring notes / I struggle to explain / I don't have a therapist

**Q7** — Would you use an app that lets you log a trigger in under 5 seconds, no typing required?
- Definitely / Probably / Probably not / Definitely not

**Q8** — How important is it that the app's visual design feels calm and non-alarming?
- Very important / Somewhat important / Doesn't matter to me

**Q9 & Q10** — To be defined after qualitative interviews based on what came up repeatedly.

---

## Academic Paper

**Pollmann Y, Clancy KJ, Devignes Q, Ren B, Kaufman M, Rosso IM (2024)**
*Ecological Momentary Assessments of Trauma-Related Intrusive Memories: Potential Clinical Utility*
McLean Hospital / Harvard Medical School. medRxiv preprint, May 2024.

| Section | Content |
|---|---|
| Research question | Can completing a brief EMA protocol that logs trauma-related intrusive memories reduce intrusion symptoms — without any therapy? |
| Method | N=131 trauma-exposed adults. 2-week EMA period. 5 daily surveys on phone: 3 logged intrusive memory properties (vividness, emotional intensity, sense of nowness, 0–4 scale), 1 assessed daily PTSD symptoms. No treatment given — only logging. |
| Results | Intrusion symptoms (Cluster B) significantly declined (p=0.006). Other PTSD clusters (avoidance, mood, hyperarousal) did NOT change. Effect was specific to intrusive memories (p<0.001). Independent of survey completion rate, PTSD severity, or ongoing treatment. |
| Conclusions | Logging trauma memories in real-time may itself be therapeutic — similar to exposure therapy but without a clinician. Consistent, low-burden logging can reduce the very symptom it tracks. Scalable and accessible. |
| Criticism | (1) No control group — can't rule out regression to the mean. (2) Preprint — not yet peer-reviewed. (3) Their protocol was intensive (3 detailed surveys/day) — TriggerLog's single-tap is much lighter and may not replicate the therapeutic effect. |
| Connection to TriggerLog | Directly validates real-time logging of trauma events as clinically meaningful. Supports the "no clinician needed" design. Justifies frictionless, low-burden interaction as the core mechanic. |
| What we learn for the interface | Consistency matters more than depth. A minimal interaction repeated daily produces measurable signal. This justifies making the log as frictionless as possible. |

---

## Personas

### Persona 1 — Primary (Person with PTSD)
**רוני, 34**
- Veteran, Tel Aviv, works in tech
- Diagnosed with PTSD following military service
- In CBT therapy, bi-weekly sessions
- Tech comfort: High
- Behavior: Struggles to explain triggers to therapist verbally. Tried journaling once, stopped. Wants to understand his patterns without having to articulate them.
- Goal: Capture the moment effortlessly; show therapist concrete data
- Fear: Apps that demand too much when he's overwhelmed

### Persona 2 — Secondary (Therapist)
**ד"ר שיר, 42**
- Clinical psychologist, private practice, Tel Aviv
- Works primarily with trauma survivors using CBT
- Tech comfort: Medium
- Behavior: Often works with incomplete information between sessions. Clients struggle to describe their week.
- Goal: Get accurate between-session data without adding burden to the client
- Fear: Tools that give clients raw data that overwhelms or retraumatizes them

---

## Use Cases (for רוני)

**Primary use case:**
רוני נמצא ברכבת בדרך לעבודה. קול פתאומי מבהיל אותו וגורם לתגובת טריגר. כשהתגובה מתחילה לשקוע, הוא פותח את האפליקציה, מקיש "תיעוד", בוחר "צליל" כסוג הטריגר ו"בינוני" כעצמה — וסוגר. הכל לוקח פחות מ-10 שניות.

**Secondary use case (branches from same scenario):**
יום לפני הפגישה עם המטפלת, רוני פותח את ההיסטוריה, עובר על שאלת הבטיחות, ומשתמש ב"שתף עם המטפלת" כדי לשלוח את הדוח לפני הפגישה.

---

## Metaphor

**Sky + Weather + Stars**

The app feels like a soft, open sky. Weather events (triggers) pass through it — you can't control them, but you can notice and record them. Over time, logged triggers become stars that form a constellation — a pattern that only becomes visible with distance and time.

- **Logging moment** = reporting a weather event (a cloud, a storm that passed)
- **History view** = a star map — each trigger is a dot of light, patterns emerge slowly
- **Color palette** = pale blues, soft whites, warm dusk lavenders/purples — calm and spacious, never alarming

The metaphor must be felt throughout the entire prototype, not only on one screen.

**Slide requirements:**
- Real photo of a dusk sky with emerging stars
- Color palette derived from that image
- Explanation of why this metaphor fits a PTSD app

---

## Flow Diagram

**Deep — Primary flow (5 screens):**

| # | Screen | Key elements |
|---|---|---|
| 1 | Splash | Sky background, app logo, app name, tagline |
| 2 | Log (Home) | 7 trigger type chips, intensity selector (mild/moderate/severe), quick note field, Log button, History nav icon, Settings icon |
| 3 | Safety gate | Popup overlay, warning text, "I'm ready" + "Not now" buttons |
| 4 | History | Reverse-chronological entries (date, type, intensity), "Share with therapist" button |
| 5 | Report preview | Heatmap, trigger type breakdown, intensity trend over time |

**Wide — Complementary screens (2 screens, first level only):**

| # | Screen | Key elements |
|---|---|---|
| 6 | Settings | Location permission toggle, data preferences |
| 7 | About | App description, clinical disclaimer |

**Navigation:**
- Splash → Log (always)
- Log → Safety gate → History → Report preview
- Log → Settings (icon)
- Log → About (icon)
- All screens → Log (home/back)

---

## Prototype Scope (Figma)

**7 screens to build:**
1. Splash
2. Log (Home)
3. Safety gate (popup)
4. History
5. Report preview
6. Settings
7. About

**Flow 1 — Primary use case (רוני on the train):**
Splash → Log → select "Sound" + "Moderate" → tap Log → confirmation

**Flow 2 — Secondary use case (before therapy session):**
Log → History icon → Safety gate → History list → Share with therapist → Report preview

**Metaphor must be visible in:**
- Splash: full sky background
- Log: soft sky colors, calm atmosphere
- History: star/dot visual for each entry
- Report: constellation-style pattern view

**Design principles to apply (heuristics):**
- Large tap targets (motor control may be impaired)
- No navigation required to reach the log
- Calm colors, no red, no alarming iconography
- All fields except timestamp are optional
- Clear system status after logging (confirmation)

---

## Presentation Slide Map (13 slides, Hebrew)

| # | Slide | Notes |
|---|---|---|
| 1 | Cover | App name, course name, Afeka logo, group number, Tamar + Offir |
| 2 | Product definition | What it does, problem, primary goal, 3 secondary goals, functional objectives, usage context |
| 3 | Target audience | Geographic, demographic, psychographic + size estimate (הלמ"ס) |
| 4 | Literature review | Pollmann 2024 — structured summary + criticism + connection |
| 5 | Market analysis | 3 competitors with logos, screenshots, HCI pros/cons |
| 6 | Research goals + interview | 5 goals + 7 questions |
| 7 | Interview insights | Findings, surprises, summary |
| 8 | Survey results | Charts only |
| 9 | User analysis conclusions | 4+ conclusions grounded in data |
| 10 | Personas | רוני + ד"ר שיר |
| 11 | Use cases | Primary + secondary for רוני |
| 12 | Metaphor + flow diagram | Sky concept, image, palette + flow |
| 13 | Prototype link | Figma link |

Slides 7–9 cannot be filled until interviews and survey are complete (end of Week 1).
