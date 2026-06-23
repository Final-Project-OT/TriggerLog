import { AppLogo } from '../components/Icons'

export default function Onboarding({ onStart }) {
  return (
    <div
      className="screen"
      aria-label="מסך פתיחה"
      style={{
        background: 'linear-gradient(170deg, #F0FAF8 0%, #C8EDE7 100%)',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 var(--margin-screen)',
        gap: 0,
      }}
    >
      {/* Skip */}
      <button
        className="btn-text"
        onClick={onStart}
        style={{
          position: 'absolute',
          top: 52,
          insetInlineStart: 'var(--margin-screen)',  /* LEFT in RTL */
        }}
        aria-label="דלג"
      >
        דלג
      </button>

      {/* Logo */}
      <div style={{ marginBottom: 28, animation: 'fadeIn 400ms both' }}>
        <AppLogo width={72} height={72} />
      </div>

      {/* Headline */}
      <h1
        style={{
          fontFamily: 'Assistant, sans-serif',
          fontSize: 28,
          fontWeight: 800,
          color: 'var(--text-dark)',
          textAlign: 'center',
          lineHeight: '38px',
          marginBottom: 16,
          animation: 'slideUp 500ms 100ms both',
        }}
      >
        הטריגרים שלך מופיעים פתאום.{' '}
        <span style={{ color: 'var(--teal-primary)' }}>עכשיו אתה מתעד אותם.</span>
      </h1>

      {/* Subtitle */}
      <p
        className="body-text"
        style={{
          color: 'var(--text-muted)',
          textAlign: 'center',
          marginBottom: 40,
          animation: 'slideUp 500ms 180ms both',
        }}
      >
        הקשה אחת שומרת את המיקום, השעה, והסיבה. בלי לכתוב. בלי מאמץ.
      </p>

      {/* Dot indicator */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 6,
          marginBottom: 32,
        }}
        aria-hidden="true"
      >
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: 'var(--teal-primary)',
          }}
        />
      </div>

      {/* CTA */}
      <div
        style={{
          width: '100%',
          animation: 'slideUp 500ms 260ms both',
        }}
      >
        <button className="btn-primary" onClick={onStart}>
          בוא נתחיל ←
        </button>
      </div>

      {/* Already used it */}
      <button
        className="btn-text"
        onClick={onStart}
        style={{ marginTop: 12, animation: 'fadeIn 500ms 400ms both' }}
      >
        כבר השתמשתי באפליקציה
      </button>
    </div>
  )
}
