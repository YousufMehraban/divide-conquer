//** Constraints: Time Complexity: O(log N) */

function sortedFrequency(arr, num) {
  let firstNumIdx;
  let lastNumIdx;
  if (arr[0] === num && arr[arr.length - 1] === num) {
    firstNumIdx = 0;
    lastNumIdx = arr.length - 1;
    return lastNumIdx - firstNumIdx + 1;
  } else if (num > arr[arr.length - 1]) {
    return -1;
  }

  firstNumIdx = findFirstItem(arr, num);
  lastNumIdx = findLastItem(arr, num);

  return lastNumIdx - firstNumIdx + 1;
}

function findFirstItem(arr, num) {
  let lowIdx = 0;
  let highIdx = arr.length - 1;
  let firstNumIdx;

  while (lowIdx <= highIdx) {
    let middleIdx = Math.floor((lowIdx + highIdx) / 2);
    let middleVal = arr[middleIdx];

    if (middleVal > num) {
      highIdx = middleIdx - 1;
      continue;
    } else if (middleVal < num) {
      lowIdx = middleIdx + 1;
      continue;
    }
    if (middleVal === num) {
      if (arr[middleIdx - 1] !== num) {
        firstNumIdx = middleIdx;
        break;
      } else {
        highIdx = middleIdx - 1;
        continue;
      }
    }
  }
  return firstNumIdx;
}

function findLastItem(arr, num) {
  let lowIdx = 0;
  let highIdx = arr.length - 1;
  let lastNumIdx;

  while (lowIdx <= highIdx) {
    let middleIdx = Math.floor((lowIdx + highIdx) / 2);
    let middleVal = arr[middleIdx];

    if (middleVal > num) {
      highIdx = middleIdx - 1;
      continue;
    } else if (middleVal < num) {
      lowIdx = middleIdx + 1;
      continue;
    }
    if (middleVal === num) {
      if (arr[middleIdx + 1] !== num) {
        lastNumIdx = middleIdx;
        break;
      } else {
        lowIdx = middleIdx + 1;
        continue;
      }
    }
  }
  return lastNumIdx;
}

module.exports = sortedFrequency;
