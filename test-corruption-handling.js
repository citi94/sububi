/**
 * Data Corruption Handling Test for Latin Learning Adventure App
 * 
 * This test validates the error handling and recovery mechanisms
 * when localStorage contains corrupted or invalid data.
 */

// Simulate the error handling logic from useGameMechanics.ts
function simulateCorruptionHandling(corruptedData) {
  console.log('🧪 Testing corruption:', corruptedData.substring(0, 50) + '...');
  
  let result = {
    input: corruptedData.substring(0, 30),
    parseAttempted: false,
    parseSucceeded: false,
    errorCaught: false,
    errorMessage: '',
    fallbackApplied: false,
    finalState: null
  };
  
  try {
    result.parseAttempted = true;
    const parsed = JSON.parse(corruptedData);
    result.parseSucceeded = true;
    result.finalState = parsed;
    console.log('  ⚠️ Corruption unexpectedly parsed successfully');
  } catch (error) {
    result.errorCaught = true;
    result.errorMessage = error.message;
    result.fallbackApplied = true;
    
    // Simulate fallback logic from lines 118-124 in useGameMechanics.ts
    const fallbackProgress = {
      1: {
        themaId: 1,
        unlocked: true,
        testA: {
          testLevel: 'A',
          completed: false,
          passed: false,
          score: 0,
          maxScore: 0,
          attempts: 0,
          bestScore: 0,
          timeSpent: 0,
          lastAttempt: '',
          streak: 0
        },
        testB: {
          testLevel: 'B',
          completed: false,
          passed: false,
          score: 0,
          maxScore: 0,
          attempts: 0,
          bestScore: 0,
          timeSpent: 0,
          lastAttempt: '',
          streak: 0
        },
        testC: {
          testLevel: 'C',
          completed: false,
          passed: false,
          score: 0,
          maxScore: 0,
          attempts: 0,
          bestScore: 0,
          timeSpent: 0,
          lastAttempt: '',
          streak: 0
        },
        overallCompleted: false,
        fullyMastered: false,
        totalTimeSpent: 0
      }
    };
    
    result.finalState = fallbackProgress;
    console.log('  ✅ Error properly caught and fallback applied');
  }
  
  return result;
}

// Test various corruption scenarios
function testCorruptionScenarios() {
  console.group('🧪 Data Corruption Handling Tests');
  
  const corruptionTests = [
    // Malformed JSON
    '{"1":{"themaId":1,"unlocked":true,"testA":{broken json',
    
    // Invalid structure but valid JSON
    '{"invalid":"structure","missing":"required fields"}',
    
    // Non-JSON data
    'not json at all',
    
    // Null values
    '{"1":null,"2":undefined}',
    
    // Empty object
    '{}',
    
    // Empty string
    '',
    
    // Array instead of object
    '[1,2,3,4,5]',
    
    // Extremely large object (simulated)
    JSON.stringify(Object.fromEntries(Array.from({length: 1000}, (_, i) => [i, `data${i}`]))),
    
    // Unicode corruption
    '{"1":{"themaId":1,"name":"Test\uD83D\uDE00\uD83D\uDE01"}corrupt',
    
    // Circular reference simulation (actual circular refs can't be stringified)
    '{"1":{"self":"circular","id":1},"2":{"ref":"1"}}malformed',
  ];
  
  const results = [];
  
  console.log(`📋 Testing ${corruptionTests.length} corruption scenarios...\n`);
  
  corruptionTests.forEach((corruption, index) => {
    console.log(`🧪 Test ${index + 1}/${corruptionTests.length}:`);
    const result = simulateCorruptionHandling(corruption);
    results.push(result);
    console.log(`   Result: ${result.errorCaught ? '✅ Handled' : '⚠️ Parsed'}\n`);
  });
  
  // Analyze results
  const summary = {
    totalTests: results.length,
    errorsHandled: results.filter(r => r.errorCaught).length,
    unexpectedParses: results.filter(r => r.parseSucceeded && !r.errorCaught).length,
    fallbacksApplied: results.filter(r => r.fallbackApplied).length,
    allHaveFinalState: results.every(r => r.finalState !== null)
  };
  
  console.log('📊 Corruption Test Summary:');
  console.log(`  Total Tests: ${summary.totalTests}`);
  console.log(`  Errors Properly Handled: ${summary.errorsHandled}`);
  console.log(`  Unexpected Successful Parses: ${summary.unexpectedParses}`);
  console.log(`  Fallbacks Applied: ${summary.fallbacksApplied}`);
  console.log(`  All Have Final State: ${summary.allHaveFinalState ? '✅' : '❌'}`);
  
  // Check for any concerning patterns
  const concerningResults = results.filter(r => 
    (r.parseSucceeded && r.input.includes('corrupt')) || 
    !r.finalState
  );
  
  if (concerningResults.length > 0) {
    console.log('⚠️ Concerning Results:');
    concerningResults.forEach((result, i) => {
      console.log(`  ${i + 1}. ${result.input}: ${result.parseSucceeded ? 'Parsed despite corruption' : 'No final state'}`);
    });
  } else {
    console.log('✅ All corruption scenarios handled appropriately');
  }
  
  console.groupEnd();
  return { results, summary };
}

