const sum = require('./app')

test("Test 1. Add 24 + 7 equal 31.", () => {
    expect (sum(24,7)).toBe(31);
});