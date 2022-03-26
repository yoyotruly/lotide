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


const flatten = function(arr) {
  let outputArr = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      for (const value of item) {
        outputArr.push(value);
      }
    } else {
      outputArr.push(item);
    }
  }
  
  return outputArr;
};


// test case
assertArraysEqual(flatten([1, 2, ["a", "b"], 3, ["Harry", "Potter", "7"]]), [1, 2, "a", "b", 3, "Harry", "Potter", "7"]);