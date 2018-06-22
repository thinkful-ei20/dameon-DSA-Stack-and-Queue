'use strict';


class _Node {
  constructor(data,next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top =null;
  }

  pop(data) {
    let node = this.top;
    while(node.data !== data){
      node = node.next;      
    }
    this.top = node.next;
    return node.data;
  }

  push(data) {
    if(this.top === null) {
      this.top = new _Node(data,null);
      return this.top;
    }
    const node = new _Node(data,this.top);
    this.top = node;
  }

}

let display = (stack) => {
  let node = stack.top;
  while(node !== null){
    console.log(node);
    node = node.next;
  }
};

let peek = (stack) => {
  console.log(stack.top);
};

let starTrek = new Stack();
starTrek.push('Kirk');
//display(starTrek);
starTrek.push('Spock');
//console.log(starTrek);
starTrek.push('McKoy');
//console.log(starTrek);
//starTrek.pop('McKoy');
//console.log(starTrek);
starTrek.push('Scotty');
//console.log(starTrek);
//display(starTrek);
peek(starTrek);
starTrek.pop('McKoy');
peek(starTrek);
display(starTrek);




