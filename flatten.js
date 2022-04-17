/**
 * Flattens a nested array into a single-level array.
 * @param {Array} array - The input array.
 * @returns {Array} Returns a new array with all sub-array elements concatenated into it.
 * @example
 *
 * _.flatten([1, [[2, [3]]], 4], 5]);
 * // => [ 1, 2, 3, 4, 5 ]
 */
const flatten = (array) => {
  const result = [];
  for (const item of array) {
    if (Array.isArray(item)) {
      result.push(...flatten(item));
    } else {
      result.push(item);
    }
  }

  return result;
};

module.exports = flatten;