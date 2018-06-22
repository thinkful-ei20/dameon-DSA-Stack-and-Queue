'use strict';

class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}
 
class Stack {
  constructor() {
    this.top = null;
  }
  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    const node = new _Node(data, this.top);
    this.top = node;
  }  
}
////////////////////----------------------------------------------------------------
class Node {
  constructor(value) {
    this.value=value,
    this.next=null,
    this.prev=null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      node.next = this.last;
      this.last.prev = node;
    }
    this.last = node;
  }
  dequeue() {
    if (this.first === null) {
      return;
    }

    const node = this.first;
    this.first = node.prev;

    if (node === this.last) {
      this.last = null;
    }

    return node.value;
  }
}
let q = new Queue();
q.enqueue('Tauhida');
q.enqueue('Joe');
q.enqueue('Tim');
display(q);

console.log(q.dequeue());
display(q);
q.enqueue('Alison');
q.enqueue('Chris');
console.log(q.dequeue());
display(q);