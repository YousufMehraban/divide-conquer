//** Constraints => time complexity O(log n) */

function findFloor(arr, num) {
  let lowIdx = 0;
  let highIdx = arr.length - 1;
  let floor;

  if (arr[arr.length - 1] < num) {
    return arr[arr.length - 1];
  }
  if (arr.length < 1 || (arr[0] !== 0 && num === 0)) {
    return -1;
  }

  while (lowIdx <= highIdx) {
    let middleIdx = Math.floor((lowIdx + highIdx) / 2);

    if (arr[middleIdx] === num) {
      return arr[middleIdx];
    }

    if (arr[middleIdx] > num) {
      if (arr[middleIdx - 1] === num || arr[middleIdx - 1] < num) {
        return arr[middleIdx - 1];
      } else {
        highIdx = middleIdx - 1;
        continue;
      }
    } else if (arr[middleIdx] < num) {
      if (arr[middleIdx + 1] === num) {
        return arr[middleIdx + 1];
      } else if (arr[middleIdx + 1] > num) {
        return arr[middleIdx];
      } else {
        lowIdx = middleIdx + 1;
        continue;
      }
    }
    return -1;
  }
  return floor;
}

module.exports = findFloor;
