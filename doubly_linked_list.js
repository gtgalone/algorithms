class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev || null;
    this.next = next || null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = this.tail = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.tail === null) {
      return this.head = this.tail = newNode;
    }

    const prev = this.tail;
    this.tail = newNode;
    prev.next = this.tail;
    this.tail.prev = prev;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      return this.head = this.tail = newNode;
    }

    const next = this.head;
    this.head = newNode;
    next.prev = this.head;
    this.head.next = next;
  }

  deleteHead() {
    if (!this.head) {
      return null;
    }

    if (this.head === this.tail) {
      return this.head = this.tail = null;
    }

    this.head = this.head.next;
    this.head.prev = null;
  }

  deleteTail() {
    if (!this.tail) {
      return null;
    }

    if (this.tail === this.head) {
      return this.tail = this.head = null;
    }

    this.tail = this.tail.prev;
    this.tail.next = null;
  }

  search(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }

    return false;
  }
}

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.prepend(0);
doublyLinkedList.prepend(1);
doublyLinkedList.prepend(2);
doublyLinkedList.prepend(3);

console.log(doublyLinkedList.search(6));
