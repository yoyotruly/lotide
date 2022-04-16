const eqArrays = require("./eqArrays");

/**
 * Takes in two objects and returns true or false based on a perfect match.
 * @param {Object} object1 The first object to compare
 * @param {Object} object2 The second object to compare
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 * @example
 *
 * const ab = { a: "1", b: "2" };
 * const ba = { b: "2", a: "1" };
 * _.eqObjects(ab, ba);
 * // => true
 *
 * const cd = { c: "1", d: ["2", 3] };
 * const dc = { d: ["2", 3], c: "1" };
 * _.eqObjects(cd, dc);
 * // => true
 *
 * const cd = { c: "1", d: ["2", 3] };
 * const cd2 = { c: "1", d: ["2", 3, 4] };
 * _.eqObjects(cd, cd2);
 * // => false
 */
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1).sort();
  const keys2 = Object.keys(object2).sort();

  if (!eqArrays(keys1, keys2)) return false;
  
  return keys1.every(key => {
    const value1 = object1[key];
    const value2 = object2[key];

    return Array.isArray(value1) && Array.isArray(value2) ?
      eqArrays(value1, value2) :
      value1 === value2;
  });
};

module.exports = eqObjects;