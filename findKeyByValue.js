/**
 * Given an object and a value, returns the first key which contains the given value.
 * Returns undefined if no key with that value is found.
 * @param {Object} object The object to inspect.
 * @param {*} value The value to search for within the object's values.
 * @returns {string|undefined} Returns the first key which contains `value`. If no match is found, returns `undefined`.
 * @example
 *
 * const bestTVShowsByGenre = {
 *   scifi: "The Expanse",
 *   comedy: "Brooklyn Nine-Nine",
 *   drama:  "The Wire"
 * };
 *
 * _.findKeyByValue(bestTVShowsByGenre, "The Wire")
 * => "drama"
 *
 * * _.findKeyByValue(bestTVShowsByGenre, "Bob's Burger")
 * => undefined
 */
const findKeyByValue = function(object, value) {
  for (const key in object) {
    if (object[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;