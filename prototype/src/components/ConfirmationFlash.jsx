import { Check } from 'lucide-react'

/*
  ConfirmationFlash — shown for 1s after a trigger is saved.
  Rendered via a fixed overlay (z-index 1000), pointer-events none.
  Parent controls visibility with the `visible` prop.
*/
export default function ConfirmationFlash({ visible }) {
  if (!visible) return null

  return (
    <div
      aria-live="polite"
      aria-label="הטריגר נשמר"
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: 'var(--teal-primary)',
          borderRadius: 20,
          padding: '18px 36px',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          boxShadow: '0 8px 32px rgba(61,191,170,0.40)',
          animation: 'flashIn 200ms var(--ease-out)',
        }}
      >
        <Check size={22} color="white" strokeWidth={2.5} />
        <span
          style={{
            fontFamily: 'Assistant, sans-serif',
            fontSize: 18,
            fontWeight: 700,
            color: 'white',
          }}
        >
          נשמר ✓
        </span>
      </div>
    </div>
  )
}
