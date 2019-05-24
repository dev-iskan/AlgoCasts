// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor (data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor (head = null) {
    this.head = null
  }

  insertFirst (data) {
    // assign next to head either null || old node
    const newNode = new Node(data, this.head)

    // assign new head to new node itself
    this.head = newNode
  }

  size () {
    // initialize counter and iteratable node
    let counter = 0
    let node = this.head

    // loop until null
    while (node) {
      counter++

      // iterate to next node
      node = node.next
    }

    return counter
  }

  getFirst () {
    return this.head
  }

  getLast () {
    if(!this.head) {
      return null
    }
    // loop to last item
    let node = this.head
    while(node) {
      //if next of node is null, than its last node
      if (!node.next) {
        return node
      }

      node = node.next
    }
  }
}

module.exports = { Node, LinkedList };
