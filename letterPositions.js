/**
 * Returns all the indices in a string where each character is found.
 * @param {string} string The string to look through.
 * @returns {Object} Returns an object with each character as key and its indices as values.
 * @example
 *
 * _.letterPositions("aba a")
 * => { a: [ 0, 2, 4 ], b: [ 1 ] }
 */
const letterPositions = function(string) {
  const result = {};
  for (let i = 0; i < string.length; i++) {
    const letter = string[i];
    if (letter !== " ") {
      result[letter] ? result[letter].push(i) : result[letter] = [i];
    }
  }
  
  return result;
};

module.exports = letterPositions;