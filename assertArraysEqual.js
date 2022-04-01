const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  if (!arr1.length && !arr2.length) return true;
  
  let isEqual = false;
  for (let i = 0; i < arr1.length; i++) {
    isEqual = (arr1[i] === arr2[i]);
  }

  return isEqual;
};


const assertArraysEqual = function(actual, expected) {
  const failMsg = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  const passMsg = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;

  eqArrays(actual, expected) ? console.log(passMsg) : console.log(failMsg);
};