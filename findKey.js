/**
 * Given an object and a callback function, returns the first key for which the callback returns a truthy value.
 * If no match is found, returns undefined.
 * @param {Object} object The object to inspect.
 * @param {Function} callback The function invoked per iteration.
 * @returns {string|undefined} Returns the key of the matched element. If no match is found, returns `undefined`.
 * @example
 *
 * const ratings = {
 *    "Blue Hill": { stars: 1 },
 *    "Akaleri":   { stars: 3 },
 *    "noma":      { stars: 1 },
 *    "elBulli":   { stars: 3 },
 *    "Ora":       { stars: 2 },
 *    "Akelarre":  { stars: 3 }
 *  };
 *
 * _.findKey(ratings, x => x.stars === 1)
 * // => "Blue Hill"
 */
const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) return key;
  }
};

module.exports = findKey;
