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
  
  let isEqual = false;
  for (let i = 0; i < arr1.length; i++) {
    isEqual = (arr1[i] === arr2[i]);
  }

  return isEqual;
};


const assertArraysEqual = function(arr1, arr2) {
  const failMsg = `🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`;
  const passMsg = `✅✅✅ Assertion Passed: ${arr1} === ${arr2}`;

  eqArrays(arr1, arr2) ? console.log(passMsg) : console.log(failMsg);
};


const without = function(sourceArr, itemsToRemoveArr) {
  let outputArr = [];

  for (const item of sourceArr) {
    if (!itemsToRemoveArr.includes(item)) {
      outputArr.push(item);
    }
  }

  return outputArr;
};


// test case 1
const testArr1 = [1, 2, 3];
const testResult1 = without(testArr1, [1, 2]);
assertArraysEqual(testResult1, [3]);
assertArraysEqual(testArr1, [1, 2, 3]);

// test case 2
const testArr2 = ["Harry", "Potter", 3];
const testResult2 = without(testArr2, ["Potter", 2]);
assertArraysEqual(testResult2, ["Harry", 3]);
assertArraysEqual(testArr2, ["Harry", "Potter", 3]);