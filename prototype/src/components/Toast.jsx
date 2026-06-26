import { useEffect } from 'react'

export default function Toast({ message, onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2200)
    return () => clearTimeout(t)
  }, [])

  return (
    <div
      style={{
        position: 'fixed', bottom: 100, left: '50%',
        transform: 'translateX(-50%)',
        background: 'var(--text-dark)', color: 'white',
        borderRadius: 24, padding: '10px 20px',
        fontFamily: 'Assistant, sans-serif', fontSize: 14, fontWeight: 600,
        zIndex: 200, whiteSpace: 'nowrap',
        boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
        animation: 'slideUp 200ms var(--ease-out)',
        direction: 'rtl',
      }}
    >
      {message}
    </div>
  )
}
