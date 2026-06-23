# TriggerLog Complete Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Completely replace the TriggerLog prototype's sky/constellation design with a Vitality Path-inspired teal/card-based design, whack-a-mole metaphor, Shazam-style main button, and 8 screens.

**Architecture:** React + Vite SPA. `screen` state string in App.jsx controls which screen renders. No router. CSS custom properties in App.css for all tokens. Safety Gate is a modal overlay positioned over whatever screen is active. BottomNav rendered inside each screen component (existing pattern).

**Tech Stack:** React 18, Vite, Lucide React (already installed), CSS custom properties, inline styles + CSS classes. No new npm packages.

## Global Constraints

- All UI text must be in Hebrew (RTL) — English text = -25 pts on the assignment
- `direction: rtl` set on `html` in index.css (already present — do not remove)
- Font: `Assistant` — already loaded via Google Fonts in index.html
- No emoji in UI — Lucide React SVG icons only
- No new npm dependencies — use only React + Lucide React
- Mobile-first, max-width 430px
- All data is mock/hardcoded — no backend

---

## File Map

**Modify:**
- `prototype/src/App.css` — full replacement: new tokens, remove old classes, add new ones
- `prototype/src/App.jsx` — new screen routing: onboarding, main, cause-selection; 3 screens removed
- `prototype/src/components/BottomNav.jsx` — 3-tab version
- `prototype/src/components/Icons.jsx` — replace AppLogo with new teal SVG; remove ConstellationIcon + GlowStar
- `prototype/src/components/SafetyGate.jsx` — soft teal redesign, remove red/alarm styling
- `prototype/src/screens/Splash.jsx` — remove star animations, new gradient + tagline
- `prototype/src/screens/History.jsx` — week strip, trend chart, highlights, filter chips, entry list
- `prototype/src/screens/ReportPreview.jsx` — replace heatmap/donut with PDF card + checklist
- `prototype/src/screens/Settings.jsx` — add export row, fold About in, teal tokens

**Create:**
- `prototype/src/screens/Onboarding.jsx`
- `prototype/src/screens/Main.jsx`
- `prototype/src/screens/CauseSelection.jsx`
- `prototype/src/components/ConfirmationFlash.jsx`

**Delete (Task 11):**
- `prototype/src/screens/Log.jsx`
- `prototype/src/screens/About.jsx`

---

### Task 1: Design System

**Files:**
- Modify: `prototype/src/App.css` (full replacement)

**Interfaces:**
- Produces: CSS custom properties and utility classes consumed by all screens

- [ ] **Step 1: Replace App.css entirely**

```css
/* ═══════════════════════════════════════════════════════
   TRIGGERLOG — DESIGN SYSTEM
   Vitality Path × Whack-a-Mole Metaphor
   ═══════════════════════════════════════════════════════ */

/* ─── Color tokens ─── */
:root {
  --teal-primary:   #3DBFAA;
  --teal-dark:      #2D9B8A;
  --teal-light:     #E0F5F1;
  --bg-screen:      #F0FAF8;
  --card-surface:   #FFFFFF;
  --accent-green:   #7BC67A;
  --text-dark:      #1A2B2B;
  --text-muted:     #6B8585;
  --divider:        #E0EFED;
  --destructive:    #E05252;

  --shadow-card:    0 2px 12px rgba(0, 0, 0, 0.07);
  --shadow-btn:     0 4px 16px rgba(61, 191, 170, 0.30);
  --shadow-modal:   0 16px 48px rgba(0, 0, 0, 0.28);

  --margin-screen:  20px;
  --gap-section:    20px;
  --gap-card:       12px;
  --card-radius:    16px;
  --chip-radius:    20px;

  --ease-out:       cubic-bezier(0.16, 1, 0.3, 1);
  --dur-fast:       120ms;
  --dur-normal:     220ms;
  --dur-slow:       360ms;
}

/* ─── Keyframes ─── */
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes confirmPulse {
  0%   { transform: scale(1); }
  40%  { transform: scale(1.04); }
  100% { transform: scale(1); }
}

@keyframes ripple {
  0%   { transform: scale(1);   opacity: 0.55; }
  100% { transform: scale(1.5); opacity: 0; }
}

@keyframes buttonPress {
  0%   { transform: scale(1); }
  35%  { transform: scale(0.93); }
  100% { transform: scale(1); }
}

@keyframes flashIn {
  0%   { opacity: 0; transform: scale(0.85); }
  60%  { opacity: 1; transform: scale(1.04); }
  100% { opacity: 1; transform: scale(1); }
}

/* ─── Screen wrapper ─── */
.screen {
  min-height: 100dvh;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  animation: fadeIn var(--dur-normal) var(--ease-out);
}

/* ─── Card ─── */
.card {
  background: var(--card-surface);
  border-radius: var(--card-radius);
  box-shadow: var(--shadow-card);
  overflow: hidden;
}

/* ─── Filter chip (History filters) ─── */
.filter-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  padding: 0 16px;
  border-radius: var(--chip-radius);
  font-family: 'Assistant', sans-serif;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  background: var(--card-surface);
  border: 1.5px solid var(--divider);
  color: var(--text-muted);
  transition:
    background-color var(--dur-fast) var(--ease-out),
    border-color     var(--dur-fast) var(--ease-out),
    color            var(--dur-fast) var(--ease-out);
}

.filter-chip.active {
  background: var(--teal-primary);
  border-color: var(--teal-primary);
  color: #fff;
}

/* ─── Cause card (CauseSelection grid) ─── */
.cause-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 20px 12px;
  background: var(--card-surface);
  border-radius: var(--card-radius);
  box-shadow: var(--shadow-card);
  border: 2px solid transparent;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  transition:
    border-color var(--dur-fast) var(--ease-out),
    box-shadow   var(--dur-fast) var(--ease-out),
    transform    var(--dur-fast) var(--ease-out);
  text-align: center;
}

.cause-card:active {
  transform: scale(0.96);
}

.cause-card.selected {
  border-color: var(--teal-primary);
  box-shadow: 0 0 0 3px rgba(61, 191, 170, 0.15), var(--shadow-card);
}

/* ─── Primary button ─── */
.btn-primary {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 56px;
  border-radius: 28px;
  font-family: 'Assistant', sans-serif;
  font-size: 17px;
  font-weight: 700;
  color: #fff;
  background: var(--teal-primary);
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  border: none;
  box-shadow: var(--shadow-btn);
  transition:
    background-color var(--dur-normal) var(--ease-out),
    transform        var(--dur-fast)   var(--ease-out),
    box-shadow       var(--dur-normal) var(--ease-out);
}

.btn-primary:active {
  transform: scale(0.98);
  background: var(--teal-dark);
}

.btn-primary.confirmed {
  background: var(--accent-green);
  box-shadow: 0 4px 16px rgba(123, 198, 122, 0.40);
  animation: confirmPulse var(--dur-slow) var(--ease-out);
}

/* ─── Outline button ─── */
.btn-outline {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 56px;
  border-radius: 28px;
  font-family: 'Assistant', sans-serif;
  font-size: 17px;
  font-weight: 600;
  color: var(--teal-primary);
  background: transparent;
  border: 1.5px solid var(--teal-primary);
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  transition:
    background-color var(--dur-fast) var(--ease-out),
    transform        var(--dur-fast) var(--ease-out);
}

.btn-outline:active {
  background: rgba(61, 191, 170, 0.06);
  transform: scale(0.98);
}

/* ─── Text button ─── */
.btn-text {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  font-family: 'Assistant', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: var(--text-muted);
  background: transparent;
  border: none;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  transition: color var(--dur-fast) var(--ease-out);
}

.btn-text:active {
  color: var(--text-dark);
}

/* ─── Icon button ─── */
.icon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  transition:
    background-color var(--dur-fast) var(--ease-out),
    opacity          var(--dur-fast) var(--ease-out);
}

.icon-btn:active {
  opacity: 0.55;
}

/* ─── Toggle switch ─── */
.toggle-track {
  position: relative;
  width: 51px;
  height: 31px;
  border-radius: 15.5px;
  background: rgba(107, 133, 133, 0.25);
  cursor: pointer;
  flex-shrink: 0;
  transition: background-color var(--dur-normal) var(--ease-out);
}

.toggle-track.on {
  background: var(--teal-primary);
}

.toggle-thumb {
  position: absolute;
  width: 27px;
  height: 27px;
  border-radius: 50%;
  background: #fff;
  top: 2px;
  inset-inline-end: 2px;
  transition: inset-inline-end var(--dur-normal) var(--ease-out);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.22);
}

.toggle-track.on .toggle-thumb {
  inset-inline-end: 22px;
}

/* ─── Settings card + row ─── */
.settings-card {
  background: var(--card-surface);
  border-radius: var(--card-radius);
  margin-inline: var(--margin-screen);
  box-shadow: var(--shadow-card);
  overflow: hidden;
}

.settings-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-inline: 20px;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  transition: background-color var(--dur-fast) var(--ease-out);
}

.settings-row:active {
  background: rgba(0, 0, 0, 0.03);
}

/* ─── Bottom nav ─── */
.bottom-nav {
  position: fixed;
  bottom: 0;
  inset-inline: 0;
  height: 72px;
  background: rgba(255, 255, 255, 0.92);
  -webkit-backdrop-filter: blur(12px) saturate(1.4);
  backdrop-filter: blur(12px) saturate(1.4);
  border-top: 1px solid var(--divider);
  border-radius: 16px 16px 0 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding-bottom: env(safe-area-inset-bottom, 0px);
  z-index: 200;
}

/* ─── Typography classes ─── */
.heading-1 {
  font-family: 'Assistant', sans-serif;
  font-size: 28px;
  font-weight: 800;
  line-height: 36px;
  text-align: start;
}

.heading-2 {
  font-family: 'Assistant', sans-serif;
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
  text-align: start;
}

.heading-3 {
  font-family: 'Assistant', sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 26px;
  text-align: start;
}

.body-text {
  font-family: 'Assistant', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}

.caption {
  font-family: 'Assistant', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}

.section-label {
  font-family: 'Assistant', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  text-transform: uppercase;
  letter-spacing: 0.6px;
}

/* ─── Text input (reused in CauseSelection search) ─── */
.text-input {
  width: 100%;
  height: 48px;
  border-radius: 12px;
  background: var(--card-surface);
  border: 1.5px solid var(--divider);
  padding: 0 16px;
  font-family: 'Assistant', sans-serif;
  font-size: 16px;
  color: var(--text-dark);
  text-align: start;
  direction: rtl;
  outline: none;
  box-shadow: var(--shadow-card);
  transition:
    border-color var(--dur-fast) var(--ease-out),
    box-shadow   var(--dur-fast) var(--ease-out);
}

.text-input::placeholder {
  color: var(--text-muted);
}

.text-input:focus {
  border-color: var(--teal-primary);
  box-shadow: 0 0 0 3px rgba(61, 191, 170, 0.12);
}
```

