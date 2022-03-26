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


const middle = function(arr) {
  let outputArr = [];
  const len = arr.length;
  
  if (len < 3) return outputArr;
  
  const idx = len / 2;
  len % 2 === 0 ?
    outputArr.push(arr[idx - 1], arr[idx]) :
    outputArr.push(arr[Math.floor(idx)]);
  
  return outputArr;
};


// test cases
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);