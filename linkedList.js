class LinkedList {
  constructor() {
    this.list = null;
    this.tailNode = null;
  }
  append(value) {
    // adds new node containing value to the end of the list
    const newNode = new Node();
    newNode.value = value;
    if (this.list === null) {
      this.list = newNode;
      this.tailNode = newNode;
    } else {
      this.tailNode.nextNode = newNode;
      this.tailNode = newNode;
    }
  }
  prepend(value) {
    // adds new node containing value to the start of the list
    const newNode = new Node();
    newNode.value = value;
    newNode.nextNode = this.list;
    this.list = newNode;
  }
  size() {
    // returns the number of nodes in the list
    let listSize = 0;
    let current = this.list;
    while (current !== null) {
      listSize++;
      current = current.nextNode;
    }
    return listSize;
  }
  head() {
    // returns the first node in the list
    if (this.list === null) {
      throw new Error("List is empty");
    }
    return this.list;
  }
  tail() {
    // returns the last node in the list
    if (this.list === null) {
      throw new Error("List is empty");
    }
    return this.tailNode;
  }
  at(index) {
    // returns the node at the given index
    if (this.list === null) {
      throw new Error("List is empty");
    } else {
      let current = this.list;
      let nodeIndex = 0;
      while (current !== null) {
        if (index === nodeIndex) return current;
        nodeIndex++;
        current = current.nextNode;
      }
    }
    return `${index} exceeded node indexes`;
  }
  pop() {
    // removes the last element from the list
    if (this.list === null) {
      throw new Error("List is empty");
    }
    if (this.list.nextNode === null) {
      this.list = null;
      return;
    } else {
      let current = this.list;
      while (current.nextNode.nextNode !== null) {
        current = current.nextNode;
      }
      current.nextNode = null;
    }
  }
  contains(value) {
    // returns true if the passed in value is in the list and otherwise return false
    let current = this.list;
    while (current !== null) {
      if (current.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }
  find(value) {
    // returns the index of the node containing value, or null if not found
    let nodeIndex = 0;
    if (this.list === null) {
      throw new Error("List is empty");
    }
    let current = this.list;
    while (current !== null) {
      if (current.value === value) {
        return nodeIndex;
      }
      nodeIndex++;
      current = current.nextNode;
    }
    return null;
  }
  toString() {
    // represents the LinkedList objects as strings
    let stringObject;
    if (this.list === null) {
      stringObject = "( null )";
    }
    if (this.list !== null) {
      stringObject = `( ${this.list.value} ) -> `;
    }
    let current = this.list;
    while (current.nextNode !== null) {
      stringObject += `( ${current.nextNode.value} ) -> `;
      if (current.nextNode.nextNode === null) {
        stringObject += "( null )";
      }
      current = current.nextNode;
    }
    return stringObject;
  }
}

class Node {
  constructor() {
    this.value = null;
    this.nextNode = null;
  }
}

export { LinkedList };
