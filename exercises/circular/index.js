// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
  // initialize two pointing nodes
  let slow = list.getFirst()
  let fast = list.getFirst()

  // until fast.next not null
  while(fast.next && fast.next.next)  {
    slow = slow.next
    fast = fast.next.next

    // if them points to identical node, than there is loop
    if(slow === fast) return true
  }

  // in case there is no loop return false
  return false
}

module.exports = circular;
