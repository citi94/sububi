import { useState, useEffect, useCallback } from 'react'
import { GameProgress, PlayerStats, Achievement, QuizSession } from '../types/game'

const STORAGE_KEYS = {
  PROGRESS: 'latin_app_progress',
  STATS: 'latin_app_stats',
  ACHIEVEMENTS: 'latin_app_achievements'
}

const BASE_POINTS = 10
const SPEED_BONUS_MAX = 5
const STREAK_MULTIPLIER = 1.2
const PERFECT_BONUS = 50

export const useGameMechanics = () => {
  const [progress, setProgress] = useState<Record<number, GameProgress>>({})
  const [stats, setStats] = useState<PlayerStats>({
    totalScore: 0,
    level: 1,
    xp: 0,
    xpToNextLevel: 100,
    totalQuestions: 0,
    correctAnswers: 0,
    averageScore: 0,
    currentStreak: 0,
    bestStreak: 0,
    totalTimeSpent: 0,
    achievements: [],
    themesCompleted: 0
  })
  const [currentSession, setCurrentSession] = useState<QuizSession | null>(null)

  // Load data from localStorage on mount
  useEffect(() => {
    const savedProgress = localStorage.getItem(STORAGE_KEYS.PROGRESS)
    const savedStats = localStorage.getItem(STORAGE_KEYS.STATS)
    
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress))
    }
    
    if (savedStats) {
      setStats(JSON.parse(savedStats))
    } else {
      // Initialize with default achievements
      setStats(prev => ({
        ...prev,
        achievements: getDefaultAchievements()
      }))
    }
  }, [])

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(progress))
  }, [progress])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(stats))
  }, [stats])

  const calculatePoints = (correct: boolean, timeSpent: number, streak: number): number => {
    if (!correct) return 0
    
    let points = BASE_POINTS
    
    // Speed bonus (faster = more points, max 5 bonus points)
    const speedBonus = Math.max(0, SPEED_BONUS_MAX - Math.floor(timeSpent / 2000))
    points += speedBonus
    
    // Streak bonus
    if (streak > 1) {
      points = Math.floor(points * Math.min(STREAK_MULTIPLIER * streak, 3))
    }
    
    return points
  }

  const calculateLevel = (xp: number): number => {
    return Math.floor(xp / 100) + 1
  }

  const getXpToNextLevel = (currentXp: number): number => {
    const currentLevel = calculateLevel(currentXp)
    return (currentLevel * 100) - currentXp
  }

  const startQuizSession = (themaId: number) => {
    const session: QuizSession = {
      themaId,
      startTime: Date.now(),
      answers: [],
      totalScore: 0,
      streak: 0,
      completed: false
    }
    setCurrentSession(session)
    return session
  }

  const recordAnswer = useCallback((
    questionId: string,
    selectedAnswer: number,
    correct: boolean,
    timeSpent: number
  ) => {
    if (!currentSession) return

    const newStreak = correct ? currentSession.streak + 1 : 0
    const points = calculatePoints(correct, timeSpent, newStreak)

    const answerRecord = {
      questionId,
      selectedAnswer,
      correct,
      timeSpent,
      points
    }

    setCurrentSession(prev => prev ? {
      ...prev,
      answers: [...prev.answers, answerRecord],
      totalScore: prev.totalScore + points,
      streak: newStreak
    } : null)

    // Update global streak
    setStats(prev => ({
      ...prev,
      currentStreak: correct ? prev.currentStreak + 1 : 0,
      bestStreak: Math.max(prev.bestStreak, correct ? prev.currentStreak + 1 : prev.currentStreak)
    }))
  }, [currentSession])

  const completeQuizSession = useCallback(() => {
    if (!currentSession) return

    const session = { ...currentSession, completed: true }
    const themaId = session.themaId
    const totalQuestions = session.answers.length
    const correctAnswers = session.answers.filter(a => a.correct).length
    const scorePercentage = totalQuestions > 0 ? (correctAnswers / totalQuestions) * 100 : 0
    const totalTimeSpent = session.answers.reduce((sum, a) => sum + a.timeSpent, 0)

    // Update thema progress
    setProgress(prev => {
      const existing = prev[themaId] || {
        themaId,
        completed: false,
        score: 0,
        maxScore: totalQuestions * BASE_POINTS,
        attempts: 0,
        bestScore: 0,
        timeSpent: 0,
        lastAttempt: new Date().toISOString(),
        streak: 0
      }

      return {
        ...prev,
        [themaId]: {
          ...existing,
          completed: scorePercentage >= 70, // 70% to pass
          score: session.totalScore,
          attempts: existing.attempts + 1,
          bestScore: Math.max(existing.bestScore, session.totalScore),
          timeSpent: existing.timeSpent + totalTimeSpent,
          lastAttempt: new Date().toISOString(),
          streak: Math.max(existing.streak, session.streak)
        }
      }
    })

    // Update player stats
    setStats(prev => {
      const newXp = prev.xp + session.totalScore
      const newLevel = calculateLevel(newXp)
      const newThemesCompleted = Object.values(progress).filter(p => p.completed).length
      
      return {
        ...prev,
        totalScore: prev.totalScore + session.totalScore,
        level: newLevel,
        xp: newXp,
        xpToNextLevel: getXpToNextLevel(newXp),
        totalQuestions: prev.totalQuestions + totalQuestions,
        correctAnswers: prev.correctAnswers + correctAnswers,
        averageScore: prev.totalQuestions + totalQuestions > 0 
          ? Math.round(((prev.correctAnswers + correctAnswers) / (prev.totalQuestions + totalQuestions)) * 100)
          : 0,
        totalTimeSpent: prev.totalTimeSpent + totalTimeSpent,
        themesCompleted: newThemesCompleted
      }
    })

    // Check for new achievements
    checkAchievements(session, scorePercentage)

    setCurrentSession(null)
    return session
  }, [currentSession, progress])

  const checkAchievements = (session: QuizSession, scorePercentage: number) => {
    setStats(prev => {
      const updatedAchievements = prev.achievements.map(achievement => {
        if (achievement.unlocked) return achievement

        let newProgress = achievement.progress
        let unlocked = false

        switch (achievement.id) {
          case 'first_steps':
            if (session.answers.length > 0) {
              newProgress = 1
              unlocked = true
            }
            break
          case 'perfect_score':
            if (scorePercentage === 100) {
              newProgress = 1
              unlocked = true
            }
            break
          case 'speed_demon':
            const avgTime = session.answers.reduce((sum, a) => sum + a.timeSpent, 0) / session.answers.length
            if (avgTime < 3000) { // Less than 3 seconds average
              newProgress = 1
              unlocked = true
            }
            break
          case 'streak_master':
            if (session.streak >= 5) {
              newProgress = session.streak
              unlocked = session.streak >= 10
            }
            break
          case 'knowledge_seeker':
            newProgress = Math.min(prev.correctAnswers + session.answers.filter(a => a.correct).length, 50)
            unlocked = newProgress >= 50
            break
          case 'latin_champion':
            const themesCompleted = Object.values(progress).filter(p => p.completed).length
            newProgress = Math.min(themesCompleted, 10)
            unlocked = newProgress >= 10
            break
        }

        return {
          ...achievement,
          progress: newProgress,
          unlocked,
          unlockedAt: unlocked && !achievement.unlocked ? new Date().toISOString() : achievement.unlockedAt
        }
      })

      return {
        ...prev,
        achievements: updatedAchievements
      }
    })
  }

  const getDefaultAchievements = (): Achievement[] => [
    {
      id: 'first_steps',
      title: 'First Steps!',
      description: 'Complete your first question',
      icon: '⭐',
      unlocked: false,
      progress: 0,
      maxProgress: 1,
      category: 'completion'
    },
    {
      id: 'perfect_score',
      title: 'Perfect Score!',
      description: 'Get 100% on any topic',
      icon: '💎',
      unlocked: false,
      progress: 0,
      maxProgress: 1,
      category: 'accuracy'
    },
    {
      id: 'speed_demon',
      title: 'Speed Demon',
      description: 'Complete a quiz with average time under 3 seconds per question',
      icon: '⚡',
      unlocked: false,
      progress: 0,
      maxProgress: 1,
      category: 'speed'
    },
    {
      id: 'streak_master',
      title: 'Streak Master',
      description: 'Get 10 correct answers in a row',
      icon: '🔥',
      unlocked: false,
      progress: 0,
      maxProgress: 10,
      category: 'streak'
    },
    {
      id: 'knowledge_seeker',
      title: 'Knowledge Seeker',
      description: 'Answer 50 questions correctly',
      icon: '📚',
      unlocked: false,
      progress: 0,
      maxProgress: 50,
      category: 'completion'
    },
    {
      id: 'latin_champion',
      title: 'Latin Champion',
      description: 'Complete 10 different topics',
      icon: '🏆',
      unlocked: false,
      progress: 0,
      maxProgress: 10,
      category: 'completion'
    }
  ]

  const resetProgress = () => {
    setProgress({})
    setStats({
      totalScore: 0,
      level: 1,
      xp: 0,
      xpToNextLevel: 100,
      totalQuestions: 0,
      correctAnswers: 0,
      averageScore: 0,
      currentStreak: 0,
      bestStreak: 0,
      totalTimeSpent: 0,
      achievements: getDefaultAchievements(),
      themesCompleted: 0
    })
    setCurrentSession(null)
    localStorage.removeItem(STORAGE_KEYS.PROGRESS)
    localStorage.removeItem(STORAGE_KEYS.STATS)
  }

  return {
    progress,
    stats,
    currentSession,
    startQuizSession,
    recordAnswer,
    completeQuizSession,
    resetProgress
  }
}