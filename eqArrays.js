const assertEqual = require("./assertEqual");

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  if (!arr1.length && !arr2.length) return true;
  
  return arr1.every((val, index) => val === arr2[index]);
};

module.exports = eqArrays;