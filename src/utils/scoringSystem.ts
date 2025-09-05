import { ScoringConfig, QuestionAttempt, LevelInfo } from '../types/latin'
import { DEFAULT_SCORING_CONFIG } from './gameStorage'

// Calculate score for a single question attempt
export function calculateQuestionScore(
  isCorrect: boolean,
  timeSpent: number, // in seconds
  streakCount: number,
  config: ScoringConfig = DEFAULT_SCORING_CONFIG
): number {
  if (!isCorrect) return 0
  
  let score = config.basePointsPerCorrect
  
  // Speed bonus: Extra points for answering quickly (within 10 seconds gets full bonus)
  const speedBonus = Math.max(0, (10 - timeSpent) * config.speedBonusMultiplier)
  score += Math.round(speedBonus)
  
  // Streak bonus: Additional points for consecutive correct answers
  if (streakCount > 1) {
    score += (streakCount - 1) * config.streakBonusPoints
  }
  
  return Math.max(0, Math.round(score))
}

// Calculate total session score
export function calculateSessionScore(
  attempts: QuestionAttempt[],
  config: ScoringConfig = DEFAULT_SCORING_CONFIG
): {
  totalScore: number
  correctAnswers: number
  averageTime: number
  longestStreak: number
  perfectScore: boolean
  xpEarned: number
} {
  let totalScore = 0
  let correctAnswers = 0
  let totalTime = 0
  let currentStreak = 0
  let longestStreak = 0
  
  attempts.forEach((attempt, index) => {
    totalTime += attempt.timeSpent
    
    if (attempt.isCorrect) {
      currentStreak += 1
      correctAnswers += 1
      longestStreak = Math.max(longestStreak, currentStreak)
      
      const questionScore = calculateQuestionScore(
        attempt.isCorrect,
        attempt.timeSpent,
        currentStreak,
        config
      )
      totalScore += questionScore
    } else {
      currentStreak = 0
    }
  })
  
  // Perfect score bonus
  const perfectScore = attempts.length > 0 && correctAnswers === attempts.length
  if (perfectScore) {
    totalScore += config.perfectScoreBonus
  }
  
  const averageTime = attempts.length > 0 ? totalTime / attempts.length : 0
  const xpEarned = totalScore * config.xpPerPoint
  
  return {
    totalScore,
    correctAnswers,
    averageTime,
    longestStreak,
    perfectScore,
    xpEarned
  }
}

// Calculate level from XP
export function calculateLevel(
  totalXP: number,
  config: ScoringConfig = DEFAULT_SCORING_CONFIG
): LevelInfo {
  const thresholds = config.levelThresholds
  let level = 1
  
  // Find the current level
  for (let i = thresholds.length - 1; i >= 0; i--) {
    if (totalXP >= thresholds[i]) {
      level = i + 1
      break
    }
  }
  
  const currentThreshold = thresholds[level - 1] || 0
  const nextThreshold = thresholds[level] || thresholds[thresholds.length - 1] + 1000
  const xpToNext = nextThreshold - totalXP
  
  return {
    level,
    title: getLevelTitle(level),
    xpRequired: currentThreshold,
    xpToNext: Math.max(0, xpToNext),
    totalXP,
    rewards: getLevelRewards(level),
    iconColor: getLevelColor(level)
  }
}

// Get level title based on level number
function getLevelTitle(level: number): string {
  const titles = [
    'Novice Scholar',        // 1
    'Latin Learner',         // 2
    'Word Explorer',         // 3
    'Grammar Student',       // 4
    'Verb Apprentice',       // 5
    'Case Master',           // 6
    'Syntax Scholar',        // 7
    'Latin Enthusiast',      // 8
    'Classical Student',     // 9
    'Grammar Expert',        // 10
    'Language Warrior',      // 11
    'Latin Champion',        // 12
    'Classical Scholar',     // 13
    'Syntax Master',         // 14
    'Latin Virtuoso',        // 15
    'Grammar Sage',          // 16
    'Classical Expert',      // 17
    'Latin Legend',          // 18
    'Master Scholar',        // 19
    'Latin Grandmaster'      // 20
  ]
  
  return titles[level - 1] || `Level ${level} Scholar`
}

// Get level rewards
function getLevelRewards(level: number): string[] {
  const rewards: Record<number, string[]> = {
    2: ['New achievement category unlocked!'],
    5: ['Speed bonus multiplier increased!', 'New daily challenges available!'],
    10: ['Perfect score bonus increased!', 'Advanced statistics unlocked!'],
    15: ['Master level achievements unlocked!', 'Legendary badges available!'],
    20: ['Grandmaster status achieved!', 'All content unlocked!']
  }
  
  return rewards[level] || []
}

