class Node {
    constructor(data) {
        this.data = data;
        this.right = null;
        this.left = null;
    }
}
class searchTree {
    constructor() {
        this.head = null;
    }
    addNode(val) {
        let temp = this.head;
        let node = new Node(val);
        if (this.head === null) {
            return this.head = node;
        }
        else {
            let search = function (temp) {
                if (val < temp.data) {
                    if (temp.left === null) {
                        return (temp.left = node);
                    }
                    else {
                        return search(temp.left);
                    }
                }
                else {
                    if (val > temp.data) {
                        if (temp.right === null) {
                            return (temp.right = node);
                        }
                        else {
                            return search(temp.right);
                        }
                    }
                    else {
                        return null;
                    }
                }
            }
            search(temp);
        }
    }

}
let bst = new searchTree();
bst.addNode(15);
bst.addNode(25);
bst.addNode(10);
bst.addNode(7);
bst.addNode(22);
bst.addNode(17);
bst.addNode(13);
bst.addNode(5);
bst.addNode(9);
bst.addNode(27);
console.log(bst);

