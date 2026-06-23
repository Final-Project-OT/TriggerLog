# Research Summary — TriggerLog

Short overview of everything we researched, what's in each folder, and what we concluded.

---

## triggers/

**What it is:** Background research on how PTSD triggers work — what they are, when they can be logged, why logging helps, and whether the core concept of the app is clinically valid.

**4 files:**

**trigger-taxonomy.md** — What are the recognized trigger types?
- Triggers are either external (sounds, smells, places, people) or internal (memories, body sensations, emotional states)
- Users often don't know exactly what triggered them — a 2013 study found people were significantly unaware of what caused their intrusions
- Conclusion: trigger type selection in the app must be optional, short (5–7 options), and must include "unknown"

**logging-window.md** — Can people actually log something right after a trigger?
- Cognitive capacity (memory, attention, decision-making) is impaired during and after a trigger
- Recovery to baseline takes 20–60 minutes for most people, longer for some
- The right moment to log is 5–20 minutes after the peak — not during it
- EMA (real-time data collection) is validated research methodology for trauma — far more accurate than end-of-day journaling
- Conclusion: the app concept is realistic. The logging window exists.

**clinical-value.md** — Does trigger logging actually help therapy?
- CBT (the most common PTSD therapy) explicitly uses between-session tracking as homework — TriggerLog fits directly into this
- The most therapeutically valuable data points are: timestamp, location, intensity, and context notes
- Critical risk: reviewing a log of past triggers can reactivate trauma as powerfully as the trigger itself — this is the scientific justification for the Safety Gate screen
- Conclusion: logging is low risk; reviewing history is high risk without proper context → Safety Gate is not optional

**core-thesis.md** — Is "one tap becomes a map" actually true?
- Timestamp and location data alone have strong clinical value — time-of-day and place patterns are immediately actionable in therapy
- Trigger type is an approximate signal, not a precise one — patterns from type data are useful but not definitive
- Frequency over time is the clearest measure of therapy progress
- Conclusion: the thesis holds for time + place. Trigger type is a bonus, not the core claim.

---

## competitors/

**What it is:** What apps already exist in this space, and how is TriggerLog different.

**2 files:**

**existing-solutions.md** — Broad overview of the landscape (research phase)

**competitor-analysis.md** — Detailed HCI analysis of the 3 main competitors (presentation deliverable)

**Key findings:**
- **PTSD Coach (VA)** — direct competitor, 150K+ users, clinically backed, free. Problem: trigger tracking is buried 4 taps deep. High cognitive load at exactly the wrong moment.
- **PE Coach (VA)** — indirect competitor, only works with a licensed PE therapist. Useless without one. Not available to general public.
- **Bearable** — indirect competitor, general symptom tracker. Flexible but 45–90 seconds per check-in — too long for post-trigger use. No safety gate before history view.
- **Our advantage:** TriggerLog opens directly to the log form. Zero navigation. Designed specifically for the post-trigger moment. Safety Gate built in.

---

## audience/

**What it is:** How big is the potential user base in Israel.

**1 file: audience-size.md**

**Key findings:**
- ~580,000 Israelis suffer from severe PTSD symptoms (State Comptroller of Israel, February 2025)
- ~520,000 additional cases projected post-October 7 (Katsoty et al., 2024)
- Israel's baseline PTSD rate (9%) is more than double the global average (3.9%)
- Target user: 25–50, in active CBT treatment, medium-high tech comfort, motivated to understand their own patterns

---

## literature/

**What it is:** The one academic paper we use as scientific backing for the project.

**2 files:**

**pollmann-2024-ema.pdf** — The original paper

**pollmann-2024-insights.md** — Our notes and conclusions from the paper

**Key findings:**
- 131 trauma survivors logged intrusive memories via smartphone for 2 weeks — no treatment, just logging
- Intrusion symptoms (flashbacks, intrusive memories) dropped significantly (p=0.006)
- Effect was specific to intrusions — not to avoidance, mood, or hyperarousal
- Effect was independent of how severe symptoms were at the start
- Conclusion: simply logging a trauma event — repeatedly, in real time — changes something. This is the scientific foundation for TriggerLog's core design.
- Caveat: pre-print, no control group, more intensive than our app (5 check-ins/day vs. one tap)

---

## What All of This Tells Us

Every design decision in TriggerLog traces back to one of these findings:

| Design decision | Research source |
|---|---|
| App opens directly to log form | PTSD Coach HCI failure (competitors) |
| All fields optional except timestamp | Trigger taxonomy — users don't always know what triggered them |
| No logging during the trigger — only after | Logging window research |
| Safety Gate before history view | Clinical value — retraumatization risk |
| Notifications off by default | Clinical value — notifications can be triggers |
| Sky/calm visual palette | Clinical value — visual environment affects arousal |
| One-tap logging in under 10 seconds | EMA compliance research + logging window |
| Export report to therapist | CBT integration — between-session data use |
