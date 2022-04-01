const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  if (!arr1.length && !arr2.length) return true;
  
  return arr1.every((val, index) => val === arr2[index]);
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