const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.tail = null;
    this.head = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    // add to head
    // const newNode = new ListNode(value);
    // newNode.next = this.head;
    // this.head = newNode;
    // if (!this.tail) {
    //   this.tail = newNode;
    // }
    // add to tail
    const newNode = new ListNode(value);
    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    // remove tail
    // if (!this.tail) {
    //   return null;
    // }
    // const deletedTail = this.tail;
    // if (this.head === this.tail) {
    //   this.head = null;
    //   this.tail = null;
    //   return deletedTail.value;
    // }
  
    // let currentNode = this.head;
    // while (currentNode.next) {
    //   if (!currentNode.next.next) {
    //     currentNode.next = null;
    //   } else {
    //     currentNode = currentNode.next;
    //   }
    // }
    // this.tail = currentNode;  
    // return deletedTail.value;

    // remove head
    if (!this.head) {
      return null;
    }
  
    const deletedHead = this.head;
    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }
  
    return deletedHead.value;    
  }
}

module.exports = {
  Queue
};