- [ ] **Step 2: Start dev server and verify no crash**

```bash
cd prototype && npm run dev
```
Expected: server starts on `http://localhost:5173` with no errors in terminal.

- [ ] **Step 3: Commit**

```bash
git add prototype/src/App.css
git commit -m "feat: replace design system with teal/card tokens and animations"
```

---

### Task 2: App Shell + Navigation

**Files:**
- Modify: `prototype/src/App.jsx`
- Modify: `prototype/src/components/BottomNav.jsx`

**Interfaces:**
- Consumes: screen components (imported by name — they don't exist yet; App.jsx will compile only after all screen tasks complete)
- Produces: `navigate(screenName)` function passed to all screens; `activeTab` string prop passed to BottomNav

- [ ] **Step 1: Rewrite BottomNav.jsx**

```jsx
import { Home, CalendarDays, Settings2 } from 'lucide-react'

const ACTIVE   = '#3DBFAA'
const INACTIVE = '#6B8585'

export default function BottomNav({ activeTab, navigate }) {
  return (
    <nav
      className="bottom-nav"
      aria-label="ניווט ראשי"
    >
      {/*
        RTL flex-row: first child = inline-start = RIGHT side.
        Tab order right→left: בית · היסטוריה · הגדרות
      */}
      <NavTab
        icon={Home}
        label="בית"
        active={activeTab === 'main'}
        onClick={() => navigate('main')}
        ariaLabel="בית"
      />
      <NavTab
        icon={CalendarDays}
        label="היסטוריה"
        active={activeTab === 'history'}
        onClick={() => navigate('history')}
        ariaLabel="היסטוריה"
      />
      <NavTab
        icon={Settings2}
        label="הגדרות"
        active={activeTab === 'settings'}
        onClick={() => navigate('settings')}
        ariaLabel="הגדרות"
      />
    </nav>
  )
}

function NavTab({ icon: Icon, label, active, onClick, ariaLabel }) {
  const color = active ? '#3DBFAA' : '#6B8585'
  return (
    <button
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        background: 'transparent',
        border: 'none',
        padding: '4px 12px',
        cursor: 'pointer',
        WebkitTapHighlightColor: 'transparent',
      }}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-current={active ? 'page' : undefined}
    >
      <Icon size={22} color={color} strokeWidth={active ? 2.2 : 1.75} />
      <span
        style={{
          fontFamily: 'Assistant, sans-serif',
          fontSize: 11,
          fontWeight: active ? 700 : 400,
          color,
          lineHeight: '14px',
        }}
      >
        {label}
      </span>
    </button>
  )
}
```

- [ ] **Step 2: Rewrite App.jsx**

```jsx
import { useState } from 'react'
import './App.css'
import Splash        from './screens/Splash'
import Onboarding    from './screens/Onboarding'
import Main          from './screens/Main'
import CauseSelection from './screens/CauseSelection'
import History       from './screens/History'
import ReportPreview from './screens/ReportPreview'
import Settings      from './screens/Settings'
import SafetyGate    from './components/SafetyGate'

export default function App() {
  const [screen, setScreen]               = useState('splash')
  const [showSafetyGate, setShowSafetyGate] = useState(false)

  // activeTab: determines which tab is highlighted in BottomNav
  const activeTab =
    screen === 'history'                   ? 'history'  :
    screen === 'settings' || screen === 'reportpreview' ? 'settings' :
    'main'

  function navigate(to) {
    if (to === 'history' && screen !== 'history') {
      setShowSafetyGate(true)   // gate fires before every history visit
    } else {
      setScreen(to)
    }
  }

  function confirmSafetyGate() {
    setShowSafetyGate(false)
    setScreen('history')
  }

  function dismissSafetyGate() {
    setShowSafetyGate(false)
  }

  return (
    <>
      {screen === 'splash'           && <Splash onComplete={() => setScreen('onboarding')} />}
      {screen === 'onboarding'       && <Onboarding onStart={() => setScreen('main')} />}
      {screen === 'main'             && <Main navigate={navigate} activeTab={activeTab} />}
      {screen === 'cause-selection'  && <CauseSelection navigate={navigate} activeTab={activeTab} />}
      {screen === 'history'          && <History navigate={navigate} activeTab={activeTab} />}
      {screen === 'reportpreview'    && <ReportPreview navigate={navigate} activeTab={activeTab} />}
      {screen === 'settings'         && <Settings navigate={navigate} activeTab={activeTab} />}

      {showSafetyGate && (
        <SafetyGate onConfirm={confirmSafetyGate} onDismiss={dismissSafetyGate} />
      )}
    </>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add prototype/src/App.jsx prototype/src/components/BottomNav.jsx
git commit -m "feat: 3-tab bottom nav and new screen routing"
```

---

### Task 3: Icons + ConfirmationFlash

**Files:**
- Modify: `prototype/src/components/Icons.jsx`
- Create: `prototype/src/components/ConfirmationFlash.jsx`

**Interfaces:**
- Produces: `<AppLogo />` — teal SVG logo used in Splash + Onboarding
- Produces: `<ConfirmationFlash visible={bool} />` — overlay used in Main + CauseSelection

- [ ] **Step 1: Rewrite Icons.jsx**

```jsx
/* AppLogo — abstract seedling/burst, teal palette */
export function AppLogo({ width = 80, height = 80 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer glow circle */}
      <circle cx="40" cy="40" r="36" fill="#3DBFAA" fillOpacity="0.12" />
      {/* Main circle */}
      <circle cx="40" cy="40" r="28" fill="#3DBFAA" />
      {/* Stem */}
      <rect x="38" y="26" width="4" height="20" rx="2" fill="white" />
      {/* Left leaf */}
      <path
        d="M39 36 C32 30 24 34 26 42 C30 38 36 38 39 36Z"
        fill="white"
        fillOpacity="0.9"
      />
      {/* Right leaf */}
      <path
        d="M41 33 C48 27 56 31 54 39 C50 35 44 35 41 33Z"
        fill="#7BC67A"
      />
    </svg>
  )
}
```

- [ ] **Step 2: Create ConfirmationFlash.jsx**

```jsx
import { Check } from 'lucide-react'

/*
  ConfirmationFlash — shown for 1s after a trigger is saved.
  Rendered via a fixed overlay (z-index 1000), pointer-events none.
  Parent controls visibility with the `visible` prop.
*/
export default function ConfirmationFlash({ visible }) {
  if (!visible) return null

  return (
    <div
      aria-live="polite"
      aria-label="הטריגר נשמר"
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: 'var(--teal-primary)',
          borderRadius: 20,
          padding: '18px 36px',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          boxShadow: '0 8px 32px rgba(61,191,170,0.40)',
          animation: 'flashIn 200ms var(--ease-out)',
        }}
      >
        <Check size={22} color="white" strokeWidth={2.5} />
        <span
          style={{
            fontFamily: 'Assistant, sans-serif',
            fontSize: 18,
            fontWeight: 700,
            color: 'white',
          }}
        >
          נשמר ✓
        </span>
      </div>
    </div>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add prototype/src/components/Icons.jsx prototype/src/components/ConfirmationFlash.jsx
git commit -m "feat: new AppLogo SVG and ConfirmationFlash overlay component"
```

---

### Task 4: Splash + Onboarding

**Files:**
- Modify: `prototype/src/screens/Splash.jsx`
- Create: `prototype/src/screens/Onboarding.jsx`

**Interfaces:**
- Splash consumes: `onComplete` callback prop
- Onboarding consumes: `onStart` callback prop

- [ ] **Step 1: Rewrite Splash.jsx**

```jsx
import { useEffect } from 'react'
import { AppLogo }   from '../components/Icons'

export default function Splash({ onComplete }) {
  useEffect(() => {
    const t = setTimeout(onComplete, 1500)
    return () => clearTimeout(t)
  }, [onComplete])

  return (
    <div
      className="screen"
      aria-label="מסך פתיחה"
      style={{
        background: 'linear-gradient(170deg, #F0FAF8 0%, #C8EDE7 100%)',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
      }}
    >
      <div style={{ animation: 'fadeIn 500ms 100ms both' }}>
        <AppLogo width={90} height={90} />
      </div>

      <h1
        style={{
          fontFamily: 'Assistant, sans-serif',
          fontSize: 32,
          fontWeight: 700,
          color: 'var(--text-dark)',
          direction: 'ltr',
          textAlign: 'center',
          animation: 'slideUp 500ms 200ms both',
        }}
      >
        TriggerLog
      </h1>

      <p
        style={{
          fontFamily: 'Assistant, sans-serif',
          fontSize: 16,
          fontWeight: 400,
          color: 'var(--text-muted)',
          textAlign: 'center',
          animation: 'slideUp 500ms 300ms both',
        }}
      >
        הצמיחה מתחילה מתיעוד
      </p>

      <p
        style={{
          position: 'absolute',
          bottom: 32,
          fontFamily: 'Assistant, sans-serif',
          fontSize: 12,
          color: 'var(--text-muted)',
          animation: 'fadeIn 500ms 600ms both',
        }}
      >
        v1.0.0
      </p>
    </div>
  )
}
```

- [ ] **Step 2: Create Onboarding.jsx**

```jsx
import { AppLogo } from '../components/Icons'

export default function Onboarding({ onStart }) {
  return (
    <div
      className="screen"
      aria-label="מסך פתיחה"
      style={{
        background: 'linear-gradient(170deg, #F0FAF8 0%, #C8EDE7 100%)',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 var(--margin-screen)',
        gap: 0,
      }}
    >
      {/* Skip */}
      <button
        className="btn-text"
        onClick={onStart}
        style={{
          position: 'absolute',
          top: 52,
          insetInlineStart: 'var(--margin-screen)',  /* LEFT in RTL */
        }}
        aria-label="דלג"
      >
        דלג
      </button>

      {/* Logo */}
      <div style={{ marginBottom: 28, animation: 'fadeIn 400ms both' }}>
        <AppLogo width={72} height={72} />
      </div>

      {/* Headline */}
      <h1
        style={{
          fontFamily: 'Assistant, sans-serif',
          fontSize: 28,
          fontWeight: 800,
          color: 'var(--text-dark)',
          textAlign: 'center',
          lineHeight: '38px',
          marginBottom: 16,
          animation: 'slideUp 500ms 100ms both',
        }}
      >
        הטריגרים שלך מופיעים פתאום.{' '}
        <span style={{ color: 'var(--teal-primary)' }}>עכשיו אתה מתעד אותם.</span>
      </h1>

      {/* Subtitle */}
      <p
        className="body-text"
        style={{
          color: 'var(--text-muted)',
          textAlign: 'center',
          marginBottom: 40,
          animation: 'slideUp 500ms 180ms both',
        }}
      >
        הקשה אחת שומרת את המיקום, השעה, והסיבה. בלי לכתוב. בלי מאמץ.
      </p>

      {/* Dot indicator */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 6,
          marginBottom: 32,
        }}
        aria-hidden="true"
      >
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: 'var(--teal-primary)',
          }}
        />
      </div>

      {/* CTA */}
      <div
        style={{
          width: '100%',
          animation: 'slideUp 500ms 260ms both',
        }}
      >
        <button className="btn-primary" onClick={onStart}>
          בוא נתחיל ←
        </button>
      </div>

      {/* Already used it */}
      <button
        className="btn-text"
        onClick={onStart}
        style={{ marginTop: 12, animation: 'fadeIn 500ms 400ms both' }}
      >
        כבר השתמשתי באפליקציה
      </button>
    </div>
  )
}
```

- [ ] **Step 3: Start dev server, navigate to Splash then Onboarding**

```bash
cd prototype && npm run dev
```

Open `http://localhost:5173`.
Expected: teal gradient Splash auto-advances to Onboarding after 1.5s. Onboarding shows headline with teal-colored "עכשיו אתה מתעד אותם", subtitle, single dot, teal CTA button. "בוא נתחיל" button navigates to next screen (will show blank until Task 5).

- [ ] **Step 4: Commit**

```bash
git add prototype/src/screens/Splash.jsx prototype/src/screens/Onboarding.jsx
git commit -m "feat: redesigned Splash and new Onboarding screen"
```

---

### Task 5: Main Screen (BigButton)

**Files:**
- Create: `prototype/src/screens/Main.jsx`

**Interfaces:**
- Consumes: `navigate(screenName)`, `activeTab` string
- Consumes: `<ConfirmationFlash visible={bool} />` from components
- Produces: navigates to `'cause-selection'` on button tap

- [ ] **Step 1: Create Main.jsx**

```jsx
import { useState }          from 'react'
import { Zap }               from 'lucide-react'
import BottomNav             from '../components/BottomNav'
import ConfirmationFlash     from '../components/ConfirmationFlash'

const LAST_LOG_TIME = 'היום, 09:14'  // mock data

export default function Main({ navigate, activeTab }) {
  const [pressing, setPressing]   = useState(false)
  const [rippling, setRippling]   = useState(false)
  const [flash,    setFlash]      = useState(false)

  function handleTap() {
    if (pressing) return

    // Animate press + ripple
    setPressing(true)
    setRippling(true)
    setTimeout(() => setRippling(false), 600)
    setTimeout(() => {
      setPressing(false)
      navigate('cause-selection')
    }, 300)
  }

  // Called from ConfirmationFlash after cause-selection returns
  // (flash state is set by App.jsx — not needed here directly)

  return (
    <div
      className="screen"
      style={{
        background: 'linear-gradient(170deg, #F0FAF8 0%, #DCF2EE 100%)',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 88,
      }}
    >
      {/* Status bar */}
      <div style={{ height: 44 }} aria-hidden="true" />

      {/* App name header */}
      <p
        style={{
          position: 'absolute',
          top: 56,
          fontFamily: 'Assistant, sans-serif',
          fontSize: 18,
          fontWeight: 600,
          color: 'var(--text-dark)',
          textAlign: 'center',
        }}
      >
        TriggerLog
      </p>

      {/* Big button */}
      <div
        role="button"
        aria-label="הקש לתיעוד טריגר"
        tabIndex={0}
        onClick={handleTap}
        onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && handleTap()}
        style={{
          position: 'relative',
          width: 180,
          height: 180,
          borderRadius: '50%',
          background: 'var(--teal-primary)',
          boxShadow: 'var(--shadow-btn), 0 0 60px rgba(61,191,170,0.22)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          userSelect: 'none',
          WebkitTapHighlightColor: 'transparent',
          animation: pressing ? 'buttonPress 300ms var(--ease-out)' : 'none',
          transition: 'box-shadow 200ms ease',
        }}
      >
        <Zap size={64} color="white" strokeWidth={1.5} />

        {/* Ripple ring */}
        {rippling && (
          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: -4,
              borderRadius: '50%',
              border: '3px solid var(--teal-primary)',
              animation: 'ripple 600ms ease-out forwards',
              pointerEvents: 'none',
            }}
          />
        )}
      </div>

      {/* Label below button */}
      <p
        className="caption"
        style={{
          color: 'var(--text-muted)',
          marginTop: 20,
          textAlign: 'center',
        }}
      >
        הקש לתיעוד
      </p>

      {/* Last log timestamp */}
      <p
        className="caption"
        style={{
          color: 'var(--text-muted)',
          marginTop: 8,
          textAlign: 'center',
          opacity: 0.7,
        }}
      >
        תיעוד אחרון: {LAST_LOG_TIME}
      </p>

      <BottomNav activeTab={activeTab} navigate={navigate} />
    </div>
  )
}
```

- [ ] **Step 2: Verify in browser**

Open `http://localhost:5173`, tap through Splash → Onboarding → Main.
Expected: centered teal circle with Zap icon, ripple animation on tap, navigates to cause-selection (blank screen until Task 6). "תיעוד אחרון: היום, 09:14" below the button. 3-tab nav visible.

- [ ] **Step 3: Commit**

```bash
git add prototype/src/screens/Main.jsx
git commit -m "feat: Shazam-style BigButton main screen with ripple animation"
```

---

### Task 6: Cause Selection

**Files:**
- Create: `prototype/src/screens/CauseSelection.jsx`

**Interfaces:**
- Consumes: `navigate(screenName)`, `activeTab`
- Produces: navigates to `'main'` after selection or skip, shows ConfirmationFlash for 1s

- [ ] **Step 1: Create CauseSelection.jsx**

```jsx
import { useState }      from 'react'
import {
  Volume2, Sparkles, Car, BellRing, Users, Moon,
  Flame, Hand, Megaphone, Newspaper, Calendar, CircleHelp,
} from 'lucide-react'
import BottomNav         from '../components/BottomNav'
import ConfirmationFlash from '../components/ConfirmationFlash'

const CAUSES = [
  { id: 'dog_bark',    label: 'נביחת כלב',          icon: Volume2     },
  { id: 'fireworks',   label: 'זיקוקים / פיצוצים',   icon: Sparkles    },
  { id: 'car_horn',    label: 'צפירת רכב',            icon: Car         },
  { id: 'siren',       label: 'אמבולנס / משטרה',      icon: BellRing    },
  { id: 'crowd',       label: 'עומס / המון אנשים',    icon: Users       },
  { id: 'dream',       label: 'חלום / סיוט',           icon: Moon        },
  { id: 'smell_smoke', label: 'ריח עשן / שריפה',      icon: Flame       },
  { id: 'touch',       label: 'מגע לא צפוי',           icon: Hand        },
  { id: 'loud_voice',  label: 'צעקה / קול רם',         icon: Megaphone   },
  { id: 'news',        label: 'חדשות / מדיה',          icon: Newspaper   },
  { id: 'date',        label: 'תאריך / יום שנה',      icon: Calendar    },
  { id: 'unknown',     label: 'לא יודע / אחר',         icon: CircleHelp  },
]

export default function CauseSelection({ navigate, activeTab }) {
  const [selected, setSelected] = useState(null)
  const [flash,    setFlash]    = useState(false)

  function confirm(causeId) {
    setSelected(causeId)
    setFlash(true)
    setTimeout(() => {
      setFlash(false)
      navigate('main')
    }, 1000)
  }

  function skip() {
    setFlash(true)
    setTimeout(() => {
      setFlash(false)
      navigate('main')
    }, 1000)
  }

  return (
    <div
      className="screen"
      style={{
        background: 'var(--bg-screen)',
        paddingBottom: 100,
        overflowY: 'auto',
      }}
    >
      {/* Status bar */}
      <div style={{ height: 44 }} aria-hidden="true" />

      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingInline: 'var(--margin-screen)',
          marginBottom: 4,
          marginTop: 8,
        }}
      >
        <h1 className="heading-1" style={{ color: 'var(--text-dark)' }}>
          מה גרם לטריגר?
        </h1>
        <button className="btn-text" onClick={skip} style={{ width: 'auto' }}>
          דלג
        </button>
      </div>

      <p
        className="body-text"
        style={{
          color: 'var(--text-muted)',
          paddingInline: 'var(--margin-screen)',
          marginBottom: 24,
        }}
      >
        לא חייב/ת לדעת. אפשר לדלג.
      </p>

      {/* Section label */}
      <p
        className="section-label"
        style={{
          color: 'var(--text-muted)',
          paddingInline: 'var(--margin-screen)',
          marginBottom: 12,
        }}
      >
        נפוצים
      </p>

      {/* 2-column grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--gap-card)',
          paddingInline: 'var(--margin-screen)',
        }}
      >
        {CAUSES.map(cause => (
          <CauseCard
            key={cause.id}
            cause={cause}
            selected={selected === cause.id}
            onSelect={() => confirm(cause.id)}
          />
        ))}
      </div>

      <BottomNav activeTab={activeTab} navigate={navigate} />
      <ConfirmationFlash visible={flash} />
    </div>
  )
}

function CauseCard({ cause, selected, onSelect }) {
  const Icon = cause.icon
  const isUnknown = cause.id === 'unknown'

  return (
    <div
      role="button"
      tabIndex={0}
      aria-pressed={selected}
      aria-label={cause.label}
      className={`cause-card${selected ? ' selected' : ''}`}
      onClick={onSelect}
      onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && onSelect()}
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: '50%',
          background: isUnknown ? 'rgba(107,133,133,0.10)' : 'rgba(61,191,170,0.12)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Icon
          size={24}
          color={isUnknown ? 'var(--text-muted)' : 'var(--teal-primary)'}
          strokeWidth={1.75}
        />
      </div>
      <span
        style={{
          fontFamily: 'Assistant, sans-serif',
          fontSize: 13,
          fontWeight: 600,
          color: 'var(--text-dark)',
          textAlign: 'center',
          lineHeight: '18px',
        }}
      >
        {cause.label}
      </span>
    </div>
  )
}
```

- [ ] **Step 2: Verify in browser**

Tap main button → cause selection screen. Expected: 2-column RTL grid of 12 cause cards, each with a teal Lucide icon in a teal-tinted circle. Tap a card → teal border highlights the card → "נשמר ✓" flash for 1s → returns to Main. Tap "דלג" → same flash + return.

- [ ] **Step 3: Commit**

```bash
git add prototype/src/screens/CauseSelection.jsx
git commit -m "feat: cause selection screen with Lucide icons and confirmation flash"
```

---

### Task 7: Safety Gate

**Files:**
- Modify: `prototype/src/components/SafetyGate.jsx`

**Interfaces:**
- Consumes: `onConfirm`, `onDismiss` callbacks (unchanged from current)

- [ ] **Step 1: Rewrite SafetyGate.jsx**

```jsx
import { Zap } from 'lucide-react'

export default function SafetyGate({ onConfirm, onDismiss }) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="אישור לפני ההיסטוריה"
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0, 0, 0, 0.45)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 var(--margin-screen)',
        zIndex: 500,
        animation: 'fadeIn 150ms ease-out',
      }}
    >
      <div
        style={{
          background: 'var(--card-surface)',
          borderRadius: 24,
          padding: '32px 24px 24px',
          width: '100%',
          maxWidth: 360,
          boxShadow: 'var(--shadow-modal)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 0,
          animation: 'slideUp 220ms var(--ease-out)',
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: '50%',
            background: 'rgba(61,191,170,0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20,
          }}
        >
          <Zap size={28} color="var(--teal-primary)" strokeWidth={1.75} />
        </div>

        {/* Title */}
        <h2
          className="heading-2"
          style={{
            color: 'var(--text-dark)',
            textAlign: 'center',
            marginBottom: 12,
            width: '100%',
          }}
        >
          לפני שממשיכים
        </h2>

        {/* Body */}
        <p
          className="body-text"
          style={{
            color: 'var(--text-muted)',
            textAlign: 'center',
            marginBottom: 28,
            lineHeight: '26px',
          }}
        >
          אזור ההיסטוריה מציג את כל הטריגרים שתיעדת. אם אינך מוכן/ה לראות אותם כרגע, אפשר לחזור מאוחר יותר.
        </p>

        {/* Confirm button */}
        <button
          className="btn-primary"
          onClick={onConfirm}
          style={{ marginBottom: 12 }}
        >
          אני מוכן/ה
        </button>

        {/* Dismiss link */}
        <button className="btn-text" onClick={onDismiss}>
          לא עכשיו
        </button>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Verify in browser**

Tap the History tab from Main. Expected: dark scrim + white card modal with teal Zap icon, gentle Hebrew text, teal "אני מוכן/ה" button, "לא עכשיו" text link. "לא עכשיו" dismisses and stays on Main. "אני מוכן/ה" navigates to History (blank until Task 8).

- [ ] **Step 3: Commit**

```bash
git add prototype/src/components/SafetyGate.jsx
git commit -m "feat: soft teal safety gate modal, no red or alarming styling"
```

---

### Task 8: History

**Files:**
- Modify: `prototype/src/screens/History.jsx`

**Interfaces:**
- Consumes: `navigate(screenName)`, `activeTab`

- [ ] **Step 1: Rewrite History.jsx**

```jsx
import { useState }    from 'react'
import { CalendarDays } from 'lucide-react'
import BottomNav        from '../components/BottomNav'
import {
  Volume2, Sparkles, Car, BellRing, Users, Moon,
  Flame, Hand, Megaphone, Newspaper, Calendar, CircleHelp,
} from 'lucide-react'

/* ── Mock data ── */
const WEEK = [
  { day: 'א׳', date: 16, count: 2 },
  { day: 'ב׳', date: 17, count: 0 },
  { day: 'ג׳', date: 18, count: 3 },
  { day: 'ד׳', date: 19, count: 1 },
  { day: 'ה׳', date: 20, count: 4 },
  { day: 'ו׳', date: 21, count: 1 },
  { day: 'ש׳', date: 22, count: 0 },
]
const TODAY_IDX = 4  // ה׳ / Thursday

const CAUSE_ICONS = {
  car_horn:  Car,
  crowd:     Users,
  dog_bark:  Volume2,
  dream:     Moon,
  fireworks: Sparkles,
  siren:     BellRing,
  unknown:   CircleHelp,
}

const ENTRIES = [
  { id: 1, causeId: 'car_horn',  label: 'צפירת רכב',        time: '09:14', location: 'תל אביב', dateLabel: 'היום' },
  { id: 2, causeId: 'crowd',     label: 'עומס אנשים',        time: '08:02', location: 'הרכבת',   dateLabel: 'היום' },
  { id: 3, causeId: 'dog_bark',  label: 'נביחת כלב',         time: '22:30', location: null,       dateLabel: 'אתמול' },
  { id: 4, causeId: 'dream',     label: 'חלום / סיוט',       time: '06:15', location: null,       dateLabel: 'אתמול' },
  { id: 5, causeId: 'fireworks', label: 'זיקוקים / פיצוצים', time: '20:45', location: 'פארק',     dateLabel: '20 יוני' },
]

const FILTER_CAUSES = ['הכל', 'צפירת רכב', 'זיקוקים', 'חלום', 'נביחת כלב']

/* ── Simple SVG line chart ── */
function FrequencyChart() {
  const W = 280, H = 80, PAD = 8
  const maxCount = Math.max(...WEEK.map(d => d.count), 1)
  const xs = WEEK.map((_, i) => PAD + i * ((W - PAD * 2) / (WEEK.length - 1)))
  const ys = WEEK.map(d => H - PAD - (d.count / maxCount) * (H - PAD * 2))

  // Build smooth SVG path
  let d = `M ${xs[0]} ${ys[0]}`
  for (let i = 1; i < xs.length; i++) {
    const cpx = xs[i - 1] + (xs[i] - xs[i - 1]) * 0.5
    d += ` C ${cpx},${ys[i - 1]} ${cpx},${ys[i]} ${xs[i]},${ys[i]}`
  }

  // Filled area path
  const area = d + ` L ${xs[xs.length - 1]} ${H} L ${xs[0]} ${H} Z`

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      style={{ width: '100%', height: H, display: 'block' }}
      aria-label="מגמת תדירות"
      role="img"
    >
      <defs>
        <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#3DBFAA" stopOpacity="0.20" />
          <stop offset="100%" stopColor="#3DBFAA" stopOpacity="0.00" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#chartFill)" />
      <path d={d} fill="none" stroke="#3DBFAA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {xs.map((x, i) => (
        <circle key={i} cx={x} cy={ys[i]} r="3.5" fill="#3DBFAA" />
      ))}
    </svg>
  )
}

