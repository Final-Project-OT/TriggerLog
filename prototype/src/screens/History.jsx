import { ChevronRight } from 'lucide-react'
import BottomNav from '../components/BottomNav'
import { GlowStar } from '../components/Icons'

/*
  History — Screen 4
  ─────────────────
  Night-sky metaphor: deep #1A2540 background with scattered
  background stars. Each entry is a glowing star dot.
  RTL: type chip on the right, date/star on the left.
*/

const ENTRIES = [
  { date: "יום ו׳ · 20.06 · 14:32", type: 'צליל',            intensity: 'חזק'    },
  { date: "יום ה׳ · 19.06 · 09:15", type: 'ויזואלי',         intensity: 'בינוני' },
  { date: "יום ג׳ · 17.06 · 21:44", type: 'זיכרון / מחשבה', intensity: null     },
  { date: "יום ב׳ · 16.06 · 08:03", type: 'תחושה גופנית',    intensity: 'קל'     },
  { date: "יום ו׳ · 13.06 · 17:20", type: 'אחר / לא יודע',   intensity: 'בינוני' },
]

/* Background decorative stars — scattered organically */
const BG_STARS = [
  { x: '8%',  y: '12%', s: 2, o: 0.18, d: '0s',   dur: '4s'   },
  { x: '70%', y: '8%',  s: 1.5, o: 0.13, d: '1s', dur: '5s'   },
  { x: '88%', y: '28%', s: 2, o: 0.15, d: '2.1s', dur: '3.8s' },
  { x: '15%', y: '44%', s: 1.5, o: 0.12, d: '0.7s',dur: '4.5s'},
  { x: '55%', y: '38%', s: 2.5, o: 0.10, d: '1.5s',dur: '3.2s'},
  { x: '92%', y: '55%', s: 1.5, o: 0.14, d: '0.3s',dur: '4.2s'},
  { x: '30%', y: '72%', s: 2, o: 0.12, d: '2.4s', dur: '5.1s' },
  { x: '78%', y: '82%', s: 1.5, o: 0.10, d: '1.2s',dur: '3.6s'},
]

function TypeChip({ label }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        height: 28,
        padding: '0 12px',
        borderRadius: 8,
        background: 'rgba(232, 213, 240, 0.22)',
        border: '1px solid rgba(232, 213, 240, 0.55)',
        fontFamily: "'Assistant', sans-serif",
        fontSize: 14,
        fontWeight: 400,
        color: 'rgba(255, 255, 255, 0.92)',
        whiteSpace: 'nowrap',
      }}
    >
      {label}
    </span>
  )
}

function IntensityChip({ label }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        height: 28,
        padding: '0 10px',
        borderRadius: 8,
        background: 'rgba(139, 157, 195, 0.18)',
        border: '1px solid rgba(139, 157, 195, 0.42)',
        fontFamily: "'Assistant', sans-serif",
        fontSize: 14,
        fontWeight: 400,
        color: 'rgba(255, 255, 255, 0.80)',
        whiteSpace: 'nowrap',
      }}
    >
      {label}
    </span>
  )
}

export default function History({ navigate }) {
  return (
    <div
      className="screen"
      style={{
        background: 'linear-gradient(170deg, var(--night-sky-deep) 0%, var(--night-sky) 60%, #1F2D4E 100%)',
        paddingBottom: 88,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background star field */}
      {BG_STARS.map((s, i) => (
        <span
          key={i}
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: s.x,
            top: s.y,
            width: s.s,
            height: s.s,
            borderRadius: '50%',
            background: '#8B9DC3',
            '--op': s.o,
            animation: `starTwinkle ${s.dur} ${s.d} ease-in-out infinite`,
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* Status bar */}
      <div style={{ height: 59 }} aria-hidden="true" />

      {/* Header */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingInline: 'var(--margin-screen)',
          marginBottom: 'var(--gap-section)',
        }}
      >
        <h1
          className="heading-1"
          style={{ color: 'var(--text-light)', flex: 1 }}
        >
          היסטוריה
        </h1>

        {/* Back (→) — inline-end = LEFT in RTL, but back goes to Log */}
        <button
          className="icon-btn"
          onClick={() => navigate('log')}
          aria-label="חזרה"
          style={{ opacity: 0.85 }}
        >
          <ChevronRight size={24} color="white" strokeWidth={2} />
        </button>
      </div>

      {/* Entries list */}
      <main aria-label="רשימת טריגרים">
        {ENTRIES.map((entry, i) => (
          <div key={i} className="history-row">
            {/*
              RTL row layout (right → left):
              [Intensity chip] [Type chip] [date]      ● (star)
              In RTL flex-row, first child = rightmost.
              So: chips group on right, star group on left.
            */}

            {/* Right side: chips */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 8,
                flexShrink: 0,
              }}
            >
              <TypeChip label={entry.type} />
              {entry.intensity && <IntensityChip label={entry.intensity} />}
            </div>

            {/* Left side: star + timestamp */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                flexShrink: 0,
              }}
            >
              <span
                className="caption"
                style={{
                  color: 'var(--star-blue)',
                  direction: 'ltr',
                  whiteSpace: 'nowrap',
                }}
              >
                {entry.date}
              </span>
              <GlowStar />
            </div>
          </div>
        ))}
      </main>

      {/* "שתף עם המטפל" */}
      <div
        style={{
          paddingInline: 'var(--margin-screen)',
          paddingTop: 20,
        }}
      >
        <button
          className="btn-outline"
          onClick={() => navigate('reportpreview')}
        >
          שתף עם המטפל
        </button>
      </div>

      <BottomNav
        activeTab="history"
        onHistory={() => {}}
        onSettings={() => navigate('settings')}
      />
    </div>
  )
}
