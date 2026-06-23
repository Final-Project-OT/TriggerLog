import { useEffect } from 'react'
import { AppLogo } from '../components/Icons'

export default function Splash({ onComplete }) {
  useEffect(() => {
    const t = setTimeout(onComplete, 1500)
    return () => clearTimeout(t)
  }, [onComplete])

  return (
    <div
      className="screen"
      aria-label="מסך פתיחה"
      style={{
        background: 'linear-gradient(170deg, #F0FAF8 0%, #C8EDE7 100%)',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
      }}
    >
      <div style={{ animation: 'fadeIn 500ms 100ms both' }}>
        <AppLogo width={90} height={90} />
      </div>

      <h1
        style={{
          fontFamily: 'Assistant, sans-serif',
          fontSize: 32,
          fontWeight: 700,
          color: 'var(--text-dark)',
          direction: 'ltr',
          textAlign: 'center',
          animation: 'slideUp 500ms 200ms both',
        }}
      >
        TriggerLog
      </h1>

      <p
        style={{
          fontFamily: 'Assistant, sans-serif',
          fontSize: 16,
          fontWeight: 400,
          color: 'var(--text-muted)',
          textAlign: 'center',
          animation: 'slideUp 500ms 300ms both',
        }}
      >
        הצמיחה מתחילה מתיעוד
      </p>

      <p
        style={{
          position: 'absolute',
          bottom: 32,
          fontFamily: 'Assistant, sans-serif',
          fontSize: 12,
          color: 'var(--text-muted)',
          animation: 'fadeIn 500ms 600ms both',
        }}
      >
        v1.0.0
      </p>
    </div>
  )
}