export default function History({ navigate, activeTab }) {
  const [selectedDay,    setDay]    = useState(TODAY_IDX)
  const [activeFilter,   setFilter] = useState('הכל')
  const [activeTab2,     setTab2]   = useState('weekly')

  return (
    <div
      className="screen"
      style={{ background: 'var(--bg-screen)', paddingBottom: 88, overflowY: 'auto' }}
    >
      {/* Status bar */}
      <div style={{ height: 44 }} aria-hidden="true" />

      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingInline: 'var(--margin-screen)',
          marginBottom: 16,
          marginTop: 8,
        }}
      >
        <h1 className="heading-1" style={{ color: 'var(--text-dark)' }}>
          היסטוריה
        </h1>
        <CalendarDays size={22} color="var(--text-muted)" strokeWidth={1.75} />
      </div>

      {/* Weekly/Monthly toggle */}
      <div
        style={{
          display: 'flex',
          paddingInline: 'var(--margin-screen)',
          marginBottom: 16,
          background: 'var(--divider)',
          borderRadius: 10,
          marginInline: 'var(--margin-screen)',
          padding: 3,
        }}
      >
        {['weekly', 'monthly'].map(tab => (
          <button
            key={tab}
            onClick={() => setTab2(tab)}
            style={{
              flex: 1,
              height: 34,
              borderRadius: 8,
              border: 'none',
              fontFamily: 'Assistant, sans-serif',
              fontSize: 14,
              fontWeight: activeTab2 === tab ? 700 : 400,
              background: activeTab2 === tab ? 'var(--card-surface)' : 'transparent',
              color: activeTab2 === tab ? 'var(--text-dark)' : 'var(--text-muted)',
              cursor: 'pointer',
              boxShadow: activeTab2 === tab ? '0 1px 4px rgba(0,0,0,0.08)' : 'none',
              transition: 'all 120ms ease',
            }}
          >
            {tab === 'weekly' ? 'שבועי' : 'חודשי'}
          </button>
        ))}
      </div>

      {/* 7-day calendar strip */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',       /* RTL: first element = right */
          justifyContent: 'space-between',
          paddingInline: 'var(--margin-screen)',
          marginBottom: 20,
        }}
      >
        {WEEK.map((d, i) => {
          const isToday    = i === TODAY_IDX
          const isSelected = i === selectedDay
          return (
            <button
              key={i}
              onClick={() => setDay(i)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 4,
                width: 36,
                height: 58,
                borderRadius: 18,
                border: 'none',
                background: isSelected ? 'var(--teal-primary)' : 'transparent',
                cursor: 'pointer',
                padding: '6px 0',
                transition: 'background 120ms ease',
              }}
            >
              <span
                style={{
                  fontFamily: 'Assistant, sans-serif',
                  fontSize: 11,
                  fontWeight: 500,
                  color: isSelected ? 'rgba(255,255,255,0.85)' : 'var(--text-muted)',
                }}
              >
                {d.day}
              </span>
              <span
                style={{
                  fontFamily: 'Assistant, sans-serif',
                  fontSize: 15,
                  fontWeight: isToday ? 700 : 400,
                  color: isSelected ? '#fff' : isToday ? 'var(--teal-primary)' : 'var(--text-dark)',
                }}
              >
                {d.date}
              </span>
            </button>
          )
        })}
      </div>

      {/* Filter chips */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 8,
          paddingInline: 'var(--margin-screen)',
          marginBottom: 20,
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
        }}
      >
        {FILTER_CAUSES.map(c => (
          <button
            key={c}
            className={`filter-chip${activeFilter === c ? ' active' : ''}`}
            onClick={() => setFilter(c)}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Trend card */}
      <div
        className="card"
        style={{
          marginInline: 'var(--margin-screen)',
          marginBottom: 16,
          padding: '16px 16px 12px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <h2 className="heading-3" style={{ color: 'var(--text-dark)' }}>
            מגמת תדירות
          </h2>
          <span
            style={{
              background: 'rgba(61,191,170,0.12)',
              color: 'var(--teal-primary)',
              borderRadius: 8,
              padding: '3px 8px',
              fontFamily: 'Assistant, sans-serif',
              fontSize: 12,
              fontWeight: 700,
            }}
          >
            -12% לעומת שבוע שעבר
          </span>
        </div>
        <FrequencyChart />
      </div>

      {/* Highlights row */}
      <div
        style={{
          display: 'flex',
          gap: 12,
          paddingInline: 'var(--margin-screen)',
          marginBottom: 24,
        }}
      >
        <HighlightCard value="3" label="ימים ללא טריגר" />
        <HighlightCard value="צפירת רכב" label="טריגר נפוץ" small />
      </div>

      {/* Entry list */}
      <p
        className="section-label"
        style={{ color: 'var(--text-muted)', paddingInline: 'var(--margin-screen)', marginBottom: 10 }}
      >
        רשומות
      </p>
      <div style={{ paddingInline: 'var(--margin-screen)', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {ENTRIES.map(entry => (
          <EntryRow key={entry.id} entry={entry} />
        ))}
      </div>

      <BottomNav activeTab={activeTab} navigate={navigate} />
    </div>
  )
}

function HighlightCard({ value, label, small }) {
  return (
    <div
      className="card"
      style={{ flex: 1, padding: '14px 12px', display: 'flex', flexDirection: 'column', gap: 4 }}
    >
      <span
        style={{
          fontFamily: 'Assistant, sans-serif',
          fontSize: small ? 14 : 24,
          fontWeight: 700,
          color: 'var(--teal-primary)',
          lineHeight: '28px',
        }}
      >
        {value}
      </span>
      <span className="caption" style={{ color: 'var(--text-muted)' }}>{label}</span>
    </div>
  )
}

function EntryRow({ entry }) {
  const Icon = CAUSE_ICONS[entry.causeId] || CircleHelp
  return (
    <div
      className="card"
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        padding: '12px 16px',
      }}
    >
      {/* Icon circle — inline-start = RIGHT in RTL */}
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          background: 'rgba(61,191,170,0.10)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <Icon size={20} color="var(--teal-primary)" strokeWidth={1.75} />
      </div>

      {/* Text */}
      <div style={{ flex: 1 }}>
        <p className="body-text" style={{ color: 'var(--text-dark)', fontWeight: 600 }}>
          {entry.label}
        </p>
        <p className="caption" style={{ color: 'var(--text-muted)' }}>
          {entry.dateLabel} · {entry.time}
          {entry.location ? ` · ${entry.location}` : ''}
        </p>
      </div>

      {/* Teal dot — inline-end = LEFT in RTL */}
      <span
        style={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: 'var(--teal-primary)',
          flexShrink: 0,
        }}
      />
    </div>
  )
}
```

- [ ] **Step 2: Verify in browser**

Navigate History tab (confirm safety gate). Expected: RTL week calendar strip (א׳ on the right, ש׳ on the left), ה׳ selected with teal fill, filter chips, teal line chart card, 2 highlight mini-cards, 5 entry rows each with Lucide icon + label + time/location.

- [ ] **Step 3: Commit**

```bash
git add prototype/src/screens/History.jsx
git commit -m "feat: redesigned History with week strip, trend chart and entry cards"
```

---

### Task 9: Report Preview

**Files:**
- Modify: `prototype/src/screens/ReportPreview.jsx`

**Interfaces:**
- Consumes: `navigate(screenName)`, `activeTab`

- [ ] **Step 1: Rewrite ReportPreview.jsx**

```jsx
import { ChevronRight, Download, Share2, FileText } from 'lucide-react'
import BottomNav from '../components/BottomNav'

const SECTIONS = [
  { label: 'יומן טריגרים',     desc: 'תאריך, שעה, מיקום, סיבה'    },
  { label: 'עמידה בתיעוד',     desc: 'ימים פעילים ומספר רשומות'    },
  { label: 'ניתוח מגמות',      desc: 'שינויים לאורך זמן'            },
]

export default function ReportPreview({ navigate, activeTab }) {
  return (
    <div
      className="screen"
      style={{ background: 'var(--bg-screen)', paddingBottom: 100, overflowY: 'auto' }}
    >
      {/* Status bar */}
      <div style={{ height: 44 }} aria-hidden="true" />

      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingInline: 'var(--margin-screen)',
          marginBottom: 4,
          marginTop: 8,
        }}
      >
        <button
          className="icon-btn"
          onClick={() => navigate('settings')}
          aria-label="חזרה"
          style={{ opacity: 0.7 }}
        >
          <ChevronRight size={24} color="var(--text-dark)" strokeWidth={2} />
        </button>
        <h1 className="heading-1" style={{ color: 'var(--text-dark)', flex: 1, textAlign: 'center' }}>
          הכן לפגישה
        </h1>
        <div style={{ width: 44 }} />
      </div>

      {/* Subtitle */}
      <p
        className="body-text"
        style={{
          color: 'var(--text-muted)',
          textAlign: 'center',
          paddingInline: 'var(--margin-screen)',
          marginBottom: 28,
        }}
      >
        סיכום מקיף של הטריגרים שלך לסקירה קלינית על ידי המטפל.
      </p>

      {/* PDF preview card */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: 8,
        }}
      >
        <div
          style={{
            width: 160,
            height: 200,
            background: 'var(--card-surface)',
            borderRadius: 12,
            boxShadow: 'var(--shadow-card), 4px 4px 0 var(--divider)',
            transform: 'rotate(1deg)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: 20,
            gap: 10,
            position: 'relative',
          }}
        >
          {/* PDF READY badge */}
          <span
            style={{
              position: 'absolute',
              top: 12,
              insetInlineStart: 12,
              background: 'var(--teal-primary)',
              color: 'white',
              borderRadius: 6,
              padding: '2px 8px',
              fontFamily: 'Assistant, sans-serif',
              fontSize: 10,
              fontWeight: 700,
              direction: 'ltr',
            }}
          >
            PDF READY
          </span>

          <FileText
            size={40}
            color="var(--teal-light)"
            strokeWidth={1.25}
            style={{ marginTop: 28 }}
          />

          {/* Document lines */}
          {[0, 1, 2, 3].map(i => (
            <div
              key={i}
              style={{
                width: i === 0 ? '80%' : i === 3 ? '50%' : '90%',
                height: 6,
                borderRadius: 3,
                background: 'var(--divider)',
              }}
            />
          ))}
        </div>
      </div>

      {/* Date range */}
      <p
        className="caption"
        style={{
          color: 'var(--text-muted)',
          textAlign: 'center',
          marginBottom: 4,
        }}
      >
        1 יוני – 22 יוני, 2026
      </p>

      {/* Preview link */}
      <button
        className="btn-text"
        style={{ marginBottom: 24 }}
      >
        תצוגה מקדימה ▶
      </button>

      {/* Included sections */}
      <p
        className="section-label"
        style={{
          color: 'var(--text-muted)',
          paddingInline: 'var(--margin-screen)',
          marginBottom: 12,
        }}
      >
        סעיפים כלולים
      </p>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          paddingInline: 'var(--margin-screen)',
          marginBottom: 32,
        }}
      >
        {SECTIONS.map((s, i) => (
          <div
            key={i}
            className="card"
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 14,
              padding: '14px 16px',
            }}
          >
            <div style={{ flex: 1 }}>
              <p className="body-text" style={{ color: 'var(--text-dark)', fontWeight: 600 }}>
                {s.label}
              </p>
              <p className="caption" style={{ color: 'var(--text-muted)' }}>
                {s.desc}
              </p>
            </div>
            {/* Teal check */}
            <div
              style={{
                width: 24,
                height: 24,
                borderRadius: '50%',
                background: 'rgba(61,191,170,0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  color: 'var(--teal-primary)',
                  fontSize: 13,
                  fontWeight: 700,
                }}
              >
                ✓
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div
        style={{
          paddingInline: 'var(--margin-screen)',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
        }}
      >
        <button className="btn-primary" style={{ gap: 10 }}>
          <Download size={18} strokeWidth={2} />
          הורד דוח PDF
        </button>
        <button className="btn-text">
          שתף עם המטפל
        </button>
      </div>

      <BottomNav activeTab={activeTab} navigate={navigate} />
    </div>
  )
}
```

- [ ] **Step 2: Verify in browser**

Navigate Settings → "שתף עם המטפל". Expected: centered "הכן לפגישה" header, slightly rotated PDF card with "PDF READY" teal badge + document lines + date range, 3 checklist items each with teal check circle, "הורד דוח PDF" teal button, "שתף עם המטפל" text link.

- [ ] **Step 3: Commit**

```bash
git add prototype/src/screens/ReportPreview.jsx
git commit -m "feat: redesigned Report Preview with PDF card and checklist"
```

---

### Task 10: Settings

**Files:**
- Modify: `prototype/src/screens/Settings.jsx`

**Interfaces:**
- Consumes: `navigate(screenName)`, `activeTab`
- Produces: navigates to `'reportpreview'` via "שתף עם המטפל" row

- [ ] **Step 1: Rewrite Settings.jsx**

```jsx
import { useState }    from 'react'
import { MapPin, Bell, Trash2, Share2, ChevronLeft, Info } from 'lucide-react'
import BottomNav        from '../components/BottomNav'

