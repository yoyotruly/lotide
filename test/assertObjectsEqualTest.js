const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;

  const failMsg = `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  const passMsg = `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;

  eqObjects(actual, expected) ? console.log(passMsg) : console.log(failMsg);
};