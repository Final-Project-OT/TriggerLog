import { useEffect } from 'react'
import { AppLogo } from '../components/Icons'

/*
  Splash — Screen 1
  ─────────────────
  Sky-at-dusk gradient: deep blue-sky → soft lavender-blush
  4 decorative star dots with staggered CSS twinkle animation.
  Auto-advances to Log after 1.5 s.
*/

/* Exact positions from the spec, as % of viewport for responsiveness */
const STARS = [
  { left: '14.8%', top: '16.4%', size: 4, opacity: 0.55, delay: '0s',    dur: '3.2s' },
  { left: '81.4%', top: '22.3%', size: 3, opacity: 0.45, delay: '1.1s',  dur: '4.0s' },
  { left: '20.9%', top: '56.3%', size: 5, opacity: 0.40, delay: '0.6s',  dur: '3.6s' },
  { left: '86.0%', top: '63.4%', size: 4, opacity: 0.50, delay: '1.8s',  dur: '2.8s' },
]

export default function Splash({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 1500)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div
      className="screen"
      aria-label="מסך פתיחה"
      style={{
        background: 'linear-gradient(170deg, #C8DFF0 0%, #D4E8F5 55%, #EAD8F2 100%)',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Star dots */}
      {STARS.map((s, i) => (
        <span
          key={i}
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            borderRadius: '50%',
            background: '#8B9DC3',
            '--op': s.opacity,
            animation: `starTwinkle ${s.dur} ${s.delay} ease-in-out infinite`,
          }}
        />
      ))}

      {/* Logo */}
      <div
        style={{
          marginBottom: 20,
          filter: 'drop-shadow(0 4px 16px rgba(44, 78, 138, 0.15))',
          animation: 'fadeIn 600ms 100ms both',
        }}
      >
        <AppLogo width={90} height={68} />
      </div>

      {/* App name — LTR brand name */}
      <h1
        style={{
          fontFamily: "'Assistant', sans-serif",
          fontSize: 32,
          fontWeight: 600,
          lineHeight: '40px',
          color: '#1C2333',
          direction: 'ltr',
          textAlign: 'center',
          marginBottom: 8,
          letterSpacing: '-0.3px',
          animation: 'slideUp 500ms 200ms both',
        }}
      >
        Trigger Log
      </h1>

      {/* Tagline — Hebrew */}
      <p
        style={{
          fontFamily: "'Assistant', sans-serif",
          fontSize: 16,
          fontWeight: 400,
          lineHeight: '24px',
          color: 'rgba(28, 35, 51, 0.70)',
          textAlign: 'center',
          animation: 'slideUp 500ms 320ms both',
        }}
      >
        רק לסמן שזה קרה
      </p>
    </div>
  )
}
