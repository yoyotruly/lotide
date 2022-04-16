/**
 * Tests for equality between two values of primitive types and prints out a colorful message to inform
 * if the assertion passes or fails.
 * @param {*} actual The actual value
 * @param {*} expected The expected value
 * @returns {undefined} undefined. Success or failure message is printed out to console.
 * @example
 *
 * _.assertEqual(1.2, 1.2);
 * // console prints "✅✅✅ Assertion Passed: 1.2 === 1.2"
 *
 * _.assertEqual(true, false);
 * // console prints "🛑🛑🛑 Assertion Failed: true !== false"
 */
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;