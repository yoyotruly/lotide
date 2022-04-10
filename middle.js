const middle = function(arr) {
  let outputArr = [];
  const len = arr.length;
  
  if (len < 3) return outputArr;
  
  const idx = len / 2;
  len % 2 === 0 ?
    outputArr.push(arr[idx - 1], arr[idx]) :
    outputArr.push(arr[Math.floor(idx)]);
  
  return outputArr;
};

module.exports = middle;