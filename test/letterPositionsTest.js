// test case
const test1 = letterPositions("big dog");

assertArraysEqual(test1["b"], [0]);
assertArraysEqual(test1["i"], [1]);
assertArraysEqual(test1["g"], [2, 6]);
assertArraysEqual(test1["d"], [4]);
assertArraysEqual(test1["o"], [5]);