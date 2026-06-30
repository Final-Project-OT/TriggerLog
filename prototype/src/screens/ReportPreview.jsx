import { useState } from 'react'
import { ChevronRight, Download, Share2, FileText, QrCode, X } from 'lucide-react'
import qrImage from '../assets/TriggerLogQRCode.png'
import BottomNav from '../components/BottomNav'

const SECTIONS = [
  { label: 'יומן טריגרים',     desc: 'תאריך, שעה, מיקום, סיבה'    },
  { label: 'עמידה בתיעוד',     desc: 'ימים פעילים ומספר רשומות'    },
  { label: 'ניתוח מגמות',      desc: 'שינויים לאורך זמן'            },
]

const SHARE_URL = 'https://prototype-rose-delta-63.vercel.app'

export default function ReportPreview({ navigate, activeTab }) {
  const [showQR, setShowQR] = useState(false)

  return (
    <div
      className="screen"
      style={{ background: 'var(--bg-screen)', paddingBottom: 100, overflowY: 'auto' }}
    >
      {/* Status bar */}
      <div style={{ height: 44 }} aria-hidden="true" />

      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingInline: 'var(--margin-screen)',
          marginBottom: 4,
          marginTop: 8,
        }}
      >
        <button
          className="icon-btn"
          onClick={() => navigate('settings')}
          aria-label="חזרה"
          style={{ opacity: 0.7 }}
        >
          <ChevronRight size={24} color="var(--text-dark)" strokeWidth={2} />
        </button>
        <h1 className="heading-1" style={{ color: 'var(--text-dark)', flex: 1, textAlign: 'center' }}>
          הכן לפגישה
        </h1>
        <div style={{ width: 44 }} />
      </div>

      {/* Subtitle */}
      <p
        className="body-text"
        style={{
          color: 'var(--text-muted)',
          textAlign: 'center',
          paddingInline: 'var(--margin-screen)',
          marginBottom: 28,
        }}
      >
        סיכום מקיף של הטריגרים שלך לסקירה קלינית על ידי המטפל.
      </p>

      {/* PDF preview card */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: 8,
        }}
      >
        <div
          style={{
            width: 160,
            height: 200,
            background: 'var(--card-surface)',
            borderRadius: 12,
            boxShadow: 'var(--shadow-card), 4px 4px 0 var(--divider)',
            transform: 'rotate(1deg)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: 20,
            gap: 10,
            position: 'relative',
          }}
        >
          {/* PDF READY badge */}
          <span
            style={{
              position: 'absolute',
              top: 12,
              insetInlineStart: 12,
              background: 'var(--teal-primary)',
              color: 'white',
              borderRadius: 6,
              padding: '2px 8px',
              fontFamily: 'Assistant, sans-serif',
              fontSize: 10,
              fontWeight: 700,
              direction: 'ltr',
            }}
          >
            PDF מוכן
          </span>

          <FileText
            size={40}
            color="var(--teal-light)"
            strokeWidth={1.25}
            style={{ marginTop: 28 }}
          />

          {/* Document lines */}
          {[0, 1, 2, 3].map(i => (
            <div
              key={i}
              style={{
                width: i === 0 ? '80%' : i === 3 ? '50%' : '90%',
                height: 6,
                borderRadius: 3,
                background: 'var(--divider)',
              }}
            />
          ))}
        </div>
      </div>

      {/* Date range */}
      <p
        className="caption"
        style={{
          color: 'var(--text-muted)',
          textAlign: 'center',
          marginBottom: 4,
        }}
      >
        1 יוני – 22 יוני, 2026
      </p>

      {/* Preview link */}
      <button
        className="btn-text"
        style={{ marginBottom: 24 }}
      >
        תצוגה מקדימה ▶
      </button>

      {/* Included sections */}
      <p
        className="section-label"
        style={{
          color: 'var(--text-muted)',
          paddingInline: 'var(--margin-screen)',
          marginBottom: 12,
        }}
      >
        סעיפים כלולים
      </p>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          paddingInline: 'var(--margin-screen)',
          marginBottom: 32,
        }}
      >
        {SECTIONS.map((s, i) => (
          <div
            key={i}
            className="card"
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 14,
              padding: '14px 16px',
            }}
          >
            <div style={{ flex: 1 }}>
              <p className="body-text" style={{ color: 'var(--text-dark)', fontWeight: 600 }}>
                {s.label}
              </p>
              <p className="caption" style={{ color: 'var(--text-muted)' }}>
                {s.desc}
              </p>
            </div>
            <div
              style={{
                width: 24,
                height: 24,
                borderRadius: '50%',
                background: 'rgba(61,191,170,0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <span style={{ color: 'var(--teal-primary)', fontSize: 13, fontWeight: 700 }}>✓</span>
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div
        style={{
          paddingInline: 'var(--margin-screen)',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
        }}
      >
        <button className="btn-primary" style={{ gap: 10 }}>
          <Download size={18} strokeWidth={2} />
          הורד דוח PDF
        </button>
        <button className="btn-secondary" style={{ gap: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Share2 size={18} strokeWidth={2} />
          שתף עם המטפל
        </button>
        <button
          className="btn-text"
          style={{ gap: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={() => setShowQR(true)}
        >
          <QrCode size={18} strokeWidth={2} />
          שתף ב־QR
        </button>
      </div>

      <BottomNav activeTab={activeTab} navigate={navigate} />

      {/* QR Code modal */}
      {showQR && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="QR Code לשיתוף"
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 var(--margin-screen)',
            zIndex: 600,
            animation: 'fadeIn 150ms ease-out',
          }}
          onClick={() => setShowQR(false)}
        >
          <div
            style={{
              background: 'var(--card-surface)',
              borderRadius: 24,
              padding: '28px 24px 24px',
              width: '100%',
              maxWidth: 320,
              boxShadow: 'var(--shadow-modal)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 0,
              animation: 'slideUp 220ms var(--ease-out)',
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowQR(false)}
              aria-label="סגור"
              style={{
                position: 'absolute',
                top: 16,
                insetInlineStart: 16,
                background: 'rgba(0,0,0,0.06)',
                border: 'none',
                borderRadius: '50%',
                width: 32,
                height: 32,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={16} color="var(--text-muted)" strokeWidth={2} />
            </button>

            <h2
              className="heading-2"
              style={{ color: 'var(--text-dark)', textAlign: 'center', marginBottom: 6 }}
            >
              שתף עם המטפל
            </h2>
            <p
              className="caption"
              style={{ color: 'var(--text-muted)', textAlign: 'center', marginBottom: 20 }}
            >
              סרוק את הקוד כדי לצפות בדוח
            </p>

            <div
              style={{
                padding: 12,
                background: 'white',
                borderRadius: 16,
                boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                marginBottom: 16,
              }}
            >
              <img src={qrImage} alt="QR Code" width={200} height={200} style={{ display: 'block' }} />
            </div>

            <p className="caption" style={{ color: 'var(--text-muted)', textAlign: 'center' }}>
              TriggerLog · דוח מ-1 יוני עד 22 יוני
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
