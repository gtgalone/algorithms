class Queue {
  constructor() {
    this.storage = {};
    this.head = this.tail = 0;
  }

  enqueue(value) {
    this.storage[this.tail] = value;
    this.tail++;
    return value;
  }

  dequeue() {
    if (this.tail === 0) {
      return null;
    }

    const result = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return result;
  }
}

const queue = new Queue();
queue.enqueue('hello');
queue.enqueue('world');
queue.enqueue('bye');

queue.dequeue();

console.log(queue);
