/**
 * Returns a subset of an array with unwanted elements removed.
 * @param {Array} array The input array
 * @param {Array} itemsToRemove The item to remove from the input array
 * @returns {Array} Returns a slice of the array with items removed
 * @example
 *
 * _.without([1, 2, 3], [2, 4])
 * // => [ 1, 3 ]
 */
const without = function(array, itemsToRemove) {
  return array.filter(item => !itemsToRemove.includes(item));
};

module.exports = without;