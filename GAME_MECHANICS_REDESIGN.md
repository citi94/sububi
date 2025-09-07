# Game Mechanics Redesign - Multi-Test Progression System

## Overview
The game mechanics system has been completely redesigned to support the new educational structure:
- **Old System**: 20 Themas × 1 test each = 20 assessments
- **New System**: 10 Themas × 3 tests each = 30 assessments with progressive difficulty

## Key Changes Implemented

### 1. Enhanced Type System (`/src/types/game.ts`)

#### New `TestProgress` Interface
```typescript
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
```

#### Updated `GameProgress` Interface
```typescript
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
```

### 2. Mastery-Based Progression System

#### Progressive Difficulty Thresholds
- **Test A**: 67% required (4/6 or 5/8 questions correct)
- **Test B**: 75% required (5/6 or 6/8 questions correct)  
- **Test C**: 83% required (5/6 or 7/8 questions correct)

#### Sequential Unlocking
- Students must pass **Test A** before accessing **Test B**
- Students must pass **Test B** before accessing **Test C**
- Students unlock **next Thema** after completing Tests A+B
- **Test C** is optional but provides bonus rewards

### 3. Anti-Gaming Retry Mechanics

#### Attempt Limits & Cooldowns
- **Test A**: 3 attempts + 5-minute cooldown after failure
- **Test B**: 2 attempts + 10-minute cooldown after failure
- **Test C**: 2 attempts + 15-minute cooldown after failure

#### Implementation
```typescript
const RETRY_CONFIG = {
  A: { maxAttempts: 3, cooldownMinutes: 5 },
  B: { maxAttempts: 2, cooldownMinutes: 10 },
  C: { maxAttempts: 2, cooldownMinutes: 15 }
}
```

### 4. Enhanced Scoring System

#### Test Level Multipliers
- **Test A**: 1.0x (base scoring)
- **Test B**: 1.2x (20% bonus)
- **Test C**: 1.5x (50% bonus)

#### Updated Scoring Formula
```typescript
// Base scoring remains: 10 points + speed bonus + streak multiplier
// New: Apply test level multiplier
points = Math.floor(points * TEST_MULTIPLIERS[testLevel])
```

#### Bonus XP System
- **Test C Completion**: +50 XP bonus
- Encourages students to pursue mastery beyond minimum requirements

### 5. Sophisticated Achievement System

#### New Achievements
- **Test Master**: Complete all 10 Test A assessments
- **Scholar**: Complete 5 Test C assessments  
- **Updated Latin Champion**: Complete Tests A+B for all 10 Themas

#### Enhanced Categories
- Added new `'mastery'` category for achievements focused on deep learning

### 6. Updated Player Statistics

#### New Tracking Fields
```typescript
export interface PlayerStats {
  // ... existing fields
  themesCompleted: number      // Themas with A+B completed
  themesFullyMastered: number  // Themas with A+B+C completed
  testsACompleted: number      // Count of Test A completions
  testsBCompleted: number      // Count of Test B completions  
  testsCCompleted: number      // Count of Test C completions
}
```

### 7. Backward Compatibility & Migration

#### Automatic Data Migration
- Detects old single-test progress format
- Migrates to new multi-test structure
- Preserves existing user progress where possible
- Ensures Thema 1 is always unlocked for new users

#### Migration Logic
```typescript
const migrateOldProgress = (oldProgress: any): Record<number, GameProgress> => {
  // Converts old format to new multi-test structure
  // Preserves completion status and scores
  // Unlocks appropriate next steps based on previous progress
}
```

## API Changes

### Updated Hook Interface
```typescript
const {
  progress,                    // Now Record<number, GameProgress>
  stats,                      // Enhanced with new fields
  currentSession,             // Now includes testLevel
  startQuizSession,           // Now requires (themaId, testLevel)
  recordAnswer,               // Enhanced with test multipliers
  completeQuizSession,        // Advanced unlock logic
  resetProgress,              // Initializes new structure
  isTestUnlocked,             // NEW: Check test availability
  MASTERY_THRESHOLDS,         // NEW: Access to thresholds
  RETRY_CONFIG               // NEW: Access to retry config
} = useGameMechanics()
```

### Session Management
```typescript
// Start a specific test level
const session = startQuizSession(1, 'A') // Thema 1, Test A

// Check if test is available
const canTakeTestB = isTestUnlocked(1, 'B') // Requires Test A completion

// Session includes mastery threshold
session.masteryThreshold // 67 for A, 75 for B, 83 for C
```

## Educational Psychology Integration

### Motivation Maintenance
- **Progressive Challenge**: Each test level increases difficulty appropriately
- **Clear Progress**: Students see advancement through A → B → C
- **Meaningful Rewards**: Bonus XP and achievements for going beyond minimum

### Mastery Focus
- **Competency Gates**: Must demonstrate understanding to advance
- **Multiple Attempts**: Learning-focused retry system with reflection time
- **Skill Building**: Sequential tests build upon previous knowledge

### Engagement Elements
- **Achievement Diversity**: Rewards different types of engagement
- **Optional Challenge**: Test C provides stretch goals
- **Progress Visualization**: Clear unlock status and completion tracking

## Implementation Status
✅ **Complete** - All core functionality implemented
✅ **Tested** - No compilation errors, maintains existing UI compatibility  
✅ **Migration Ready** - Backward compatibility for existing users
✅ **Documented** - Comprehensive type definitions and logic comments

The system now supports sophisticated mastery-based learning while maintaining the kid-friendly experience that made the original engaging.