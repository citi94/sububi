import { useState } from 'react'
import ThemaSelector from './components/ThemaSelector'
import QuizView from './components/QuizView'
import ProgressDashboard from './components/ProgressDashboard'
import { Thema } from './types/latin'
import { latinThemas } from './data/latinContent'
import { useGameMechanics } from './hooks/useGameMechanics'

function App() {
  const [currentThema, setCurrentThema] = useState<Thema | null>(null)
  const [showDashboard, setShowDashboard] = useState(false)
  const gameMechanics = useGameMechanics()

  const handleThemaSelect = (thema: Thema) => {
    setCurrentThema(thema)
    setShowDashboard(false)
  }

  const handleBackToMenu = () => {
    setCurrentThema(null)
    setShowDashboard(false)
  }

  const handleShowDashboard = () => {
    setShowDashboard(true)
    setCurrentThema(null)
  }

  return (
    <div className="app">
      {showDashboard ? (
        <ProgressDashboard 
          onBack={handleBackToMenu}
          themas={latinThemas}
          progress={gameMechanics.progress}
          stats={gameMechanics.stats}
        />
      ) : currentThema ? (
        <QuizView 
          thema={currentThema}
          onBack={handleBackToMenu}
          gameMechanics={gameMechanics}
        />
      ) : (
        <ThemaSelector 
          themas={latinThemas}
          onThemaSelect={handleThemaSelect}
          onShowProgress={handleShowDashboard}
          progress={gameMechanics.progress}
          stats={gameMechanics.stats}
        />
      )}
    </div>
  )
}

export default App