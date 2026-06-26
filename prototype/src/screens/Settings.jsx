import { useState }    from 'react'
import { MapPin, Bell, Trash2, Share2, Download, Eye, Info, Mail } from 'lucide-react'
import { MessageCircle } from 'lucide-react'
import BottomNav        from '../components/BottomNav'
import Dialog           from '../components/Dialog'
import BottomSheet      from '../components/BottomSheet'
import Toast            from '../components/Toast'
import PdfPreviewModal  from '../components/PdfPreviewModal'
import SafetyGate       from '../components/SafetyGate'

function Toggle({ on, onToggle }) {
  return (
    <div
      className={`toggle-track${on ? ' on' : ''}`}
      onClick={e => { e.stopPropagation(); onToggle() }}
      role="switch"
      aria-checked={on}
      tabIndex={0}
      onKeyDown={e => (e.key === ' ' || e.key === 'Enter') && (e.stopPropagation(), onToggle())}
    >
      <div className="toggle-thumb" />
    </div>
  )
}

function SectionHeader({ children }) {
  return (
    <p className="section-label" style={{ color: 'var(--text-muted)', paddingInline: 'var(--margin-screen)', marginBottom: 8 }}>
      {children}
    </p>
  )
}

function RowDivider() {
  return <div style={{ height: 1, background: 'var(--divider)', marginInlineStart: 56 }} />
}

function SettingsRow({ icon: Icon, label, sublabel, right, onClick, danger }) {
  return (
    <div
      className="settings-row"
      onClick={onClick}
      style={{ minHeight: sublabel ? 68 : 56, cursor: onClick ? 'pointer' : 'default' }}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? e => (e.key === 'Enter' || e.key === ' ') && onClick() : undefined}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, flex: 1 }}>
        {Icon && (
          <Icon size={20} strokeWidth={1.75} color={danger ? 'var(--destructive)' : 'var(--teal-primary)'} style={{ flexShrink: 0 }} />
        )}
        <div style={{ flex: 1 }}>
          <p className="body-text" style={{ color: danger ? 'var(--destructive)' : 'var(--text-dark)', textAlign: 'start' }}>
            {label}
          </p>
          {sublabel && (
            <p className="caption" style={{ color: 'var(--text-muted)', textAlign: 'start', marginTop: 2 }}>{sublabel}</p>
          )}
        </div>
      </div>
      {right}
    </div>
  )
}

