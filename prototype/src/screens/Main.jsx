import { useState, useEffect } from 'react'
import { Zap }                  from 'lucide-react'
import BottomNav                from '../components/BottomNav'

const LAST_LOG_TIME = 'היום, 09:14'

export default function Main({ navigate, activeTab }) {
  const [whacking, setWhacking] = useState(false)
  const [rippling, setRippling] = useState(false)
  const [popped,   setPopped]   = useState(false)
  const [floating, setFloating] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setPopped(true), 120)
    return () => clearTimeout(t)
  }, [])

  function handleTap() {
    if (whacking) return
    setWhacking(true)
    setRippling(true)
    setTimeout(() => setRippling(false), 950)
    setTimeout(() => {
      setWhacking(false)
      navigate('cause-selection')
    }, 480)
  }

  function handleAnimationEnd(e) {
    if (e.animationName === 'molePopUp') setFloating(true)
  }

  let buttonAnim = 'none'
  if (popped) {
    if (whacking)       buttonAnim = 'moleWhack 480ms cubic-bezier(0.4,0,0.8,1) forwards'
    else if (floating)  buttonAnim = 'moleFloat 3s ease-in-out infinite'
    else                buttonAnim = 'molePopUp 950ms cubic-bezier(0.34,1.4,0.64,1) forwards'
  }

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
      <div style={{ height: 44 }} aria-hidden="true" />

      <p style={{
        position: 'absolute',
        top: 56,
        fontFamily: 'Assistant, sans-serif',
        fontSize: 18,
        fontWeight: 600,
        color: 'var(--text-dark)',
        textAlign: 'center',
      }}>
        TriggerLog
      </p>

      {/* Hole + button wrapper */}
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        {/* The mole button */}
        <div
          role="button"
          aria-label="הקש לתיעוד טריגר"
          tabIndex={0}
          onClick={handleTap}
          onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && handleTap()}
          onAnimationEnd={handleAnimationEnd}
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
            zIndex: 2,
            animation: buttonAnim,
          }}
        >
          {/* Idle glow pulse ring — sits behind the icon, moves with the button */}
          {floating && !whacking && (
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: -24,
                borderRadius: '50%',
                background: 'rgba(61,191,170,0.28)',
                animation: 'moleGlowPulse 3s ease-in-out infinite',
                pointerEvents: 'none',
                zIndex: 0,
              }}
            />
          )}

          <Zap size={64} color="white" strokeWidth={1.5} style={{ position: 'relative', zIndex: 1 }} />

          {/* Two staggered ripple rings on tap */}
          {rippling && (
            <>
              <span
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: -4,
                  borderRadius: '50%',
                  border: '3px solid rgba(61,191,170,0.75)',
                  animation: 'ripple 950ms ease-out forwards',
                  pointerEvents: 'none',
                  zIndex: 1,
                }}
              />
              <span
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: -4,
                  borderRadius: '50%',
                  border: '3px solid rgba(61,191,170,0.45)',
                  animation: 'ripple 950ms 220ms ease-out forwards',
                  pointerEvents: 'none',
                  zIndex: 1,
                }}
              />
            </>
          )}
        </div>

        {/* Dark oval hole beneath the button */}
        <div
          aria-hidden="true"
          style={{
            width: 200,
            height: 28,
            borderRadius: '50%',
            background: 'rgba(0,0,0,0.13)',
            marginTop: -14,
            zIndex: 1,
            filter: 'blur(4px)',
          }}
        />
      </div>

      <p className="caption" style={{ color: 'var(--text-muted)', marginTop: 20, textAlign: 'center' }}>
        הקש לתיעוד
      </p>
      <p className="caption" style={{ color: 'var(--text-muted)', marginTop: 8, textAlign: 'center', opacity: 0.7 }}>
        תיעוד אחרון: {LAST_LOG_TIME}
      </p>

      <BottomNav activeTab={activeTab} navigate={navigate} />
    </div>
  )
}
