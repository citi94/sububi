/**
 * Progressive Unlock Logic Test for Latin Learning Adventure App
 * 
 * This test validates the complex unlock logic and progression system
 * for the multi-test structure across all 10 Themas.
 */

// Simulate the unlock logic from useGameMechanics.ts
function isTestUnlocked(progress, themaId, testLevel) {
  const themaProgress = progress[themaId];
  
  // Test A is always unlocked for all Themas (1-10) - introduction level
  if (testLevel === 'A') return true;
  
  // For Tests B and C, need thema progress and previous test completion
  if (!themaProgress) return false;
  
  // Test B requires Test A to be passed
  if (testLevel === 'B') return themaProgress.testA.passed;
  
  // Test C requires Test B to be passed
  if (testLevel === 'C') return themaProgress.testB.passed;
  
  return false;
}

// Simulate thema unlock logic
function shouldThemaBeUnlocked(progress, themaId) {
  if (themaId === 1) return true; // Thema 1 always unlocked
  
  const previousThema = progress[themaId - 1];
  if (!previousThema) return false;
  
  // Next thema unlocks when previous thema has A+B completed
  return previousThema.testA.passed && previousThema.testB.passed;
}

// Create test progress scenarios
function createTestProgressScenario(scenario) {
  const baseTestProgress = {
    A: {
      testLevel: 'A',
      completed: false,
      passed: false,
      score: 0,
      maxScore: 100,
      attempts: 0,
      bestScore: 0,
      timeSpent: 0,
      lastAttempt: '',
      streak: 0
    },
    B: {
      testLevel: 'B',
      completed: false,
      passed: false,
      score: 0,
      maxScore: 100,
      attempts: 0,
      bestScore: 0,
      timeSpent: 0,
      lastAttempt: '',
      streak: 0
    },
    C: {
      testLevel: 'C',
      completed: false,
      passed: false,
      score: 0,
      maxScore: 100,
      attempts: 0,
      bestScore: 0,
      timeSpent: 0,
      lastAttempt: '',
      streak: 0
    }
  };

  const scenarios = {
    fresh: () => ({
      1: {
        themaId: 1,
        unlocked: true,
        testA: { ...baseTestProgress.A },
        testB: { ...baseTestProgress.B },
        testC: { ...baseTestProgress.C },
        overallCompleted: false,
        fullyMastered: false,
        totalTimeSpent: 0
      }
    }),
    
    completedA1: () => ({
      1: {
        themaId: 1,
        unlocked: true,
        testA: { ...baseTestProgress.A, completed: true, passed: true, score: 85, bestScore: 85 },
        testB: { ...baseTestProgress.B },
        testC: { ...baseTestProgress.C },
        overallCompleted: false,
        fullyMastered: false,
        totalTimeSpent: 45000
      }
    }),
    
    completedAB1: () => ({
      1: {
        themaId: 1,
        unlocked: true,
        testA: { ...baseTestProgress.A, completed: true, passed: true, score: 85, bestScore: 85 },
        testB: { ...baseTestProgress.B, completed: true, passed: true, score: 78, bestScore: 78 },
        testC: { ...baseTestProgress.C },
        overallCompleted: true,
        fullyMastered: false,
        totalTimeSpent: 90000
      },
      2: {
        themaId: 2,
        unlocked: true, // Should be unlocked due to Thema 1 A+B completion
        testA: { ...baseTestProgress.A },
        testB: { ...baseTestProgress.B },
        testC: { ...baseTestProgress.C },
        overallCompleted: false,
        fullyMastered: false,
        totalTimeSpent: 0
      }
    }),
    
    multipleThemas: () => {
      const progress = {};
      for (let i = 1; i <= 5; i++) {
        progress[i] = {
          themaId: i,
          unlocked: true,
          testA: { ...baseTestProgress.A, completed: true, passed: true, score: 80 + i, bestScore: 80 + i },
          testB: { ...baseTestProgress.B, completed: true, passed: true, score: 75 + i, bestScore: 75 + i },
          testC: { ...baseTestProgress.C, completed: i <= 2, passed: i <= 2, score: i <= 2 ? 90 + i : 0, bestScore: i <= 2 ? 90 + i : 0 },
          overallCompleted: true,
          fullyMastered: i <= 2,
          totalTimeSpent: 120000 + (i * 10000)
        };
      }
      
      // Thema 6 should be unlocked due to Thema 5 completion
      progress[6] = {
        themaId: 6,
        unlocked: true,
        testA: { ...baseTestProgress.A },
        testB: { ...baseTestProgress.B },
        testC: { ...baseTestProgress.C },
        overallCompleted: false,
        fullyMastered: false,
        totalTimeSpent: 0
      };
      
      return progress;
    }
  };
  
  return scenarios[scenario]();
}

