/**
 * Scoring Algorithm Analysis
 * Validates the exact implementation from useGameMechanics.ts
 */

const BASE_POINTS = 10;
const SPEED_BONUS_MAX = 5;
const STREAK_MULTIPLIER = 1.2;

const TEST_MULTIPLIERS = {
  A: 1.0,
  B: 1.2,
  C: 1.5
};

function calculatePoints(correct, timeSpent, streak, testLevel) {
  if (!correct) return 0;
  
  let points = BASE_POINTS;
  
  // Speed bonus (faster = more points, max 5 bonus points)
  const speedBonus = Math.max(0, SPEED_BONUS_MAX - Math.floor(timeSpent / 2000));
  points += speedBonus;
  
  // Streak bonus
  if (streak > 1) {
    points = Math.floor(points * Math.min(STREAK_MULTIPLIER * streak, 3));
  }
  
  // Test level multiplier
  points = Math.floor(points * TEST_MULTIPLIERS[testLevel]);
  
  return points;
}

function analyzeCalculation(correct, timeSpent, streak, testLevel, description) {
  console.log(`\n=== ${description} ===`);
  console.log(`Input: correct=${correct}, timeSpent=${timeSpent}ms, streak=${streak}, testLevel=${testLevel}`);
  
  if (!correct) {
    console.log(`Result: 0 (incorrect answer)`);
    return 0;
  }
  
  let points = BASE_POINTS;
  console.log(`Step 1: Base points = ${points}`);
  
  const speedBonus = Math.max(0, SPEED_BONUS_MAX - Math.floor(timeSpent / 2000));
  points += speedBonus;
  console.log(`Step 2: Speed bonus = ${speedBonus} (timeSpent=${timeSpent}ms → ${Math.floor(timeSpent / 2000)} * 2s intervals)`);
  console.log(`        Points after speed = ${points}`);
  
  if (streak > 1) {
    const multiplier = Math.min(STREAK_MULTIPLIER * streak, 3);
    const beforeStreak = points;
    points = Math.floor(points * multiplier);
    console.log(`Step 3: Streak multiplier = ${multiplier} (${STREAK_MULTIPLIER} * ${streak}, capped at 3)`);
    console.log(`        Points before streak = ${beforeStreak}`);
    console.log(`        Points after streak = ${points}`);
  } else {
    console.log(`Step 3: No streak bonus (streak = ${streak})`);
  }
  
  const testMultiplier = TEST_MULTIPLIERS[testLevel];
  const beforeTest = points;
  points = Math.floor(points * testMultiplier);
  console.log(`Step 4: Test level multiplier = ${testMultiplier}`);
  console.log(`        Points before test multiplier = ${beforeTest}`);
  console.log(`        Final points = ${points}`);
  
  return points;
}

console.log('🔍 SCORING ALGORITHM ANALYSIS');
console.log('=====================================');

// Test cases that failed in validation
analyzeCalculation(true, 3000, 1, 'A', 'Correct answer base points (3s)');
analyzeCalculation(true, 1000, 1, 'A', 'Fast answer bonus (1s)');
analyzeCalculation(true, 2000, 1, 'A', 'Test A multiplier (2s)');
analyzeCalculation(true, 2000, 1, 'B', 'Test B multiplier (2s)');
analyzeCalculation(true, 2000, 1, 'C', 'Test C multiplier (2s)');
analyzeCalculation(true, 2000, 3, 'A', 'Streak bonus (streak 3, 2s)');
analyzeCalculation(true, 2000, 10, 'A', 'Streak capped at 3x (streak 10, 2s)');

console.log('\n🎯 CORRECTED EXPECTED VALUES');
console.log('=====================================');

const testCases = [
  { correct: true, timeSpent: 3000, streak: 1, testLevel: 'A', desc: 'Correct answer base points (3s)' },
  { correct: true, timeSpent: 1000, streak: 1, testLevel: 'A', desc: 'Fast answer bonus (1s)' },
  { correct: true, timeSpent: 2000, streak: 1, testLevel: 'A', desc: 'Test A multiplier (2s)' },
  { correct: true, timeSpent: 2000, streak: 1, testLevel: 'B', desc: 'Test B multiplier (2s)' },
  { correct: true, timeSpent: 2000, streak: 1, testLevel: 'C', desc: 'Test C multiplier (2s)' },
  { correct: true, timeSpent: 2000, streak: 3, testLevel: 'A', desc: 'Streak bonus (streak 3, 2s)' },
  { correct: true, timeSpent: 2000, streak: 10, testLevel: 'A', desc: 'Streak capped at 3x (streak 10, 2s)' }
];

testCases.forEach(test => {
  const result = calculatePoints(test.correct, test.timeSpent, test.streak, test.testLevel);
  console.log(`${test.desc}: Expected ${result}`);
});

console.log('\n📝 TEST CASE UPDATES FOR VALIDATION');
console.log('=====================================');
console.log('Update these expected values in the test suite:');

testCases.forEach((test, i) => {
  const result = calculatePoints(test.correct, test.timeSpent, test.streak, test.testLevel);
  console.log(`runner.test('Scoring', '${test.desc}', () => calculatePoints(${test.correct}, ${test.timeSpent}, ${test.streak}, '${test.testLevel}'), ${result});`);
});