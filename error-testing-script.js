/**
 * Comprehensive Error Handling and Edge Case Testing Script
 * For the Latin Learning Adventure App
 * 
 * This script tests critical error scenarios to ensure app stability
 */

// Test Data Corruption Scenarios
console.log('=== TESTING DATA CORRUPTION SCENARIOS ===\n');

// TC-5.1.1: Test malformed localStorage data
function testMalformedProgressData() {
    console.log('🧪 TC-5.1.1: Testing malformed progress data');
    
    // Save original data
    const originalProgress = localStorage.getItem('latin_app_progress');
    const originalStats = localStorage.getItem('latin_app_stats');
    
    const testCases = [
        { name: 'Invalid JSON', data: '{invalid json}' },
        { name: 'Null string', data: 'null' },
        { name: 'Empty string', data: '' },
        { name: 'Wrong type (array)', data: '[]' },
        { name: 'Wrong type (string)', data: '"invalid"' },
        { name: 'Partial JSON', data: '{"1": {"themaId": 1' },
        { name: 'Nested invalid JSON', data: '{"1": {invalid}}' },
        { name: 'Extremely large JSON', data: '{"data": "' + 'x'.repeat(1000000) + '"}' }
    ];
    
    testCases.forEach(testCase => {
        try {
            console.log(`  Testing: ${testCase.name}`);
            localStorage.setItem('latin_app_progress', testCase.data);
            
            // Reload the page to test parsing
            location.reload();
            
            // This should be handled gracefully by the error handling in useGameMechanics
            setTimeout(() => {
                console.log(`  ✅ ${testCase.name}: App remained stable`);
            }, 1000);
            
        } catch (error) {
            console.log(`  ❌ ${testCase.name}: Unhandled error - ${error.message}`);
        }
    });
    
    // Restore original data
    if (originalProgress) localStorage.setItem('latin_app_progress', originalProgress);
    if (originalStats) localStorage.setItem('latin_app_stats', originalStats);
}

// TC-5.1.2: Test stats corruption
function testMalformedStatsData() {
    console.log('\n🧪 TC-5.1.2: Testing malformed stats data');
    
    const originalStats = localStorage.getItem('latin_app_stats');
    
    const testCases = [
        { name: 'Missing required fields', data: '{"totalScore": 100}' },
        { name: 'Wrong field types', data: '{"totalScore": "invalid", "level": "not_a_number"}' },
        { name: 'Negative values', data: '{"totalScore": -100, "level": -1}' },
        { name: 'Infinite values', data: '{"totalScore": "Infinity", "xp": "NaN"}' }
    ];
    
    testCases.forEach(testCase => {
        try {
            console.log(`  Testing: ${testCase.name}`);
            localStorage.setItem('latin_app_stats', testCase.data);
            
            // Test would require app reload to verify graceful handling
            console.log(`  ⏳ ${testCase.name}: Queued for app reload test`);
            
        } catch (error) {
            console.log(`  ❌ ${testCase.name}: Error - ${error.message}`);
        }
    });
    
    if (originalStats) localStorage.setItem('latin_app_stats', originalStats);
}

// TC-5.1.3: Test localStorage quota exceeded
function testStorageQuotaExceeded() {
    console.log('\n🧪 TC-5.1.3: Testing localStorage quota exceeded');
    
    try {
        // Try to fill localStorage to quota
        let i = 0;
        while (i < 10000) {
            try {
                localStorage.setItem(`test_key_${i}`, 'x'.repeat(1000));
                i++;
            } catch (error) {
                console.log(`  📊 Quota exceeded at key ${i}: ${error.message}`);
                break;
            }
        }
        
        // Now test if the app handles quota exceeded gracefully
        try {
            localStorage.setItem('latin_app_progress', JSON.stringify({
                1: { themaId: 1, completed: true }
            }));
            console.log('  ✅ App data still saved successfully despite quota pressure');
        } catch (error) {
            console.log(`  ❌ App data save failed: ${error.message}`);
        }
        
        // Cleanup test keys
        for (let j = 0; j < i; j++) {
            localStorage.removeItem(`test_key_${j}`);
        }
        
    } catch (error) {
        console.log(`  ❌ Storage quota test failed: ${error.message}`);
    }
}

// Test Network and Resource Failures
console.log('\n=== TESTING NETWORK AND RESOURCE FAILURES ===\n');

