// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let outputArr = [];

  // for (let i = 0; i < array.length; i++) {
  //   if(!outputArr[outputArr.length - 1] || outputArr[outputArr.length - 1].length == size) {
  //     outputArr.push([array[i]]);
  //   }
  //   else {
  //     outputArr[outputArr.length - 1].push(array[i])
  //   }
  // }

  let index = 0;

  while (index < array.length) {
    outputArr.push(array.slice(index, index + size));
    index += size;
  }

  return outputArr;
}

module.exports = chunk;
