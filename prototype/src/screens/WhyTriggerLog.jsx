import { Zap, Clock, TrendingUp, MessageCircle, ShieldCheck } from 'lucide-react'

const POINTS = [
  { icon: Zap,           text: 'הקשה אחת לתיעוד מהיר' },
  { icon: Clock,         text: 'תיעוד בזמן אמת מדויק פי 4' },
  { icon: TrendingUp,    text: 'זיהוי דפוסים לאורך זמן' },
  { icon: MessageCircle, text: 'שיפור תקשורת עם המטפל' },
  { icon: ShieldCheck,   text: 'חיזוק תחושת השליטה' },
]

export default function WhyTriggerLog({ onContinue }) {
  return (
    <div
      className="screen"
      aria-label="למה TriggerLog"
      style={{
        background: 'linear-gradient(170deg, #F0FAF8 0%, #C8EDE7 100%)',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 var(--margin-screen)',
        gap: 0,
      }}
    >
      <div style={{ height: 52 }} aria-hidden="true" />

      {/* Title */}
      <h1
        style={{
          fontFamily: 'Assistant, sans-serif',
          fontSize: 28,
          fontWeight: 800,
          color: 'var(--text-dark)',
          textAlign: 'center',
          marginBottom: 8,
          animation: 'slideUp 500ms 60ms both',
        }}
      >
        למה{' '}
        <span style={{ color: 'var(--teal-primary)' }}>TriggerLog?</span>
      </h1>

      <p
        className="body-text"
        style={{
          color: 'var(--text-muted)',
          textAlign: 'center',
          marginBottom: 32,
          animation: 'slideUp 500ms 120ms both',
        }}
      >
        כמה דברים שכדאי לדעת לפני שמתחילים
      </p>

      {/* Bullet list */}
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          marginBottom: 40,
        }}
      >
        {POINTS.map((pt, i) => {
          const Icon = pt.icon
          return (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                background: 'rgba(255,255,255,0.72)',
                borderRadius: 14,
                padding: '14px 16px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                direction: 'rtl',
                animation: `slideUp 500ms ${140 + i * 70}ms both`,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: 'rgba(61,191,170,0.13)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Icon size={20} color="var(--teal-primary)" strokeWidth={2} />
              </div>
              <span
                style={{
                  fontFamily: 'Assistant, sans-serif',
                  fontSize: 16,
                  fontWeight: 600,
                  color: 'var(--text-dark)',
                }}
              >
                {pt.text}
              </span>
            </div>
          )
        })}
      </div>

      {/* CTA */}
      <div style={{ width: '100%', animation: 'slideUp 500ms 560ms both' }}>
        <button className="btn-primary" onClick={onContinue}>
          בוא נתחיל ←
        </button>
      </div>

      <div style={{ flex: 1 }} />
    </div>
  )
}
