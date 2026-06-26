import { useState }    from 'react'
import { CalendarDays, ChevronDown, ChevronUp } from 'lucide-react'
import BottomNav        from '../components/BottomNav'
import {
  Volume2, Sparkles, Car, BellRing, Users, Moon,
  Flame, Hand, Megaphone, Newspaper, Calendar, CircleHelp,
} from 'lucide-react'

/* ── Weekly mock data ── */
const WEEK = [
  { day: 'א׳', date: 16, count: 2 },
  { day: 'ב׳', date: 17, count: 0 },
  { day: 'ג׳', date: 18, count: 3 },
  { day: 'ד׳', date: 19, count: 1 },
  { day: 'ה׳', date: 20, count: 4 },
  { day: 'ו׳', date: 21, count: 1 },
  { day: 'ש׳', date: 22, count: 0 },
]
const TODAY_IDX = 4

const WEEKLY_ENTRIES = [
  { id: 1, causeId: 'car_horn',  label: 'צפירת רכב',        time: '09:14', location: 'תל אביב', dateLabel: 'היום',    note: null },
  { id: 2, causeId: 'crowd',     label: 'עומס אנשים',        time: '08:02', location: 'הרכבת',   dateLabel: 'היום',    note: null },
  { id: 3, causeId: 'dog_bark',  label: 'נביחת כלב',         time: '22:30', location: null,       dateLabel: 'אתמול',   note: null },
  { id: 4, causeId: 'dream',     label: 'חלום / סיוט',       time: '06:15', location: null,       dateLabel: 'אתמול',   note: null },
  { id: 5, causeId: 'fireworks', label: 'זיקוקים / פיצוצים', time: '20:45', location: 'פארק',     dateLabel: '20 יוני', note: null },
]

const WEEKLY_STATS = {
  trend: '-12% לעומת שבוע שעבר',
  highlight1: { value: '3',          label: 'ימים ללא טריגר' },
  highlight2: { value: 'צפירת רכב', label: 'טריגר נפוץ', small: true },
}

/* ── Monthly mock data ── */
const MONTHLY_WEEKS = [
  {
    label: 'שבוע 4 — 16–22 יוני',
    count: 11,
    entries: [
      { id: 101, causeId: 'car_horn',  label: 'צפירת רכב',        time: '09:14', location: 'תל אביב', dateLabel: '22 יוני', note: null },
      { id: 102, causeId: 'crowd',     label: 'עומס אנשים',        time: '08:02', location: 'הרכבת',   dateLabel: '22 יוני', note: null },
      { id: 103, causeId: 'dog_bark',  label: 'נביחת כלב',         time: '22:30', location: null,       dateLabel: '21 יוני', note: null },
      { id: 104, causeId: 'fireworks', label: 'זיקוקים / פיצוצים', time: '20:45', location: 'פארק',     dateLabel: '20 יוני', note: null },
    ],
  },
  {
    label: 'שבוע 3 — 9–15 יוני',
    count: 6,
    entries: [
      { id: 201, causeId: 'siren',     label: 'אמבולנס / משטרה',   time: '14:20', location: 'רחוב',     dateLabel: '15 יוני', note: null },
      { id: 202, causeId: 'dream',     label: 'חלום / סיוט',       time: '05:30', location: null,       dateLabel: '13 יוני', note: null },
      { id: 203, causeId: 'loud_voice',label: 'צעקה / קול רם',     time: '18:00', location: 'עבודה',    dateLabel: '11 יוני', note: null },
    ],
  },
  {
    label: 'שבוע 2 — 2–8 יוני',
    count: 4,
    entries: [
      { id: 301, causeId: 'news',      label: 'חדשות / מדיה',      time: '20:00', location: null,       dateLabel: '8 יוני',  note: null },
      { id: 302, causeId: 'touch',     label: 'מגע לא צפוי',       time: '11:15', location: 'קניון',    dateLabel: '5 יוני',  note: null },
    ],
  },
  {
    label: 'שבוע 1 — 1 יוני',
    count: 1,
    entries: [
      { id: 401, causeId: 'car_horn',  label: 'צפירת רכב',         time: '08:45', location: null,       dateLabel: '1 יוני',  note: null },
    ],
  },
]

const MONTHLY_STATS = {
  trend: '+22 טריגרים החודש',
  highlight1: { value: '22',          label: 'טריגרים החודש' },
  highlight2: { value: 'שבוע 4',      label: 'שבוע עמוס ביותר', small: true },
}

