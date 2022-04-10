const assertEqual = require("../assertEqual");
const tail = require("../tail");

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

// Test Case 2
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

//Test Case 3
const test3 = tail([]);
assertEqual(test3.length, 0);

//Test Case 4
const test4 = tail([1]);
assertEqual(test4.length, 0);