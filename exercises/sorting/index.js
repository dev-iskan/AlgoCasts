// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  // iterate through array
  for (let i = 0; i < arr.length; i++) {
    // iterate through each chunk of array
    for (let j =0; j < (arr.length - i - 1); j++) {
      // if previous var in arr more than next swap it
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
  }
  return arr
}

function selectionSort(arr) {
  // first iteration
  for (let i = 0; i < arr.length; i++) {
    // assign default indexOfMin to i
    let indexOfMin = i

    // iterate through rest arr, and if there is elem less than indexOfMin assign indexOfMin to j
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) indexOfMin = j
    }

    // if indexOfMin not equal to i swap them
    if (indexOfMin !== i) {
      [arr[indexOfMin], arr[i]] = [arr[i], arr[indexOfMin]]
    }
  }

  return arr
}

// method to split array for sorting 
function mergeSort(arr) {
  // recursion stop case
  if (arr.length === 1) {
    return arr
  }

  // find center and splice to left and right to contain two els in each
  const center = Math.floor(arr.length / 2)
  const left = arr.slice(0, center)
  const right = arr.slice(center)

  // merge into one array spliced arrays and splice if required
  return merge(mergeSort(left), mergeSort(right))
}

// method to combine splitted arrays into sorted one
function merge(left, right) {
  const results = []

  // until left and right exists
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift())
    } else {
      results.push(right.shift())
    }
  }

  // combine all data in correct
  return [...results, ...left, ...right]
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
