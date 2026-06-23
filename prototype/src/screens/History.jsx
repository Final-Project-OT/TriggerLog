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
