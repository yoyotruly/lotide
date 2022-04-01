const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  if (!arr1.length && !arr2.length) return true;
  
  return arr1.every((val, index) => val === arr2[index]);
};


const eqObjects = function(obj1, obj2) {
  const keys1 = Object.keys(obj1).sort();
  const keys2 = Object.keys(obj2).sort();

  if (!eqArrays(keys1, keys2)) return false;
  
  return keys1.every(key => {
    const val1 = obj1[key];
    const val2 = obj2[key];

    return Array.isArray(val1) && Array.isArray(val2) ?
      eqArrays(val1, val2) :
      val1 === val2;
  });
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;

  const failMsg = `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  const passMsg = `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;

  eqObjects(actual, expected) ? console.log(passMsg) : console.log(failMsg);
};