function Toggle({ on, onToggle }) {
  return (
    <div
      className={`toggle-track${on ? ' on' : ''}`}
      onClick={onToggle}
      role="switch"
      aria-checked={on}
      tabIndex={0}
      onKeyDown={e => (e.key === ' ' || e.key === 'Enter') && onToggle()}
    >
      <div className="toggle-thumb" />
    </div>
  )
}

function SectionHeader({ children }) {
  return (
    <p
      className="section-label"
      style={{
        color: 'var(--text-muted)',
        paddingInline: 'var(--margin-screen)',
        marginBottom: 8,
      }}
    >
      {children}
    </p>
  )
}

function RowDivider() {
  return (
    <div style={{ height: 1, background: 'var(--divider)', marginInlineStart: 56 }} />
  )
}

function SettingsRow({ icon: Icon, label, sublabel, right, onClick, danger }) {
  return (
    <div
      className="settings-row"
      onClick={onClick}
      style={{ minHeight: sublabel ? 68 : 56 }}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? e => (e.key === 'Enter' || e.key === ' ') && onClick() : undefined}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, flex: 1 }}>
        {Icon && (
          <Icon
            size={20}
            strokeWidth={1.75}
            color={danger ? 'var(--destructive)' : 'var(--teal-primary)'}
            style={{ flexShrink: 0 }}
          />
        )}
        <div style={{ flex: 1 }}>
          <p
            className="body-text"
            style={{ color: danger ? 'var(--destructive)' : 'var(--text-dark)', textAlign: 'start' }}
          >
            {label}
          </p>
          {sublabel && (
            <p className="caption" style={{ color: 'var(--text-muted)', textAlign: 'start', marginTop: 2 }}>
              {sublabel}
            </p>
          )}
        </div>
      </div>
      {right}
    </div>
  )
}

