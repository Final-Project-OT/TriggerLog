export default function BottomSheet({ title, options, onClose }) {
  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 100,
        background: 'rgba(0,0,0,0.45)',
        display: 'flex', alignItems: 'flex-end',
        animation: 'fadeIn 150ms ease',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          background: 'var(--card-surface)',
          borderRadius: '20px 20px 0 0',
          paddingBottom: 'max(24px, env(safe-area-inset-bottom))',
          boxShadow: 'var(--shadow-modal)',
          direction: 'rtl',
          animation: 'slideUp 220ms var(--ease-out)',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Drag handle */}
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 12, paddingBottom: 8 }}>
          <div style={{ width: 36, height: 4, borderRadius: 2, background: 'var(--divider)' }} />
        </div>

        {title && (
          <p style={{ fontFamily: 'Assistant, sans-serif', fontSize: 13, fontWeight: 600, color: 'var(--text-muted)', textAlign: 'center', marginBottom: 8 }}>
            {title}
          </p>
        )}

        {options.map((opt, i) => (
          <button
            key={i}
            onClick={() => { opt.onPress(); onClose() }}
            style={{
              display: 'flex', alignItems: 'center', gap: 14,
              width: '100%', padding: '14px 24px',
              background: 'transparent', border: 'none',
              borderTop: i > 0 ? '1px solid var(--divider)' : 'none',
              cursor: 'pointer',
              fontFamily: 'Assistant, sans-serif', fontSize: 16, fontWeight: 500,
              color: opt.danger ? 'var(--destructive)' : 'var(--text-dark)',
              textAlign: 'start',
            }}
          >
            {opt.icon && <opt.icon size={22} color={opt.danger ? 'var(--destructive)' : 'var(--teal-primary)'} strokeWidth={1.75} />}
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  )
}