// Get level color based on level
function getLevelColor(level: number): string {
  if (level < 5) return '#32cd32'      // Green
  if (level < 10) return '#00bfff'     // Blue
  if (level < 15) return '#ff6b35'     // Orange
  if (level < 20) return '#ff1493'     // Pink
  return '#ffd700'                     // Gold
}

// Calculate accuracy percentage
export function calculateAccuracy(correct: number, total: number): number {
  if (total === 0) return 0
  return Math.round((correct / total) * 100)
}

// Calculate average time per question
export function calculateAverageTime(totalTime: number, questionCount: number): number {
  if (questionCount === 0) return 0
  return Math.round((totalTime / questionCount) * 10) / 10 // Round to 1 decimal
}

// Determine if answer was fast (for bonus points)
export function isFastAnswer(timeSpent: number): boolean {
  return timeSpent <= 5 // 5 seconds or less
}

// Determine if answer was very fast (for extra celebration)
export function isVeryFastAnswer(timeSpent: number): boolean {
  return timeSpent <= 3 // 3 seconds or less
}

// Calculate streak bonus description
export function getStreakBonusDescription(streakCount: number): string {
  if (streakCount < 2) return ''
  if (streakCount < 5) return `${streakCount}x streak!`
  if (streakCount < 10) return `Amazing ${streakCount}x streak!`
  return `Incredible ${streakCount}x streak! You're on fire!`
}

// Calculate speed bonus description
export function getSpeedBonusDescription(timeSpent: number, bonus: number): string {
  if (bonus <= 0) return ''
  if (timeSpent <= 3) return `Lightning fast! +${Math.round(bonus)} bonus`
  if (timeSpent <= 5) return `Super quick! +${Math.round(bonus)} bonus`
  return `Good speed! +${Math.round(bonus)} bonus`
}

// Get motivational message based on performance
export function getPerformanceMessage(
  correctAnswers: number,
  totalQuestions: number,
  averageTime: number,
  longestStreak: number
): { message: string; emoji: string; color: string } {
  const accuracy = calculateAccuracy(correctAnswers, totalQuestions)
  
  if (accuracy === 100) {
    return {
      message: "Perfect score! You're a Latin champion!",
      emoji: '🏆',
      color: '#ffd700'
    }
  }
  
  if (accuracy >= 90) {
    return {
      message: "Outstanding work! Almost perfect!",
      emoji: '⭐',
      color: '#ff6b35'
    }
  }
  
  if (accuracy >= 75) {
    return {
      message: "Great job! You're really getting it!",
      emoji: '🌟',
      color: '#32cd32'
    }
  }
  
  if (accuracy >= 50) {
    return {
      message: "Good effort! Keep practicing!",
      emoji: '💪',
      color: '#00bfff'
    }
  }
  
  return {
    message: "Every mistake is a step closer to success!",
    emoji: '🌱',
    color: '#ff1493'
  }
}

// Calculate session statistics summary
export interface SessionSummary {
  score: number
  xp: number
  accuracy: number
  averageTime: number
  streaks: number
  bonusPoints: {
    speed: number
    streak: number
    perfect: number
  }
  performance: {
    message: string
    emoji: string
    color: string
  }
}

export function calculateSessionSummary(
  attempts: QuestionAttempt[],
  config: ScoringConfig = DEFAULT_SCORING_CONFIG
): SessionSummary {
  const sessionScore = calculateSessionScore(attempts, config)
  const accuracy = calculateAccuracy(sessionScore.correctAnswers, attempts.length)
  
  // Calculate bonus points breakdown
  let speedBonus = 0
  let streakBonus = 0
  let currentStreak = 0
  
  attempts.forEach(attempt => {
    if (attempt.isCorrect) {
      currentStreak += 1
      speedBonus += Math.max(0, (10 - attempt.timeSpent) * config.speedBonusMultiplier)
      if (currentStreak > 1) {
        streakBonus += (currentStreak - 1) * config.streakBonusPoints
      }
    } else {
      currentStreak = 0
    }
  })
  
  const perfectBonus = sessionScore.perfectScore ? config.perfectScoreBonus : 0
  const performance = getPerformanceMessage(
    sessionScore.correctAnswers,
    attempts.length,
    sessionScore.averageTime,
    sessionScore.longestStreak
  )
  
  return {
    score: sessionScore.totalScore,
    xp: sessionScore.xpEarned,
    accuracy,
    averageTime: sessionScore.averageTime,
    streaks: sessionScore.longestStreak,
    bonusPoints: {
      speed: Math.round(speedBonus),
      streak: streakBonus,
      perfect: perfectBonus
    },
    performance
  }
}