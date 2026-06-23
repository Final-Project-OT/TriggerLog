import { Home, CalendarDays, Settings2 } from 'lucide-react'

const ACTIVE   = '#3DBFAA'
const INACTIVE = '#6B8585'

export default function BottomNav({ activeTab, navigate }) {
  return (
    <nav
      className="bottom-nav"
      aria-label="ניווט ראשי"
    >
      {/*
        RTL flex-row: first child = inline-start = RIGHT side.
        Tab order right→left: בית · היסטוריה · הגדרות
      */}
      <NavTab
        icon={Home}
        label="בית"
        active={activeTab === 'main'}
        onClick={() => navigate('main')}
        ariaLabel="בית"
      />
      <NavTab
        icon={CalendarDays}
        label="היסטוריה"
        active={activeTab === 'history'}
        onClick={() => navigate('history')}
        ariaLabel="היסטוריה"
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

function NavTab({ icon: Icon, label, active, onClick, ariaLabel }) {
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
        padding: '4px 12px',
        cursor: 'pointer',
        WebkitTapHighlightColor: 'transparent',
      }}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-current={active ? 'page' : undefined}
    >
      <Icon size={22} color={color} strokeWidth={active ? 2.2 : 1.75} />
      <span
        style={{
          fontFamily: 'Assistant, sans-serif',
          fontSize: 11,
          fontWeight: active ? 700 : 400,
          color,
          lineHeight: '14px',
        }}
      >
        {label}
      </span>
    </button>
  )
}
