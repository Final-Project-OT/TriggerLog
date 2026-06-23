import { useState }    from 'react'
import { MapPin, Bell, Trash2, Share2, ChevronLeft, Info } from 'lucide-react'
import BottomNav        from '../components/BottomNav'

function Toggle({ on, onToggle }) {
  return (
    <div
      className={`toggle-track${on ? ' on' : ''}`}
      onClick={onToggle}
      role="switch"
      aria-checked={on}
      tabIndex={0}
      onKeyDown={e => (e.key === ' ' || e.key === 'Enter') && onToggle()}
    >
      <div className="toggle-thumb" />
    </div>
  )
}

function SectionHeader({ children }) {
  return (
    <p
      className="section-label"
      style={{
        color: 'var(--text-muted)',
        paddingInline: 'var(--margin-screen)',
        marginBottom: 8,
      }}
    >
      {children}
    </p>
  )
}

function RowDivider() {
  return (
    <div style={{ height: 1, background: 'var(--divider)', marginInlineStart: 56 }} />
  )
}

function SettingsRow({ icon: Icon, label, sublabel, right, onClick, danger }) {
  return (
    <div
      className="settings-row"
      onClick={onClick}
      style={{ minHeight: sublabel ? 68 : 56 }}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? e => (e.key === 'Enter' || e.key === ' ') && onClick() : undefined}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, flex: 1 }}>
        {Icon && (
          <Icon
            size={20}
            strokeWidth={1.75}
            color={danger ? 'var(--destructive)' : 'var(--teal-primary)'}
            style={{ flexShrink: 0 }}
          />
        )}
        <div style={{ flex: 1 }}>
          <p
            className="body-text"
            style={{ color: danger ? 'var(--destructive)' : 'var(--text-dark)', textAlign: 'start' }}
          >
            {label}
          </p>
          {sublabel && (
            <p className="caption" style={{ color: 'var(--text-muted)', textAlign: 'start', marginTop: 2 }}>
              {sublabel}
            </p>
          )}
        </div>
      </div>
      {right}
    </div>
  )
}

export default function Settings({ navigate, activeTab }) {
  const [locationOn,  setLocation]  = useState(false)
  const [notifOn,     setNotif]     = useState(false)
  const [deleteStep,  setDeleteStep] = useState(0)

  function handleDelete() {
    if (deleteStep === 0) {
      setDeleteStep(1)
      setTimeout(() => setDeleteStep(0), 3000)
    } else {
      setDeleteStep(0)
      // In production: clear all data here
    }
  }

  return (
    <div
      className="screen"
      style={{ background: 'var(--bg-screen)', paddingBottom: 88, overflowY: 'auto' }}
    >
      {/* Status bar */}
      <div style={{ height: 44 }} aria-hidden="true" />

      {/* Header */}
      <h1
        className="heading-1"
        style={{
          color: 'var(--text-dark)',
          paddingInline: 'var(--margin-screen)',
          marginBottom: 24,
          marginTop: 8,
        }}
      >
        הגדרות
      </h1>

      {/* ── Section 1: Share with therapist ── */}
      <div style={{ marginBottom: 28 }}>
        <SectionHeader>שיתוף עם המטפל</SectionHeader>
        <div className="settings-card">
          <SettingsRow
            icon={Share2}
            label="שתף עם המטפל"
            sublabel="הפק דוח PDF לסקירה קלינית"
            onClick={() => navigate('reportpreview')}
            right={<ChevronLeft size={18} color="var(--text-muted)" strokeWidth={1.75} />}
          />
        </div>
      </div>

      {/* ── Section 2: Preferences ── */}
      <div style={{ marginBottom: 28 }}>
        <SectionHeader>העדפות</SectionHeader>
        <div className="settings-card">
          <SettingsRow
            icon={MapPin}
            label="שמור מיקום אוטומטי"
            onClick={() => setLocation(v => !v)}
            right={<Toggle on={locationOn} onToggle={() => setLocation(v => !v)} />}
          />
          <RowDivider />
          <SettingsRow
            icon={Bell}
            label="תזכורות יומיות"
            sublabel="כבוי כברירת מחדל — התראות עלולות להיות טריגרים"
            onClick={() => setNotif(v => !v)}
            right={<Toggle on={notifOn} onToggle={() => setNotif(v => !v)} />}
          />
        </div>
      </div>

      {/* ── Section 3: Data ── */}
      <div style={{ marginBottom: 28 }}>
        <SectionHeader>נתונים</SectionHeader>
        <div className="settings-card">
          <SettingsRow
            icon={Trash2}
            label={deleteStep === 1 ? 'בטוח? לחץ/י שוב לאישור' : 'מחק את כל הנתונים'}
            onClick={handleDelete}
            danger
          />
        </div>
      </div>

      {/* ── Section 4: About ── */}
      <div>
        <SectionHeader>אודות</SectionHeader>
        <div className="settings-card">
          <SettingsRow
            icon={Info}
            label="על האפליקציה"
            sublabel="TriggerLog — כלי לתיעוד טריגרים בזמן אמת"
          />
          <RowDivider />
          <SettingsRow
            icon={Info}
            label="כתב ויתור קליני"
            sublabel="האפליקציה אינה תחליף לטיפול מקצועי"
          />
          <RowDivider />
          <SettingsRow
            label="גרסה v1.0.0"
          />
        </div>
      </div>

      <BottomNav activeTab={activeTab} navigate={navigate} />
    </div>
  )
}
