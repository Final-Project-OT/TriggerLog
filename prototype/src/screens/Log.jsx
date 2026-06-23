import { useState } from 'react'
import { Info } from 'lucide-react'
import BottomNav from '../components/BottomNav'

/*
  Log — Screen 2 (Home)
  ─────────────────────
  RTL chip layout: in direction:rtl, flex-start = RIGHT side.
  Row 1: [צליל][ויזואלי][המון אנשים] — first chip is rightmost.
  Row 2: [ריח][זיכרון][תחושה גופנית][אחר] — same pattern.
*/

/* Row 1: right → left display order */
const ROW1 = [
  { id: 'sound',  label: 'צליל' },
  { id: 'visual', label: 'ויזואלי' },
  { id: 'crowd',  label: 'המון אנשים / מרחב' },
]

/* Row 2: right → left display order */
const ROW2 = [
  { id: 'smell',  label: 'ריח' },
  { id: 'memory', label: 'זיכרון / מחשבה' },
  { id: 'body',   label: 'תחושה גופנית' },
  { id: 'other',  label: 'אחר / לא יודע' },
]

/* RTL order: right = קל, center = בינוני, left = חזק */
const INTENSITIES = [
  { id: 'light',  label: 'קל' },
  { id: 'medium', label: 'בינוני' },
  { id: 'strong', label: 'חזק' },
]

/* Chip row: flex-start in RTL = packed to the right ✓ */
function ChipRow({ chips, selectedId, onSelect, style }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start', /* RTL: flex-start = right side */
        gap: 'var(--gap-chip)',
        ...style,
      }}
    >
      {chips.map(chip => (
        <button
          key={chip.id}
          className={`chip${selectedId === chip.id ? ' selected' : ''}`}
          onClick={() => onSelect(selectedId === chip.id ? null : chip.id)}
          aria-pressed={selectedId === chip.id}
        >
          {chip.label}
        </button>
      ))}
    </div>
  )
}

export default function Log({ navigate, onLog, confirmed }) {
  const [selectedChip,      setChip]      = useState(null)
  const [selectedIntensity, setIntensity] = useState(null)
  const [note, setNote]                   = useState('')

  function handleLog() {
    onLog()
    setTimeout(() => {
      setChip(null)
      setIntensity(null)
      setNote('')
    }, 1500)
  }

  return (
    <div
      className="screen"
      style={{
        background: 'linear-gradient(175deg, #CBE2F2 0%, #D4E8F5 45%, #DDE9F0 100%)',
        paddingBottom: 88,
      }}
    >
      {/* Status bar safe area */}
      <div style={{ height: 59 }} aria-hidden="true" />

      {/* ─── Header ─── */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingInline: 'var(--margin-screen)',
          marginBottom: 'var(--gap-section)',
        }}
      >
        <h1
          className="heading-1"
          style={{ color: 'var(--text-dark)', flex: 1 }}
        >
          מה קרה?
        </h1>

        {/* Info icon — inline-end (LEFT in RTL) */}
        <button
          className="icon-btn"
          onClick={() => navigate('about')}
          aria-label="על האפליקציה"
          style={{ opacity: 0.50, marginInlineStart: 8 }}
        >
          <Info size={20} color="var(--text-dark)" strokeWidth={1.75} />
        </button>
      </div>

      {/* ─── Trigger type ─── */}
      <section
        aria-label="סוג הטריגר"
        style={{ paddingInline: 'var(--margin-screen)', marginBottom: 16 }}
      >
        <h2
          className="heading-2"
          style={{ color: 'var(--text-dark)', marginBottom: 'var(--gap-section)' }}
        >
          סוג הטריגר
        </h2>

        <ChipRow
          chips={ROW1}
          selectedId={selectedChip}
          onSelect={setChip}
          style={{ marginBottom: 'var(--gap-chip)' }}
        />
        <ChipRow
          chips={ROW2}
          selectedId={selectedChip}
          onSelect={setChip}
        />
      </section>

      {/* ─── Intensity ─── */}
      <section
        aria-label="עצמת הטריגר"
        style={{ paddingInline: 'var(--margin-screen)', marginBottom: 20 }}
      >
        <h2
          className="heading-2"
          style={{ color: 'var(--text-dark)', marginBottom: 10 }}
        >
          עצמה
        </h2>

        <div
          className="intensity-group"
          role="group"
          aria-label="עצמה"
        >
          {INTENSITIES.map(btn => (
            <button
              key={btn.id}
              className={`intensity-btn${selectedIntensity === btn.id ? ' selected' : ''}`}
              onClick={() => setIntensity(selectedIntensity === btn.id ? null : btn.id)}
              aria-pressed={selectedIntensity === btn.id}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </section>

      {/* ─── Quick note ─── */}
      <div
        style={{ paddingInline: 'var(--margin-screen)', marginBottom: 20 }}
      >
        <input
          type="text"
          className="text-input"
          placeholder="הערה קצרה (לא חובה)"
          value={note}
          onChange={e => setNote(e.target.value)}
          aria-label="הערה קצרה"
          maxLength={120}
        />
      </div>

      {/* ─── Log button ─── */}
      <div style={{ paddingInline: 'var(--margin-screen)' }}>
        <button
          className={`btn-primary${confirmed ? ' confirmed' : ''}`}
          onClick={handleLog}
          disabled={confirmed}
          aria-label={confirmed ? 'הטריגר תועד' : 'תעד טריגר'}
        >
          {confirmed ? 'תועד ✓' : 'תיעוד'}
        </button>
      </div>

      {/* Bottom navigation */}
      <BottomNav
        activeTab={null}
        onHistory={() => navigate('history')}
        onSettings={() => navigate('settings')}
      />
    </div>
  )
}
