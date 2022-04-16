/**
 * Given a string, returns an object containing counts of each of the letters in that string.
 * @param {string} string The string to count from
 * @returns {Object} an object containing counts of each letter in that string
 * @example
 *
 * _.countLetters("big dog");
 * // => { b: 1, i: 1, g: 2, d: 1, o: 1 }
 */
const countLetters = function(string) {
  const result = {};

  for (const letter of string) {
    if (letter !== " ") {
      result[letter] ? result[letter] += 1 : result[letter] = 1;
    }
  }

  return result;
};

module.exports = countLetters;