const CAUSE_ICONS = {
  car_horn:   Car,
  crowd:      Users,
  dog_bark:   Volume2,
  dream:      Moon,
  fireworks:  Sparkles,
  siren:      BellRing,
  smell_smoke:Flame,
  touch:      Hand,
  loud_voice: Megaphone,
  news:       Newspaper,
  date:       Calendar,
  unknown:    CircleHelp,
}

const CAUSES_LIST = [
  { id: 'car_horn',   label: 'צפירת רכב' },
  { id: 'crowd',      label: 'עומס אנשים' },
  { id: 'dog_bark',   label: 'נביחת כלב' },
  { id: 'dream',      label: 'חלום / סיוט' },
  { id: 'fireworks',  label: 'זיקוקים / פיצוצים' },
  { id: 'siren',      label: 'אמבולנס / משטרה' },
  { id: 'smell_smoke',label: 'ריח עשן / שריפה' },
  { id: 'touch',      label: 'מגע לא צפוי' },
  { id: 'loud_voice', label: 'צעקה / קול רם' },
  { id: 'news',       label: 'חדשות / מדיה' },
  { id: 'date',       label: 'תאריך / יום שנה' },
  { id: 'unknown',    label: 'לא יודע / אחר' },
]

function FrequencyChart({ data }) {
  const W = 280, H = 80, PAD = 8
  const maxCount = Math.max(...data.map(d => d.count), 1)
  const xs = data.map((_, i) => PAD + i * ((W - PAD * 2) / (data.length - 1)))
  const ys = data.map(d => H - PAD - (d.count / maxCount) * (H - PAD * 2))
  let path = `M ${xs[0]} ${ys[0]}`
  for (let i = 1; i < xs.length; i++) {
    const cpx = xs[i - 1] + (xs[i] - xs[i - 1]) * 0.5
    path += ` C ${cpx},${ys[i - 1]} ${cpx},${ys[i]} ${xs[i]},${ys[i]}`
  }
  const area = path + ` L ${xs[xs.length - 1]} ${H} L ${xs[0]} ${H} Z`
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: H, display: 'block' }} aria-label="מגמת תדירות" role="img">
      <defs>
        <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#3DBFAA" stopOpacity="0.20" />
          <stop offset="100%" stopColor="#3DBFAA" stopOpacity="0.00" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#chartFill)" />
      <path d={path} fill="none" stroke="#3DBFAA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {xs.map((x, i) => <circle key={i} cx={x} cy={ys[i]} r="3.5" fill="#3DBFAA" />)}
    </svg>
  )
}

function HighlightCard({ value, label, small }) {
  return (
    <div className="card" style={{ flex: 1, padding: '14px 12px', display: 'flex', flexDirection: 'column', gap: 4 }}>
      <span style={{ fontFamily: 'Assistant, sans-serif', fontSize: small ? 14 : 24, fontWeight: 700, color: 'var(--teal-primary)', lineHeight: '28px' }}>
        {value}
      </span>
      <span className="caption" style={{ color: 'var(--text-muted)' }}>{label}</span>
    </div>
  )
}

