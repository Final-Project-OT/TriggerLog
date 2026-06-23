# Research: Validating the Core Thesis
**Question:** Is "everything emerges from a single logged action" actually true? What is the minimum data point that has therapeutic value?

---

## The Thesis

> A single tap, repeated over time, becomes a map.  
> Everything — the patterns, the insights, the therapy value — emerges naturally from that single repeated action.

This is a strong, elegant claim. Research both supports and complicates it.

---

## What Research Supports

**Real-time logging surfaces patterns that retrospective recall misses.**  
EMA (Ecological Momentary Assessment) studies consistently show that moment-of-experience logging produces richer, more accurate data than end-of-week or end-of-day reflection. For PTSD specifically, retrospective recall is distorted by avoidance, dissociation, and mood-congruent memory.

**Timestamp data alone has meaningful clinical value.**  
Time-of-day and day-of-week patterns in trigger events are directly usable in therapy. A therapist seeing that 80% of events occur between 8–10 PM can adjust treatment and coping plans immediately.

**Location data has high predictive value.**  
Identifying that certain environments (transit, workplace, specific neighborhoods) correlate with trigger events is one of the most actionable insights a therapist can work with.

**Frequency data is measurable progress.**  
Counting logged events over time — week 1 vs week 8 of therapy — gives a concrete before/after signal. This is hard to get any other way.

---

## What Research Complicates

**People often do not know which trigger caused their response.**  
A 2013 study found participants were significantly unaware of what triggered their intrusive memories. The "trigger type" selection — sound, crowd, smell, etc. — may be the user's best guess, not the real cause. Patterns based on trigger type may be misleading.

**A single data dimension is not enough for full clinical picture.**  
Pattern recognition studies in health contexts show that even 15 symptoms with 3 values (present/absent/unknown) generate meaningful clinical signal. A single binary event log (trigger happened / didn't happen) is the minimum possible input. It produces time and frequency patterns but loses:
- Severity (was this a 2/10 or a 10/10 event?)
- Recovery time (did it pass in 10 minutes or 4 hours?)
- Context (was the person alone, at work, with family?)

**The thesis holds for timestamp and location. It is weaker for trigger type.**  
Time + place = strong patterns.  
Type = approximate signal with known accuracy limits.

---

## Revised Thesis

The single-tap creates a **timestamped location log**. That alone has genuine clinical value.

The trigger type selection adds signal — but as an optional enhancement, not as the core claim. Patterns *do* emerge from the single action. But the richest patterns come from the metadata the app captures automatically (when, where) — not from the label the user applies.

---

## The Shazam Analogy — Does It Hold?

The concept uses Shazam as a model: one action, immediate value.

| Shazam | Trigger Log |
|---|---|
| Identifies a song in the moment | Logs a trigger in the moment |
| Value is immediate (you get the answer now) | Value is delayed (patterns emerge over weeks) |
| Works on a single use | Requires repeated use to deliver value |
| No emotional cost to using | Using it means something difficult just happened |

The analogy is useful for justifying the single-purpose design. It is less accurate about the value timing — Shazam's value is instant, Trigger Log's value is longitudinal. This matters for onboarding and user expectations.

A closer analogy might be a **sleep tracker**: you do one simple thing (log that you slept), and insights emerge over weeks without any single entry being meaningful on its own.

---

## Minimum Viable Data for Clinical Value

| Data | How it's captured | Clinical use |
|---|---|---|
| Timestamp | Automatic | Time-of-day, day-of-week patterns |
| Location | Automatic (opt-in) | Place-based risk mapping |
| Trigger type | User selects (optional) | Approximate type clustering |
| Intensity (1–3) | User selects (optional) | Progress measurement over time |

The app is currently missing intensity. Adding a single optional 3-point scale (mild / medium / severe) — without making it required — would substantially increase the data's value without meaningfully increasing the interaction burden.

---

## Key Takeaways

1. The core thesis is **validated** — timestamp + location data reliably produces clinically useful patterns
2. The thesis is **overstated** when applied to trigger type — type accuracy is limited
3. The single most underrated data point is **intensity** — easy to add, high clinical value
4. The Shazam analogy is useful but imperfect — sleep tracker is a better model for longitudinal value
5. The app does not need more features. It may need one more optional data field (intensity).

---

## Sources

- [Capturing Intrusive Re-experiencing Using Ecological Momentary Assessment — PMC](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3906879/)
- [Using a Daily Diary for Monitoring Intrusive Memories of Trauma — PMC](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9976599/)
- [Applications of Pattern Recognition in Health and Medicine — ResearchGate](https://www.researchgate.net/publication/303525883_Applications_of_Pattern_Recognition_Algorithm_in_Health_and_Medicine_A)
- [Pattern Recognition in Medical Decision Support — PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC6595383/)
- [Trauma Triggers: How to Identify and Overcome — PsychCentral](https://psychcentral.com/health/trauma-triggers)
- [Identifying your triggers with a PTSD trigger table — The Center for Growth](https://thecenterforgrowth.com/tips/identifying-your-triggers-with-a-ptsd-trigger-table)
