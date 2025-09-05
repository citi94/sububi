import { 
  DailyGoal, 
  DailyGoalType, 
  MotivationalMessage, 
  MessageTrigger, 
  GameState,
  PlayerStats 
} from '../types/latin'

// Generate daily goals based on player level and history
export function generateDailyGoals(playerStats: PlayerStats, date: string): DailyGoal[] {
  const level = playerStats.level
  const goals: DailyGoal[] = []
  
  // Adjust targets based on player level
  const getAdjustedTarget = (baseTarget: number): number => {
    return Math.max(1, Math.floor(baseTarget * (1 + level * 0.1)))
  }
  
  // Generate 2-3 goals per day
  const goalTemplates = [
    {
      id: `questions_${date}`,
      title: 'Question Master',
      description: `Answer ${getAdjustedTarget(5)} questions correctly today`,
      icon: '🎯',
      type: 'correct_answers' as DailyGoalType,
      target: getAdjustedTarget(5),
      reward: { xp: 25 }
    },
    {
      id: `streak_${date}`,
      title: 'Streak Champion',
      description: `Get a ${getAdjustedTarget(3)} question streak`,
      icon: '🔥',
      type: 'streak_length' as DailyGoalType,
      target: getAdjustedTarget(3),
      reward: { xp: 30 }
    },
    {
      id: `perfect_${date}`,
      title: 'Perfectionist',
      description: 'Get a perfect score on any topic',
      icon: '⭐',
      type: 'perfect_score' as DailyGoalType,
      target: 1,
      reward: { xp: 50 }
    },
    {
      id: `time_${date}`,
      title: 'Time Master',
      description: `Spend ${getAdjustedTarget(10)} minutes learning`,
      icon: '⏰',
      type: 'time_spent' as DailyGoalType,
      target: getAdjustedTarget(10) * 60, // Convert to seconds
      reward: { xp: 20 }
    }
  ]
  
  // Select 2-3 goals randomly, but ensure variety
  const selectedGoals = []
  const availableGoals = [...goalTemplates]
  
  // Always include questions goal
  const questionsGoal = availableGoals.find(g => g.type === 'correct_answers')
  if (questionsGoal) {
    selectedGoals.push(questionsGoal)
    availableGoals.splice(availableGoals.indexOf(questionsGoal), 1)
  }
  
  // Add 1-2 more goals
  for (let i = 0; i < 2 && availableGoals.length > 0; i++) {
    const randomIndex = Math.floor(Math.random() * availableGoals.length)
    selectedGoals.push(availableGoals[randomIndex])
    availableGoals.splice(randomIndex, 1)
  }
  
  return selectedGoals.map(template => ({
    ...template,
    progress: 0,
    completed: false,
    date
  }))
}

// Update daily goals progress
export function updateDailyGoalsProgress(
  goals: DailyGoal[], 
  sessionData: {
    correctAnswers: number
    longestStreak: number
    perfectScore: boolean
    timeSpent: number
  }
): DailyGoal[] {
  return goals.map(goal => {
    if (goal.completed) return goal
    
    let additionalProgress = 0
    
    switch (goal.type) {
      case 'correct_answers':
        additionalProgress = sessionData.correctAnswers
        break
      case 'streak_length':
        additionalProgress = Math.max(0, sessionData.longestStreak - goal.progress)
        break
      case 'perfect_score':
        additionalProgress = sessionData.perfectScore ? 1 : 0
        break
      case 'time_spent':
        additionalProgress = sessionData.timeSpent
        break
    }
    
    const newProgress = goal.progress + additionalProgress
    const completed = newProgress >= goal.target
    
    return {
      ...goal,
      progress: Math.min(newProgress, goal.target),
      completed
    }
  })
}

// Check if daily goals need to be regenerated
export function shouldRegenerateDailyGoals(goals: DailyGoal[]): boolean {
  if (goals.length === 0) return true
  
  const today = new Date().toISOString().split('T')[0]
  return goals[0]?.date !== today
}

// Get today's date in YYYY-MM-DD format
export function getTodayString(): string {
  return new Date().toISOString().split('T')[0]
}

