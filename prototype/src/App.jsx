import { useState } from 'react'
import './App.css'
import Splash        from './screens/Splash'
import Onboarding    from './screens/Onboarding'
import Main          from './screens/Main'
import CauseSelection from './screens/CauseSelection'
import History       from './screens/History'
import ReportPreview from './screens/ReportPreview'
import Settings      from './screens/Settings'
import SafetyGate    from './components/SafetyGate'

export default function App() {
  const [screen, setScreen]               = useState('splash')
  const [showSafetyGate, setShowSafetyGate] = useState(false)

  // activeTab: determines which tab is highlighted in BottomNav
  const activeTab =
    screen === 'history'                   ? 'history'  :
    screen === 'settings' || screen === 'reportpreview' ? 'settings' :
    'main'

  function navigate(to) {
    if (to === 'history' && screen !== 'history') {
      setShowSafetyGate(true)   // gate fires before every history visit
    } else {
      setScreen(to)
    }
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
      {screen === 'splash'           && <Splash onComplete={() => setScreen('onboarding')} />}
      {screen === 'onboarding'       && <Onboarding onStart={() => setScreen('main')} />}
      {screen === 'main'             && <Main navigate={navigate} activeTab={activeTab} />}
      {screen === 'cause-selection'  && <CauseSelection navigate={navigate} activeTab={activeTab} />}
      {screen === 'history'          && <History navigate={navigate} activeTab={activeTab} />}
      {screen === 'reportpreview'    && <ReportPreview navigate={navigate} activeTab={activeTab} />}
      {screen === 'settings'         && <Settings navigate={navigate} activeTab={activeTab} />}

      {showSafetyGate && (
        <SafetyGate onConfirm={confirmSafetyGate} onDismiss={dismissSafetyGate} />
      )}
    </>
  )
}
