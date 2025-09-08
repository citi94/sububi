import { useState, useEffect, useCallback } from 'react'
import { GameProgress, PlayerStats, Achievement, QuizSession, TestProgress } from '../types/game'

const STORAGE_KEYS = {
  PROGRESS: 'latin_app_progress',
  STATS: 'latin_app_stats',
  ACHIEVEMENTS: 'latin_app_achievements'
}

const BASE_POINTS = 10
const SPEED_BONUS_MAX = 5
const STREAK_MULTIPLIER = 1.2
const PERFECT_BONUS = 50

// Test level multipliers
const TEST_MULTIPLIERS = {
  A: 1.0,   // Base scoring
  B: 1.2,   // 20% bonus
  C: 1.5    // 50% bonus
}

// Mastery thresholds
const MASTERY_THRESHOLDS = {
  A: 67,    // 67% required
  B: 75,    // 75% required  
  C: 83     // 83% required
}

// Retry limits and cooldowns (in minutes)
const RETRY_CONFIG = {
  A: { maxAttempts: 3, cooldownMinutes: 5 },
  B: { maxAttempts: 2, cooldownMinutes: 10 },
  C: { maxAttempts: 2, cooldownMinutes: 15 }
}

// Bonus XP for Test C completion
const TEST_C_BONUS_XP = 50

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
    themesCompleted: 0,
    themesFullyMastered: 0,
    testsACompleted: 0,
    testsBCompleted: 0,
    testsCCompleted: 0
  })
  const [currentSession, setCurrentSession] = useState<QuizSession | null>(null)

  // Migrate old progress format to new multi-test format
  const migrateOldProgress = (oldProgress: any): Record<number, GameProgress> => {
    const migrated: Record<number, GameProgress> = {}
    
    for (const [themaId, oldData] of Object.entries(oldProgress)) {
      const id = parseInt(themaId)
      if (typeof oldData === 'object' && oldData !== null) {
        // Check if this is already new format
        if ('testA' in oldData) {
          migrated[id] = oldData as GameProgress
        } else {
          // Migrate old single-test format
          const legacy = oldData as any
          migrated[id] = {
            themaId: id,
            unlocked: legacy.completed || id === 1, // Unlock if was completed, or if Thema 1
            testA: {
              testLevel: 'A' as const,
              completed: legacy.completed || false,
              passed: legacy.completed || false,
              score: legacy.bestScore || 0,
              maxScore: legacy.maxScore || 0,
              attempts: legacy.attempts || 0,
              bestScore: legacy.bestScore || 0,
              timeSpent: legacy.timeSpent || 0,
              lastAttempt: legacy.lastAttempt || '',
              streak: legacy.streak || 0
            },
            testB: createDefaultTestProgress('B'),
            testC: createDefaultTestProgress('C'),
            overallCompleted: legacy.completed || false,
            fullyMastered: false,
            totalTimeSpent: legacy.timeSpent || 0,
            firstStarted: legacy.lastAttempt || undefined
          }
        }
      }
    }
    
    // Ensure Thema 1 is always unlocked
    if (!migrated[1]) {
      migrated[1] = createDefaultGameProgress(1)
    }
    
    return migrated
  }

  // Load data from localStorage on mount
  useEffect(() => {
    const savedProgress = localStorage.getItem(STORAGE_KEYS.PROGRESS)
    const savedStats = localStorage.getItem(STORAGE_KEYS.STATS)
    
    if (savedProgress) {
      try {
        const parsed = JSON.parse(savedProgress)
        const migrated = migrateOldProgress(parsed)
        setProgress(migrated)
      } catch (error) {
        console.warn('Failed to parse saved progress, initializing fresh:', error)
        const initialProgress = {
          1: createDefaultGameProgress(1)
        }
        setProgress(initialProgress)
      }
    } else {
      // Initialize with Thema 1 unlocked
      const initialProgress = {
        1: createDefaultGameProgress(1)
      }
      setProgress(initialProgress)
    }
    
    if (savedStats) {
      try {
        const parsed = JSON.parse(savedStats)
        // Ensure new fields exist in migrated stats
        const migratedStats = {
          ...parsed,
          themesFullyMastered: parsed.themesFullyMastered || 0,
          testsACompleted: parsed.testsACompleted || 0,
          testsBCompleted: parsed.testsBCompleted || 0,
          testsCCompleted: parsed.testsCCompleted || 0,
          achievements: parsed.achievements || getDefaultAchievements()
        }
        setStats(migratedStats)
      } catch (error) {
        console.warn('Failed to parse saved stats, initializing fresh:', error)
        setStats(prev => ({
          ...prev,
          achievements: getDefaultAchievements()
        }))
      }
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

  const calculatePoints = (correct: boolean, timeSpent: number, streak: number, testLevel: 'A' | 'B' | 'C'): number => {
    if (!correct) return 0
    
    let points = BASE_POINTS
    
    // Speed bonus (faster = more points, max 5 bonus points)
    const speedBonus = Math.max(0, SPEED_BONUS_MAX - Math.floor(timeSpent / 2000))
    points += speedBonus
    
    // Streak bonus
    if (streak > 1) {
      points = Math.floor(points * Math.min(STREAK_MULTIPLIER * streak, 3))
    }
    
    // Test level multiplier
    points = Math.floor(points * TEST_MULTIPLIERS[testLevel])
    
    return points
  }

  const calculateLevel = (xp: number): number => {
    return Math.floor(xp / 100) + 1
  }

  const getXpToNextLevel = (currentXp: number): number => {
    const currentLevel = calculateLevel(currentXp)
    return (currentLevel * 100) - currentXp
  }

  const createDefaultTestProgress = (testLevel: 'A' | 'B' | 'C'): TestProgress => ({
    testLevel,
    completed: false,
    passed: false,
    score: 0,
    maxScore: 0,
    attempts: 0,
    bestScore: 0,
    timeSpent: 0,
    lastAttempt: '',
    streak: 0
  })

  const createDefaultGameProgress = (themaId: number): GameProgress => ({
    themaId,
    unlocked: true, // All Themas unlocked for Test A access
    testA: createDefaultTestProgress('A'),
    testB: createDefaultTestProgress('B'),
    testC: createDefaultTestProgress('C'),
    overallCompleted: false,
    fullyMastered: false,
    totalTimeSpent: 0
  })

  const startQuizSession = (themaId: number, testLevel: 'A' | 'B' | 'C') => {
    const themaProgress = progress[themaId] || createDefaultGameProgress(themaId)
    
    // Check if test is unlocked
    if (!isTestUnlocked(themaId, testLevel)) {
      throw new Error(`Test ${testLevel} for Thema ${themaId} is not unlocked`)
    }
    
    // Check if test is on cooldown
    const testProgress = themaProgress[`test${testLevel}` as keyof GameProgress] as TestProgress
    if (testProgress.cooldownUntil && new Date() < new Date(testProgress.cooldownUntil)) {
      const remainingMinutes = Math.ceil((new Date(testProgress.cooldownUntil).getTime() - Date.now()) / (1000 * 60))
      throw new Error(`Test ${testLevel} is on cooldown for ${remainingMinutes} more minutes`)
    }
    
    const session: QuizSession = {
      themaId,
      testLevel,
      startTime: Date.now(),
      answers: [],
      totalScore: 0,
      streak: 0,
      completed: false,
      masteryThreshold: MASTERY_THRESHOLDS[testLevel]
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
    const points = calculatePoints(correct, timeSpent, newStreak, currentSession.testLevel)

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
    const { themaId, testLevel } = session
    const totalQuestions = session.answers.length
    const correctAnswers = session.answers.filter(a => a.correct).length
    const scorePercentage = totalQuestions > 0 ? (correctAnswers / totalQuestions) * 100 : 0
    const totalTimeSpent = session.answers.reduce((sum, a) => sum + a.timeSpent, 0)
    const passed = scorePercentage >= MASTERY_THRESHOLDS[testLevel]

    // Update thema progress
    setProgress(prev => {
      const existing = prev[themaId] || createDefaultGameProgress(themaId)
      const testKey = `test${testLevel}` as keyof GameProgress
      const testProgress = existing[testKey] as TestProgress
      
      // Update specific test progress
      const updatedTestProgress: TestProgress = {
        ...testProgress,
        completed: true,
        passed,
        score: session.totalScore,
        maxScore: totalQuestions * BASE_POINTS * TEST_MULTIPLIERS[testLevel],
        attempts: testProgress.attempts + 1,
        bestScore: Math.max(testProgress.bestScore, session.totalScore),
        timeSpent: testProgress.timeSpent + totalTimeSpent,
        lastAttempt: new Date().toISOString(),
        streak: Math.max(testProgress.streak, session.streak)
      }
      
      // Add cooldown if failed and has attempts remaining
      if (!passed && updatedTestProgress.attempts < RETRY_CONFIG[testLevel].maxAttempts) {
        const cooldownEnd = new Date()
        cooldownEnd.setMinutes(cooldownEnd.getMinutes() + RETRY_CONFIG[testLevel].cooldownMinutes)
        updatedTestProgress.cooldownUntil = cooldownEnd.toISOString()
      }
      
      const updatedProgress: GameProgress = {
        ...existing,
        [testKey]: updatedTestProgress,
        totalTimeSpent: existing.totalTimeSpent + totalTimeSpent,
        firstStarted: existing.firstStarted || new Date().toISOString()
      }
      
      // Update overall completion status
      updatedProgress.overallCompleted = updatedProgress.testA.passed && updatedProgress.testB.passed
      updatedProgress.fullyMastered = updatedProgress.testA.passed && updatedProgress.testB.passed && updatedProgress.testC.passed
      
      if (updatedProgress.fullyMastered && !existing.fullyMasteredAt) {
        updatedProgress.fullyMasteredAt = new Date().toISOString()
      }
      
      return {
        ...prev,
        [themaId]: updatedProgress
      }
    })

    // Update player stats
    setStats(prev => {
      let bonusXp = 0
      
      // Add bonus XP for Test C completion
      if (testLevel === 'C' && passed) {
        bonusXp = TEST_C_BONUS_XP
      }
      
      const newXp = prev.xp + session.totalScore + bonusXp
      const newLevel = calculateLevel(newXp)
      
      // Count completed tests by level
      let testsACompleted = prev.testsACompleted
      let testsBCompleted = prev.testsBCompleted  
      let testsCCompleted = prev.testsCCompleted
      
      if (passed) {
        if (testLevel === 'A') testsACompleted++
        else if (testLevel === 'B') testsBCompleted++
        else if (testLevel === 'C') testsCCompleted++
      }
      
      // Count overall thema completions
      const updatedProgress = { ...progress }
      if (progress[themaId]) {
        const testKey = `test${testLevel}` as keyof GameProgress
        const testProg = progress[themaId][testKey] as TestProgress
        updatedProgress[themaId] = {
          ...progress[themaId],
          [testKey]: { ...testProg, passed }
        }
      }
      
      const themesCompleted = Object.values(updatedProgress).filter(p => p.testA?.passed && p.testB?.passed).length
      const themesFullyMastered = Object.values(updatedProgress).filter(p => p.testA?.passed && p.testB?.passed && p.testC?.passed).length
      
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
        themesCompleted,
        themesFullyMastered,
        testsACompleted,
        testsBCompleted,
        testsCCompleted
      }
    })

    // Check for new achievements
    checkAchievements(session, scorePercentage, passed)
    
    // Unlock next tests/themas if appropriate
    updateUnlockStatus(themaId, testLevel, passed)

    setCurrentSession(null)
    return session
  }, [currentSession, progress])

  const isTestUnlocked = (themaId: number, testLevel: 'A' | 'B' | 'C'): boolean => {
    const themaProgress = progress[themaId]
    
    // Test A is always unlocked for all Themas (1-10) - introduction level
    if (testLevel === 'A') return true
    
    // For Tests B and C, need thema progress and previous test completion
    if (!themaProgress) return false
    
    // Test B requires Test A to be passed
    if (testLevel === 'B') return themaProgress.testA.passed
    
    // Test C requires Test B to be passed
    if (testLevel === 'C') return themaProgress.testB.passed
    
    return false
  }
  
  const updateUnlockStatus = (themaId: number, testLevel: 'A' | 'B' | 'C', passed: boolean) => {
    if (!passed) return
    
    setProgress(prev => {
      const updated = { ...prev }
      const currentThema = updated[themaId]
      
      // If completed A+B, unlock next thema
      if (currentThema && currentThema.testA.passed && currentThema.testB.passed) {
        const nextThemaId = themaId + 1
        if (nextThemaId <= 10 && !updated[nextThemaId]?.unlocked) {
          if (!updated[nextThemaId]) {
            updated[nextThemaId] = createDefaultGameProgress(nextThemaId)
          }
          updated[nextThemaId].unlocked = true
        }
      }
      
      return updated
    })
  }

  const checkAchievements = (session: QuizSession, scorePercentage: number, passed: boolean) => {
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
            newProgress = Math.min(prev.correctAnswers + session.answers.filter(a => a.correct).length, 100)
            unlocked = newProgress >= 100
            break
          case 'test_master':
            newProgress = prev.testsACompleted + (session.testLevel === 'A' && passed ? 1 : 0)
            unlocked = newProgress >= 10
            break
          case 'scholar':
            newProgress = prev.testsCCompleted + (session.testLevel === 'C' && passed ? 1 : 0)
            unlocked = newProgress >= 5
            break
          case 'latin_champion':
            const themesCompleted = Object.values(progress).filter(p => p.overallCompleted).length
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
      description: 'Get 100% on any test',
      icon: '💎',
      unlocked: false,
      progress: 0,
      maxProgress: 1,
      category: 'accuracy'
    },
    {
      id: 'speed_demon',
      title: 'Speed Demon',
      description: 'Complete a test with average time under 3 seconds per question',
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
      description: 'Answer 100 questions correctly',
      icon: '📚',
      unlocked: false,
      progress: 0,
      maxProgress: 100,
      category: 'completion'
    },
    {
      id: 'test_master',
      title: 'Test Master',
      description: 'Complete all 10 Test A assessments',
      icon: '🎯',
      unlocked: false,
      progress: 0,
      maxProgress: 10,
      category: 'mastery'
    },
    {
      id: 'scholar',
      title: 'Scholar',
      description: 'Complete 5 Test C assessments',
      icon: '🎓',
      unlocked: false,
      progress: 0,
      maxProgress: 5,
      category: 'mastery'
    },
    {
      id: 'latin_champion',
      title: 'Latin Champion',
      description: 'Complete Tests A+B for all 10 Themas',
      icon: '🏆',
      unlocked: false,
      progress: 0,
      maxProgress: 10,
      category: 'completion'
    }
  ]

  const resetProgress = () => {
    // Initialize with Thema 1 unlocked
    const initialProgress = {
      1: createDefaultGameProgress(1)
    }
    
    setProgress(initialProgress)
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
      themesCompleted: 0,
      themesFullyMastered: 0,
      testsACompleted: 0,
      testsBCompleted: 0,
      testsCCompleted: 0
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
    resetProgress,
    isTestUnlocked,
    createDefaultGameProgress,
    MASTERY_THRESHOLDS,
    RETRY_CONFIG
  }
}