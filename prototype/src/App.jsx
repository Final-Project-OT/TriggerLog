import { useState } from 'react'
import './App.css'
import Onboarding      from './screens/Onboarding'
import WhyTriggerLog   from './screens/WhyTriggerLog'
import CauseSelection  from './screens/CauseSelection'
import History       from './screens/History'
import ReportPreview from './screens/ReportPreview'
import Settings      from './screens/Settings'
import SafetyGate    from './components/SafetyGate'

export default function App() {
  const [screen, setScreen]               = useState('onboarding')
  const [showSafetyGate, setShowSafetyGate] = useState(false)

  const activeTab =
    screen === 'history'                                    ? 'history'  :
    screen === 'settings' || screen === 'reportpreview'    ? 'settings' :
    'main'

  function navigate(to) {
    const dest = to === 'main' ? 'cause-selection' : to
    if (dest === 'history' && screen !== 'history') {
      setShowSafetyGate(true)
    } else {
      setScreen(dest)
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
      {screen === 'onboarding'       && <Onboarding onNewUser={() => setScreen('why')} onReturningUser={() => setScreen('cause-selection')} />}
      {screen === 'why'              && <WhyTriggerLog onContinue={() => setScreen('cause-selection')} />}
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
