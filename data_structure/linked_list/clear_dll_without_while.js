class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}
class doubleLL {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    add(val) {
        let node = new Node(val)
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = this.tail.next;
        }
        return node;
    }
    delete() {
        let next = 
        this.head.next = null;
        
        
    }
    display() {
        if(this.head===null){console.log('list is empty')}
        let temp = this.head;
        let str = [];
        while (temp !== null) {
            str.push(temp.data);
            temp = temp.next;
        }
        console.log(str);
    }
}

let dll = new doubleLL();
dll.add(10);
dll.add(20);
dll.add(30);
dll.add(40);
dll.add(50);
dll.display();
dll.delete()