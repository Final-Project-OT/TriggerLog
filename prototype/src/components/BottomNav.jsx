import { Settings2 } from 'lucide-react'
import { ConstellationIcon } from './Icons'

const ACTIVE   = '#2C4E8A'
const INACTIVE = '#7A8499'

export default function BottomNav({ activeTab, onHistory, onSettings }) {
  const historyColor  = activeTab === 'history'  ? ACTIVE : INACTIVE
  const settingsColor = activeTab === 'settings' ? ACTIVE : INACTIVE

  return (
    <nav className="bottom-nav" aria-label="ניווט ראשי">
      {/*
        RTL direction: in a flex row with space-between,
        the FIRST child sits at the inline-start (= RIGHT in RTL).
        So we put History first → it appears on the RIGHT ✓
        Settings second → it appears on the LEFT ✓
      */}

      {/* History icon — RIGHT side (RTL primary position) */}
      <button
        className="icon-btn"
        onClick={onHistory}
        aria-label="היסטוריה"
        aria-current={activeTab === 'history' ? 'page' : undefined}
      >
        <ConstellationIcon color={historyColor} size={24} />
      </button>

      {/* Settings icon — LEFT side (RTL secondary position) */}
      <button
        className="icon-btn"
        onClick={onSettings}
        aria-label="הגדרות"
        aria-current={activeTab === 'settings' ? 'page' : undefined}
      >
        <Settings2 size={24} color={settingsColor} strokeWidth={1.75} />
      </button>
    </nav>
  )
}
