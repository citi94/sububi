import { useState, useEffect } from 'react'
import { ArrowLeft, Check, X } from 'lucide-react'
import { Thema } from '../types/latin'
import { useGameMechanics } from '../hooks/useGameMechanics'

interface QuizViewProps {
  thema: Thema
  onBack: () => void
  gameMechanics: ReturnType<typeof useGameMechanics>
}

export default function QuizView({ thema, onBack, gameMechanics }: QuizViewProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [questionStartTime, setQuestionStartTime] = useState(Date.now())
  const [showCelebration, setShowCelebration] = useState(false)
  
  // Initialize quiz session
  useEffect(() => {
    gameMechanics.startQuizSession(thema.id)
    setQuestionStartTime(Date.now())
  }, [thema.id])
  
  // Reset question timer when moving to next question
  useEffect(() => {
    setQuestionStartTime(Date.now())
  }, [currentQuestion])

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
  }

  const handleNext = () => {
    if (selectedAnswer === null) return

    const question = thema.questions[currentQuestion]
    const isCorrect = selectedAnswer === question.correctAnswer
    const timeSpent = Date.now() - questionStartTime
    
    // Record the answer with game mechanics
    gameMechanics.recordAnswer(
      question.id,
      selectedAnswer,
      isCorrect,
      timeSpent
    )

    setShowResult(true)
    
    // Show celebration for correct answers
    if (isCorrect) {
      setShowCelebration(true)
      setTimeout(() => setShowCelebration(false), 2000)
    }

    setTimeout(() => {
      if (currentQuestion < thema.questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(null)
        setShowResult(false)
      } else {
        // Complete the quiz session
        gameMechanics.completeQuizSession()
        // Show final results or navigate back
        setTimeout(() => onBack(), 2000)
      }
    }, 2000)
  }

  const question = thema.questions[currentQuestion]

  if (!question) {
    return (
      <div className="quiz-view">
        <div className="quiz-header">
          <button onClick={onBack} className="back-btn">
            <ArrowLeft size={20} />
            Back
          </button>
          <h2>{thema.title}</h2>
        </div>
        <div className="no-questions">
          <h3>Coming Soon!</h3>
          <p>Questions for this topic are being prepared. Check back soon!</p>
        </div>
        
        <style jsx>{`
          .quiz-view {
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
          }

          .quiz-header {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 2rem;
          }

          .back-btn {
            background: rgba(255, 255, 255, 0.1);
            border: none;
            padding: 0.75rem;
            border-radius: 12px;
            color: white;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            transition: background 0.2s;
          }

          .back-btn:hover {
            background: rgba(255, 255, 255, 0.2);
          }

          .quiz-header h2 {
            color: white;
            margin: 0;
          }

          .no-questions {
            text-align: center;
            padding: 4rem 2rem;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 16px;
            backdrop-filter: blur(10px);
          }

          .no-questions h3 {
            color: white;
            font-size: 2rem;
            margin-bottom: 1rem;
          }

          .no-questions p {
            color: rgba(255, 255, 255, 0.7);
            font-size: 1.1rem;
          }
        `}</style>
      </div>
    )
  }

  return (
    <div className="quiz-view">
      <div className="quiz-header">
        <button onClick={onBack} className="back-btn">
          <ArrowLeft size={20} />
          Back
        </button>
        <h2>{thema.title}</h2>
        <div className="stats-display">
          <div className="progress">
            {currentQuestion + 1} of {thema.questions.length}
          </div>
          <div className="score">Score: {gameMechanics.currentSession?.totalScore || 0}</div>
          <div className="streak">🔥 {gameMechanics.currentSession?.streak || 0}</div>
        </div>
      </div>
      
      {showCelebration && (
        <div className="celebration-overlay">
          <div className="celebration-content">
            <div className="celebration-text">🎉 Excellent! 🎉</div>
            <div className="points-earned">+{gameMechanics.currentSession?.answers[gameMechanics.currentSession.answers.length - 1]?.points || 0} points!</div>
          </div>
        </div>
      )}

      <div className="question-card">
        <h3>{question.question}</h3>
        
        <div className="options">
          {question.options.map((option, index) => (
            <button
              key={index}
              className={`option ${selectedAnswer === index ? 'selected' : ''} ${
                showResult 
                  ? index === question.correctAnswer 
                    ? 'correct' 
                    : selectedAnswer === index 
                      ? 'incorrect' 
                      : ''
                  : ''
              }`}
              onClick={() => handleAnswerSelect(index)}
              disabled={showResult}
            >
              {option}
              {showResult && index === question.correctAnswer && <Check size={20} />}
              {showResult && selectedAnswer === index && index !== question.correctAnswer && <X size={20} />}
            </button>
          ))}
        </div>

        {!showResult && (
          <button 
            className="next-btn"
            onClick={handleNext}
            disabled={selectedAnswer === null}
          >
            {currentQuestion === thema.questions.length - 1 ? 'Finish' : 'Next'}
          </button>
        )}

        {showResult && question.explanation && (
          <div className="explanation">
            <h4>Explanation:</h4>
            <p>{question.explanation}</p>
          </div>
        )}
      </div>

      <style jsx>{`
        .quiz-view {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
        }

        .quiz-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2rem;
        }

        .back-btn {
          background: rgba(255, 255, 255, 0.1);
          border: none;
          padding: 0.75rem;
          border-radius: 12px;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: background 0.2s;
        }

        .back-btn:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .quiz-header h2 {
          color: white;
          margin: 0;
        }

        .stats-display {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .progress, .score, .streak {
          background: rgba(255, 255, 255, 0.1);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          color: white;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .celebration-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: fadeIn 0.3s ease-out;
        }

        .celebration-content {
          background: linear-gradient(135deg, #ffd700, #ffed4e);
          padding: 2rem;
          border-radius: 20px;
          text-align: center;
          animation: celebrationBounce 0.6s ease-out;
        }

        .celebration-text {
          font-size: 2rem;
          font-weight: bold;
          color: #333;
          margin-bottom: 0.5rem;
        }

        .points-earned {
          font-size: 1.2rem;
          font-weight: 600;
          color: #666;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes celebrationBounce {
          0% { transform: scale(0.5) translateY(-50px); opacity: 0; }
          50% { transform: scale(1.1) translateY(0); }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }

        .question-card {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          backdrop-filter: blur(10px);
        }

        .question-card h3 {
          color: white;
          margin-bottom: 2rem;
          font-size: 1.3rem;
          text-align: center;
        }

        .options {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .option {
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid transparent;
          padding: 1rem 1.5rem;
          border-radius: 12px;
          color: white;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          justify-content: space-between;
          align-items: center;
          text-align: left;
        }

        .option:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 215, 0, 0.3);
        }

        .option.selected {
          border-color: #ffd700;
          background: rgba(255, 215, 0, 0.1);
        }

        .option.correct {
          border-color: #4caf50;
          background: rgba(76, 175, 80, 0.2);
        }

        .option.incorrect {
          border-color: #f44336;
          background: rgba(244, 67, 54, 0.2);
        }

        .option:disabled {
          cursor: not-allowed;
        }

        .next-btn {
          background: linear-gradient(45deg, #667eea, #764ba2);
          border: none;
          padding: 1rem 2rem;
          border-radius: 25px;
          color: white;
          font-weight: 600;
          cursor: pointer;
          width: 100%;
          font-size: 1.1rem;
          transition: all 0.2s;
        }

        .next-btn:hover:not(:disabled) {
          transform: translateY(-2px);
        }

        .next-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .explanation {
          margin-top: 1.5rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
        }

        .explanation h4 {
          color: #ffd700;
          margin-bottom: 0.5rem;
        }

        .explanation p {
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
        }
      `}</style>
    </div>
  )
}