function EntryRow({ entry, onUpdateEntry }) {
  const [expanded,  setExpanded]  = useState(false)
  const [noteText,  setNoteText]  = useState(entry.note || '')
  const [causeId,   setCauseId]   = useState(entry.causeId)
  const [pickingType, setPickingType] = useState(false)
  const Icon = CAUSE_ICONS[causeId] || CircleHelp
  const causeLabel = CAUSES_LIST.find(c => c.id === causeId)?.label || entry.label

  function saveNote() {
    onUpdateEntry(entry.id, { note: noteText, causeId })
    setExpanded(false)
    setPickingType(false)
  }

  return (
    <div className="card" style={{ overflow: 'hidden' }}>
      {/* Header row — tap to expand */}
      <div
        role="button"
        tabIndex={0}
        aria-expanded={expanded}
        onClick={() => setExpanded(v => !v)}
        onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setExpanded(v => !v)}
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 12, padding: '12px 16px', cursor: 'pointer' }}
      >
        <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(61,191,170,0.10)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Icon size={20} color="var(--teal-primary)" strokeWidth={1.75} />
        </div>
        <div style={{ flex: 1 }}>
          <p className="body-text" style={{ color: 'var(--text-dark)', fontWeight: 600 }}>{causeLabel}</p>
          <p className="caption" style={{ color: 'var(--text-muted)' }}>
            {entry.dateLabel} · {entry.time}{entry.location ? ` · ${entry.location}` : ''}
          </p>
          {entry.note && !expanded && (
            <p className="caption" style={{ color: 'var(--text-muted)', fontStyle: 'italic', marginTop: 2 }}>"{entry.note}"</p>
          )}
        </div>
        {expanded
          ? <ChevronUp size={16} color="var(--text-muted)" strokeWidth={1.75} />
          : <ChevronDown size={16} color="var(--text-muted)" strokeWidth={1.75} />
        }
      </div>

      {/* Expanded area */}
      {expanded && (
        <div style={{ padding: '0 16px 16px', borderTop: '1px solid var(--divider)', paddingTop: 12 }}>
          {/* Trigger type picker */}
          <p className="caption" style={{ color: 'var(--text-muted)', marginBottom: 6 }}>סוג טריגר</p>
          {!pickingType ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <span className="body-text" style={{ color: 'var(--text-dark)', fontWeight: 600 }}>{causeLabel}</span>
              <button
                className="btn-text"
                style={{ fontSize: 12, padding: '2px 8px', width: 'auto' }}
                onClick={() => setPickingType(true)}
              >
                שנה
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 12 }}>
              {CAUSES_LIST.map(c => (
                <button
                  key={c.id}
                  onClick={() => { setCauseId(c.id); setPickingType(false) }}
                  style={{
                    fontFamily: 'Assistant, sans-serif',
                    fontSize: 12,
                    fontWeight: c.id === causeId ? 700 : 400,
                    padding: '4px 10px',
                    borderRadius: 20,
                    border: `1.5px solid ${c.id === causeId ? 'var(--teal-primary)' : 'var(--divider)'}`,
                    background: c.id === causeId ? 'rgba(61,191,170,0.10)' : 'transparent',
                    color: c.id === causeId ? 'var(--teal-primary)' : 'var(--text-muted)',
                    cursor: 'pointer',
                  }}
                >
                  {c.label}
                </button>
              ))}
            </div>
          )}

          {/* Note field */}
          <p className="caption" style={{ color: 'var(--text-muted)', marginBottom: 6 }}>הערה</p>
          <textarea
            value={noteText}
            onChange={e => setNoteText(e.target.value)}
            placeholder="הוסף הערה…"
            maxLength={140}
            rows={2}
            style={{
              width: '100%',
              boxSizing: 'border-box',
              borderRadius: 10,
              border: '1.5px solid var(--divider)',
              padding: '8px 12px',
              fontFamily: 'Assistant, sans-serif',
              fontSize: 14,
              color: 'var(--text-dark)',
              background: 'var(--bg-screen)',
              resize: 'none',
              outline: 'none',
              marginBottom: 10,
              direction: 'rtl',
            }}
          />
          <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
            <button
              className="btn-text"
              style={{ fontSize: 13, width: 'auto', padding: '6px 14px' }}
              onClick={() => { setExpanded(false); setPickingType(false); setNoteText(entry.note || '') }}
            >
              ביטול
            </button>
            <button
              className="btn-primary"
              style={{ fontSize: 13, padding: '6px 20px', width: 'auto', minHeight: 'unset' }}
              onClick={saveNote}
            >
              שמור
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

function MonthlyWeekBucket({ bucket, onUpdateEntry }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="card" style={{ overflow: 'hidden', marginBottom: 0 }}>
      <div
        role="button"
        tabIndex={0}
        onClick={() => setOpen(v => !v)}
        onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setOpen(v => !v)}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', cursor: 'pointer' }}
      >
        <div>
          <p className="body-text" style={{ color: 'var(--text-dark)', fontWeight: 600 }}>{bucket.label}</p>
          <p className="caption" style={{ color: 'var(--text-muted)' }}>{bucket.count} טריגרים</p>
        </div>
        {open
          ? <ChevronUp size={16} color="var(--text-muted)" strokeWidth={1.75} />
          : <ChevronDown size={16} color="var(--text-muted)" strokeWidth={1.75} />
        }
      </div>
      {open && (
        <div style={{ borderTop: '1px solid var(--divider)', display: 'flex', flexDirection: 'column', gap: 1 }}>
          {bucket.entries.map(entry => (
            <EntryRow key={entry.id} entry={entry} onUpdateEntry={onUpdateEntry} />
          ))}
        </div>
      )}
    </div>
  )
}

