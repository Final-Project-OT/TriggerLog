# Research: Log Fields and Data Visibility
**Questions:** What data should the app capture? Should the user be able to view their own log?

---

## Fields to Log — What Research Recommends

EMA (Ecological Momentary Assessment) studies on PTSD — the gold standard methodology — collect the following fields:

| Field | Capture method | Clinical value |
|---|---|---|
| Timestamp | Automatic | Time-of-day and day-of-week patterns |
| Location | Automatic (opt-in) | Place-based risk mapping |
| Trigger type | User selects from short list | Approximate type clustering |
| Intensity / severity | User selects (mild / moderate / severe) | Measures treatment progress over time |
| Duration | User selects (minutes / under an hour / hours) | Severity indicator, recovery tracking |
| Social context | User selects (alone / with people) | Context for trigger environments |
| Physical response | Optional free field or checklist | Body-based symptom awareness |

**Most clinically actionable fields:** timestamp, location, intensity, duration. These four together give a therapist enough data to identify patterns and measure progress over the course of treatment.

**Research note:** Studies recommend tracking for at least **two weeks** before patterns become visible. Users should be informed of this at onboarding — the app has no value on day one, and that is expected.

---

## What the App Currently Has vs What It Should Have

| Field | Current concept | Recommendation |
|---|---|---|
| Timestamp | Yes (automatic) | Keep |
| Location | Yes (optional) | Keep |
| Trigger type | Yes (user selects) | Keep, make optional |
| Intensity | **Missing** | Add — highest value addition |
| Duration | **Missing** | Add as optional secondary field |
| Social context | **Missing** | Consider adding (alone / with others) |

---

## Should the User See Their Own Log?

**The validated model: Blended Care**

Research on PTSD apps supports a "blended care" model where:
- The user sees their own data — a summary of symptom levels and changes over time
- Deep review of individual entries happens with the therapist during the session
- The app enables the therapist to review between-session progress

This means the answer is not "block the user from their data." It is: **show the user a safe summary, reserve detailed entry-by-entry review for the therapeutic context.**

**What the user sees:** trends, frequency, week-over-week change
**What the therapist sees:** full raw log, individual entries, timestamps and locations

---

## The Gate / Disclaimer — Industry Standard

Only **64% of PTSD apps** include a basic disclaimer that the app does not substitute professional treatment. Research identifies this as the **minimum clinical standard** for any mental health app.

A confirmation gate before viewing the log is:
1. Clinically validated best practice
2. Standard in the industry (though underused)
3. The correct way to remove responsibility from the app and its creators

**Recommended gate text (combined A+C approach):**
> "Viewing your trigger log can sometimes be overwhelming.
> It is most useful when reviewed together with your therapist.
> Are you in a calm, safe space right now?"
>
> [ I'm ready ] &nbsp;&nbsp; [ Not now ]

This text does three things:
- Acknowledges the risk without alarming the user
- Redirects toward the intended use (with therapist)
- Gives the user full autonomy to proceed

---

## One-Button Logging — Directly Validated

A study on military PTSD used a **one-button wearable device** for self-tracking subjective experience. The study found that single-action, minimal-burden logging:
- Was sustained over time by participants
- Produced clinically useful data
- Was feasible during and after high-stress events

This directly validates the core interaction model of Trigger Log.

---

## Key Takeaways

1. Add **intensity** (mild / moderate / severe) — highest value missing field
2. Consider adding **duration** as a secondary optional field
3. User can and should see their own data — but as a **summary/trend**, not a raw list of entries
4. Full raw log is for the therapist, accessed via export / share
5. The gate before log review is **industry best practice** and removes app liability
6. One-button logging is directly validated in military PTSD research

---

## Sources

- [Posttraumatic Stress Disorder and Mobile Health: Scoping Literature Review — PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC5680516/)
- [Active Self-Tracking with a One-Button Wearable: Military PTSD Case Study — arXiv](https://arxiv.org/pdf/1703.03437)
- [Fostering Bilateral Patient-Clinician Engagement in Active Self-Tracking — arXiv](https://arxiv.org/pdf/1801.06352)
- [Help for Trauma from the App Stores? Systematic Review of PTSD Apps — PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC6968629/)
- [PTSD Symptom Tracker: Tracking Progress Over Time — Mission Connection Healthcare](https://missionconnectionhealthcare.com/blog/ptsd-symptom-tracker-what-it-is-how-to-use-it/)
- [Identifying your triggers with a PTSD trigger table — The Center for Growth](https://thecenterforgrowth.com/tips/identifying-your-triggers-with-a-ptsd-trigger-table)
- [Tracking Post-Trauma Psychopathology Using Mobile Applications — PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC5669390/)
- [Is User Data Safe in Mental Health Apps? — Telehealth.org](https://telehealth.org/news/are-you-keeping-user-data-safe-in-mental-health-apps/)
