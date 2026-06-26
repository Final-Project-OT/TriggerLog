import { Home, CalendarDays, Settings2 } from 'lucide-react'

const ACTIVE   = '#3DBFAA'
const INACTIVE = '#6B8585'

export default function BottomNav({ activeTab, navigate }) {
  return (
    <nav className="bottom-nav" aria-label="ניווט ראשי">
      {/* RTL flex-row: right→left order: history · home · settings */}
      <NavTab
        icon={CalendarDays}
        label="היסטוריה"
        active={activeTab === 'history'}
        onClick={() => navigate('history')}
        ariaLabel="היסטוריה"
      />
      <NavTab
        icon={Home}
        label="בית"
        active={activeTab === 'main'}
        onClick={() => navigate('main')}
        ariaLabel="בית"
        center
      />
      <NavTab
        icon={Settings2}
        label="הגדרות"
        active={activeTab === 'settings'}
        onClick={() => navigate('settings')}
        ariaLabel="הגדרות"
      />
    </nav>
  )
}

function NavTab({ icon: Icon, label, active, onClick, ariaLabel, center }) {
  const color = active ? '#3DBFAA' : '#6B8585'
  return (
    <button
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        background: 'transparent',
        border: 'none',
        padding: center ? '4px 16px' : '4px 12px',
        cursor: 'pointer',
        WebkitTapHighlightColor: 'transparent',
        position: 'relative',
      }}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-current={active ? 'page' : undefined}
    >
      {center && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 48,
          height: 48,
          borderRadius: '50%',
          background: active ? '#3DBFAA' : 'rgba(61,191,170,0.12)',
          boxShadow: active ? '0 2px 8px rgba(61,191,170,0.35)' : 'none',
          transition: 'background 200ms ease, box-shadow 200ms ease',
        }} />
      )}
      <Icon
        size={center ? 26 : 22}
        color={center ? (active ? 'white' : ACTIVE) : color}
        strokeWidth={active ? 2.2 : 1.75}
        style={{ position: 'relative', zIndex: 1 }}
      />
      <span style={{
        fontFamily: 'Assistant, sans-serif',
        fontSize: 11,
        fontWeight: active ? 700 : 400,
        color,
        lineHeight: '14px',
        position: 'relative',
        zIndex: 1,
      }}>
        {label}
      </span>
    </button>
  )
}
