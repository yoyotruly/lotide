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


const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1).sort();
  const keys2 = Object.keys(object2).sort();

  if (!eqArrays(keys1, keys2)) return false;
  
  return keys1.every(key => object1[key] === object2[key]);
};


// test cases
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3"};
const abc2 = { a: "1", b: "3", c: "3"};

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(abc, abc2), false);
