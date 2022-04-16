/**
 * Takes in two arrays and returns true or false based on a perfect match.
 * @param {Array} array1 The first array to compare
 * @param {Array} array2 The second array to compare
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 * @example
 *  * eqArrays([1, 2], [1, 2])
 * // => true
 *
 *  * eq([1, 2], [1, "2"])
 * // => false
 *
 *  * eqArrays([], [])
 * // => true
 */
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;
  if (!array1.length && !array2.length) return true;
  
  return array1.every((val, index) => val === array2[index]);
};

module.exports = eqArrays;