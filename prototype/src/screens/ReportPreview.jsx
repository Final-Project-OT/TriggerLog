import { ChevronRight, Share2 } from 'lucide-react'

/* ─── Heatmap ─────────────────────────────────────────── */
/*
  24 hours. Values = rough trigger density (0–3+).
  Spikes at 8, 13, 19, 21 as spec suggests.
*/
const HEAT = [
  0, 0, 0, 0, 0, 0, 0, 0,   // 0–7
  3, 1, 0, 0, 0, 2, 0, 1,   // 8–15
  0, 0, 0, 3, 0, 2, 1, 0,   // 16–23
]
const HEAT_OPACITY = [0.05, 0.28, 0.52, 0.86]

function HeatmapChart() {
  const cols = HEAT.length
  return (
    <div>
      <div
        style={{
          borderRadius: 12,
          overflow: 'hidden',
          background: 'rgba(212, 232, 245, 0.30)',
        }}
      >
        <svg
          viewBox={`0 0 ${cols * 10} 72`}
          style={{ display: 'block', width: '100%', height: 72 }}
          aria-label="מפת חום שעות"
          role="img"
        >
          {HEAT.map((val, i) => {
            const opacity = HEAT_OPACITY[Math.min(val, 3)]
            const fill   = val === 0 ? '#B8C9E0' : '#2C4E8A'
            return (
              <rect
                key={i}
                x={i * 10 + 0.4}
                y={0}
                width={9.2}
                height={72}
                rx={2}
                fill={fill}
                fillOpacity={opacity}
              />
            )
          })}
        </svg>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: 6,
        }}
      >
        {/* RTL: right = 00:00, left = 23:00 */}
        <span className="caption" style={{ color: 'var(--text-muted)' }}>23:00</span>
        <span className="caption" style={{ color: 'var(--text-muted)' }}>00:00</span>
      </div>
    </div>
  )
}

/* ─── Donut chart ─────────────────────────────────────── */
const SLICES = [
  { label: 'צליל',            pct: 30, color: '#2C4E8A' },
  { label: 'ויזואלי',         pct: 20, color: '#B8C9E0' },
  { label: 'זיכרון / מחשבה', pct: 15, color: '#6B7FAA' },
  { label: 'תחושה גופנית',    pct: 15, color: '#A0B4D0' },
  { label: 'המון אנשים',      pct: 10, color: '#8B9DC3' },
  { label: 'ריח',             pct:  5, color: '#C4AED8' },
  { label: 'אחר / לא יודע',   pct:  5, color: '#D4E8F5' },
]

function polar(cx, cy, r, deg) {
  const a = (deg - 90) * (Math.PI / 180)
  return [cx + r * Math.cos(a), cy + r * Math.sin(a)]
}

function slicePath(cx, cy, oR, iR, start, end) {
  const [oSx, oSy] = polar(cx, cy, oR, start)
  const [oEx, oEy] = polar(cx, cy, oR, end)
  const [iEx, iEy] = polar(cx, cy, iR, end)
  const [iSx, iSy] = polar(cx, cy, iR, start)
  const large = end - start > 180 ? 1 : 0
  return [
    `M ${oSx} ${oSy}`,
    `A ${oR} ${oR} 0 ${large} 1 ${oEx} ${oEy}`,
    `L ${iEx} ${iEy}`,
    `A ${iR} ${iR} 0 ${large} 0 ${iSx} ${iSy}`,
    'Z',
  ].join(' ')
}

