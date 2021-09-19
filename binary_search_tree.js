class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BTS {
  constructor(value) {
    this.root = new Node(value);
    this.size = 1;
  }

  insert(value) {
    this.size++;

    const newNode = new Node(value);

    const searchTree = (node) => {
      if (value > node.value) {
        if (node.right) {
          searchTree(node.right);
        } else {
          node.right = newNode;
        }
      } else if (value < node.value) {
        if (node.left) {
          searchTree(node.left);
        } else {
          node.left = newNode;
        }
      }
    }

    searchTree(this.root);
  }

  min() {
    let current = this.root;
    while (current.left) {
      current = current.left;
    }

    return current.value;
  }

  max() {
    let current = this.root;
    while (current.right) {
      current = current.right;
    }

    return current.value;
  }

  contains(value) {
    let current = this.root;

    while (current) {
      if (value === current.value) {
        return true;
      }


      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      }
    }

    return false;
  }

  dfsInOrder() {
    const result = [];

    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }

      result.push(node.value);

      if (node.right) {
        traverse(node.right);
      }
    }

    traverse(this.root);

    return result;
  }

  dfsPreOrder() {
    const result = [];

    const traverse = (node) => {
      result.push(node.value);

      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }
    }

    traverse(this.root);

    return result;
  }

  dfsPostOrder() {
    const result = [];

    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }

      result.push(node.value);
    }

    traverse(this.root);

    return result;
  }

  bfs() {
    const result = [];
    const queue = [];

    queue.push(this.root);

    while (queue.length) {
      let current = queue.shift();

      result.push(current.value);

      if (current.left) {
        queue.push(current.left);
      }

      if (current.right) {
        queue.push(current.right);
      }
    }

    return result;
  }
}

//    15
//  3    36
// 2 12 28 39
const node = new BTS(15);
node.insert(3);
node.insert(36);
node.insert(2);
node.insert(12);
node.insert(28);
node.insert(39);

console.log(node.bfs());
