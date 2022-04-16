/**
 * Retrieves the middle-most element(s) of an array.
 * @param {Array} array The array to retrieve from.
 * @returns {Array} Returns the middle-most element(s) of the array.
 * @example
 *
 * _.middle([1, 2, 3])
 * // => [ 2 ]
 *
 * _.middle([1, 2, 3, 4])
 * // => [ 2, 3 ]
 *
 * _.middle([1])
 * // => []
 */
const middle = function(array) {
  const len = array.length;
  if (len < 3) return [];
  
  const idx = len / 2;
  if (len % 2 === 0) return [array[idx - 1], array[idx]];
  
  return [array[Math.floor(idx)]];
};

module.exports = middle;