function DonutChart() {
  const cx = 70, cy = 72, oR = 58, iR = 37
  let cumAngle = 0
  const paths = SLICES.map(s => {
    const start = cumAngle
    const sweep = s.pct / 100 * 360
    cumAngle += sweep
    return { ...s, d: slicePath(cx, cy, oR, iR, start, cumAngle - 0.8) }
  })
  const total = SLICES.reduce((acc, s) => acc + s.pct, 0)

  return (
    <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
      {/* Donut SVG */}
      <div style={{ position: 'relative', flexShrink: 0 }}>
        <svg
          viewBox={`0 0 ${cx * 2} ${cy + oR + 4}`}
          width={150}
          aria-label="תרשים עוגת טריגרים"
          role="img"
        >
          {/* Constellation accent */}
          <circle cx="8"   cy="12"  r="2" fill="#8B9DC3" opacity="0.45" />
          <circle cx="130" cy="10"  r="1.5" fill="#8B9DC3" opacity="0.38" />
          <circle cx="127" cy="132" r="2" fill="#8B9DC3" opacity="0.32" />
          <line x1="8" y1="12" x2="130" y2="10"  stroke="#8B9DC3" strokeWidth="0.5" strokeOpacity="0.18" />
          <line x1="130" y1="10" x2="127" y2="132" stroke="#8B9DC3" strokeWidth="0.5" strokeOpacity="0.18" />
          {/* Slices */}
          {paths.map((s, i) => (
            <path
              key={i}
              d={s.d}
              fill={s.color}
              stroke="var(--warm-white)"
              strokeWidth="1.5"
            />
          ))}
          {/* Center label */}
          <text
            x={cx} y={cy - 6}
            textAnchor="middle"
            fontFamily="Assistant, sans-serif"
            fontSize="12"
            fontWeight="600"
            fill="var(--text-dark)"
          >
            {total}
          </text>
          <text
            x={cx} y={cy + 8}
            textAnchor="middle"
            fontFamily="Assistant, sans-serif"
            fontSize="9"
            fill="var(--text-muted)"
          >
            טריגרים
          </text>
        </svg>
      </div>

      {/* Legend — RTL: text right-aligned */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 7,
          flex: 1,
        }}
      >
        {SLICES.map((s, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
              /* RTL: text first (right), swatch last (left) */
            }}
          >
            <span
              className="caption"
              style={{ color: 'var(--text-dark)', flex: 1, textAlign: 'start' }}
            >
              {s.label}
            </span>
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 2,
                background: s.color,
                flexShrink: 0,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── Line chart ──────────────────────────────────────── */
/*
  4 weekly data points per intensity level.
  Trend: moderate and severe improving, mild fluctuating.
  Uses smooth cubic bezier curves (constellation feel).
*/
function smoothPath(points) {
  if (!points.length) return ''
  let d = `M ${points[0].join(',')}`
  for (let i = 1; i < points.length; i++) {
    const [x0, y0] = points[i - 1]
    const [x1, y1] = points[i]
    const cpx = x0 + (x1 - x0) * 0.5
    d += ` C ${cpx},${y0} ${cpx},${y1} ${x1},${y1}`
  }
  return d
}

const LINES = [
  {
    label: 'קל',     color: '#B8C9E0', width: 1.5,
    /* y: higher SVG y = lower value in display (inverted) */
    pts: [[10,55],[37,40],[63,62],[90,58]],
  },
  {
    label: 'בינוני', color: '#8B9DC3', width: 1.5,
    pts: [[10,25],[37,38],[63,35],[90,48]],
  },
  {
    label: 'חזק',   color: '#2C4E8A', width: 2.0,
    pts: [[10,65],[37,62],[63,75],[90,78]],
  },
]

const WEEK_LABELS = ['ש׳1', 'ש׳2', 'ש׳3', 'ש׳4']
const WEEK_XS     = [10, 37, 63, 90]
const REF_YS      = [25, 50, 75]   /* reference grid lines */

function LineChart() {
  return (
    <div>
      <svg
        viewBox="0 0 100 100"
        style={{ display: 'block', width: '100%', height: 100 }}
        aria-label="גרף עצמה לאורך הזמן"
        role="img"
      >
        {/* Reference grid */}
        {REF_YS.map(y => (
          <line
            key={y}
            x1="5" y1={y} x2="95" y2={y}
            stroke="var(--divider)"
            strokeWidth="0.4"
            strokeDasharray="2,2"
            strokeOpacity="0.55"
          />
        ))}
        {/* X-axis */}
        <line x1="5" y1="95" x2="95" y2="95"
          stroke="var(--divider)" strokeWidth="0.6" />

        {/* Data lines + dots */}
        {LINES.map((line, li) => (
          <g key={li}>
            {/* Smooth curve */}
            <path
              d={smoothPath(line.pts)}
              fill="none"
              stroke={line.color}
              strokeWidth={line.width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Constellation data points */}
            {line.pts.map(([x, y], i) => (
              <circle
                key={i}
                cx={x} cy={y} r={2.5}
                fill={line.color}
              />
            ))}
          </g>
        ))}

        {/* Week labels */}
        {WEEK_XS.map((x, i) => (
          <text
            key={i}
            x={x} y="100"
            textAnchor="middle"
            fontFamily="Assistant, sans-serif"
            fontSize="6"
            fill="var(--text-muted)"
          >
            {WEEK_LABELS[i]}
          </text>
        ))}
      </svg>

      {/* Legend */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          gap: 20,
          marginTop: 8,
        }}
      >
        {LINES.map((l, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span className="caption" style={{ color: 'var(--text-dark)' }}>
              {l.label}
            </span>
            <div
              style={{
                width: 18, height: 2.5,
                background: l.color, borderRadius: 2,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── Section label ─────────────────────────────────── */
function SectionLabel({ children }) {
  return (
    <h2
      className="heading-2"
      style={{ color: 'var(--text-dark)', marginBottom: 12 }}
    >
      {children}
    </h2>
  )
}

/* ─── Main screen ───────────────────────────────────── */
export default function ReportPreview({ navigate }) {
  function handleShare() {
    if (navigator.share) {
      navigator.share({
        title: 'TriggerLog — דוח חודשי',
        text: 'סיכום טריגרים לחודש האחרון',
      }).catch(() => {})
    }
  }

  return (
    <div
      className="screen"
      style={{
        background: 'linear-gradient(175deg, #F5EDD8 0%, #EEE8D5 100%)',
        paddingBottom: 48,
      }}
    >
      {/* Status bar */}
      <div style={{ height: 59 }} aria-hidden="true" />

      {/* Header */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          paddingInline: 'var(--margin-screen)',
          marginBottom: 4,
        }}
      >
        <div style={{ flex: 1 }}>
          <h1
            className="heading-1"
            style={{ color: 'var(--text-dark)' }}
          >
            סיכום עבור המטפל
          </h1>
          <p className="caption" style={{ color: 'var(--text-muted)', marginTop: 4 }}>
            חודש אחרון · 01.06–20.06.2026
          </p>
        </div>
        <button
          className="icon-btn"
          onClick={() => navigate('history')}
          aria-label="חזרה"
          style={{ opacity: 0.75, marginTop: 4 }}
        >
          <ChevronRight size={24} color="var(--text-dark)" strokeWidth={2} />
        </button>
      </div>

      {/* Divider */}
      <div
        style={{
          height: 1,
          background: 'var(--divider)',
          marginInline: 'var(--margin-screen)',
          marginBottom: 20,
          opacity: 0.6,
        }}
      />

      {/* Section 1 — Heatmap */}
      <section
        style={{ paddingInline: 'var(--margin-screen)', marginBottom: 24 }}
        aria-label="שעות פגיעה"
      >
        <SectionLabel>שעות פגיעה</SectionLabel>
        <HeatmapChart />
      </section>

      {/* Section 2 — Donut */}
      <section
        style={{ paddingInline: 'var(--margin-screen)', marginBottom: 24 }}
        aria-label="סוגי טריגרים"
      >
        <SectionLabel>סוגי טריגרים</SectionLabel>
        <DonutChart />
      </section>

      {/* Section 3 — Line chart */}
      <section
        style={{ paddingInline: 'var(--margin-screen)', marginBottom: 36 }}
        aria-label="עצמה לאורך הזמן"
      >
        <SectionLabel>עצמה לאורך הזמן</SectionLabel>
        <LineChart />
      </section>

      {/* Send report button */}
      <div style={{ paddingInline: 'var(--margin-screen)' }}>
        <button
          className="btn-primary"
          onClick={handleShare}
          style={{ gap: 10 }}
        >
          <Share2 size={18} strokeWidth={2} />
          שלח דוח
        </button>
      </div>
    </div>
  )
}