export default function Settings({ navigate, activeTab }) {
  const [locationOn,      setLocation]      = useState(false)
  const [notifOn,         setNotif]         = useState(false)
  const [showDeleteDialog,setShowDelete]    = useState(false)
  const [showAbout,       setShowAbout]     = useState(false)
  const [showShareSheet,  setShowShare]     = useState(false)
  const [showSafetyGate,  setShowSafety]    = useState(false)
  const [showPdfPreview,  setShowPdf]       = useState(false)
  const [toast,           setToast]         = useState(null)

  function showToast(msg) {
    setToast(msg)
  }

  return (
    <div className="screen" style={{ background: 'var(--bg-screen)', paddingBottom: 88, overflowY: 'auto' }}>
      <div style={{ height: 44 }} aria-hidden="true" />

      <h1 className="heading-1" style={{ color: 'var(--text-dark)', paddingInline: 'var(--margin-screen)', marginBottom: 24, marginTop: 8 }}>
        הגדרות
      </h1>

      {/* ── Section 1: Share with therapist ── */}
      <div style={{ marginBottom: 28 }}>
        <SectionHeader>שיתוף עם המטפל</SectionHeader>
        <div className="settings-card">
          <SettingsRow
            icon={Eye}
            label="תצוגה מקדימה"
            sublabel="צפה/י בדוח לפני שליחה"
            onClick={() => setShowSafety(true)}
          />
          <RowDivider />
          <SettingsRow
            icon={Download}
            label="הורד PDF"
            sublabel="שמור את הדוח למכשיר"
            onClick={() => showToast('PDF הורד בהצלחה ✓')}
          />
          <RowDivider />
          <SettingsRow
            icon={Share2}
            label="שתף עם המטפל"
            sublabel="שלח את הדוח ישירות"
            onClick={() => setShowShare(true)}
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
            right={<Toggle on={locationOn} onToggle={() => setLocation(v => !v)} />}
          />
          <RowDivider />
          <SettingsRow
            icon={Bell}
            label="תזכורות יומיות"
            sublabel="כבוי כברירת מחדל — התראות עלולות להיות טריגרים"
            right={<Toggle on={notifOn} onToggle={() => setNotif(v => !v)} />}
          />
        </div>
      </div>

      {/* ── Section 3: About ── */}
      <div style={{ marginBottom: 28 }}>
        <SectionHeader>אודות</SectionHeader>
        <div className="settings-card">
          <SettingsRow
            icon={Info}
            label="על האפליקציה"
            sublabel="TriggerLog — כלי לתיעוד טריגרים בזמן אמת"
            onClick={() => setShowAbout(true)}
          />
          <RowDivider />
          <SettingsRow
            icon={Info}
            label="כתב ויתור קליני"
            sublabel="האפליקציה אינה תחליף לטיפול מקצועי"
          />
          <RowDivider />
          <SettingsRow label="גרסה v1.0.0" />
        </div>
      </div>

      {/* ── Section 4: Data (bottom) ── */}
      <div style={{ marginBottom: 28 }}>
        <SectionHeader>נתונים</SectionHeader>
        <div className="settings-card">
          <SettingsRow
            icon={Trash2}
            label="מחק את כל הנתונים"
            onClick={() => setShowDelete(true)}
            danger
          />
        </div>
      </div>

      <BottomNav activeTab={activeTab} navigate={navigate} />

      {/* ── Overlays ── */}
      {showDeleteDialog && (
        <Dialog
          title="מחיקת כל הנתונים"
          body="פעולה זו תמחק את כל הטריגרים שתיעדת לצמיתות. לא ניתן לשחזר את הנתונים."
          confirmLabel="מחק לצמיתות"
          confirmDanger
          onConfirm={() => { setShowDelete(false); showToast('כל הנתונים נמחקו') }}
          onCancel={() => setShowDelete(false)}
        />
      )}

      {showAbout && (
        <Dialog
          title="על האפליקציה"
          body={`TriggerLog v1.0.0\n\nכלי לתיעוד טריגרים בזמן אמת — עוזר לך לזהות דפוסים ולשתף מידע עם המטפל.\n\nהאפליקציה אינה תחליף לטיפול מקצועי.`}
          confirmLabel="סגור"
          hideCancel
          onConfirm={() => setShowAbout(false)}
          onCancel={() => setShowAbout(false)}
        />
      )}

      {showShareSheet && (
        <BottomSheet
          title="שתף עם המטפל"
          onClose={() => setShowShare(false)}
          options={[
            {
              icon: MessageCircle,
              label: 'WhatsApp',
              onPress: () => showToast('פותח WhatsApp…'),
            },
            {
              icon: Mail,
              label: 'דואר אלקטרוני',
              onPress: () => showToast('פותח אפליקציית מייל…'),
            },
            {
              label: 'אפשרויות נוספות',
              onPress: () => showToast('פותח תפריט שיתוף…'),
            },
          ]}
        />
      )}

      {showSafetyGate && (
        <SafetyGate
          onConfirm={() => { setShowSafety(false); setShowPdf(true) }}
          onDismiss={() => setShowSafety(false)}
        />
      )}

      {showPdfPreview && (
        <PdfPreviewModal onClose={() => setShowPdf(false)} />
      )}

      {toast && (
        <Toast message={toast} onDone={() => setToast(null)} />
      )}
    </div>
  )
}
