export default function Dialog({ title, body, confirmLabel, confirmDanger, onConfirm, onCancel, hideCancel }) {
  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 100,
        background: 'rgba(0,0,0,0.45)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 24,
        animation: 'fadeIn 150ms ease',
      }}
      onClick={onCancel}
    >
      <div
        style={{
          background: 'var(--card-surface)',
          borderRadius: 20,
          padding: '28px 24px 20px',
          width: '100%',
          maxWidth: 340,
          boxShadow: 'var(--shadow-modal)',
          direction: 'rtl',
          animation: 'slideUp 180ms var(--ease-out)',
        }}
        onClick={e => e.stopPropagation()}
      >
        <h2 style={{ fontFamily: 'Assistant, sans-serif', fontSize: 18, fontWeight: 700, color: 'var(--text-dark)', marginBottom: 10, textAlign: 'center' }}>
          {title}
        </h2>
        <p style={{ fontFamily: 'Assistant, sans-serif', fontSize: 14, color: 'var(--text-muted)', textAlign: 'center', lineHeight: '22px', marginBottom: 24, whiteSpace: 'pre-line' }}>
          {body}
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <button
            onClick={onConfirm}
            style={{
              width: '100%', height: 48, borderRadius: 14, border: 'none',
              background: confirmDanger ? 'var(--destructive)' : 'var(--teal-primary)',
              color: 'white',
              fontFamily: 'Assistant, sans-serif', fontSize: 16, fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            {confirmLabel}
          </button>
          {!hideCancel && (
            <button
              onClick={onCancel}
              style={{
                width: '100%', height: 44, borderRadius: 14, border: 'none',
                background: 'transparent', color: 'var(--text-muted)',
                fontFamily: 'Assistant, sans-serif', fontSize: 15, fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              ביטול
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