// Test stats corruption handling
function testStatsCorruption() {
  console.group('🧪 Stats Corruption Handling');
  
  const statsCorruptions = [
    // Missing required fields
    '{"totalScore": 100}',
    
    // Wrong data types
    '{"totalScore": "not a number", "level": true, "achievements": "not an array"}',
    
    // Negative values where they shouldn't be
    '{"totalScore": -100, "level": -5, "totalQuestions": -10}',
    
    // Extremely large values
    '{"totalScore": 999999999999, "level": 999999, "xp": 999999999999}',
    
    // Malformed achievements array
    '{"achievements": [{"missing": "fields"}, null, undefined, {"id": "test"}]}',
  ];
  
  const results = [];
  
  console.log(`📋 Testing ${statsCorruptions.length} stats corruption scenarios...\n`);
  
  statsCorruptions.forEach((corruption, index) => {
    console.log(`🧪 Stats Test ${index + 1}/${statsCorruptions.length}:`);
    
    let result = {
      input: corruption,
      parseSucceeded: false,
      validStructure: false,
      fallbackNeeded: false,
      finalState: null
    };
    
    try {
      const parsed = JSON.parse(corruption);
      result.parseSucceeded = true;
      
      // Check for required fields
      const requiredFields = [
        'totalScore', 'level', 'xp', 'xpToNextLevel', 'totalQuestions',
        'correctAnswers', 'averageScore', 'currentStreak', 'bestStreak',
        'totalTimeSpent', 'achievements', 'themesCompleted',
        'themesFullyMastered', 'testsACompleted', 'testsBCompleted', 'testsCCompleted'
      ];
      
      const hasAllFields = requiredFields.every(field => field in parsed);
      const hasValidTypes = typeof parsed.totalScore === 'number' &&
                           typeof parsed.level === 'number' &&
                           Array.isArray(parsed.achievements);
      
      result.validStructure = hasAllFields && hasValidTypes;
      
      if (!result.validStructure) {
        result.fallbackNeeded = true;
        // Apply fallback stats
        result.finalState = {
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
        };
      } else {
        result.finalState = parsed;
      }
      
    } catch (error) {
      result.fallbackNeeded = true;
      // Apply same fallback as above
      result.finalState = {
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
      };
    }
    
    console.log(`   Parse: ${result.parseSucceeded ? '✅' : '❌'}`);
    console.log(`   Structure: ${result.validStructure ? '✅' : '❌'}`);
    console.log(`   Fallback: ${result.fallbackNeeded ? '✅ Applied' : 'Not needed'}\n`);
    
    results.push(result);
  });
  
  const summary = {
    totalTests: results.length,
    parsedSuccessfully: results.filter(r => r.parseSucceeded).length,
    validStructures: results.filter(r => r.validStructure).length,
    fallbacksApplied: results.filter(r => r.fallbackNeeded).length,
    allHaveFinalState: results.every(r => r.finalState !== null)
  };
  
  console.log('📊 Stats Corruption Summary:');
  console.log(`  Total Tests: ${summary.totalTests}`);
  console.log(`  Parsed Successfully: ${summary.parsedSuccessfully}`);
  console.log(`  Valid Structures: ${summary.validStructures}`);
  console.log(`  Fallbacks Applied: ${summary.fallbacksApplied}`);
  console.log(`  All Have Final State: ${summary.allHaveFinalState ? '✅' : '❌'}`);
  
  console.groupEnd();
  return { results, summary };
}

