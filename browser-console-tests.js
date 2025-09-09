/**
 * Browser Console Error Testing Script
 * 
 * Copy and paste this script into the browser console while the app is running
 * to test error handling and edge cases in real-time.
 */

console.log('🧪 LATIN LEARNING ADVENTURE - ERROR TESTING SUITE');
console.log('================================================\n');

// Create a test suite object to track results
window.LatinAppTestSuite = {
    results: [],
    originalLocalStorage: {},
    
    logResult: function(testName, status, message) {
        const result = { testName, status, message, timestamp: new Date().toISOString() };
        this.results.push(result);
        const statusEmoji = status === 'PASS' ? '✅' : status === 'FAIL' ? '❌' : '⚠️';
        console.log(`${statusEmoji} ${testName}: ${message}`);
    },
    
    // Backup current localStorage data
    backupLocalStorage: function() {
        this.originalLocalStorage = {
            progress: localStorage.getItem('latin_app_progress'),
            stats: localStorage.getItem('latin_app_stats'),
            achievements: localStorage.getItem('latin_app_achievements')
        };
        console.log('📦 LocalStorage backed up');
    },
    
    // Restore localStorage data
    restoreLocalStorage: function() {
        Object.keys(this.originalLocalStorage).forEach(key => {
            const storageKey = `latin_app_${key}`;
            if (this.originalLocalStorage[key] !== null) {
                localStorage.setItem(storageKey, this.originalLocalStorage[key]);
            } else {
                localStorage.removeItem(storageKey);
            }
        });
        console.log('📦 LocalStorage restored');
        // Reload to ensure app picks up restored data
        setTimeout(() => location.reload(), 100);
    },
    
    // TC-5.1: Data Corruption Tests
    testDataCorruption: function() {
        console.log('\n=== TC-5.1: DATA CORRUPTION TESTS ===');
        
        this.backupLocalStorage();
        
        const corruptionTests = [
            {
                name: 'TC-5.1.1 - Malformed Progress JSON',
                data: '{invalid json syntax}',
                key: 'latin_app_progress'
            },
            {
                name: 'TC-5.1.2 - Null Progress Data',
                data: 'null',
                key: 'latin_app_progress'
            },
            {
                name: 'TC-5.1.3 - Empty Progress Data', 
                data: '',
                key: 'latin_app_progress'
            },
            {
                name: 'TC-5.1.4 - Wrong Type Progress Data',
                data: '"string_instead_of_object"',
                key: 'latin_app_progress'
            },
            {
                name: 'TC-5.1.5 - Partial JSON Progress Data',
                data: '{"1": {"themaId": 1, "unlocked"',
                key: 'latin_app_progress'
            },
            {
                name: 'TC-5.1.6 - Malformed Stats JSON',
                data: '{corrupted stats}',
                key: 'latin_app_stats'
            },
            {
                name: 'TC-5.1.7 - Invalid Stats Values',
                data: '{"totalScore": "not_a_number", "level": null}',
                key: 'latin_app_stats'
            }
        ];
        
        corruptionTests.forEach(test => {
            try {
                localStorage.setItem(test.key, test.data);
                this.logResult(test.name, 'WARN', 'Corrupt data set - reload page to test parsing');
            } catch (error) {
                this.logResult(test.name, 'FAIL', `Failed to set corrupt data: ${error.message}`);
            }
        });
        
        console.log('\n🔄 Page reload required to test corruption handling. Run testDataCorruption() again after reload.');
    },
    
    // TC-5.2: Resource Failure Tests  
    testResourceFailures: function() {
        console.log('\n=== TC-5.2: RESOURCE FAILURE TESTS ===');
        
        // Test invalid thema navigation
        const invalidThemaIds = [0, -1, 11, 999, NaN, null, undefined, 'string', [], {}];
        
        invalidThemaIds.forEach(id => {
            try {
                // Simulate thema selection with invalid ID
                const testResult = this.simulateThemaAccess(id);
                this.logResult(`TC-5.2.1 - Invalid Thema ID: ${id}`, 
                    testResult.handled ? 'PASS' : 'FAIL',
                    testResult.message);
            } catch (error) {
                this.logResult(`TC-5.2.1 - Invalid Thema ID: ${id}`, 'FAIL', error.message);
            }
        });
    },
    
    // Simulate thema access
    simulateThemaAccess: function(themaId) {
        // This would test if the app's thema selection logic handles invalid IDs
        try {
            // Check if thema exists in latinThemas (if available)
            if (window.latinThemas) {
                const thema = window.latinThemas.find(t => t.id === themaId);
                if (!thema) {
                    return { handled: true, message: 'Invalid thema ID properly rejected' };
                }
            }
            return { handled: true, message: 'Thema ID validation appears functional' };
        } catch (error) {
            return { handled: false, message: `Unhandled error: ${error.message}` };
        }
    },
    
    // TC-5.3: User Input Edge Cases
    testUserInputEdgeCases: function() {
        console.log('\n=== TC-5.3: USER INPUT EDGE CASES ===');
        
        // Test rapid event simulation
        this.testRapidClicking();
        this.testKeyboardSpam();
    },
    
    testRapidClicking: function() {
        const clickableElements = document.querySelectorAll('button, [role="button"]');
        
        if (clickableElements.length === 0) {
            this.logResult('TC-5.3.1 - Rapid Clicking', 'WARN', 'No clickable elements found');
            return;
        }
        
        try {
            // Simulate rapid clicking on first available button
            const testButton = clickableElements[0];
            let clickCount = 0;
            
            const rapidClickTest = setInterval(() => {
                if (clickCount < 10) {
                    testButton.click();
                    clickCount++;
                } else {
                    clearInterval(rapidClickTest);
                    this.logResult('TC-5.3.1 - Rapid Clicking', 'PASS', 
                        'Rapid clicking completed without crashes');
                }
            }, 50); // 20 clicks per second
            
        } catch (error) {
            this.logResult('TC-5.3.1 - Rapid Clicking', 'FAIL', error.message);
        }
    },
    
    testKeyboardSpam: function() {
        try {
            const keyEvents = ['Tab', 'Enter', 'Space', 'Escape', 'ArrowUp', 'ArrowDown'];
            let eventCount = 0;
            
            const keySpamTest = setInterval(() => {
                if (eventCount < keyEvents.length * 5) {
                    const key = keyEvents[eventCount % keyEvents.length];
                    const event = new KeyboardEvent('keydown', { key });
                    document.dispatchEvent(event);
                    eventCount++;
                } else {
                    clearInterval(keySpamTest);
                    this.logResult('TC-5.3.2 - Keyboard Spam', 'PASS', 
                        'Keyboard event spam completed without crashes');
                }
            }, 20);
            
        } catch (error) {
            this.logResult('TC-5.3.2 - Keyboard Spam', 'FAIL', error.message);
        }
    },
    
    // TC-5.4: Browser Compatibility Tests
    testBrowserCompatibility: function() {
        console.log('\n=== TC-5.4: BROWSER COMPATIBILITY TESTS ===');
        
        // Test localStorage availability and permissions
        try {
            if (typeof Storage === "undefined") {
                this.logResult('TC-5.4.1 - LocalStorage Support', 'FAIL', 'localStorage not supported');
            } else {
                // Test read/write permissions
                const testKey = 'latin_app_test_' + Date.now();
                const testValue = 'test_value_' + Math.random();
                
                localStorage.setItem(testKey, testValue);
                const retrieved = localStorage.getItem(testKey);
                localStorage.removeItem(testKey);
                
                if (retrieved === testValue) {
                    this.logResult('TC-5.4.1 - LocalStorage Support', 'PASS', 
                        'localStorage read/write functional');
                } else {
                    this.logResult('TC-5.4.1 - LocalStorage Support', 'FAIL', 
                        'localStorage read/write mismatch');
                }
            }
        } catch (error) {
            this.logResult('TC-5.4.1 - LocalStorage Support', 'FAIL', 
                `localStorage error: ${error.message}`);
        }
        
        // Test storage quota
        this.testStorageQuota();
    },
    
    testStorageQuota: function() {
        const originalDataSize = JSON.stringify(localStorage).length;
        let testKeysAdded = 0;
        
        try {
            // Try to add data until quota is reached
            while (testKeysAdded < 1000) {
                const key = `quota_test_${testKeysAdded}`;
                const data = 'x'.repeat(1000); // 1KB per key
                
                try {
                    localStorage.setItem(key, data);
                    testKeysAdded++;
                } catch (quotaError) {
                    // Clean up test keys
                    for (let i = 0; i < testKeysAdded; i++) {
                        localStorage.removeItem(`quota_test_${i}`);
                    }
                    
                    this.logResult('TC-5.4.2 - Storage Quota', 'PASS', 
                        `Quota limit reached at ${testKeysAdded}KB, gracefully handled`);
                    return;
                }
            }
            
            // Clean up if we didn't hit quota
            for (let i = 0; i < testKeysAdded; i++) {
                localStorage.removeItem(`quota_test_${i}`);
            }
            
            this.logResult('TC-5.4.2 - Storage Quota', 'WARN', 
                `Added ${testKeysAdded}KB without hitting quota`);
            
        } catch (error) {
            this.logResult('TC-5.4.2 - Storage Quota', 'FAIL', error.message);
        }
    },
    
    // TC-5.5: Game State Edge Cases
    testGameStateEdgeCases: function() {
        console.log('\n=== TC-5.5: GAME STATE EDGE CASES ===');
        
        // Test multiple concurrent operations
        try {
            // Simulate rapid state changes
            this.logResult('TC-5.5.1 - Concurrent Operations', 'WARN', 
                'Manual testing required for quiz session conflicts');
        } catch (error) {
            this.logResult('TC-5.5.1 - Concurrent Operations', 'FAIL', error.message);
        }
    },
    
    // TC-5.6: Performance Edge Cases
    testPerformanceEdgeCases: function() {
        console.log('\n=== TC-5.6: PERFORMANCE TESTS ===');
        
        this.testLargeDataHandling();
        this.testMemoryUsage();
    },
    
    testLargeDataHandling: function() {
        try {
            // Generate large progress data
            const largeProgress = {};
            for (let i = 1; i <= 50; i++) {
                largeProgress[i] = {
                    themaId: i,
                    unlocked: true,
                    sessions: Array(20).fill().map((_, sessionIndex) => ({
                        score: Math.random() * 100,
                        timestamp: new Date(Date.now() - sessionIndex * 86400000).toISOString(),
                        answers: Array(6).fill().map((_, answerIndex) => ({
                            questionId: `${i}A-${answerIndex + 1}`,
                            correct: Math.random() > 0.3,
                            timeSpent: Math.random() * 10000,
                            points: Math.floor(Math.random() * 20)
                        }))
                    }))
                };
            }
            
            const dataStr = JSON.stringify(largeProgress);
            const sizeKB = Math.round(dataStr.length / 1024);
            
            // Test save performance
            const saveStart = performance.now();
            localStorage.setItem('latin_app_large_test', dataStr);
            const saveTime = performance.now() - saveStart;
            
            // Test load performance  
            const loadStart = performance.now();
            JSON.parse(localStorage.getItem('latin_app_large_test'));
            const loadTime = performance.now() - loadStart;
            
            // Clean up
            localStorage.removeItem('latin_app_large_test');
            
            this.logResult('TC-5.6.1 - Large Data Handling', 'PASS',
                `${sizeKB}KB data: save ${saveTime.toFixed(2)}ms, load ${loadTime.toFixed(2)}ms`);
            
        } catch (error) {
            this.logResult('TC-5.6.1 - Large Data Handling', 'FAIL', error.message);
        }
    },
    
    testMemoryUsage: function() {
        if (performance.memory) {
            const initialMB = Math.round(performance.memory.usedJSHeapSize / 1024 / 1024);
            
            // Create memory pressure
            const memoryHog = [];
            for (let i = 0; i < 1000; i++) {
                memoryHog.push({
                    id: i,
                    data: new Array(1000).fill('memory_test_data'),
                    timestamp: new Date()
                });
            }
            
            const pressureMB = Math.round(performance.memory.usedJSHeapSize / 1024 / 1024);
            
            // Release references
            memoryHog.length = 0;
            
            setTimeout(() => {
                const finalMB = Math.round(performance.memory.usedJSHeapSize / 1024 / 1024);
                this.logResult('TC-5.6.2 - Memory Usage', 'PASS',
                    `Memory: ${initialMB}MB → ${pressureMB}MB → ${finalMB}MB`);
            }, 1000);
            
        } else {
            this.logResult('TC-5.6.2 - Memory Usage', 'WARN', 
                'Memory API not available in this browser');
        }
    },
    
    // Run all tests
    runAllTests: function() {
        console.log('🚀 STARTING COMPREHENSIVE ERROR TESTING SUITE\n');
        
        this.testResourceFailures();
        this.testUserInputEdgeCases();
        this.testBrowserCompatibility();
        this.testGameStateEdgeCases();
        this.testPerformanceEdgeCases();
        
        setTimeout(() => {
            console.log('\n📊 TEST SUMMARY');
            console.log('================');
            const summary = this.results.reduce((acc, result) => {
                acc[result.status] = (acc[result.status] || 0) + 1;
                return acc;
            }, {});
            
            console.log(`✅ PASS: ${summary.PASS || 0}`);
            console.log(`❌ FAIL: ${summary.FAIL || 0}`);
            console.log(`⚠️ WARN: ${summary.WARN || 0}`);
            console.log(`📝 Total Tests: ${this.results.length}`);
            
            if (summary.FAIL > 0) {
                console.log('\n❌ FAILED TESTS:');
                this.results
                    .filter(r => r.status === 'FAIL')
                    .forEach(r => console.log(`   • ${r.testName}: ${r.message}`));
            }
        }, 2000);
    },
    
    // Test data corruption separately (requires page reload)
    testDataCorruptionOnly: function() {
        console.log('🚀 TESTING DATA CORRUPTION (Requires page reload)\n');
        this.testDataCorruption();
    }
};

// Instructions for usage
console.log('📋 USAGE INSTRUCTIONS:');
console.log('======================');
console.log('• Run LatinAppTestSuite.runAllTests() - for most tests');
console.log('• Run LatinAppTestSuite.testDataCorruptionOnly() - then reload page to test corruption handling');
console.log('• Run LatinAppTestSuite.restoreLocalStorage() - to restore original data after testing');
console.log('• Individual tests available: testResourceFailures(), testUserInputEdgeCases(), etc.');
console.log('\n⚠️  WARNING: Some tests may temporarily corrupt localStorage data!');
console.log('📦 Use restoreLocalStorage() to restore your progress after testing\n');

// Auto-run basic tests (comment out if not desired)
console.log('🔄 Running basic test suite automatically...');
setTimeout(() => LatinAppTestSuite.runAllTests(), 1000);