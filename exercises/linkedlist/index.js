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

  clear () {
    this.head = null
  }

  removeFirst () {
    // if linked list empty return null
    if(!this.head) {
      return null
    }

    // just assign first node's next to head of linked list
    this.head = this.head.next
  }

  removeLast () {
    // if linked list empty return null
    if(!this.head) {
      return null
    }

    // if there is only one node
    if(!this.head.next) {
      this.head = null
      return
    }

    // initialize previous to head and node to head.next variables
    let previous = this.head
    let node = this.head.next

    // iterate till the last element until node.next
    while (node.next) {
      previous = node
      node = node.next
    }

    // remove last element
    previous.next = null
  }
}

module.exports = { Node, LinkedList };
