export interface Question {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation?: string
}

export interface Thema {
  id: number
  title: string
  description: string
  questions: Question[]
  icon: string
  tests?: {
    A: Question[]
    B: Question[]
    C: Question[]
  }
}

// Enhanced Progress tracking with detailed metrics
export interface Progress {
  themaId: number
  completed: boolean
  score: number
  totalQuestions: number
  correctAnswers: number
  attempts: number
  lastAttempt?: Date
  firstCompleted?: Date
  bestScore: number
  averageTimePerQuestion: number
  totalTimeSpent: number
  streakData: StreakData
}

// Streak tracking for consecutive correct answers
export interface StreakData {
  current: number
  longest: number
  lastStreakDate?: Date
}

// Individual question attempt tracking
export interface QuestionAttempt {
  questionId: string
  themaId: number
  isCorrect: boolean
  timeSpent: number
  timestamp: Date
  selectedAnswer: number
}

// Player statistics and progression
export interface PlayerStats {
  totalXP: number
  level: number
  totalQuestionsAnswered: number
  totalCorrectAnswers: number
  totalTimeSpent: number
  longestStreak: number
  perfectScores: number
  averageAccuracy: number
  themasCompleted: number
  joinDate: Date
  lastPlayDate?: Date
  consecutiveDaysPlayed: number
  totalDaysPlayed: number
}

// Achievement system
export interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  category: AchievementCategory
  type: AchievementType
  requirement: AchievementRequirement
  reward: AchievementReward
  rarity: AchievementRarity
  unlocked: boolean
  unlockedDate?: Date
  progress?: number
  maxProgress?: number
  gradient: string
}

export type AchievementCategory = 'completion' | 'accuracy' | 'speed' | 'streak' | 'milestone' | 'special'

export type AchievementType = 'single' | 'progress' | 'cumulative'

export type AchievementRarity = 'common' | 'rare' | 'epic' | 'legendary'

export interface AchievementRequirement {
  type: 'questions_correct' | 'perfect_scores' | 'streak_length' | 'themas_completed' | 'total_xp' | 'consecutive_days' | 'speed_average' | 'accuracy_percentage'
  value: number
  timeframe?: 'daily' | 'weekly' | 'monthly' | 'alltime'
}

export interface AchievementReward {
  xp: number
  title?: string
  badge?: string
}

// Daily goals and challenges
export interface DailyGoal {
  id: string
  title: string
  description: string
  icon: string
  type: DailyGoalType
  target: number
  progress: number
  completed: boolean
  date: string // YYYY-MM-DD format
  reward: AchievementReward
}

export type DailyGoalType = 'questions_answered' | 'correct_answers' | 'perfect_score' | 'streak_length' | 'time_spent'

// Motivational messages
export interface MotivationalMessage {
  id: string
  message: string
  emoji: string
  trigger: MessageTrigger
  weight: number // For random selection weighting
}

export type MessageTrigger = 'correct_answer' | 'incorrect_answer' | 'streak_milestone' | 'level_up' | 'achievement_unlock' | 'perfect_score' | 'encouragement'

// Game session tracking
export interface GameSession {
  id: string
  themaId: number
  startTime: Date
  endTime?: Date
  questions: QuestionAttempt[]
  finalScore: number
  xpEarned: number
  achievementsUnlocked: string[]
  perfectScore: boolean
}

// Comprehensive game state
export interface GameState {
  playerStats: PlayerStats
  progress: Record<number, Progress> // themaId -> Progress
  achievements: Record<string, Achievement> // achievementId -> Achievement
  dailyGoals: DailyGoal[]
  recentSessions: GameSession[]
  settings: GameSettings
}

export interface GameSettings {
  soundEnabled: boolean
  animationsEnabled: boolean
  difficultySetting: 'easy' | 'normal' | 'hard'
  dailyGoalReminders: boolean
  celebrationLevel: 'minimal' | 'normal' | 'full'
}

// Scoring system configuration
export interface ScoringConfig {
  basePointsPerCorrect: number
  speedBonusMultiplier: number
  streakBonusPoints: number
  perfectScoreBonus: number
  xpPerPoint: number
  levelThresholds: number[]
}

// Level system
export interface LevelInfo {
  level: number
  title: string
  xpRequired: number
  xpToNext: number
  totalXP: number
  rewards?: string[]
  iconColor: string
}