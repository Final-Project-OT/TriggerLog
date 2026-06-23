import { Zap } from 'lucide-react'

export default function SafetyGate({ onConfirm, onDismiss }) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="אישור לפני ההיסטוריה"
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0, 0, 0, 0.45)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 var(--margin-screen)',
        zIndex: 500,
        animation: 'fadeIn 150ms ease-out',
      }}
    >
      <div
        style={{
          background: 'var(--card-surface)',
          borderRadius: 24,
          padding: '32px 24px 24px',
          width: '100%',
          maxWidth: 360,
          boxShadow: 'var(--shadow-modal)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 0,
          animation: 'slideUp 220ms var(--ease-out)',
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: '50%',
            background: 'rgba(61,191,170,0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20,
          }}
        >
          <Zap size={28} color="var(--teal-primary)" strokeWidth={1.75} />
        </div>

        {/* Title */}
        <h2
          className="heading-2"
          style={{
            color: 'var(--text-dark)',
            textAlign: 'center',
            marginBottom: 12,
            width: '100%',
          }}
        >
          לפני שממשיכים
        </h2>

        {/* Body */}
        <p
          className="body-text"
          style={{
            color: 'var(--text-muted)',
            textAlign: 'center',
            marginBottom: 28,
            lineHeight: '26px',
          }}
        >
          אזור ההיסטוריה מציג את כל הטריגרים שתיעדת. אם אינך מוכן/ה לראות אותם כרגע, אפשר לחזור מאוחר יותר.
        </p>

        {/* Confirm button */}
        <button
          className="btn-primary"
          onClick={onConfirm}
          style={{ marginBottom: 12 }}
        >
          אני מוכן/ה
        </button>

        {/* Dismiss link */}
        <button className="btn-text" onClick={onDismiss}>
          לא עכשיו
        </button>
      </div>
    </div>
  )
}
