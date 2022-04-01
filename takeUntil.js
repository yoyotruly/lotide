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


const takeUntil = function(array, callback) {
  // const index = array.findIndex(callback);
  // return array.slice(0, index);

  const result = [];
  for (const element of array) {
    if (callback(element)) {
      break;
    } else {
      result.push(element);
    }
  }
  return result;
};


// test cases
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood"]);