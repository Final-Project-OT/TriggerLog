export default function SafetyGate({ onConfirm, onDismiss }) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="sg-title"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 28px',
        /* Blurred + dimmed overlay */
        background: 'rgba(10, 16, 32, 0.60)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        animation: 'fadeIn 200ms cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Modal card */}
      <div
        style={{
          background: '#FFFFFF',
          borderRadius: 20,
          padding: '24px 24px 20px',
          width: '100%',
          maxWidth: 334,
          boxShadow: '0 16px 48px rgba(0, 0, 0, 0.28)',
          direction: 'rtl',
          animation: 'slideUp 280ms cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Body text */}
        <p
          id="sg-title"
          className="body-text"
          style={{
            color: 'var(--text-dark)',
            textAlign: 'start',
            marginBottom: 20,
          }}
        >
          צפייה ביומן הטריגרים שלך יכולה לפעמים להיות מציפה. הוא הכי שימושי
          כשסוקרים אותו יחד עם המטפל. האם אתה/את במקום רגוע ובטוח כרגע?
        </p>

        {/* Primary CTA */}
        <button
          className="btn-primary"
          onClick={onConfirm}
          style={{ marginBottom: 10 }}
        >
          אני מוכן/ה
        </button>

        {/* Secondary dismiss */}
        <button className="btn-text" onClick={onDismiss}>
          לא עכשיו
        </button>
      </div>
    </div>
  )
}
