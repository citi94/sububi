import { 
  Achievement, 
  AchievementCategory, 
  AchievementType, 
  AchievementRarity,
  GameState, 
  PlayerStats 
} from '../types/latin'

// Predefined achievements for the Latin learning app
export const ACHIEVEMENT_DEFINITIONS: Achievement[] = [
  // Completion Achievements
  {
    id: 'first_question',
    title: 'First Steps',
    description: 'Answer your very first question!',
    icon: '🌱',
    category: 'completion',
    type: 'single',
    requirement: { type: 'questions_correct', value: 1 },
    reward: { xp: 10, badge: 'Beginner' },
    rarity: 'common',
    unlocked: false,
    gradient: 'linear-gradient(45deg, #32cd32, #00bfff)'
  },
  {
    id: 'ten_questions',
    title: 'Knowledge Seeker',
    description: 'Answer 10 questions correctly',
    icon: '📚',
    category: 'completion',
    type: 'single',
    requirement: { type: 'questions_correct', value: 10 },
    reward: { xp: 25, badge: 'Student' },
    rarity: 'common',
    unlocked: false,
    gradient: 'linear-gradient(45deg, #00bfff, #667eea)'
  },
  {
    id: 'fifty_questions',
    title: 'Dedicated Learner',
    description: 'Answer 50 questions correctly',
    icon: '🎓',
    category: 'completion',
    type: 'single',
    requirement: { type: 'questions_correct', value: 50 },
    reward: { xp: 75, badge: 'Scholar' },
    rarity: 'rare',
    unlocked: false,
    gradient: 'linear-gradient(45deg, #667eea, #764ba2)'
  },
  {
    id: 'hundred_questions',
    title: 'Latin Scholar',
    description: 'Answer 100 questions correctly',
    icon: '🏛️',
    category: 'completion',
    type: 'single',
    requirement: { type: 'questions_correct', value: 100 },
    reward: { xp: 150, badge: 'Expert' },
    rarity: 'epic',
    unlocked: false,
    gradient: 'linear-gradient(45deg, #764ba2, #f093fb)'
  },

  // Accuracy Achievements
  {
    id: 'first_perfect',
    title: 'Perfectionist',
    description: 'Get your first perfect score on any topic',
    icon: '💎',
    category: 'accuracy',
    type: 'single',
    requirement: { type: 'perfect_scores', value: 1 },
    reward: { xp: 50, badge: 'Perfect' },
    rarity: 'rare',
    unlocked: false,
    gradient: 'linear-gradient(45deg, #ff1493, #ffd700)'
  },
  {
    id: 'five_perfect',
    title: 'Master of Excellence',
    description: 'Achieve 5 perfect scores',
    icon: '👑',
    category: 'accuracy',
    type: 'single',
    requirement: { type: 'perfect_scores', value: 5 },
    reward: { xp: 100, badge: 'Master' },
    rarity: 'epic',
    unlocked: false,
    gradient: 'linear-gradient(45deg, #ffd700, #ff6b35)'
  },
  {
    id: 'accuracy_master',
    title: 'Accuracy Champion',
    description: 'Maintain 90% accuracy or higher',
    icon: '🎯',
    category: 'accuracy',
    type: 'single',
    requirement: { type: 'accuracy_percentage', value: 90 },
    reward: { xp: 75, badge: 'Champion' },
    rarity: 'rare',
    unlocked: false,
    gradient: 'linear-gradient(45deg, #ff6b35, #ff1493)'
  },

  // Streak Achievements
  {
    id: 'streak_5',
    title: 'Hot Streak',
    description: 'Get 5 questions right in a row',
    icon: '🔥',
    category: 'streak',
    type: 'single',
    requirement: { type: 'streak_length', value: 5 },
    reward: { xp: 30, badge: 'Streaker' },
    rarity: 'common',
    unlocked: false,
    gradient: 'linear-gradient(45deg, #ff4500, #ffd700)'
  },
  {
    id: 'streak_10',
    title: 'On Fire',
    description: 'Get 10 questions right in a row',
    icon: '⚡',
    category: 'streak',
    type: 'single',
    requirement: { type: 'streak_length', value: 10 },
    reward: { xp: 60, badge: 'Blazing' },
    rarity: 'rare',
    unlocked: false,
    gradient: 'linear-gradient(45deg, #ffd700, #ff6b35)'
  },
  {
    id: 'streak_20',
    title: 'Unstoppable',
    description: 'Get 20 questions right in a row',
    icon: '💥',
    category: 'streak',
    type: 'single',
    requirement: { type: 'streak_length', value: 20 },
    reward: { xp: 120, badge: 'Unstoppable' },
    rarity: 'epic',
    unlocked: false,
    gradient: 'linear-gradient(45deg, #ff6b35, #ff1493)'
  },

  // Speed Achievements
  {
    id: 'speed_demon',
    title: 'Speed Demon',
    description: 'Average under 3 seconds per question',
    icon: '💨',
    category: 'speed',
    type: 'single',
    requirement: { type: 'speed_average', value: 3 },
    reward: { xp: 80, badge: 'Lightning' },
    rarity: 'epic',
    unlocked: false,
    gradient: 'linear-gradient(45deg, #00bfff, #32cd32)'
  },
  {
    id: 'quick_thinker',
    title: 'Quick Thinker',
    description: 'Average under 5 seconds per question',
    icon: '🧠',
    category: 'speed',
    type: 'single',
    requirement: { type: 'speed_average', value: 5 },
    reward: { xp: 40, badge: 'Swift' },
    rarity: 'rare',
    unlocked: false,
    gradient: 'linear-gradient(45deg, #32cd32, #00bfff)'
  },

  // Milestone Achievements
  {
    id: 'three_themas',
    title: 'Explorer',
    description: 'Complete 3 different topics',
    icon: '🗺️',
    category: 'milestone',
    type: 'single',
    requirement: { type: 'themas_completed', value: 3 },
    reward: { xp: 75, badge: 'Explorer' },
    rarity: 'rare',
    unlocked: false,
    gradient: 'linear-gradient(45deg, #32cd32, #00bfff)'
  },
  {
    id: 'five_themas',
    title: 'Adventurer',
    description: 'Complete 5 different topics',
    icon: '🎒',
    category: 'milestone',
    type: 'single',
    requirement: { type: 'themas_completed', value: 5 },
    reward: { xp: 125, badge: 'Adventurer' },
    rarity: 'epic',
    unlocked: false,
    gradient: 'linear-gradient(45deg, #00bfff, #ff1493)'
  },
  {
    id: 'ten_themas',
    title: 'Latin Master',
    description: 'Complete 10 different topics',
    icon: '🏆',
    category: 'milestone',
    type: 'single',
    requirement: { type: 'themas_completed', value: 10 },
    reward: { xp: 250, badge: 'Master' },
    rarity: 'legendary',
    unlocked: false,
    gradient: 'linear-gradient(45deg, #ffd700, #ff6b35)'
  },

  // XP Achievements
  {
    id: 'xp_500',
    title: 'Rising Star',
    description: 'Earn 500 experience points',
    icon: '⭐',
    category: 'milestone',
    type: 'single',
    requirement: { type: 'total_xp', value: 500 },
    reward: { xp: 50, badge: 'Star' },
    rarity: 'rare',
    unlocked: false,
    gradient: 'linear-gradient(45deg, #ffd700, #ff1493)'
  },
  {
    id: 'xp_1000',
    title: 'Experience Master',
    description: 'Earn 1000 experience points',
    icon: '🌟',
    category: 'milestone',
    type: 'single',
    requirement: { type: 'total_xp', value: 1000 },
    reward: { xp: 100, badge: 'XP Master' },
    rarity: 'epic',
    unlocked: false,
    gradient: 'linear-gradient(45deg, #ff1493, #ffd700)'
  },

  // Special Achievements
  {
    id: 'daily_dedication',
    title: 'Daily Dedication',
    description: 'Play for 7 consecutive days',
    icon: '📅',
    category: 'special',
    type: 'single',
    requirement: { type: 'consecutive_days', value: 7 },
    reward: { xp: 100, badge: 'Dedicated' },
    rarity: 'epic',
    unlocked: false,
    gradient: 'linear-gradient(45deg, #ff6b35, #32cd32)'
  },
  {
    id: 'marathon_learner',
    title: 'Marathon Learner',
    description: 'Play for 30 consecutive days',
    icon: '🏃‍♂️',
    category: 'special',
    type: 'single',
    requirement: { type: 'consecutive_days', value: 30 },
    reward: { xp: 300, badge: 'Marathon' },
    rarity: 'legendary',
    unlocked: false,
    gradient: 'linear-gradient(45deg, #32cd32, #ffd700)'
  }
]

