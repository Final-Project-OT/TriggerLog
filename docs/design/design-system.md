# Trigger Log — Design Document
**Course:** UI/UX Design
**Assignment:** Final Project
**Date:** 2026-05-25

---

## The Problem

People living with PTSD experience unexpected triggers throughout daily life — a sudden loud noise, a familiar smell, a crowded space, a specific time of day. In the moment, the brain enters survival mode and there is no room for analysis or reflection.

The problem is not the trigger itself. The problem is the **invisibility of patterns**.

Without knowing when, where, and what type of triggers occur most often, therapy moves slowly. The person cannot explain what is happening to them clearly. The therapist works with incomplete information. Progress is harder to measure.

Yet during a trigger, opening an app and writing about it is impossible — the cognitive and emotional load is too high.

---

## The Research Foundation

This design is grounded in clinical research, not assumptions.

**Ecological Momentary Assessment (EMA)** — the gold standard for trauma research — validates real-time, low-burden logging as the most accurate way to capture trigger data. Retrospective recall is distorted by avoidance and dissociation. Logging in the moment produces richer, more honest data.

**Retraumatization risk** — research found that diary-prompted voluntary trauma memories are experienced with the same vividness as involuntary intrusive memories. Reviewing a detailed log of past triggers can re-trigger the person as powerfully as the original event. This shapes every decision about what the user sees.

**Blended care model** — the validated clinical approach. The user collects data between sessions. The therapist reviews and interprets it during the session. The app enables this handoff — it does not replace the therapeutic relationship.

**One-button logging** — directly validated by a study on military PTSD using a single-button wearable device. Minimal-burden, single-action logging was sustained over time and produced clinically useful data.

---

## What the App Does Not Do

- Does not try to calm the user during a crisis
- Does not give advice, instructions, or coping suggestions
- Does not show the user analysis of their own suffering
- Does not replace therapy or a therapist
- Does not connect to any external system or government service
- Does not send notifications by default

These are not limitations. They are deliberate boundaries based on clinical understanding of what PTSD requires.

---

## Who It Is For

- Adults living with PTSD (any cause — combat, trauma, accidents, violence)
- Primary context: Israel, where PTSD is prevalent and underserved by accessible tools
- Designed to be used alongside an existing therapeutic relationship (CBT, EMDR, or other modalities)
- Not designed for acute or early-stage trauma without clinical supervision

---

## App Structure

The app has exactly two screens.

---

### Screen 1 — Log

The home screen. The only action available is logging a trigger.

**User flow:**
```
User feels a trigger → moment passes → opens app → fills log form → done
```

**Time to complete:** under 10 seconds.

**Fields:**

| Field | How it is captured | Required |
|---|---|---|
| Timestamp | Automatic — date and time of logging | Always |
| Location | Automatic — GPS coordinates (opt-in, set once) | Optional |
| Trigger type | User selects one from a short list | Optional |
| Intensity | User selects: Mild / Moderate / Severe | Optional |
| Quick note | Free text, short | Optional |

**Trigger type options:**
- Sound
- Visual
- Crowd / space
- Smell
- Memory / thought
- Body sensation
- Other / unknown

The "unknown" option is treated as equal to all others — research shows users often cannot accurately identify what triggered them, and that is clinically normal.

**Design principles for this screen:**
- Calm, non-alarming visual design — no red, no alarming iconography
- Large tap targets — motor control may still be slightly impaired
- No navigation, no menus, no decisions required beyond the fields
- Fields after timestamp are all optional — the user can tap log with zero input if needed
- No confirmation screen after logging — it is done immediately

---

### Screen 2 — History

The history screen contains the full log of all recorded entries.

**Access is gated.** Before the history screen loads, the user sees a confirmation popup:

> *"Viewing your trigger log can sometimes be overwhelming.*
> *It is most useful when reviewed together with your therapist.*
> *Are you in a calm, safe space right now?"*
>
> **[ I'm ready ]** &nbsp;&nbsp; **[ Not now ]**

This gate is present every time the user navigates to History. It is not dismissible permanently. It is not a warning — it is a redirection toward the intended use.

**What the History screen contains:**
- A list of all logged entries in reverse chronological order
- Each entry shows: date, time, trigger type, intensity, and note (if any)
- Location is stored but not displayed as a raw coordinate — shown as a relative label if recognizable ("Home", "Work") or not shown

**One available action:**

**"Share with my therapist"** — generates a structured PDF report containing:
- Full entry list with all fields
- Time-of-day heatmap (when triggers cluster)
- Trigger type breakdown
- Intensity distribution over time
- Location patterns (if location was enabled)

The report is designed to be handed to a therapist before or during a session. It is the primary output of the app.

---

## The User's Role vs The Therapist's Role

| | User | Therapist |
|---|---|---|
| **Action** | Logs triggers | Reviews patterns |
| **Screen** | Log form | Session report |
| **Sees** | Their entries (gated) | Full structured analysis |
| **Goal** | Capture the moment | Understand the pattern |

The user is the **data collector**. The therapist is the **analyst**. The app enables the handoff between them.

---

## Core UX Principles

| Principle | Why it matters for PTSD |
|---|---|
| Under 10 seconds to log | Cognitive load is still elevated post-trigger |
| No required text input | Writing requires executive function that may still be impaired |
| All fields except timestamp are optional | User can log with zero effort if needed |
| Calm, non-alarming visual design | Avoid re-activating the stress response |
| No notifications by default | Notifications themselves can be triggers |
| No data analysis shown to the user | Reviewing trigger data can retraumatize |
| Gate before history view | Industry best practice; removes app liability; clinically responsible |
| Share report as primary output | Positions the app correctly within a therapeutic relationship |
| Full user control of data | Trust and safety are non-negotiable for this population |

---

## Value Over Time

| After... | What the therapist gains |
|---|---|
| 2 weeks | First visible patterns — time of day, trigger types |
| 1 month | Clear picture of environments, intensity distribution |
| 3 months | Concrete before/after data as treatment progresses |
| 6 months | Measurable progress to validate therapy outcomes |

---

## What Makes This Different From Existing Apps

PTSD Coach (VA, 2024) now includes a trigger tracker — the space is not empty. Trigger Log differentiates on three dimensions:

1. **Speed** — PTSD Coach requires navigation through a multi-feature app. Trigger Log opens to the log form directly.
2. **Safety design** — the gate, the no-analysis principle, and the therapist-first report are not present in existing tools.
3. **Clarity of purpose** — Trigger Log does one thing. That single focus is itself a UX principle.