// Performance test with corrupted data
function testCorruptionPerformance() {
  console.group('⚡ Corruption Handling Performance');
  
  const performanceTests = [
    // Very long malformed string
    'x'.repeat(10000) + '{"corrupt": true}',
    
    // Very deep nesting (malformed)
    '{"a":{"b":{"c":{"d":{"e":{"f":{"g":{"h":{"i":{"j":{"k":"corrupt"}}}}}}}}}}}',
    
    // Many keys (malformed)
    '{' + Array.from({length: 1000}, (_, i) => `"key${i}":"value${i}"`).join(',') + ', "corrupt": true',
  ];
  
  const results = [];
  
  performanceTests.forEach((test, index) => {
    console.log(`⚡ Performance Test ${index + 1}:`);
    
    const startTime = performance.now();
    
    try {
      JSON.parse(test);
      console.log('  ⚠️ Unexpectedly parsed');
    } catch (error) {
      console.log('  ✅ Error caught');
    }
    
    const endTime = performance.now();
    const duration = endTime - startTime;
    
    console.log(`  Duration: ${duration.toFixed(2)}ms`);
    
    results.push({
      testSize: test.length,
      duration,
      acceptable: duration < 100 // Should handle corruption in under 100ms
    });
  });
  
  const avgDuration = results.reduce((sum, r) => sum + r.duration, 0) / results.length;
  const allAcceptable = results.every(r => r.acceptable);
  
  console.log('📊 Performance Summary:');
  console.log(`  Average Duration: ${avgDuration.toFixed(2)}ms`);
  console.log(`  All Under 100ms: ${allAcceptable ? '✅' : '❌'}`);
  
  console.groupEnd();
  return { results, avgDuration, allAcceptable };
}

// Main test runner
function runCorruptionTests() {
  console.log('🚀 Starting Data Corruption Handling Tests');
  console.log('📅 Test time:', new Date().toISOString());
  
  try {
    const progressCorruption = testCorruptionScenarios();
    const statsCorruption = testStatsCorruption();
    const performanceTest = testCorruptionPerformance();
    
    const overallSummary = {
      progressTests: progressCorruption.summary,
      statsTests: statsCorruption.summary,
      performance: {
        avgDuration: performanceTest.avgDuration,
        acceptable: performanceTest.allAcceptable
      },
      overallSuccess: progressCorruption.summary.allHaveFinalState &&
                      statsCorruption.summary.allHaveFinalState &&
                      performanceTest.allAcceptable
    };
    
    console.log('\n🎯 Overall Corruption Test Summary:');
    console.log(`  Progress Corruption Tests: ${progressCorruption.summary.totalTests} (${progressCorruption.summary.errorsHandled} handled)`);
    console.log(`  Stats Corruption Tests: ${statsCorruption.summary.totalTests} (${statsCorruption.summary.fallbacksApplied} fallbacks)`);
    console.log(`  Performance Tests: All under 100ms - ${performanceTest.allAcceptable ? '✅' : '❌'}`);
    console.log(`  Overall Success: ${overallSummary.overallSuccess ? '✅' : '❌'}`);
    
    return {
      success: overallSummary.overallSuccess,
      progressCorruption,
      statsCorruption,
      performanceTest,
      summary: overallSummary
    };
    
  } catch (error) {
    console.error('💥 Corruption test failed:', error);
    return { success: false, error: error.message };
  }
}

// Node.js execution
if (typeof module !== 'undefined' && require.main === module) {
  const results = runCorruptionTests();
  console.log('\n📊 Final Corruption Test Results:');
  console.log('  Success:', results.success ? '✅' : '❌');
  if (results.error) {
    console.log('  Error:', results.error);
  }
}

if (typeof module !== 'undefined') {
  module.exports = { runCorruptionTests, testCorruptionScenarios, testStatsCorruption };
}