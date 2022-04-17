/**
 * Returns a new array based on the results of the callback function on every element of the given array.
 * @param {Array} array The input array.
 * @param {Function} callback The function to invoke on every element of the array.
 * @returns {Array} Returns a new array, each element is calculated from calling the `callback` function.
 * @example
 *
 * _.map([1, 2, 3], x => x * 2)
 * // => [ 2, 4, 6 ]
 */
const map = function(array, callback) {
  const result = [];
  for (const element of array) {
    result.push(callback(element));
  }

  return result;
};

module.exports = map;