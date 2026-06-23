# TriggerLog

A single-purpose mobile app for people living with PTSD to silently log trigger events in under 5 seconds.

## The Problem

People with PTSD experience unexpected triggers throughout daily life. During the moment, cognitive load is too high to do anything. After the moment passes, there is a brief window to act — but writing about it is still too much.

The real issue is the **invisibility of patterns**. Without knowing when, where, and what type of triggers occur most often, therapy moves slowly and both patient and therapist work with incomplete information.

## The Solution

One action: **log that a trigger just happened.**

- Timestamp captured automatically
- Location captured automatically (optional)
- Trigger type selected with a single tap (sound, crowd, smell, memory, visual, other)

Done in under 5 seconds. No writing. No explaining.

Over time, the app surfaces patterns — what times of day are hardest, which locations feel least safe, what trigger types appear most. This data can be shared with a therapist as a visual summary.

## Design Principles

| Principle | Reason |
|-----------|--------|
| Under 5 seconds to log | Cognitive load is still elevated post-trigger |
| No required text input | Writing requires executive function that may still be impaired |
| Calm, non-alarming visuals | Avoid re-activating the stress response |
| No notifications by default | Notifications themselves can be triggers |
| Full user control of data | Trust is non-negotiable for this population |

## Project Structure

```
├── prototype/       React + Vite interactive prototype
├── docs/
│   ├── design/      Concept, design system, flow diagram, prototype spec
│   ├── research/    Literature review, trigger taxonomy, user research
│   └── survey/      Survey instrument
└── presentation/    Final presentation materials
```

## Running the Prototype

```bash
cd prototype
npm install
npm run dev
```

## Context

UI/UX Design final project — Afeka College of Engineering, 2026.
