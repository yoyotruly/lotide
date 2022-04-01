const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  if (!arr1.length && !arr2.length) return true;
  
  return arr1.every((val, index) => val === arr2[index]);
};


const assertArraysEqual = function(actual, expected) {
  const failMsg = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  const passMsg = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;

  eqArrays(actual, expected) ? console.log(passMsg) : console.log(failMsg);
};