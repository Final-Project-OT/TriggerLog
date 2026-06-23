import { useState } from 'react'
import './App.css'
import Splash from './screens/Splash'
import Log from './screens/Log'
import History from './screens/History'
import ReportPreview from './screens/ReportPreview'
import Settings from './screens/Settings'
import About from './screens/About'
import SafetyGate from './components/SafetyGate'

export default function App() {
  const [screen, setScreen] = useState('splash')
  const [showSafetyGate, setShowSafetyGate] = useState(false)
  const [logConfirmed, setLogConfirmed] = useState(false)

  function navigate(to) {
    if (to === 'history') {
      setShowSafetyGate(true)
    } else {
      setScreen(to)
    }
  }

  function handleLog() {
    setLogConfirmed(true)
    setTimeout(() => setLogConfirmed(false), 1500)
  }

  function confirmSafetyGate() {
    setShowSafetyGate(false)
    setScreen('history')
  }

  function dismissSafetyGate() {
    setShowSafetyGate(false)
  }

  return (
    <>
      {screen === 'splash' && (
        <Splash onComplete={() => setScreen('log')} />
      )}

      {screen === 'log' && (
        <>
          <Log navigate={navigate} onLog={handleLog} confirmed={logConfirmed} />
          {showSafetyGate && (
            <SafetyGate onConfirm={confirmSafetyGate} onDismiss={dismissSafetyGate} />
          )}
        </>
      )}

      {screen === 'history' && (
        <History navigate={navigate} />
      )}

      {screen === 'reportpreview' && (
        <ReportPreview navigate={navigate} />
      )}

      {screen === 'settings' && (
        <Settings navigate={navigate} />
      )}

      {screen === 'about' && (
        <About navigate={navigate} />
      )}
    </>
  )
}