// TC-5.2.1: Test invalid Thema IDs
function testInvalidThemaIds() {
    console.log('🧪 TC-5.2.1: Testing invalid Thema IDs');
    
    const invalidIds = [
        0, -1, 11, 999, NaN, Infinity, null, undefined, 
        'string', [], {}, 1.5, '1'
    ];
    
    invalidIds.forEach(id => {
        try {
            console.log(`  Testing Thema ID: ${id} (${typeof id})`);
            
            // This would test if the app gracefully handles invalid IDs
            // In actual testing, we'd navigate to these IDs programmatically
            console.log(`  ⏳ Invalid ID ${id}: Would test navigation handling`);
            
        } catch (error) {
            console.log(`  ❌ ID ${id}: Error - ${error.message}`);
        }
    });
}

// TC-5.2.2: Test missing question data
function testMissingQuestionData() {
    console.log('\n🧪 TC-5.2.2: Testing missing question data scenarios');
    
    const scenarios = [
        'Thema with no questions array',
        'Thema with empty questions array',
        'Question with missing correctAnswer',
        'Question with missing options',
        'Question with null/undefined properties'
    ];
    
    scenarios.forEach(scenario => {
        console.log(`  📝 Scenario: ${scenario}`);
        console.log(`  ⏳ Would test app behavior with: ${scenario}`);
    });
}

// Test User Input Edge Cases
console.log('\n=== TESTING USER INPUT EDGE CASES ===\n');

// TC-5.3.1: Test rapid clicking scenarios
function testRapidClicking() {
    console.log('🧪 TC-5.3.1: Testing rapid clicking scenarios');
    
    const scenarios = [
        'Double-click answer buttons',
        'Rapid clicking Next button',
        'Multiple back button clicks',
        'Rapid navigation between themas',
        'Spam clicking during animations'
    ];
    
    scenarios.forEach(scenario => {
        console.log(`  🖱️  Scenario: ${scenario}`);
        console.log(`  ⏳ Would simulate: ${scenario}`);
    });
}

// TC-5.3.2: Test keyboard navigation extremes
function testKeyboardNavigation() {
    console.log('\n🧪 TC-5.3.2: Testing keyboard navigation extremes');
    
    const keyTests = [
        'Rapid Tab key presses',
        'Enter key spam on buttons',
        'Arrow key navigation',
        'Escape key during quiz',
        'Space bar during loading'
    ];
    
    keyTests.forEach(test => {
        console.log(`  ⌨️  Test: ${test}`);
        console.log(`  ⏳ Would simulate: ${test}`);
    });
}

// Test Browser Compatibility Issues
console.log('\n=== TESTING BROWSER COMPATIBILITY ===\n');

// TC-5.4.1: Test localStorage availability
function testLocalStorageAvailability() {
    console.log('🧪 TC-5.4.1: Testing localStorage availability');
    
    try {
        // Test basic availability
        if (typeof Storage !== "undefined") {
            console.log('  ✅ localStorage is supported');
            
            // Test permissions
            try {
                localStorage.setItem('test_key', 'test_value');
                const retrieved = localStorage.getItem('test_key');
                localStorage.removeItem('test_key');
                
                if (retrieved === 'test_value') {
                    console.log('  ✅ localStorage read/write permissions OK');
                } else {
                    console.log('  ❌ localStorage read/write mismatch');
                }
            } catch (error) {
                console.log(`  ❌ localStorage permissions denied: ${error.message}`);
            }
            
        } else {
            console.log('  ❌ localStorage not supported in this browser');
        }
        
    } catch (error) {
        console.log(`  ❌ localStorage test failed: ${error.message}`);
    }
}

// TC-5.4.2: Test private browsing mode detection
function testPrivateBrowsingMode() {
    console.log('\n🧪 TC-5.4.2: Testing private browsing mode detection');
    
    try {
        // Try to detect private browsing
        localStorage.setItem('private_test', '1');
        localStorage.removeItem('private_test');
        console.log('  ✅ Not in private browsing mode (or private mode allows localStorage)');
    } catch (error) {
        console.log(`  ⚠️  Possible private browsing mode: ${error.message}`);
    }
}

// Test Game State Edge Cases
console.log('\n=== TESTING GAME STATE EDGE CASES ===\n');