// Motivational messages for different triggers
export const MOTIVATIONAL_MESSAGES: MotivationalMessage[] = [
  // Correct Answer Messages
  {
    id: 'correct_1',
    message: "Excellent! You're getting the hang of Latin!",
    emoji: '🌟',
    trigger: 'correct_answer',
    weight: 1
  },
  {
    id: 'correct_2',
    message: "Fantastic work! Keep it up!",
    emoji: '⭐',
    trigger: 'correct_answer',
    weight: 1
  },
  {
    id: 'correct_3',
    message: "You're a natural at this!",
    emoji: '✨',
    trigger: 'correct_answer',
    weight: 1
  },
  {
    id: 'correct_4',
    message: "Amazing! Your Latin skills are growing!",
    emoji: '🚀',
    trigger: 'correct_answer',
    weight: 1
  },
  {
    id: 'correct_5',
    message: "Brilliant answer! You're on fire!",
    emoji: '🔥',
    trigger: 'correct_answer',
    weight: 1
  },

  // Incorrect Answer Messages (Encouraging)
  {
    id: 'incorrect_1',
    message: "No worries! Every mistake helps you learn!",
    emoji: '💪',
    trigger: 'incorrect_answer',
    weight: 1
  },
  {
    id: 'incorrect_2',
    message: "Keep trying! You're getting closer!",
    emoji: '🌱',
    trigger: 'incorrect_answer',
    weight: 1
  },
  {
    id: 'incorrect_3',
    message: "Learning is a journey! Keep going!",
    emoji: '🎯',
    trigger: 'incorrect_answer',
    weight: 1
  },
  {
    id: 'incorrect_4',
    message: "That's okay! You're building your knowledge!",
    emoji: '🏗️',
    trigger: 'incorrect_answer',
    weight: 1
  },
  {
    id: 'incorrect_5',
    message: "Great effort! Try the next one!",
    emoji: '👍',
    trigger: 'incorrect_answer',
    weight: 1
  },

  // Streak Milestone Messages
  {
    id: 'streak_5',
    message: "Wow! 5 in a row! You're on a hot streak!",
    emoji: '🔥',
    trigger: 'streak_milestone',
    weight: 1
  },
  {
    id: 'streak_10',
    message: "Incredible! 10 correct answers in a row!",
    emoji: '⚡',
    trigger: 'streak_milestone',
    weight: 1
  },
  {
    id: 'streak_15',
    message: "Unstoppable! 15 streak! You're amazing!",
    emoji: '💥',
    trigger: 'streak_milestone',
    weight: 1
  },

  // Level Up Messages
  {
    id: 'level_up_1',
    message: "Level up! Your Latin knowledge is expanding!",
    emoji: '🆙',
    trigger: 'level_up',
    weight: 1
  },
  {
    id: 'level_up_2',
    message: "Congratulations! You've reached a new level!",
    emoji: '🎊',
    trigger: 'level_up',
    weight: 1
  },
  {
    id: 'level_up_3',
    message: "New level unlocked! Keep up the great work!",
    emoji: '🏆',
    trigger: 'level_up',
    weight: 1
  },

  // Achievement Unlock Messages
  {
    id: 'achievement_1',
    message: "Achievement unlocked! You're doing amazing!",
    emoji: '🏅',
    trigger: 'achievement_unlock',
    weight: 1
  },
  {
    id: 'achievement_2',
    message: "New badge earned! Keep collecting them all!",
    emoji: '🎖️',
    trigger: 'achievement_unlock',
    weight: 1
  },

  // Perfect Score Messages
  {
    id: 'perfect_1',
    message: "Perfect score! You're a Latin champion!",
    emoji: '👑',
    trigger: 'perfect_score',
    weight: 1
  },
  {
    id: 'perfect_2',
    message: "Flawless! Every answer was correct!",
    emoji: '💎',
    trigger: 'perfect_score',
    weight: 1
  },

  // Encouragement Messages (for struggling students)
  {
    id: 'encourage_1',
    message: "You're doing great! Keep practicing!",
    emoji: '🌈',
    trigger: 'encouragement',
    weight: 1
  },
  {
    id: 'encourage_2',
    message: "Every expert was once a beginner!",
    emoji: '🌟',
    trigger: 'encouragement',
    weight: 1
  },
  {
    id: 'encourage_3',
    message: "Believe in yourself! You can do this!",
    emoji: '💫',
    trigger: 'encouragement',
    weight: 1
  }
]

