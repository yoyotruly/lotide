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