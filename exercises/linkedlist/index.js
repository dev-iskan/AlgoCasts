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

  insertLast (data) {
    const last = this.getLast()

    if (last) {
      // if last exists
      last.next = new Node(data)
    } else {
      // if list is empty
      this.head = new Node(data)
    }
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


  getAt (index) {
    let counter = 0
    let node = this.head

    while(node) {
      if (counter === index) {
        return node
      }

      counter++
      node = node.next
    }
    // in case head null or counter is more than size of list return null
    return null
  }

  removeAt (index) {
    // if list is empty
    if(!this.head) {
      return
    }

    // remove first node
    if(index === 0) {
      this.head = this.head.next
      return
    }

    // get node before deleted
    const previous = this.getAt(index - 1)
    // edge cases when index out of boundary
    if(!previous || !previous.next) {
      return
    }
    previous.next = previous.next.next
  }

  insertAt (data, index) {
    // insert if list empty
    if(!this.head) {
      this.head = new Node(data)
      return
    }

    // if has first element
    if (index === 0) {
      this.head = new Node(data, this.head)
      return
    }

    // if not empty and if out of boundaries just insert in the end
    const previous = this.getAt(index - 1) || this.getLast()
    const node = new Node(data, previous.next)
    previous.next = node
  }

  forEach(fn) {
    // get function as param
    let node = this.head;
    let counter = 0;

    // iterate through nodes using while
    while (node) {
      // apply function on node
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  // iterator with generator
  *[Symbol.iterator]() {
    let node = this.head
    while(node) {
      yield node
      node = node.next
    }
  }

}

module.exports = { Node, LinkedList };
