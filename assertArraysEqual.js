const assertArraysEqual = function(arr1, arr2) {
  const failMsg = `🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`;
  const passMsg = `✅✅✅ Assertion Passed: ${arr1} === ${arr2}`;

  if (arr1.length !== arr2.length) return console.log(failMsg);
  if (!arr1.length && !arr2.length) return console.log(passMsg);
  
  let isEqual = false;
  for (let i = 0; i < arr1.length; i++) {
    isEqual = (arr1[i] === arr2[i]);
  }
  isEqual ? console.log(passMsg) : console.log(failMsg);
};


assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
assertArraysEqual([], []);