// Test unlock logic systematically
function testUnlockLogic() {
  console.group('🧪 Progressive Unlock Logic Tests');
  
  const testCases = [
    {
      name: 'Fresh User - Thema 1 Only',
      scenario: 'fresh',
      expectedUnlocks: {
        themas: [1],
        testAccess: { 1: ['A'] }
      }
    },
    {
      name: 'Thema 1 Test A Completed',
      scenario: 'completedA1',
      expectedUnlocks: {
        themas: [1],
        testAccess: { 1: ['A', 'B'] }
      }
    },
    {
      name: 'Thema 1 A+B Completed - Should Unlock Thema 2',
      scenario: 'completedAB1',
      expectedUnlocks: {
        themas: [1, 2],
        testAccess: { 1: ['A', 'B', 'C'], 2: ['A'] }
      }
    },
    {
      name: 'Multiple Themas Progression',
      scenario: 'multipleThemas',
      expectedUnlocks: {
        themas: [1, 2, 3, 4, 5, 6],
        testAccess: { 
          1: ['A', 'B', 'C'], 
          2: ['A', 'B', 'C'], 
          3: ['A', 'B', 'C'], 
          4: ['A', 'B', 'C'], 
          5: ['A', 'B', 'C'], 
          6: ['A'] 
        }
      }
    }
  ];
  
  const results = [];
  
  testCases.forEach((testCase, index) => {
    console.log(`\n📋 Test Case ${index + 1}: ${testCase.name}`);
    
    const progress = createTestProgressScenario(testCase.scenario);
    const result = {
      testCase: testCase.name,
      scenario: testCase.scenario,
      themaUnlocks: {},
      testAccess: {},
      correctThemaUnlocks: true,
      correctTestAccess: true,
      details: {}
    };
    
    // Test thema unlocks
    for (let themaId = 1; themaId <= 10; themaId++) {
      const shouldBeUnlocked = testCase.expectedUnlocks.themas.includes(themaId);
      const actuallyUnlocked = shouldThemaBeUnlocked(progress, themaId);
      const progressUnlocked = progress[themaId]?.unlocked || false;
      
      result.themaUnlocks[themaId] = {
        expected: shouldBeUnlocked,
        logicResult: actuallyUnlocked,
        progressState: progressUnlocked,
        matches: shouldBeUnlocked === actuallyUnlocked && shouldBeUnlocked === progressUnlocked
      };
      
      if (!result.themaUnlocks[themaId].matches) {
        result.correctThemaUnlocks = false;
      }
    }
    
    // Test individual test access
    Object.entries(testCase.expectedUnlocks.testAccess).forEach(([themaId, expectedTests]) => {
      const id = parseInt(themaId);
      result.testAccess[id] = {};
      
      ['A', 'B', 'C'].forEach(testLevel => {
        const shouldBeUnlocked = expectedTests.includes(testLevel);
        const actuallyUnlocked = isTestUnlocked(progress, id, testLevel);
        
        result.testAccess[id][testLevel] = {
          expected: shouldBeUnlocked,
          actual: actuallyUnlocked,
          matches: shouldBeUnlocked === actuallyUnlocked
        };
        
        if (!result.testAccess[id][testLevel].matches) {
          result.correctTestAccess = false;
        }
      });
    });
    
    // Log detailed results
    console.log('📊 Thema Unlock Results:');
    Object.entries(result.themaUnlocks).forEach(([themaId, unlock]) => {
      if (unlock.expected || unlock.logicResult || unlock.progressState) {
        console.log(`  Thema ${themaId}: Expected=${unlock.expected}, Logic=${unlock.logicResult}, Progress=${unlock.progressState} ${unlock.matches ? '✅' : '❌'}`);
      }
    });
    
    console.log('📊 Test Access Results:');
    Object.entries(result.testAccess).forEach(([themaId, tests]) => {
      const testResults = Object.entries(tests).map(([testLevel, access]) => 
        `${testLevel}=${access.expected}/${access.actual}${access.matches ? '✅' : '❌'}`
      ).join(', ');
      console.log(`  Thema ${themaId}: ${testResults}`);
    });
    
    console.log(`🎯 Overall: Themas=${result.correctThemaUnlocks ? '✅' : '❌'}, Tests=${result.correctTestAccess ? '✅' : '❌'}`);
    
    results.push(result);
  });
  
  const overallSuccess = results.every(r => r.correctThemaUnlocks && r.correctTestAccess);
  console.log(`\n🎯 Progressive Unlock Test Summary:`);
  console.log(`  Total Test Cases: ${results.length}`);
  console.log(`  All Correct: ${overallSuccess ? '✅' : '❌'}`);
  
  console.groupEnd();
  return { results, overallSuccess };
}

