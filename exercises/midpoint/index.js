// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
  // initialize two pointing nodes
  let slow = list.getFirst()
  let fast = list.getFirst()

  // until there is advanced nodes in front of fast continue iterating 
  while(fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next
  }

  // if iteration finishes, it means slow defenitally points to midpoint
  return slow
}

module.exports = midpoint;
