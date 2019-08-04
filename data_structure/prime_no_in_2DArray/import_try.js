//const checkUtil = require('./prime_ds')

class Node {
    constructor(data) {
        this.data = data;
        this.right = null;
        this.left = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.head = null;
    }
    addNode(val) {
        let node = new Node(val);
        if (this.head === null) {
            return this.head = node;
        }
        let temp = this.head;
        let search = function (temp) {
            if (val < temp.data) {
                if (temp.left === null) {
                    return temp.left = node;
                }
                else {
                    return search(temp.left);
                }
            }
            if (val > temp.data) {
               if(temp.right===null){
                  return temp.right=node;
               }
               else{
                   return search(temp.right);
               }
            }
        }
        search(temp);
    }
}
let bst = new BinarySearchTree();
bst.addNode(25);
bst.addNode(12);
bst.addNode(17);
bst.addNode(63);
bst.addNode(45);
bst.addNode(76);
bst.addNode(37);
bst.addNode(98);
console.log(bst);