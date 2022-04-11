const countLetters = function(sentence) {
  const results = {};

  for (const letter of sentence) {
    if (letter !== " ") {
      results[letter] ? results[letter] += 1 : results[letter] = 1;
    }
  }

  return results;
};

module.exports = countLetters;