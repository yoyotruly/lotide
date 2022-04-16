/**
 * Retrieves every element except the first element (head) of the array.
 * @param {Array} array The array to retrieve from.
 * @returns {Array} Returns a slice of the array. Returns an empty array if `array` is empty or only has one element.
 * @example
 *
 * _.tail([1, 2, 3])
 * // => [2, 3]
 *
 * _.tail([1])
 * // => []
 */
const tail = function(array) {
  return array.slice(1);
};

module.exports = tail;