// Check if a player has earned an achievement
export function checkAchievement(achievement: Achievement, stats: PlayerStats, progressData: any): boolean {
  const { requirement } = achievement
  
  switch (requirement.type) {
    case 'questions_correct':
      return stats.totalCorrectAnswers >= requirement.value
      
    case 'perfect_scores':
      return stats.perfectScores >= requirement.value
      
    case 'streak_length':
      return stats.longestStreak >= requirement.value
      
    case 'themas_completed':
      return stats.themasCompleted >= requirement.value
      
    case 'total_xp':
      return stats.totalXP >= requirement.value
      
    case 'consecutive_days':
      return stats.consecutiveDaysPlayed >= requirement.value
      
    case 'speed_average':
      const avgTimePerQuestion = stats.totalTimeSpent / Math.max(stats.totalQuestionsAnswered, 1)
      return avgTimePerQuestion <= requirement.value
      
    case 'accuracy_percentage':
      return stats.averageAccuracy >= requirement.value
      
    default:
      return false
  }
}

// Update achievements based on current game state
export function updateAchievements(gameState: GameState): { 
  updatedState: GameState, 
  newAchievements: Achievement[] 
} {
  const newAchievements: Achievement[] = []
  const updatedAchievements = { ...gameState.achievements }
  
  // Check all predefined achievements
  ACHIEVEMENT_DEFINITIONS.forEach(achievementDef => {
    const currentAchievement = updatedAchievements[achievementDef.id]
    
    // If achievement doesn't exist, create it
    if (!currentAchievement) {
      updatedAchievements[achievementDef.id] = {
        ...achievementDef,
        unlocked: false
      }
    }
    
    const achievement = updatedAchievements[achievementDef.id]
    
    // Check if achievement should be unlocked
    if (!achievement.unlocked && checkAchievement(achievement, gameState.playerStats, gameState.progress)) {
      achievement.unlocked = true
      achievement.unlockedDate = new Date()
      
      // Add XP reward
      gameState.playerStats.totalXP += achievement.reward.xp
      
      newAchievements.push({ ...achievement })
    }
    
    // Update progress for progress-type achievements
    if (achievement.type === 'progress' || achievement.type === 'cumulative') {
      achievement.progress = getAchievementProgress(achievement, gameState.playerStats)
    }
  })
  
  const updatedState: GameState = {
    ...gameState,
    achievements: updatedAchievements
  }
  
  return { updatedState, newAchievements }
}

