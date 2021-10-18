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
module.exports = class Queue {



  getUnderlyingList() {
    return this.next;
  }

  enqueue(value) {
    let currentValue = this;

    while (currentValue.next) {
      currentValue = currentValue.next;
    }

    currentValue.next = new ListNode(value);
  }

  dequeue() {
    const currentValue = this.next.value;
    this.next.value = this.next.next.value;
    this.next.next = this.next.next.next;

    return currentValue;
  }

}
