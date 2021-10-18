const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');
 
/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {

  root() {
    if (!this.data) {
      return null;
    }   
    else return this.data;
  }

  add(value) {
    const newNode = new Node(value);

    if (!this.data) {
      this.data = newNode;
      return;
    }    

    let currentNode = this.data;

    while (currentNode) {
      if (newNode.data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      }
      else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  has(value) {
    if (!this.data) {
      return false;
    }
    
    let currentNode = this.data;

    while (currentNode) {
      if (value === currentNode.data) return true;
      if (value < currentNode.data) currentNode = currentNode.left;
      else currentNode = currentNode.right;
    }
    return false;
  }

  find(value) {
    if (!this.data) {
      return null;
    }
    
    let currentNode = this.data;
    while (currentNode) {
      if (value === currentNode.data) return currentNode;
      if (value < currentNode.data) currentNode = currentNode.left;
      else currentNode = currentNode.right;
    }
    return null;
  }

  remove(value) {
    if (!this.data) {
      return null;
    }

    let currentNode = this.find(value);
    if (currentNode) {
      if ((!currentNode.left) && (!currentNode.right)) currentNode.data = null;
      if (!currentNode.left) currentNode.data = currentNode.right;
      if (!currentNode.right) currentNode.data = currentNode.left;
      
      /*let minFromRight = currentNode.right;
      while(minFromRight.left) {
        minFromRight = minFromRight.left;
      }
      currentNode.data = minFromRight.data;
      */
    }

    return currentNode;
  }

  min() {
    if (!this.data) {
      return null;
    }

    let currentNode = this.data;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode.data;

  }

  max() {
    if (!this.data) {
      return null;
    }

    let currentNode = this.data;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }

    return currentNode.data;
  }

}

/*
const BinarySearchTree = require('../src/binary-search-tree.js');

const tree = new BinarySearchTree();
tree.add(9);
tree.add(14);
tree.add(2);
tree.add(6);
tree.add(128);
tree.add(8);
tree.add(31);
tree.add(54);
tree.add(1);
tree.remove(1);
console.log('8', tree.has(8));
console.log('6', tree.has(6));
console.log('1', tree.has(1));
console.log('54', tree.has(54));
console.log('9', tree.has(9));
console.log('31', tree.has(31));
console.log('128', tree.has(128));
console.log('14', tree.has(14));
*/

