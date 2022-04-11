const eqArrays = require("./eqArrays");


const eqObjects = function(obj1, obj2) {
  const keys1 = Object.keys(obj1).sort();
  const keys2 = Object.keys(obj2).sort();

  if (!eqArrays(keys1, keys2)) return false;
  
  return keys1.every(key => {
    const val1 = obj1[key];
    const val2 = obj2[key];

    return Array.isArray(val1) && Array.isArray(val2) ?
      eqArrays(val1, val2) :
      val1 === val2;
  });
};

module.exports = eqObjects;