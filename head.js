/**
 * Retrieves the first element from the array.
 * @param {Array} array - The array to query.
 * @returns {*} Returns the first element of `array`.
 * @example
 *
 * _.head([1, 2, 3]);
 * // => 1
 *
 * _.head([]);
 * // => undefined
 */
const head = function(arr) {
  return arr[0];
};

module.exports = head;