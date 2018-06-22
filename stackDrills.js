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

  pop(data=this.top) {
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
//peek(starTrek);
starTrek.pop('McKoy');
//peek(starTrek);
//display(starTrek);




function is_palindrome(s) {
  let newStack = new Stack();
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '').split('');
  
  s.map(x=> newStack.push(x));
  for(let i = 0; i < s.length; i+=1){
    let value = s.pop();
    if(s[i] !== value ){
      return false;
    }
    return true;
  }
  //console.log(newStack); 
}

// true, true, true
console.log(is_palindrome('dad'));
console.log(is_palindrome('A man, a plan, a canal: Panama'));
console.log(is_palindrome('1001'));
console.log(is_palindrome('Tauhida'));