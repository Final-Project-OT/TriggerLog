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
  const [selected,  setSelected]  = useState(null)
  const [note,      setNote]      = useState('')
  const [flash,     setFlash]     = useState(false)

  function selectCause(causeId) {
    setSelected(causeId)
    setNote('')
  }

  function confirm() {
    if (!selected) return
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
      style={{ background: 'var(--bg-screen)', paddingBottom: selected ? 140 : 100, overflowY: 'auto' }}
    >
      <div style={{ height: 44 }} aria-hidden="true" />

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingInline: 'var(--margin-screen)', marginBottom: 4, marginTop: 8 }}>
        <h1 className="heading-1" style={{ color: 'var(--text-dark)' }}>מה גרם לטריגר?</h1>
        <button className="btn-text" onClick={skip} style={{ width: 'auto' }}>דלג</button>
      </div>

      <p className="body-text" style={{ color: 'var(--text-muted)', paddingInline: 'var(--margin-screen)', marginBottom: 24 }}>
        לא חייב/ת לדעת. אפשר לדלג.
      </p>

      <p className="section-label" style={{ color: 'var(--text-muted)', paddingInline: 'var(--margin-screen)', marginBottom: 12 }}>
        נפוצים
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--gap-card)', paddingInline: 'var(--margin-screen)' }}>
        {CAUSES.map(cause => (
          <CauseCard
            key={cause.id}
            cause={cause}
            selected={selected === cause.id}
            onSelect={() => selectCause(cause.id)}
          />
        ))}
      </div>

      {/* Note field — appears after selecting a cause */}
      {selected && (
        <div
          style={{
            position: 'fixed', bottom: 0, left: 0, right: 0,
            background: 'var(--card-surface)',
            borderTop: '1px solid var(--divider)',
            padding: '14px 20px max(20px, env(safe-area-inset-bottom))',
            boxShadow: '0 -4px 16px rgba(0,0,0,0.08)',
            animation: 'slideUp 220ms var(--ease-out)',
            direction: 'rtl',
          }}
        >
          <textarea
            value={note}
            onChange={e => setNote(e.target.value)}
            placeholder="הוסף הערה אופציונלית… (עד 140 תווים)"
            maxLength={140}
            rows={2}
            style={{
              width: '100%', boxSizing: 'border-box',
              borderRadius: 10, border: '1.5px solid var(--divider)',
              padding: '8px 12px',
              fontFamily: 'Assistant, sans-serif', fontSize: 14, color: 'var(--text-dark)',
              background: 'var(--bg-screen)', resize: 'none', outline: 'none',
              marginBottom: 10, direction: 'rtl',
            }}
          />
          <button className="btn-primary" onClick={confirm} style={{ width: '100%' }}>
            אשר/י טריגר
          </button>
        </div>
      )}

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
      <div style={{ width: 48, height: 48, borderRadius: '50%', background: isUnknown ? 'rgba(107,133,133,0.10)' : 'rgba(61,191,170,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon size={24} color={isUnknown ? 'var(--text-muted)' : 'var(--teal-primary)'} strokeWidth={1.75} />
      </div>
      <span style={{ fontFamily: 'Assistant, sans-serif', fontSize: 13, fontWeight: 600, color: 'var(--text-dark)', textAlign: 'center', lineHeight: '18px' }}>
        {cause.label}
      </span>
    </div>
  )
}