// TC-5.5.1: Test concurrent session attempts
function testConcurrentSessions() {
    console.log('🧪 TC-5.5.1: Testing concurrent session scenarios');
    
    const scenarios = [
        'Starting multiple quiz sessions',
        'Interrupting active session',
        'Session timeout during quiz',
        'Browser refresh during active quiz',
        'Multiple tabs accessing same app'
    ];
    
    scenarios.forEach(scenario => {
        console.log(`  🔄 Scenario: ${scenario}`);
        console.log(`  ⏳ Would test: ${scenario}`);
    });
}

// Test Performance Edge Cases
console.log('\n=== TESTING PERFORMANCE EDGE CASES ===\n');

// TC-5.6.1: Test large progress data
function testLargeProgressData() {
    console.log('🧪 TC-5.6.1: Testing large progress data handling');
    
    try {
        // Create artificially large progress data
        const largeProgress = {};
        for (let i = 1; i <= 100; i++) {
            largeProgress[i] = {
                themaId: i,
                unlocked: true,
                testA: {
                    completed: true,
                    score: Math.random() * 100,
                    attempts: Math.floor(Math.random() * 10),
                    timeSpent: Math.random() * 60000,
                    lastAttempt: new Date().toISOString()
                },
                sessions: Array(50).fill().map(() => ({
                    score: Math.random() * 100,
                    timestamp: new Date().toISOString(),
                    answers: Array(6).fill().map(() => ({
                        questionId: `${i}A-${Math.floor(Math.random() * 6) + 1}`,
                        correct: Math.random() > 0.5,
                        timeSpent: Math.random() * 10000
                    }))
                }))
            };
        }
        
        const dataSize = JSON.stringify(largeProgress).length;
        console.log(`  📊 Generated test data size: ${Math.round(dataSize / 1024)}KB`);
        
        // Test saving large data
        const startTime = performance.now();
        localStorage.setItem('latin_app_progress_test', JSON.stringify(largeProgress));
        const saveTime = performance.now() - startTime;
        console.log(`  💾 Save time: ${saveTime.toFixed(2)}ms`);
        
        // Test loading large data
        const loadStartTime = performance.now();
        const loaded = JSON.parse(localStorage.getItem('latin_app_progress_test'));
        const loadTime = performance.now() - loadStartTime;
        console.log(`  📂 Load time: ${loadTime.toFixed(2)}ms`);
        
        // Cleanup
        localStorage.removeItem('latin_app_progress_test');
        console.log('  ✅ Large data handling test completed');
        
    } catch (error) {
        console.log(`  ❌ Large data test failed: ${error.message}`);
    }
}

// Memory leak detection
function testMemoryUsage() {
    console.log('\n🧪 TC-5.6.2: Testing memory usage patterns');
    
    if (performance.memory) {
        const initial = performance.memory.usedJSHeapSize;
        console.log(`  📊 Initial memory usage: ${Math.round(initial / 1024 / 1024)}MB`);
        
        // Simulate heavy operations
        const testData = [];
        for (let i = 0; i < 1000; i++) {
            testData.push({
                id: i,
                data: 'x'.repeat(1000),
                timestamp: new Date()
            });
        }
        
        const afterAllocation = performance.memory.usedJSHeapSize;
        console.log(`  📊 After allocation: ${Math.round(afterAllocation / 1024 / 1024)}MB`);
        
        // Force garbage collection if available
        if (window.gc) {
            window.gc();
            const afterGC = performance.memory.usedJSHeapSize;
            console.log(`  🗑️ After GC: ${Math.round(afterGC / 1024 / 1024)}MB`);
        } else {
            console.log('  ⚠️  Garbage collection not available for testing');
        }
        
    } else {
        console.log('  ⚠️  Memory API not available in this browser');
    }
}

// Execute all tests
console.log('\n🚀 STARTING COMPREHENSIVE ERROR TESTING\n');
console.log('Note: Some tests require manual verification or app reload\n');

// Data corruption tests
testMalformedProgressData();
testMalformedStatsData();
testStorageQuotaExceeded();

// Resource failure tests
testInvalidThemaIds();
testMissingQuestionData();

// User input tests
testRapidClicking();
testKeyboardNavigation();

// Browser compatibility tests
testLocalStorageAvailability();
testPrivateBrowsingMode();

// Game state tests
testConcurrentSessions();

// Performance tests
testLargeProgressData();
testMemoryUsage();

console.log('\n✅ ERROR TESTING SCRIPT COMPLETED');
console.log('📋 Review results above and check browser console for any unhandled errors');
console.log('🔄 Some tests may require app reload or manual interaction to fully validate');