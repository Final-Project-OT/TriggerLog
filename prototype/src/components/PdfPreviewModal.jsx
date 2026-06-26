import { useState }  from 'react'
import { X, FileText } from 'lucide-react'

const PDF_SECTIONS = [
  { id: 'log',      label: 'יומן טריגרים',  desc: 'תאריך, שעה, מיקום, סיבה' },
  { id: 'days',     label: 'ימים פעילים',   desc: 'ימים פעילים ומספר רשומות' },
  { id: 'analytics',label: 'אנליטיקה',      desc: 'שינויים לאורך זמן' },
]

export default function PdfPreviewModal({ onClose }) {
  const [enabled, setEnabled] = useState({ log: true, days: true, analytics: true })

  function toggle(id) {
    setEnabled(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 100,
        background: 'rgba(0,0,0,0.55)',
        display: 'flex', alignItems: 'flex-end',
        animation: 'fadeIn 150ms ease',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%', maxHeight: '92dvh',
          background: 'var(--bg-screen)',
          borderRadius: '24px 24px 0 0',
          overflowY: 'auto',
          paddingBottom: 32,
          boxShadow: 'var(--shadow-modal)',
          direction: 'rtl',
          animation: 'slideUp 240ms var(--ease-out)',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Handle + close */}
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 12 }}>
          <div style={{ width: 36, height: 4, borderRadius: 2, background: 'var(--divider)' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 20px 0' }}>
          <h2 style={{ fontFamily: 'Assistant, sans-serif', fontSize: 18, fontWeight: 700, color: 'var(--text-dark)' }}>תצוגה מקדימה</h2>
          <button onClick={onClose} style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 4 }}>
            <X size={22} color="var(--text-muted)" strokeWidth={1.75} />
          </button>
        </div>

        {/* Section toggles */}
        <p style={{ fontFamily: 'Assistant, sans-serif', fontSize: 12, color: 'var(--text-muted)', paddingInline: 20, marginTop: 16, marginBottom: 8 }}>
          בחר/י סעיפים לכלול בדוח
        </p>
        <div style={{ display: 'flex', gap: 8, paddingInline: 20, marginBottom: 20, flexWrap: 'wrap' }}>
          {PDF_SECTIONS.map(s => (
            <button
              key={s.id}
              onClick={() => toggle(s.id)}
              style={{
                fontFamily: 'Assistant, sans-serif', fontSize: 13, fontWeight: 600,
                padding: '6px 14px', borderRadius: 20,
                border: `1.5px solid ${enabled[s.id] ? 'var(--teal-primary)' : 'var(--divider)'}`,
                background: enabled[s.id] ? 'rgba(61,191,170,0.12)' : 'transparent',
                color: enabled[s.id] ? 'var(--teal-primary)' : 'var(--text-muted)',
                cursor: 'pointer',
                transition: 'all 150ms ease',
              }}
            >
              {enabled[s.id] ? '✓ ' : ''}{s.label}
            </button>
          ))}
        </div>

        {/* Simulated PDF */}
        <div style={{ marginInline: 20, background: 'var(--card-surface)', borderRadius: 16, padding: 20, boxShadow: 'var(--shadow-card)' }}>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16, borderBottom: '2px solid var(--teal-primary)', paddingBottom: 12 }}>
            <FileText size={28} color="var(--teal-primary)" strokeWidth={1.5} />
            <div>
              <p style={{ fontFamily: 'Assistant, sans-serif', fontSize: 16, fontWeight: 700, color: 'var(--text-dark)' }}>TriggerLog — דוח קליני</p>
              <p style={{ fontFamily: 'Assistant, sans-serif', fontSize: 12, color: 'var(--text-muted)' }}>1 יוני – 22 יוני, 2026</p>
            </div>
          </div>

          {/* Sections */}
          {PDF_SECTIONS.map(s => (
            <div
              key={s.id}
              style={{
                marginBottom: 16,
                opacity: enabled[s.id] ? 1 : 0.3,
                transition: 'opacity 200ms ease',
                pointerEvents: enabled[s.id] ? 'auto' : 'none',
              }}
            >
              <p style={{ fontFamily: 'Assistant, sans-serif', fontSize: 14, fontWeight: 700, color: 'var(--teal-primary)', marginBottom: 6 }}>{s.label}</p>
              {[0, 1, 2].map(i => (
                <div key={i} style={{ height: 8, borderRadius: 4, background: 'var(--divider)', marginBottom: 6, width: i === 2 ? '60%' : '100%' }} />
              ))}
            </div>
          ))}
        </div>

        <p style={{ fontFamily: 'Assistant, sans-serif', fontSize: 11, color: 'var(--text-muted)', textAlign: 'center', marginTop: 16, paddingInline: 20 }}>
          האפליקציה אינה תחליף לטיפול מקצועי
        </p>
      </div>
    </div>
  )
}
