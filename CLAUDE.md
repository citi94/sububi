# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Latin Learning Adventure app - a gamified educational platform designed for 10-year-old students to learn Latin through interactive multiple-choice quizzes. The app transforms traditional Latin education into an engaging game with progress tracking, achievements, and kid-friendly animations.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production  
npm run build

# Preview production build
npm run preview

# Install dependencies
npm install
```

## Architecture Overview

### Core Application Structure

The app uses a three-screen navigation pattern managed in `src/App.tsx`:

1. **ThemaSelector** - Main menu showing all 20 Latin topics (Themas)
2. **QuizView** - Interactive quiz interface for answering questions  
3. **ProgressDashboard** - Statistics and achievement tracking

Navigation state is managed at the App level with `currentThema` and `showDashboard` flags.

### Data Architecture

**Content Structure:**
- **Themas**: 20 Latin topics covering Level 1 curriculum (Thema I: Verbs, Thema II: Nouns, etc.)
- **Questions**: Multiple choice questions with explanations, organized by Thema
- **Content Location**: Questions stored in `src/data/questions/thema{N}.ts`, imported via `src/data/latinContent.ts`

**Game Mechanics System:**
- **useGameMechanics Hook**: Central state management for all game functionality
- **Persistent Storage**: Progress, stats, and achievements saved to localStorage
- **Scoring System**: Base points (10) + speed bonuses + streak multipliers
- **Achievement System**: 6 different achievement categories with progress tracking

### Type System

Two parallel type systems exist (architectural inconsistency to be aware of):

1. **`src/types/game.ts`** - Active game mechanics types (GameProgress, PlayerStats, Achievement, QuizSession)  
2. **`src/types/latin.ts`** - Extended educational content types (more comprehensive but partially unused)

The game mechanics hook uses types from `game.ts` while some components reference `latin.ts`.

### Game Mechanics Flow

1. **Session Start**: `gameMechanics.startQuizSession(themaId)` initializes tracking
2. **Answer Recording**: `gameMechanics.recordAnswer()` processes responses with timing and scoring  
3. **Session Completion**: `gameMechanics.completeQuizSession()` finalizes progress and checks achievements
4. **Persistence**: All data automatically saved to localStorage with keys defined in `STORAGE_KEYS`

### Component Patterns

**Styling**: All components use CSS-in-JS with `<style jsx>` blocks for kid-friendly animations and gradients

**Props Pattern**: Components receive both content data and game mechanics state:
```tsx
interface ComponentProps {
  // Content
  themas: Thema[]
  // Game state  
  progress: Record<number, GameProgress>
  stats: PlayerStats
  // Actions
  onAction: () => void
}
```

### Key Implementation Details

**Achievement Checking**: Automatic on quiz completion in `useGameMechanics.completeQuizSession()`

**Progress Calculation**: 70% correct answers required to mark a Thema as "completed"

**Level System**: 100 XP per level, calculated as `Math.floor(xp / 100) + 1`

**Scoring Formula**: 
- Base: 10 points per correct answer
- Speed bonus: up to +5 points (faster = more points)
- Streak bonus: 1.2x multiplier (capped at 3x total)

## Content Expansion

To add questions for additional Themas:

1. Create `src/data/questions/thema{N}.ts` with Question[] export
2. Import in `src/data/latinContent.ts`  
3. Add to corresponding Thema object in `latinThemas` array

Questions must include: id, question, options (4 choices), correctAnswer (0-3 index), optional explanation.

## Browser Storage

Game state persists using localStorage with these keys:
- `latin_app_progress` - Individual Thema completion data
- `latin_app_stats` - Player statistics and achievements

Clear browser storage to reset game progress during development.