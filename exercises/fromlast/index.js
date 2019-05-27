// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
    // initialize two pointing nodes
    let slow = list.getFirst()
    let fast = list.getFirst()

    // set fast to position from slow to n
    while (n > 0) {
      fast = fast.next
      n--
    }

    // iterate untill end of list
    while (fast.next) {
      slow = slow.next
      fast = fast.next
    }

    // return slow node

    return slow
}

module.exports = fromLast;
