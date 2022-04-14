const eqArrays = require("./eqArrays");


const assertArraysEqual = function(actual, expected) {
  const failMsg = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  const passMsg = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;

  eqArrays(actual, expected) ? console.log(passMsg) : console.log(failMsg);
};

module.exports = assertArraysEqual;