const without = function(sourceArr, itemsToRemoveArr) {
  let outputArr = [];

  for (const item of sourceArr) {
    if (!itemsToRemoveArr.includes(item)) {
      outputArr.push(item);
    }
  }

  return outputArr;
};

module.exports = without;