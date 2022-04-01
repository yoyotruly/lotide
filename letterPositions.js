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


const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (letter !== " ") {
      results[letter] ? results[letter].push(i) : results[letter] = [i];
    }
  }
  
  return results;
};


// test case
const test1 = letterPositions("big dog");

assertArraysEqual(test1["b"], [0]);
assertArraysEqual(test1["i"], [1]);
assertArraysEqual(test1["g"], [2, 6]);
assertArraysEqual(test1["d"], [4]);
assertArraysEqual(test1["o"], [5]);