// Test statistics calculations
function testStatisticsCalculations() {
  console.group('📊 Statistics Calculation Tests');
  
  const progress = createTestProgressScenario('multipleThemas');
  
  // Calculate expected statistics
  const expectedStats = {
    themesCompleted: Object.values(progress).filter(p => p.testA?.passed && p.testB?.passed).length,
    themesFullyMastered: Object.values(progress).filter(p => p.testA?.passed && p.testB?.passed && p.testC?.passed).length,
    testsACompleted: Object.values(progress).filter(p => p.testA?.passed).length,
    testsBCompleted: Object.values(progress).filter(p => p.testB?.passed).length,
    testsCCompleted: Object.values(progress).filter(p => p.testC?.passed).length,
    totalTimeSpent: Object.values(progress).reduce((sum, p) => sum + p.totalTimeSpent, 0)
  };
  
  console.log('📊 Expected Statistics from Progress:');
  console.log(`  Themes Completed (A+B): ${expectedStats.themesCompleted}`);
  console.log(`  Themes Fully Mastered (A+B+C): ${expectedStats.themesFullyMastered}`);
  console.log(`  Tests A Completed: ${expectedStats.testsACompleted}`);
  console.log(`  Tests B Completed: ${expectedStats.testsBCompleted}`);
  console.log(`  Tests C Completed: ${expectedStats.testsCCompleted}`);
  console.log(`  Total Time Spent: ${expectedStats.totalTimeSpent}ms`);
  
  // Validate calculations
  const validation = {
    themesCompletedCorrect: expectedStats.themesCompleted === 5, // Themas 1-5
    themesFullyMasteredCorrect: expectedStats.themesFullyMastered === 2, // Themas 1-2
    testsACorrect: expectedStats.testsACompleted === 5,
    testsBCorrect: expectedStats.testsBCompleted === 5,
    testsCCorrect: expectedStats.testsCCompleted === 2,
    timeCalculationCorrect: expectedStats.totalTimeSpent > 0
  };
  
  console.log('✅ Validation Results:');
  Object.entries(validation).forEach(([key, isValid]) => {
    console.log(`  ${key}: ${isValid ? '✅' : '❌'}`);
  });
  
  const allValid = Object.values(validation).every(v => v);
  console.log(`🎯 All Statistics Valid: ${allValid ? '✅' : '❌'}`);
  
  console.groupEnd();
  return { expectedStats, validation, allValid };
}

// Main test runner
function runProgressiveTests() {
  console.log('🚀 Starting Progressive Data Update Tests');
  console.log('📅 Test time:', new Date().toISOString());
  
  try {
    const unlockTests = testUnlockLogic();
    const statsTests = testStatisticsCalculations();
    
    const overallSuccess = unlockTests.overallSuccess && statsTests.allValid;
    
    console.log('\n🎯 Progressive Data Update Summary:');
    console.log(`  Unlock Logic Tests: ${unlockTests.overallSuccess ? '✅' : '❌'}`);
    console.log(`  Statistics Tests: ${statsTests.allValid ? '✅' : '❌'}`);
    console.log(`  Overall Success: ${overallSuccess ? '✅' : '❌'}`);
    
    return {
      success: overallSuccess,
      unlockTests,
      statsTests,
      summary: {
        unlockLogicWorking: unlockTests.overallSuccess,
        statisticsAccurate: statsTests.allValid,
        overallSuccess
      }
    };
    
  } catch (error) {
    console.error('💥 Progressive tests failed:', error);
    return { success: false, error: error.message };
  }
}

// Node.js execution
if (typeof module !== 'undefined' && require.main === module) {
  const results = runProgressiveTests();
  console.log('\n📊 Final Progressive Test Results:');
  console.log('  Success:', results.success ? '✅' : '❌');
  if (results.error) {
    console.log('  Error:', results.error);
  }
}

if (typeof module !== 'undefined') {
  module.exports = { runProgressiveTests, testUnlockLogic, testStatisticsCalculations };
}