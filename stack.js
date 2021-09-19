class Stack {
  constructor() {
    this.size = 0;
    this.storage = {};
  }

  push(value) {
    this.size++;
    this.storage[this.size] = value;
    return value;
  }

  pop() {
    const result = this.storage[this.size];
    delete this.storage[this.size];
    this.size--;
    return result;
  }

  peek() {
    return this.storage[this.size];
  }
}

const stack = new Stack();

stack.push('hello');
stack.push('world');
stack.push('bye');
stack.push('thank');
stack.push('you');

console.log(stack);
console.log(stack.pop());
console.log(stack.peek());
console.log(stack);
