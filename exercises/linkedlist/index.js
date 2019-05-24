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
}

module.exports = { Node, LinkedList };
