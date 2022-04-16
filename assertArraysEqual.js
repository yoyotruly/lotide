const eqArrays = require("./eqArrays");

/**
 * Tests for equality between two arrays and prints out a colorful message to inform if the assertion passes or fails.
 * @param {Array} actual The actual array
 * @param {Array} expected The expected array
 * @returns {undefined} undefined. Success or failure message is printed out to console.
 * @example
 *
 * _.assertArraysEqual([1, 2], [1, 2]);
 * // console prints "✅✅✅ Assertion Passed: 1,2 === 1,2"
 *
 * _.assertArraysEqual([1, 2], ["hello", "world"]);
 * // console prints "🛑🛑🛑 Assertion Failed: 1,2 !== hello,world"
 */
const assertArraysEqual = function(actual, expected) {
  const failMsg = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  const passMsg = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;

  eqArrays(actual, expected) ? console.log(passMsg) : console.log(failMsg);
};

module.exports = assertArraysEqual;