const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function(sentence) {
  const results = {};

  for (const letter of sentence) {
    if (letter !== " ") {
      results[letter] ? results[letter] += 1 : results[letter] = 1;
    }
  }

  return results;
};


// test case
const test1 = countLetters("big dog");
assertEqual(test1["b"], 1);
assertEqual(test1["i"], 1);
assertEqual(test1["g"], 2);
assertEqual(test1["d"], 1);
assertEqual(test1["o"], 1);
assertEqual(test1[" "], undefined);