# User Research Findings — TriggerLog

Interviews: 9 participants | Survey: 24 respondents | Method: semi-structured interviews + Google Forms

---

## Interview Findings

### What surprised us

We expected the main barrier to be "not knowing what to write." What we found instead:
- The barrier is **opening the app itself** — the physical gesture of pulling out a phone and launching something feels impossible at the peak of a trigger
- We expected fear of "re-living the experience." The actual fear is **seeing how often it happens** — "I didn't know it was this frequent"

### Did we meet all 5 research goals?

| Goal | Finding |
|---|---|
| Goal 1 — cognitive window post-trigger | 15–30 minutes after the peak: cognitive "fog." Simple physical actions possible; writing and articulating — not. |
| Goal 2 — current tracking habits | Everyone had tried to track at some point. No one continued past two weeks. |
| Goal 3 — therapist communication | "I don't remember exactly" and "it's hard to explain" — recurring phrases. Session time goes to reconstruction, not work. |
| Goal 4 — barriers to app use | Opening an app = a cognitively complex action at the worst possible moment. |
| Goal 5 — relationship to own data | Ambivalent: want to know, afraid of what they'll find. |

### Key insights

- **The right moment to log is not the trigger — it's after it.** About 5–20 minutes after the wave subsides, most participants felt "half-returned to themselves." That's the window.
- **Journaling failed not because of laziness — but because of format.** Writing, articulating, finding time — none of that fits the moment. A one-tap action does.
- **"I don't know how to explain to my therapist what happened"** — appeared in 7 out of 9 interviews in different forms. Trigger memory is blurry. Real-time logging creates a record that memory cannot.
- **Data is both promise and danger.** Half the participants wanted to see their patterns badly; half were afraid. Both sides are valid — which is why the Safety Gate is a design requirement, not a nice-to-have.
- **Calm design is not aesthetic — it's functional.** Participants said health apps they'd tried felt "clinical" and "threatening." Colors, animations, and direct language all affect willingness to open the app.

---

## Survey Results

24 respondents | Anonymous | Google Forms

| # | Question | Key result |
|---|---|---|
| 1 | Trigger frequency | 71% experience triggers at least once a week (46% several times/week, 25% daily) |
| 2 | Recovery time | 67% recover within an hour — the logging window exists |
| 3 | Current tracking | 88% do not track consistently (63% never, 25% sometimes) |
| 4 | How they track (multi-select) | 54% tell therapist verbally; 42% do nothing; 21% notes app; 13% written journal |
| 5 | Mental health app experience | 84% not currently using one (46% never tried, 38% tried and stopped) |
| 6 | Therapist communication | 58% describe from memory; 29% say it's hard to explain; only 8% bring notes |
| 7 | Openness to 5-second logging app | 75% open to trying it — if it's really that fast |
| 8 | Importance of calm design | 96% say calm visual design matters (71% say very important) |

---

## User Analysis Conclusions

Each conclusion is grounded in a data point and leads directly to a design decision.

**Conclusion 1 — People want to track; they simply can't**
88% don't track consistently — but interviews show most have tried.
The failure is in the tool, not the intention.
→ Design: every field except timestamp is fully optional.

**Conclusion 2 — The logging window is 5–20 minutes after the trigger, not during it**
67% recover within an hour. Interviews: the "half-returned" moment arrives 5–20 minutes after peak distress.
→ Design: the log screen must open instantly — no splash delay, no loading, no navigation.

**Conclusion 3 — Memory is unreliable; the real-time record is what matters**
58% report to their therapist from memory; 29% say it's hard to explain.
EMA research confirms: real-time logging is 4× more accurate than retrospective reporting.
→ Design: the most important data point is the automatic timestamp — not what the user writes.

**Conclusion 4 — Calm design is a functional requirement, not aesthetics**
96% said calm design is important. Interviews: red colors, sharp animations, and push notifications are triggers in themselves.
→ Design: sky blue palette only. Red banned as background. Notifications off by default.

**Conclusion 5 — Data is simultaneously a promise and a risk**
Interviews: roughly half the participants feared seeing "how many times this happened."
Yet 75% were willing to try an app that logs in 5 seconds.
→ Design: Safety Gate before every entry to history — mandatory, not optional.

---

## Personas

### Persona 1 — Roni (primary user)

| Field | Details |
|---|---|
| Name | רוני |
| Age | 34 |
| Background | Combat veteran, lives in Tel Aviv, works in tech |
| Diagnosis | PTSD following military service |
| Treatment | CBT, bi-weekly sessions |
| Tech comfort | High |

**Behavior pattern:**
Struggles to explain to professionals what happened to him. Tried journaling — stopped after a week. Triggers arrive without warning, and after they pass he doesn't remember exactly what happened.

**What he wants from TriggerLog:**
To understand his own patterns without having to put them into words.

**Fear / barrier:**
Apps that demand too much from him exactly when he's already overwhelmed.

**Research backing:**
7 of 9 interview participants reported difficulty explaining triggers to their therapist verbally. 88% of survey respondents don't track consistently.

---

### Persona 2 — Dr. Shir (secondary user)

| Field | Details |
|---|---|
| Name | ד"ר שיר |
| Age | 42 |
| Background | Clinical psychologist, private practice, Tel Aviv |
| Specialization | Trauma survivors, CBT |
| Tech comfort | Medium |

**Work pattern:**
Frequently works with incomplete information between sessions. Patients struggle to describe the past week — unreliable memory, shame, difficulty explaining. Sessions spend most of their time on "what happened" and less on "what do we do about it."

**What she wants from TriggerLog:**
Real field data — without adding burden to the patient.

**Fear / barrier:**
Tools that expose patients to raw data without support — risking re-traumatization.
