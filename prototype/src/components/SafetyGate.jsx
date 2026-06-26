import moleIcon from '../assets/mole.svg'

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
            marginBottom: 20,
            animation: 'molePopUp 950ms cubic-bezier(0.34,1.4,0.64,1) both',
          }}
        >
          <img src={moleIcon} alt="" aria-hidden="true" width={72} height={72} />
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
          אזור ההיסטוריה מציג את כל הטריגרים שתיעדת. שים/י לב - צפייה בהם עלולה לעורר מחדש תגובות רגשיות. אם אינך מוכן/ה לכך כרגע, אפשר תמיד לחזור מאוחר יותר.
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
