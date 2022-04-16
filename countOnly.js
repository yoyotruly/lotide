/**
 * Given an array and an object, returns an object containing counts of everything that an input object listed.
 * @param {Array} allItems The array of strings to look through
 * @param {Object} itemsToCount The object specifying what to count
 * @returns {Object} An object containing counts of everything that the input object listed
 * @example
 *
 * _.countOnly(["a", "b", "c", "b"], { a: true, b: true, c: false, d: true });
 * // => { a: 1, b: 2 }
 */
const countOnly = function(allItems, itemsToCount) {
  const result = {};
  
  for (const item of allItems) {
    if (itemsToCount[item]) {
      result[item] ? result[item] += 1 : result[item] = 1;
    }
  }
  
  return result;
};

module.exports = countOnly;