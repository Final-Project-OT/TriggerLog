# Research: Clinical Value
**Question:** Does trigger logging actually help therapy? What do therapists use, and what are the risks?

---

## How Therapists Use Trigger Data

Both major evidence-based PTSD therapies directly incorporate trigger identification:

**Cognitive Behavioral Therapy (CBT):**
- Explicitly assigns between-session tracking as homework
- Clients keep logs of symptoms, triggers, and thoughts
- Data is reviewed in session to identify patterns and challenge cognitive distortions
- The therapist and client work together to identify treatment targets: *past memories, current triggers, and future goals*
- CBT is the therapy modality most aligned with the app's approach

**EMDR (Eye Movement Desensitization and Reprocessing):**
- Does not rely on homework or journaling between sessions
- Treatment focuses on in-session reprocessing of traumatic memories
- Current triggers are identified as treatment targets — but tracking them daily is not a standard EMDR assignment
- Users in EMDR therapy may have a therapist actively *not* asking them to track triggers

**Implication:** The app's value is strongest for users in CBT or similar talk-therapy modalities. For EMDR users, the app may operate independently of their therapy without direct integration — which may still be useful, but is a different use case.

---

## What Data Is Most Therapeutically Useful?

Based on clinical practice and research:

| Data point | Therapeutic value | Notes |
|---|---|---|
| Timestamp | High | Identifies time-of-day and day-of-week patterns |
| Location | High | Identifies places and environments associated with risk |
| Trigger type | Medium | Useful but often inaccurate (see taxonomy research) |
| Intensity / severity | High | Helps measure treatment progress over time |
| Context notes | High (in therapy) | Requires cognitive capacity the user may not have |

The app currently captures timestamp, location, and trigger type. **Intensity** is notably absent. Even a 1–3 scale (mild / moderate / severe) added to the interaction would significantly increase the data's therapeutic utility.

---

## The Retraumatization Risk: The Critical Finding

This is the most important safety concern identified in research:

> A study found that individuals with PTSD experienced **diary-prompted voluntary trauma memories with the same sense of nowness and vividness as involuntary intrusive trauma memories.**

In plain terms: deliberately reviewing a log of past triggers can reactivate the trauma response as powerfully as the trigger itself.

**What this means for the app:**

The logging action (one tap) is **low risk**. The user is briefly acknowledging something that already happened.

The patterns view — where the user reviews all their logged events — is **potentially high risk** without proper context or support.

**The concept doc currently treats the patterns view as pure upside. It is not.**

### Risk Scenarios:
1. User opens the patterns view alone, at night, and sees 47 trigger events over 3 weeks — this could be overwhelming or reactivating
2. User reviews location data and re-experiences the associations with specific places
3. User shares the data with a therapist and the therapist uses it productively — this is the intended use case, and it is safe

---

## The Therapist Integration Question

Research is clear that journaling and self-monitoring works best when:
- The therapist guides *when* and *how* to use it
- It is appropriate to the person's current phase of recovery
- It is not used in early, acute trauma recovery without clinical supervision

**The app currently has no mechanism for therapist involvement.** It is designed as a standalone tool. This is a real clinical gap.

Possible design responses:
1. Include a "share with therapist" export as the *primary* pathway for reviewing data (not solo browsing)
2. Add a readiness check before the patterns view ("Are you in a safe, calm space right now?")
3. Gate detailed pattern views to a specific "session prep" mode explicitly framed as something to do before a therapy appointment

---

## Key Takeaways

1. Trigger tracking is clinically validated and directly used in CBT — the app has strong clinical grounding
2. EMDR therapy is less reliant on between-session tracking — app value varies by therapy type
3. Intensity data is missing and would substantially increase clinical value
4. Reviewing the log carries a documented retraumatization risk — the patterns view needs a safety design
5. The app is safest and most effective when used in connection with a therapeutic relationship

---

## Sources

- [Using a Daily Diary for Monitoring Intrusive Memories of Trauma — PMC](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9976599/)
- [Capturing Intrusive Re-experiencing Using EMA — PMC](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3906879/)
- [The Use of Journaling in Trauma Therapy — Psychology Today](https://www.psychologytoday.com/us/blog/expressive-trauma-integration/202011/the-use-journaling-in-trauma-therapy)
- [EMDR Therapy: APA PTSD Guideline](https://www.apa.org/ptsd-guideline/treatments/eye-movement-reprocessing)
- [EMDR Therapy — HelpGuide](https://www.helpguide.org/mental-health/treatment/emdr-therapy)
- [Trauma-Informed Therapy — StatPearls, NCBI](https://www.ncbi.nlm.nih.gov/books/NBK604200/)
- [Retraumatization — BrightQuest Treatment Centers](https://www.brightquest.com/post-traumatic-stress-disorder/retraumatization/)
- [The Power of Journaling: Structured Approaches for Trauma Recovery — CPTSD Foundation](https://cptsdfoundation.org/2023/08/02/the-power-of-journaling-structured-approaches-for-trauma-recovery/)
