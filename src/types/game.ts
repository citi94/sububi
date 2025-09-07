export interface TestProgress {
  testLevel: 'A' | 'B' | 'C'
  completed: boolean
  passed: boolean  // Met mastery threshold
  score: number
  maxScore: number
  attempts: number
  bestScore: number
  timeSpent: number
  lastAttempt: string
  streak: number
  cooldownUntil?: string  // ISO timestamp when cooldown ends
}

export interface GameProgress {
  themaId: number
  unlocked: boolean
  testA: TestProgress
  testB: TestProgress
  testC: TestProgress
  overallCompleted: boolean  // A+B both passed
  fullyMastered: boolean     // All three tests passed
  totalTimeSpent: number
  firstStarted?: string      // When first attempt was made
  fullyMasteredAt?: string   // When C was completed
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
  category: 'completion' | 'accuracy' | 'speed' | 'streak' | 'mastery'
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
  themesCompleted: number      // Themas with A+B completed
  themesFullyMastered: number  // Themas with A+B+C completed
  testsACompleted: number      // Count of Test A completions
  testsBCompleted: number      // Count of Test B completions  
  testsCCompleted: number      // Count of Test C completions
}

export interface QuizSession {
  themaId: number
  testLevel: 'A' | 'B' | 'C'
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
  masteryThreshold: number  // Required percentage to pass (67%, 75%, 83%)
}