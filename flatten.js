const flatten = function(arr) {
  let outputArr = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      for (const value of item) {
        outputArr.push(value);
      }
    } else {
      outputArr.push(item);
    }
  }
  
  return outputArr;
};

module.exports = flatten;