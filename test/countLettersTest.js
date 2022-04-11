// test case
const test1 = countLetters("big dog");
assertEqual(test1["b"], 1);
assertEqual(test1["i"], 1);
assertEqual(test1["g"], 2);
assertEqual(test1["d"], 1);
assertEqual(test1["o"], 1);
assertEqual(test1[" "], undefined);