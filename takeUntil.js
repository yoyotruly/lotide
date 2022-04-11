const takeUntil = function(array, callback) {
  // const index = array.findIndex(callback);
  // return array.slice(0, index);

  const result = [];
  for (const element of array) {
    if (callback(element)) {
      break;
    } else {
      result.push(element);
    }
  }
  return result;
};

module.exports = takeUntil;