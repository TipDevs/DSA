class LinkedList {
  constructor() {
    this.list = null;
  }
  append(value) {
    // adds new node containing value to the end of the list
    const newNode = new Node();
    newNode.value = value;
    if (this.list === null) {
      this.list = newNode;
    } else {
      fillNextNode(this.list);
    }
    function fillNextNode(node) {
      if (node.nextNode === null) {
        node.nextNode = newNode;
        return;
      }
      fillNextNode(node.nextNode);
    }
  }
  prepend(value) {
    // adds new node containing value to the start of the list
    const newNode = new Node();
    newNode.value = value;
    const listDuplicate = this.list;
    this.list = newNode;
    this.list.nextNode = listDuplicate;
  }
  size() {
    // returns the number of nodes in the list
    function countList(list) {
      let listSize = 0;
      if (list === null) {
        return listSize;
      }
      listSize += 1;
      if (list.nextNode === null) {
        return listSize;
      }
      listSize += countList(list.nextNode);
      return listSize;
    }
    return countList(this.list);
  }
  head() {
    // returns the first node in the list
    return this.list;
  }
  tail() {
    // returns the last node in the list
    if (this.list === null) {
      throw new Error("List is empty");
    } else {
      return getLastNode(this.list);
    }
    function getLastNode(list) {
      if (list.nextNode === null) {
        return list;
      }
      return getLastNode(list.nextNode);
    }
  }
  at(index) {
    // returns the node at the given index
    let nodeIndex = 0;
    if (this.list === null) {
      throw new Error("List is empty");
    } else {
      if (index === nodeIndex) {
        return this.list;
      } else {
        return nodeAtIndex(this.list);
      }
      function nodeAtIndex(node) {
        nodeIndex++;
        if (node.nextNode !== null && index === nodeIndex) {
          return node.nextNode;
        } else if (node.nextNode === null) {
          return `Node not found at index: ${index}`;
        }
        return nodeAtIndex(node.nextNode);
      }
    }
  }
  pop() {
    // removes the last element from the list
  }
  contains(value) {
    // returns true if the passed in value is in the list and otherwise return false
  }
  find(value) {
    // returns the index of the node containing value, or null if not found
  }
  toString() {
    // represents the LinkedList objects as strings
  }
}

class Node {
  constructor() {
    this.value = null;
    this.nextNode = null;
  }
}

export { LinkedList };