// Get current progress towards an achievement
function getAchievementProgress(achievement: Achievement, stats: PlayerStats): number {
  const { requirement } = achievement
  
  switch (requirement.type) {
    case 'questions_correct':
      return Math.min(stats.totalCorrectAnswers, requirement.value)
      
    case 'perfect_scores':
      return Math.min(stats.perfectScores, requirement.value)
      
    case 'streak_length':
      return Math.min(stats.longestStreak, requirement.value)
      
    case 'themas_completed':
      return Math.min(stats.themasCompleted, requirement.value)
      
    case 'total_xp':
      return Math.min(stats.totalXP, requirement.value)
      
    case 'consecutive_days':
      return Math.min(stats.consecutiveDaysPlayed, requirement.value)
      
    default:
      return 0
  }
}

// Get achievements by category
export function getAchievementsByCategory(achievements: Record<string, Achievement>): Record<AchievementCategory, Achievement[]> {
  const categorized: Record<AchievementCategory, Achievement[]> = {
    completion: [],
    accuracy: [],
    speed: [],
    streak: [],
    milestone: [],
    special: []
  }
  
  Object.values(achievements).forEach(achievement => {
    categorized[achievement.category].push(achievement)
  })
  
  return categorized
}

// Get unlocked achievements count by rarity
export function getAchievementStats(achievements: Record<string, Achievement>): {
  total: number
  unlocked: number
  byRarity: Record<AchievementRarity, { total: number, unlocked: number }>
} {
  const stats = {
    total: 0,
    unlocked: 0,
    byRarity: {
      common: { total: 0, unlocked: 0 },
      rare: { total: 0, unlocked: 0 },
      epic: { total: 0, unlocked: 0 },
      legendary: { total: 0, unlocked: 0 }
    } as Record<AchievementRarity, { total: number, unlocked: number }>
  }
  
  Object.values(achievements).forEach(achievement => {
    stats.total++
    stats.byRarity[achievement.rarity].total++
    
    if (achievement.unlocked) {
      stats.unlocked++
      stats.byRarity[achievement.rarity].unlocked++
    }
  })
  
  return stats
}

// Get next achievements to work towards
export function getNextAchievements(achievements: Record<string, Achievement>, limit: number = 3): Achievement[] {
  const unlockedAchievements = Object.values(achievements)
    .filter(a => !a.unlocked)
    .map(a => ({
      ...a,
      progressPercentage: a.maxProgress ? ((a.progress || 0) / a.maxProgress) * 100 : 0
    }))
    .sort((a, b) => {
      // Sort by progress percentage (desc) then by rarity value
      const rarityValue = { common: 1, rare: 2, epic: 3, legendary: 4 }
      if (b.progressPercentage !== a.progressPercentage) {
        return b.progressPercentage - a.progressPercentage
      }
      return rarityValue[a.rarity] - rarityValue[b.rarity]
    })
  
  return unlockedAchievements.slice(0, limit)
}

// Get recently unlocked achievements
export function getRecentAchievements(achievements: Record<string, Achievement>, days: number = 7): Achievement[] {
  const cutoffDate = new Date()
  cutoffDate.setDate(cutoffDate.getDate() - days)
  
  return Object.values(achievements)
    .filter(a => a.unlocked && a.unlockedDate && a.unlockedDate >= cutoffDate)
    .sort((a, b) => (b.unlockedDate?.getTime() || 0) - (a.unlockedDate?.getTime() || 0))
}

// Calculate achievement completion percentage
export function getAchievementCompletionRate(achievements: Record<string, Achievement>): number {
  const total = Object.keys(achievements).length
  if (total === 0) return 0
  
  const unlocked = Object.values(achievements).filter(a => a.unlocked).length
  return Math.round((unlocked / total) * 100)
}