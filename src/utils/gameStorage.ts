import { 
  GameState, 
  PlayerStats, 
  Progress, 
  Achievement, 
  DailyGoal, 
  GameSession, 
  GameSettings,
  ScoringConfig 
} from '../types/latin'

const STORAGE_KEYS = {
  GAME_STATE: 'latin_app_game_state',
  BACKUP_STATE: 'latin_app_backup_state'
} as const

// Default game configuration
export const DEFAULT_SCORING_CONFIG: ScoringConfig = {
  basePointsPerCorrect: 10,
  speedBonusMultiplier: 0.5, // Additional points based on speed
  streakBonusPoints: 5, // Bonus per question in streak
  perfectScoreBonus: 50,
  xpPerPoint: 1,
  levelThresholds: [0, 100, 250, 450, 700, 1000, 1400, 1850, 2350, 2900, 3500, 4150, 4850, 5600, 6400, 7250, 8150, 9100, 10100, 11150] // Levels 1-20
}

// Initialize default game state
export function createDefaultGameState(): GameState {
  const now = new Date()
  
  return {
    playerStats: {
      totalXP: 0,
      level: 1,
      totalQuestionsAnswered: 0,
      totalCorrectAnswers: 0,
      totalTimeSpent: 0,
      longestStreak: 0,
      perfectScores: 0,
      averageAccuracy: 0,
      themasCompleted: 0,
      joinDate: now,
      lastPlayDate: now,
      consecutiveDaysPlayed: 1,
      totalDaysPlayed: 1
    },
    progress: {},
    achievements: {},
    dailyGoals: [],
    recentSessions: [],
    settings: {
      soundEnabled: true,
      animationsEnabled: true,
      difficultySetting: 'normal',
      dailyGoalReminders: true,
      celebrationLevel: 'full'
    }
  }
}

// Initialize default progress for a thema
export function createDefaultProgress(themaId: number, totalQuestions: number): Progress {
  return {
    themaId,
    completed: false,
    score: 0,
    totalQuestions,
    correctAnswers: 0,
    attempts: 0,
    bestScore: 0,
    averageTimePerQuestion: 0,
    totalTimeSpent: 0,
    streakData: {
      current: 0,
      longest: 0
    }
  }
}

// Safe JSON parsing with error handling
function safeParse<T>(json: string, fallback: T): T {
  try {
    const parsed = JSON.parse(json)
    // Convert date strings back to Date objects
    return convertDatesFromStorage(parsed)
  } catch (error) {
    console.warn('Failed to parse stored data:', error)
    return fallback
  }
}

// Convert date strings back to Date objects after loading from storage
function convertDatesFromStorage(obj: any): any {
  if (obj === null || obj === undefined) return obj
  
  if (typeof obj === 'string' && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(obj)) {
    return new Date(obj)
  }
  
  if (Array.isArray(obj)) {
    return obj.map(convertDatesFromStorage)
  }
  
  if (typeof obj === 'object') {
    const converted: any = {}
    for (const key in obj) {
      converted[key] = convertDatesFromStorage(obj[key])
    }
    return converted
  }
  
  return obj
}

// Convert Date objects to strings for storage
function convertDatesForStorage(obj: any): any {
  if (obj === null || obj === undefined) return obj
  
  if (obj instanceof Date) {
    return obj.toISOString()
  }
  
  if (Array.isArray(obj)) {
    return obj.map(convertDatesForStorage)
  }
  
  if (typeof obj === 'object') {
    const converted: any = {}
    for (const key in obj) {
      converted[key] = convertDatesForStorage(obj[key])
    }
    return converted
  }
  
  return obj
}

// Load game state from localStorage
export function loadGameState(): GameState {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.GAME_STATE)
    if (!stored) {
      const defaultState = createDefaultGameState()
      saveGameState(defaultState)
      return defaultState
    }
    
    const parsed = safeParse(stored, createDefaultGameState())
    
    // Ensure all required fields exist (migration support)
    const migrated = migrateGameState(parsed)
    
    // Update daily stats if it's a new day
    return updateDailyStats(migrated)
  } catch (error) {
    console.error('Failed to load game state:', error)
    return createDefaultGameState()
  }
}

// Save game state to localStorage with backup
export function saveGameState(gameState: GameState): boolean {
  try {
    // Create backup of current state first
    const current = localStorage.getItem(STORAGE_KEYS.GAME_STATE)
    if (current) {
      localStorage.setItem(STORAGE_KEYS.BACKUP_STATE, current)
    }
    
    // Convert dates to strings for storage
    const forStorage = convertDatesForStorage(gameState)
    
    // Save new state
    localStorage.setItem(STORAGE_KEYS.GAME_STATE, JSON.stringify(forStorage))
    return true
  } catch (error) {
    console.error('Failed to save game state:', error)
    return false
  }
}

// Migrate old game state structure to new format
function migrateGameState(state: any): GameState {
  const defaultState = createDefaultGameState()
  
  // Ensure all required fields exist
  return {
    playerStats: {
      ...defaultState.playerStats,
      ...state.playerStats
    },
    progress: state.progress || {},
    achievements: state.achievements || {},
    dailyGoals: state.dailyGoals || [],
    recentSessions: state.recentSessions || [],
    settings: {
      ...defaultState.settings,
      ...state.settings
    }
  }
}

// Update daily statistics (called on app load)
function updateDailyStats(gameState: GameState): GameState {
  const today = new Date()
  const lastPlay = gameState.playerStats.lastPlayDate
  
  if (!lastPlay) {
    return gameState
  }
  
  const lastPlayDate = new Date(lastPlay)
  const daysDifference = Math.floor((today.getTime() - lastPlayDate.getTime()) / (1000 * 60 * 60 * 24))
  
  if (daysDifference === 0) {
    // Same day, no update needed
    return gameState
  }
  
  const updatedStats = { ...gameState.playerStats }
  
  if (daysDifference === 1) {
    // Consecutive day
    updatedStats.consecutiveDaysPlayed += 1
    updatedStats.totalDaysPlayed += 1
  } else if (daysDifference > 1) {
    // Streak broken
    updatedStats.consecutiveDaysPlayed = 1
    updatedStats.totalDaysPlayed += 1
  }
  
  updatedStats.lastPlayDate = today
  
  return {
    ...gameState,
    playerStats: updatedStats
  }
}

// Export game data for backup/sharing
export function exportGameData(): string {
  const gameState = loadGameState()
  return JSON.stringify(gameState, null, 2)
}

// Import game data from backup/sharing
export function importGameData(jsonData: string): boolean {
  try {
    const gameState = safeParse(jsonData, createDefaultGameState())
    return saveGameState(gameState)
  } catch (error) {
    console.error('Failed to import game data:', error)
    return false
  }
}

// Clear all game data (reset progress)
export function clearGameData(): boolean {
  try {
    localStorage.removeItem(STORAGE_KEYS.GAME_STATE)
    localStorage.removeItem(STORAGE_KEYS.BACKUP_STATE)
    return true
  } catch (error) {
    console.error('Failed to clear game data:', error)
    return false
  }
}

// Get storage usage information
export function getStorageInfo(): { used: number; available: number; percentage: number } {
  try {
    const used = JSON.stringify(loadGameState()).length
    const available = 5 * 1024 * 1024 // Assume 5MB localStorage limit
    const percentage = (used / available) * 100
    
    return {
      used,
      available,
      percentage: Math.round(percentage * 100) / 100
    }
  } catch (error) {
    return { used: 0, available: 0, percentage: 0 }
  }
}