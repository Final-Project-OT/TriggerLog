import { ChevronRight } from 'lucide-react'
import { AppLogo } from '../components/Icons'

/*
  About — warm-parchment background, minimal, calm.
  RTL: textAlign: 'start', paddingInline logical props throughout.
*/

const POINTS = [
  'מאפשרת תיעוד מהיר — בפחות מ-10 שניות',
  'מסייעת בזיהוי דפוסים יחד עם המטפל',
  'שומרת את המידע רק אצלך, על המכשיר',
]

export default function About({ navigate }) {
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
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingInline: 'var(--margin-screen)',
          marginBottom: 28,
        }}
      >
        <h1 className="heading-1" style={{ color: 'var(--text-dark)', flex: 1 }}>
          על האפליקציה
        </h1>
        <button
          className="icon-btn"
          onClick={() => navigate('log')}
          aria-label="חזרה"
          style={{ opacity: 0.70 }}
        >
          <ChevronRight size={24} color="var(--text-dark)" strokeWidth={2} />
        </button>
      </div>

      {/* Description */}
      <div style={{ paddingInline: 'var(--margin-screen)', marginBottom: 24 }}>
        <p
          className="body-text"
          style={{
            color: 'var(--text-dark)',
            textAlign: 'start',
            lineHeight: '1.65',
            marginBottom: 16,
          }}
        >
          Trigger Log היא אפליקציה לתיעוד טריגרים רגשיים עבור אנשים שחוו טראומה.
        </p>

        {/* Feature list — constellation dots */}
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: '0 0 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}
        >
          {POINTS.map((pt, i) => (
            <li
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
                gap: 12,
                textAlign: 'start',
              }}
            >
              {/* Constellation accent dot */}
              <span
                aria-hidden="true"
                style={{
                  marginTop: 6,
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  background: 'var(--blue-mid)',
                  flexShrink: 0,
                  boxShadow: '0 0 6px 2px rgba(139,157,195,0.45)',
                }}
              />
              <span className="body-text" style={{ color: 'var(--text-dark)', flex: 1 }}>
                {pt}
              </span>
            </li>
          ))}
        </ul>

        <p
          className="caption"
          style={{
            color: 'var(--text-muted)',
            textAlign: 'start',
            lineHeight: '1.55',
          }}
        >
          האפליקציה אינה מחליפה טיפול מקצועי.
        </p>
      </div>

      {/* Divider */}
      <div
        style={{
          height: 1,
          background: 'var(--divider)',
          marginInline: 'var(--margin-screen)',
          marginBottom: 24,
          opacity: 0.6,
        }}
      />

      {/* Credits */}
      <div style={{ paddingInline: 'var(--margin-screen)', marginBottom: 40 }}>
        <p
          className="caption"
          style={{ color: 'var(--text-muted)', textAlign: 'start', marginBottom: 6 }}
        >
          נבנה במסגרת קורס עיצוב ממשקי משתמש
        </p>
        <p
          className="caption"
          style={{ color: 'var(--text-muted)', textAlign: 'start', marginBottom: 4 }}
        >
          מכללת אפקה · 2026
        </p>
        <p
          className="caption"
          style={{ color: 'var(--text-dark)', textAlign: 'start', fontWeight: 600 }}
        >
          תמר אלוני
        </p>
      </div>

      {/* Logo mark */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          opacity: 0.45,
        }}
      >
        <AppLogo width={52} height={40} />
      </div>
    </div>
  )
}
