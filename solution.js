// DO NOT REMOVE THIS
const { nums, words } = require("./data/data.js");

class Node {
  constructor (data) {
      this.data = data
      this.next = null
  }
}
class LinkedList {
  constructor () {
      this.head = null
  }
// INSERT_requirement 1 of lab -done
  insert (data) {
      let newNode = new Node (data)
      if (!this.head) {
          this.head = newNode
      } else {
          newNode.next = this.head
          this.head = newNode
      }
  }
// SIZE_requirement 2 of lab-done
  size() {
      let count = 0;
      let node = this.head;
      while (node) {
        count++;
        node = node.next;
      }
      return count;

  }
// DELETE_requirement 3 of lab- ck w Ahmad
  delete(data) { //data may
      let node = this.head;
      let counter = 0;
      while (node.data !== data && node.next) {
      counter++;
      node = node.next;
      }
      let foundNode = node;
      node = this.head;
      for (let i = 1; i < counter; i++) {
      node = node.next;
      }
      node.next = foundNode.next;

// GETFIRST_requirement 4 of lab-done
}
  getFirst() {
      return this.head;
    }

// GETLAST_requirement 5 of lab-done

  getLast() {
    let node = this.head;
// if (!this.head) return null;
    while (node.next) {
      node = node.next;
    }
    return node;
    }

// SEARCH_requirement 6 of lab-done
    // }
search(key) {
  let node = this.head;
  while (node !== null && node.data !== key) {
    node = node.next;
  }
  return node;
}
clear() {
    this.head = null;

// GETKTH_requirement 7 of lab ck w Ahmad
}
getKth (k) {
  let count = 1;
  let node = this.head;
  while (node && count !== k) {
    count++;
    node = node.next;
  }
  return node;
// let currentNode = this.head
// for (let i = 2; i < k; i++) {
//     if (currentNode.next) {
//         currentNode = currentNode.next
//     } else {
//         return undefined
//     }
// }
// return currentNode.next
}

// works w getkth lab ck-done
getLength () {
  let count = 0
  let currentNode = this.head
  while (currentNode) {
      count++
      currentNode = currentNode.next
  }
  return count

// GETKTH TO LAST_requirement 8 of lab  
// Johns answer did not work
// }
//  getKthFromLast (k) {
//       return this.getKth(this.getLength() - k - 1)
//   }

}
// works w getkth lab ck-done w ahmad
getKthToLast(k) {
  let node = this.head;
  let order = 1;
  let size = this.size();
  while (node) {
    if (order === size - k) {
    return node;
    }
    order++;
    node = node.next;
  }
}

// ISEMPTY_requirement 9 of lab
isEmpty() {
  return !this.head;
}

// CLEAR_requirement 10 of lab
clear() {
  this.head = null;
}
// toArrayconvert_requirement 11 of lab-done

toArray() {
  let node = this.head;
  let arr = [];
  while (node) {
    arr.push(node.data);
    node = node.next;
  }
  return arr;

}
containsDuplicates() {
  const uniqueArr = [];
  let node = this.head;
  while (node) {
    if (uniqueArr.includes(node.data)) {
      return true;
    }
    uniqueArr.push(node.data);
    node = node.next;
  }
  return false;
  }
}

// DO NOT REMOVE THIS
module.exports = {
Node,
LinkedList,
};
