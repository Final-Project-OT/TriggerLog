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