// Get a random motivational message for a specific trigger
export function getMotivationalMessage(trigger: MessageTrigger, streak?: number): MotivationalMessage {
  let availableMessages = MOTIVATIONAL_MESSAGES.filter(msg => msg.trigger === trigger)
  
  // Special handling for streak milestones
  if (trigger === 'streak_milestone' && streak) {
    if (streak >= 15) {
      availableMessages = availableMessages.filter(msg => msg.id === 'streak_15')
    } else if (streak >= 10) {
      availableMessages = availableMessages.filter(msg => msg.id === 'streak_10')
    } else if (streak >= 5) {
      availableMessages = availableMessages.filter(msg => msg.id === 'streak_5')
    }
  }
  
  if (availableMessages.length === 0) {
    // Fallback to a generic encouraging message
    return {
      id: 'fallback',
      message: "Keep up the great work!",
      emoji: '⭐',
      trigger,
      weight: 1
    }
  }
  
  // Weighted random selection
  const totalWeight = availableMessages.reduce((sum, msg) => sum + msg.weight, 0)
  let random = Math.random() * totalWeight
  
  for (const message of availableMessages) {
    random -= message.weight
    if (random <= 0) {
      return message
    }
  }
  
  return availableMessages[0] // Fallback
}

// Generate personalized recommendations
export function getPersonalizedRecommendations(
  gameState: GameState
): { message: string; emoji: string; action?: string }[] {
  const recommendations: { message: string; emoji: string; action?: string }[] = []
  const stats = gameState.playerStats
  const accuracy = stats.averageAccuracy
  
  // Accuracy-based recommendations
  if (accuracy < 60) {
    recommendations.push({
      message: "Try reviewing topics you've already completed to build confidence!",
      emoji: '📚',
      action: 'review'
    })
  } else if (accuracy > 85) {
    recommendations.push({
      message: "You're doing great! Challenge yourself with new topics!",
      emoji: '🚀',
      action: 'explore'
    })
  }
  
  // Streak-based recommendations
  if (stats.longestStreak < 5) {
    recommendations.push({
      message: "Focus on accuracy over speed to build longer streaks!",
      emoji: '🎯'
    })
  }
  
  // Level-based recommendations
  if (stats.level < 3) {
    recommendations.push({
      message: "Complete daily goals to earn more XP and level up faster!",
      emoji: '⭐'
    })
  }
  
  // Themas completion recommendations
  const completedThemas = stats.themasCompleted
  if (completedThemas < 3) {
    recommendations.push({
      message: "Try different topics to unlock variety achievements!",
      emoji: '🗺️'
    })
  }
  
  // Daily streak recommendations
  if (stats.consecutiveDaysPlayed < 3) {
    recommendations.push({
      message: "Practice daily to build a learning streak and earn bonus XP!",
      emoji: '📅'
    })
  }
  
  // If no specific recommendations, provide general encouragement
  if (recommendations.length === 0) {
    recommendations.push({
      message: "You're making excellent progress! Keep up the fantastic work!",
      emoji: '🌟'
    })
  }
  
  return recommendations.slice(0, 2) // Return max 2 recommendations
}

// Calculate completion percentage for daily goals
export function getDailyGoalCompletion(goals: DailyGoal[]): number {
  if (goals.length === 0) return 0
  
  const completed = goals.filter(goal => goal.completed).length
  return Math.round((completed / goals.length) * 100)
}

// Get daily goal progress description
export function getDailyGoalProgressDescription(goal: DailyGoal): string {
  if (goal.completed) return 'Completed!'
  
  const percentage = Math.round((goal.progress / goal.target) * 100)
  
  switch (goal.type) {
    case 'correct_answers':
      return `${goal.progress}/${goal.target} correct answers`
    case 'streak_length':
      return `Best streak: ${goal.progress}/${goal.target}`
    case 'perfect_score':
      return goal.progress > 0 ? 'Perfect score achieved!' : 'Get a perfect score'
    case 'time_spent':
      const minutes = Math.round(goal.progress / 60)
      const targetMinutes = Math.round(goal.target / 60)
      return `${minutes}/${targetMinutes} minutes`
    default:
      return `${percentage}% complete`
  }
}