// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  // init array with root and stop character
  const arr = [root, 's']
  // init widths array
  const widths = [0]

  // iterate untill array consists only stop character
  while (arr.length > 1) {
    const node = arr.shift()

    // if poped node is stop character push new counter to widths and push stop char again to arr
    if (node === 's') {
      widths.push(0)
      arr.push('s')
    } else {
      // else push children and increment counter on the level
      arr.push(...node.children)
      widths[widths.length - 1]++
    }
  }

  return widths
}

module.exports = levelWidth;
