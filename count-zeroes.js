let fiveZeros = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
let sevenZeros = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0];
let tenZeros = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let noZero = [1, 1, 1, 1, 1, 10, 11, 12, 20, 30, 50];
let ones = [1, 1, 1, 1, 1];
let zeros = [0, 0, 0, 0, 0];

//** Constraints => time complexity O(log n) */
function countZeroes(arr) {
  let lowIdx = 0;
  let highIdx = arr.length - 1;
  let firstZero;

  while (lowIdx <= highIdx) {
    let middleIdx = Math.floor((lowIdx + highIdx) / 2);
    let firstVal = arr[0];
    let lastVal = arr[arr.length - 1];
    let middleVal = arr[middleIdx];
    let nextVal = arr[middleIdx + 1];
    let previousVal = arr[middleIdx - 1];

    if (firstVal === 0) {
      firstZero = 0;
      break;
    }
    if (firstVal === 1 && lastVal === 1) {
      return 0;
    }
    if (middleVal === 1) {
      if (nextVal === 0) {
        firstZero = middleIdx + 1;
        break;
      } else {
        lowIdx = middleIdx + 1;
        continue;
      }
    } else if (middleVal === 0) {
      if (previousVal === 1) {
        firstZero = middleIdx;
        break;
      } else {
        highIdx = middleIdx - 1;
        continue;
      }
    }
    return 0;
  }
  return arr.length - firstZero;
}
module.exports = countZeroes;
