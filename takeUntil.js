/**
 * Returns a slice of the given array with elements taken from the beginning.
 * Elements are taken until the callback returns a truthy value.
 * @param {Array} array The input array
 * @param {Function} callback The function to invoke on every element
 * @returns {Array} Returns a slice of the array from the beginning until the element where the callback returns truthy.
 * @example
 *
 * _.takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0)
 * // => [ 1, 2, 5, 7, 2 ]
 */
const takeUntil = function(array, callback) {
  const index = array.findIndex(callback);

  return array.slice(0, index);
};

module.exports = takeUntil;