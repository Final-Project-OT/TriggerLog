import { useState } from 'react'
import { ChevronRight, MapPin, Bell, Trash2 } from 'lucide-react'
import BottomNav from '../components/BottomNav'

function Toggle({ on, onToggle, id }) {
  return (
    <div
      id={id}
      className={`toggle-track${on ? ' on' : ''}`}
      onClick={onToggle}
      role="switch"
      aria-checked={on}
      tabIndex={0}
      onKeyDown={e => (e.key === ' ' || e.key === 'Enter') && onToggle()}
      style={{ cursor: 'pointer', flexShrink: 0 }}
    >
      <div className="toggle-thumb" />
    </div>
  )
}

function SectionHeader({ children }) {
  return (
    <p
      className="caption"
      style={{
        color: 'var(--text-muted)',
        paddingInline: 'var(--margin-screen)',
        marginBottom: 8,
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        fontWeight: 600,
        textAlign: 'start',
      }}
    >
      {children}
    </p>
  )
}

function SettingsRow({ icon: Icon, label, sublabel, right, onClick, danger }) {
  return (
    <div
      className="settings-row"
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default', minHeight: sublabel ? 72 : 60 }}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? e => (e.key === 'Enter' || e.key === ' ') && onClick() : undefined}
    >
      {/* Right side (RTL): icon + text */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 12,
          flex: 1,
          minWidth: 0,
        }}
      >
        {Icon && (
          <Icon
            size={20}
            strokeWidth={1.75}
            color={danger ? '#D95252' : 'var(--sky-blue-mid)'}
            style={{ flexShrink: 0 }}
          />
        )}
        <div style={{ flex: 1, minWidth: 0 }}>
          <p
            className="body-text"
            style={{
              color: danger ? '#D95252' : 'var(--text-dark)',
              textAlign: 'start',
            }}
          >
            {label}
          </p>
          {sublabel && (
            <p
              className="caption"
              style={{
                color: 'var(--text-muted)',
                marginTop: 2,
                textAlign: 'start',
                lineHeight: '18px',
              }}
            >
              {sublabel}
            </p>
          )}
        </div>
      </div>
      {/* Left side (RTL): toggle / chevron */}
      {right}
    </div>
  )
}

function Card({ children, style }) {
  return (
    <div className="settings-card" style={style}>
      {children}
    </div>
  )
}

function RowDivider() {
  return (
    <div
      style={{
        height: 1,
        background: 'var(--divider)',
        marginInlineStart: 52,
      }}
    />
  )
}

export default function Settings({ navigate }) {
  const [locationOn, setLocationOn]   = useState(false)
  const [notifOn, setNotifOn]         = useState(false)
  const [deleteStep, setDeleteStep]   = useState(0)

  function handleDelete() {
    if (deleteStep === 0) {
      setDeleteStep(1)
      setTimeout(() => setDeleteStep(0), 3000)
    } else {
      setDeleteStep(0)
    }
  }

  return (
    <div
      className="screen"
      style={{
        background: 'linear-gradient(175deg, #CBE2F2 0%, #D4E8F5 100%)',
        paddingBottom: 88,
      }}
    >
      {/* Status bar */}
      <div style={{ height: 59 }} aria-hidden="true" />

      {/* Header */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingInline: 'var(--margin-screen)',
          marginBottom: 24,
        }}
      >
        <h1 className="heading-1" style={{ color: 'var(--text-dark)', flex: 1 }}>
          הגדרות
        </h1>
        <button
          className="icon-btn"
          onClick={() => navigate('log')}
          aria-label="חזרה"
          style={{ opacity: 0.70 }}
        >
          <ChevronRight size={24} color="var(--text-dark)" strokeWidth={2} />
        </button>
      </div>

      {/* ── Section 1: Privacy ── */}
      <div style={{ marginBottom: 28 }}>
        <SectionHeader>פרטיות ונתונים</SectionHeader>
        <Card>
          <SettingsRow
            icon={MapPin}
            label="שמור מיקום בעת תיעוד"
            onClick={() => setLocationOn(v => !v)}
            right={
              <Toggle
                on={locationOn}
                onToggle={() => setLocationOn(v => !v)}
              />
            }
          />
          <RowDivider />
          <SettingsRow
            icon={Bell}
            label="הפעל התראות"
            sublabel="כבוי כברירת מחדל — התראות עלולות להיות טריגרים"
            onClick={() => setNotifOn(v => !v)}
            right={
              <Toggle
                on={notifOn}
                onToggle={() => setNotifOn(v => !v)}
              />
            }
          />
        </Card>
      </div>

      {/* ── Section 2: Data ── */}
      <div>
        <SectionHeader>הנתונים שלך</SectionHeader>
        <Card>
          <SettingsRow
            icon={Trash2}
            label={deleteStep === 1 ? 'בטוח? לחץ/י שוב לאישור' : 'מחק את כל הנתונים'}
            onClick={handleDelete}
            danger
          />
        </Card>
      </div>

      <BottomNav
        activeTab="settings"
        onHistory={() => navigate('history')}
        onSettings={() => {}}
      />
    </div>
  )
}
