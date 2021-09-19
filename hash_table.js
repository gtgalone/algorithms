const hash = (key, size) => {
  let hashedKey = 0;

  for (let i = 0; i < key.length; i++) {
    hashedKey += key.charCodeAt(i);
  }

  return hashedKey % size;
}

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(this.size);

    for (let i = 0; i < this.size; i++) {
      this.buckets[i] = new Map();
    }
  }

  insert(key, value) {
    const index = hash(key, this.size);
    this.buckets[index].set(key, value);
  }

  remove(key) {
    const index = hash(key, this.size);
    const deleted = this.buckets[index].get(key);
    this.buckets[index].delete(key);
    return deleted;
  }

  search(key) {
    const index = hash(key, this.size);
    return this.buckets[index].get(key);
  }
}

const hashTable = new HashTable(3);
hashTable.insert('hello', 'world');
hashTable.insert('word', 'hello');
hashTable.insert('bye', 'bye');
hashTable.insert('good', 'morning');

hashTable.remove('hello');

console.log(hashTable.search('word'));
