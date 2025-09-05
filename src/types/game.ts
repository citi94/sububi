export interface GameProgress {
  themaId: number
  completed: boolean
  score: number
  maxScore: number
  attempts: number
  bestScore: number
  timeSpent: number
  lastAttempt: string
  streak: number
}

export interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  unlocked: boolean
  unlockedAt?: string
  progress: number
  maxProgress: number
  category: 'completion' | 'accuracy' | 'speed' | 'streak'
}

export interface PlayerStats {
  totalScore: number
  level: number
  xp: number
  xpToNextLevel: number
  totalQuestions: number
  correctAnswers: number
  averageScore: number
  currentStreak: number
  bestStreak: number
  totalTimeSpent: number
  achievements: Achievement[]
  themesCompleted: number
}

export interface QuizSession {
  themaId: number
  startTime: number
  answers: {
    questionId: string
    selectedAnswer: number
    correct: boolean
    timeSpent: number
    points: number
  }[]
  totalScore: number
  streak: number
  completed: boolean
}