export default function Settings({ navigate, activeTab }) {
  const [locationOn,  setLocation]  = useState(false)
  const [notifOn,     setNotif]     = useState(false)
  const [deleteStep,  setDeleteStep] = useState(0)

  function handleDelete() {
    if (deleteStep === 0) {
      setDeleteStep(1)
      setTimeout(() => setDeleteStep(0), 3000)
    } else {
      setDeleteStep(0)
      // In production: clear all data here
    }
  }

  return (
    <div
      className="screen"
      style={{ background: 'var(--bg-screen)', paddingBottom: 88, overflowY: 'auto' }}
    >
      {/* Status bar */}
      <div style={{ height: 44 }} aria-hidden="true" />

      {/* Header */}
      <h1
        className="heading-1"
        style={{
          color: 'var(--text-dark)',
          paddingInline: 'var(--margin-screen)',
          marginBottom: 24,
          marginTop: 8,
        }}
      >
        הגדרות
      </h1>

      {/* ── Section 1: Share with therapist ── */}
      <div style={{ marginBottom: 28 }}>
        <SectionHeader>שיתוף עם המטפל</SectionHeader>
        <div className="settings-card">
          <SettingsRow
            icon={Share2}
            label="שתף עם המטפל"
            sublabel="הפק דוח PDF לסקירה קלינית"
            onClick={() => navigate('reportpreview')}
            right={<ChevronLeft size={18} color="var(--text-muted)" strokeWidth={1.75} />}
          />
        </div>
      </div>

      {/* ── Section 2: Preferences ── */}
      <div style={{ marginBottom: 28 }}>
        <SectionHeader>העדפות</SectionHeader>
        <div className="settings-card">
          <SettingsRow
            icon={MapPin}
            label="שמור מיקום אוטומטי"
            onClick={() => setLocation(v => !v)}
            right={<Toggle on={locationOn} onToggle={() => setLocation(v => !v)} />}
          />
          <RowDivider />
          <SettingsRow
            icon={Bell}
            label="תזכורות יומיות"
            sublabel="כבוי כברירת מחדל — התראות עלולות להיות טריגרים"
            onClick={() => setNotif(v => !v)}
            right={<Toggle on={notifOn} onToggle={() => setNotif(v => !v)} />}
          />
        </div>
      </div>

      {/* ── Section 3: Data ── */}
      <div style={{ marginBottom: 28 }}>
        <SectionHeader>נתונים</SectionHeader>
        <div className="settings-card">
          <SettingsRow
            icon={Trash2}
            label={deleteStep === 1 ? 'בטוח? לחץ/י שוב לאישור' : 'מחק את כל הנתונים'}
            onClick={handleDelete}
            danger
          />
        </div>
      </div>

      {/* ── Section 4: About ── */}
      <div>
        <SectionHeader>אודות</SectionHeader>
        <div className="settings-card">
          <SettingsRow
            icon={Info}
            label="על האפליקציה"
            sublabel="TriggerLog — כלי לתיעוד טריגרים בזמן אמת"
          />
          <RowDivider />
          <SettingsRow
            icon={Info}
            label="כתב ויתור קליני"
            sublabel="האפליקציה אינה תחליף לטיפול מקצועי"
          />
          <RowDivider />
          <SettingsRow
            label="גרסה v1.0.0"
          />
        </div>
      </div>

      <BottomNav activeTab={activeTab} navigate={navigate} />
    </div>
  )
}
```

- [ ] **Step 2: Verify in browser**

Navigate Settings tab. Expected: 4 card sections — "שיתוף עם המטפל" (teal Share2 icon, navigates to Report Preview), "העדפות" (location + notification toggles, teal when on), "נתונים" (destructive red delete row), "אודות" (2 sublabel rows + version). 3-tab nav at bottom.

- [ ] **Step 3: Commit**

```bash
git add prototype/src/screens/Settings.jsx
git commit -m "feat: redesigned Settings with export row and About folded in"
```

---

### Task 11: Cleanup

**Files:**
- Delete: `prototype/src/screens/Log.jsx`
- Delete: `prototype/src/screens/About.jsx`

**Interfaces:**
- Neither file is imported by App.jsx after Task 2 — safe to delete

- [ ] **Step 1: Delete unused files**

```bash
rm prototype/src/screens/Log.jsx
rm prototype/src/screens/About.jsx
```

- [ ] **Step 2: Verify full app flow in browser**

Open `http://localhost:5173`. Walk through both flows:

**Flow 1 — Primary (רוני on the train):**
Splash → Onboarding → Main (big button) → Cause Selection → select "צפירת רכב" → "נשמר ✓" flash → back to Main

**Flow 2 — Secondary (export without history):**
Main → Settings tab → "שתף עם המטפל" → Report Preview → "הורד דוח PDF"

**Flow 3 — Browse history:**
Main → History tab → Safety Gate → "אני מוכן/ה" → History

**Check for:**
- No console errors
- All 3 tabs switch correctly, active tab stays highlighted
- Safety Gate only fires when navigating to History from non-History screen
- All text is Hebrew/RTL
- No emojis visible anywhere in the UI
- ConfirmationFlash appears and auto-dismisses after 1s
- Ripple animation fires on BigButton tap

- [ ] **Step 3: Final commit**

```bash
git add -A
git commit -m "feat: complete TriggerLog redesign — teal/card design, whack-a-mole metaphor, 8 screens"
```
