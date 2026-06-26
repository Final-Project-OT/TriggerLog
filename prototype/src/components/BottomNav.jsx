import { Home, CalendarDays, Settings2 } from 'lucide-react'

export default function BottomNav({ activeTab, navigate }) {
  return (
    <nav className="bottom-nav" aria-label="ניווט ראשי">
      <NavTab icon={CalendarDays} label="היסטוריה" active={activeTab === 'history'} onClick={() => navigate('history')} />
      <NavTab icon={Home}         label="בית"       active={activeTab === 'main'}    onClick={() => navigate('main')}    />
      <NavTab icon={Settings2}    label="הגדרות"    active={activeTab === 'settings'} onClick={() => navigate('settings')} />
    </nav>
  )
}

function NavTab({ icon: Icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-current={active ? 'page' : undefined}
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        background: 'transparent',
        border: 'none',
        padding: '4px 0',
        cursor: 'pointer',
        WebkitTapHighlightColor: 'transparent',
        position: 'relative',
      }}
    >
      <div style={{
        width: 48,
        height: 48,
        borderRadius: '50%',
        background: active ? '#3DBFAA' : 'transparent',
        boxShadow: active ? '0 2px 8px rgba(61,191,170,0.35)' : 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background 200ms ease, box-shadow 200ms ease',
      }}>
        <Icon
          size={22}
          color={active ? 'white' : '#6B8585'}
          strokeWidth={active ? 2.2 : 1.75}
        />
      </div>
      <span style={{
        fontFamily: 'Assistant, sans-serif',
        fontSize: 11,
        fontWeight: active ? 700 : 400,
        color: active ? '#3DBFAA' : '#6B8585',
        lineHeight: '14px',
      }}>
        {label}
      </span>
    </button>
  )
}
