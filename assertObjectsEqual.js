const eqObjects = require("./eqObjects");

/**
 * Tests for equality between two objects and prints out a colorful message to inform if the assertion passes or fails.
 * @param {Object} actual The actual object
 * @param {Object} expected The expected object
 * @returns {undefined} undefined. Success or failure message is printed out to console.
 * @example
 *
 * _.assertObjectsEqual({name: "john", surname: "smith"}, {name: "john", surname: "smith"});
 * // console prints "✅✅✅ Assertion Passed: { name: 'john', surname: 'smith' } === { name: 'john', surname: 'smith' }"
 *
 * _.assertObjectsEqual({name: "john", surname: "smith"}, {name: "jane"});
 * // console prints "🛑🛑🛑 Assertion Failed: { name: 'john', surname: 'smith' } !== { name: 'jane' }"
 */
const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;

  const failMsg = `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  const passMsg = `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;

  eqObjects(actual, expected) ? console.log(passMsg) : console.log(failMsg);
};

module.exports = assertObjectsEqual;