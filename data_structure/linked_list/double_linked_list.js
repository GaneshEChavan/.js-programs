class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
class doubleLL {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    addNode(val) {
        let node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        }
        else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = this.tail.next;
        }
    }
    display() {
        let temp = this.tail;
        let arr = [];
        while (temp != null) {
            arr.push(temp.data);
            temp = temp.prev;
        }
        console.log(arr);
    }

}
let dll = new doubleLL();
dll.addNode(10);
dll.addNode(20);
dll.addNode(30);
dll.addNode(40);
dll.addNode(50);
dll.addNode(60);
dll.display();
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class BinaryTree {
    constructor() {
        this.head = null;
    }
    addFirst(val) {
        if (this.head === null) {
            this.head = node;
        }
        else {
            node.next = this.head;
            this.head = node;
        }
    }
    addLast(val) {
        if (this.head === null) {
            this.head = node;
        }
        else {
            let temp = this.head;
            while (temp.next !== null) {
                temp = temp.next;
            }
            temp.next = node;
        }
    }
    addNodeOrdered(val) {
        if (this.head === null) {
            this.head = node;
        }
        else if (this.head.data > val) {
            node.next = this.head;
            this.head = node;
        }
        else {
            let prev = null, curr = this.head;
            while (curr !== null && curr.data < val) {
                prev = curr;
                curr = curr.next;
            }
            node.next = curr;
            prev.next = node;
        }
    }
    deleteFirst() {
        if (this.head === null) { console.log('list is empty'); return; }
        this.head = this.head.next;

    }
    deleteLast() {
        if (this.head === null) { console.log('list is empty'); return; }
        let prev = null, curr = this.head;
        while (curr.next !== null) {
            prev = curr;
            curr = curr.next;
        }
        prev.next = curr.next;
    }
    deleteAtSpecificPosition(pos) {
        if (this.head === null) { console.log('list is empty'); return; }
        if (pos === 0) {
            this.head = this.head.next;
        }
        else {
            let prev = null, curr = this.head, count = 0;
            while (curr !== null && count !== pos) {
                prev = curr;
                curr = curr.next;
                count++;
            }
            prev.next = curr.next
        }
    }
    addNodeAtSpecificPosition(val,pos){
        let node = new Node(val);
        if(this.head = null || pos === 0){
            node.next = this.head;
            this.head = node;
        }
        else{
            let prev = null, curr = this.head, count=0;
            while(curr!==null && count!== pos){
                prev = curr;
                curr = curr.next;
                count++;
            }
            node.next = curr;
            prev.next = node;
        }
    }
}