export default function History({ navigate, activeTab }) {
  const [selectedDay,  setDay]    = useState(TODAY_IDX)
  const [activeTab2,   setTab2]   = useState('weekly')
  const [weekEntries,  setWeekEntries] = useState(WEEKLY_ENTRIES)
  const [monthWeeks,   setMonthWeeks]  = useState(MONTHLY_WEEKS)

  const stats = activeTab2 === 'weekly' ? WEEKLY_STATS : MONTHLY_STATS

  function updateWeekEntry(id, patch) {
    setWeekEntries(es => es.map(e => e.id === id ? { ...e, ...patch } : e))
  }

  function updateMonthEntry(id, patch) {
    setMonthWeeks(wks => wks.map(wk => ({
      ...wk,
      entries: wk.entries.map(e => e.id === id ? { ...e, ...patch } : e),
    })))
  }

  const chartData = activeTab2 === 'weekly'
    ? WEEK
    : [
        { count: 1 }, { count: 4 }, { count: 6 }, { count: 11 },
      ]

  return (
    <div className="screen" style={{ background: 'var(--bg-screen)', paddingBottom: 88, overflowY: 'auto' }}>
      <div style={{ height: 44 }} aria-hidden="true" />

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingInline: 'var(--margin-screen)', marginBottom: 16, marginTop: 8 }}>
        <h1 className="heading-1" style={{ color: 'var(--text-dark)' }}>היסטוריה</h1>
        <CalendarDays size={22} color="var(--text-muted)" strokeWidth={1.75} />
      </div>

      {/* Weekly/Monthly toggle */}
      <div style={{ display: 'flex', marginInline: 'var(--margin-screen)', marginBottom: 16, background: 'var(--divider)', borderRadius: 10, padding: 3 }}>
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

      {/* Weekly: 7-day strip */}
      {activeTab2 === 'weekly' && (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingInline: 'var(--margin-screen)', marginBottom: 20 }}>
          {WEEK.map((d, i) => {
            const isToday    = i === TODAY_IDX
            const isSelected = i === selectedDay
            return (
              <button
                key={i}
                onClick={() => setDay(i)}
                style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
                  width: 36, height: 58, borderRadius: 18, border: 'none',
                  background: isSelected ? 'var(--teal-primary)' : 'transparent',
                  cursor: 'pointer', padding: '6px 0', transition: 'background 120ms ease',
                }}
              >
                <span style={{ fontFamily: 'Assistant, sans-serif', fontSize: 11, fontWeight: 500, color: isSelected ? 'rgba(255,255,255,0.85)' : 'var(--text-muted)' }}>
                  {d.day}
                </span>
                <span style={{ fontFamily: 'Assistant, sans-serif', fontSize: 15, fontWeight: isToday ? 700 : 400, color: isSelected ? '#fff' : isToday ? 'var(--teal-primary)' : 'var(--text-dark)' }}>
                  {d.date}
                </span>
              </button>
            )
          })}
        </div>
      )}

      {/* Monthly: month label */}
      {activeTab2 === 'monthly' && (
        <p className="section-label" style={{ color: 'var(--text-muted)', paddingInline: 'var(--margin-screen)', marginBottom: 16 }}>
          יוני 2026
        </p>
      )}

      {/* Trend card */}
      <div className="card" style={{ marginInline: 'var(--margin-screen)', marginBottom: 16, padding: '16px 16px 12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <h2 className="heading-3" style={{ color: 'var(--text-dark)' }}>מגמת תדירות</h2>
          <span style={{ background: 'rgba(61,191,170,0.12)', color: 'var(--teal-primary)', borderRadius: 8, padding: '3px 8px', fontFamily: 'Assistant, sans-serif', fontSize: 12, fontWeight: 700 }}>
            {stats.trend}
          </span>
        </div>
        <FrequencyChart data={chartData} />
      </div>

      {/* Highlights */}
      <div style={{ display: 'flex', gap: 12, paddingInline: 'var(--margin-screen)', marginBottom: 24 }}>
        <HighlightCard {...stats.highlight1} />
        <HighlightCard {...stats.highlight2} />
      </div>

      {/* Entries */}
      <p className="section-label" style={{ color: 'var(--text-muted)', paddingInline: 'var(--margin-screen)', marginBottom: 10 }}>
        {activeTab2 === 'weekly' ? 'רשומות' : 'לפי שבוע'}
      </p>

      <div style={{ paddingInline: 'var(--margin-screen)', display: 'flex', flexDirection: 'column', gap: 10, paddingBottom: 8 }}>
        {activeTab2 === 'weekly'
          ? weekEntries.map(entry => <EntryRow key={entry.id} entry={entry} onUpdateEntry={updateWeekEntry} />)
          : monthWeeks.map(bucket => <MonthlyWeekBucket key={bucket.label} bucket={bucket} onUpdateEntry={updateMonthEntry} />)
        }
      </div>

      <BottomNav activeTab={activeTab} navigate={navigate} />
    </div>
  )
}
