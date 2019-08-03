class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class orderedList {
    constructor() {
        this.head = null;
    }
    addNode(val) {
        let node = new Node(val);
        if (this.head === null) {
            this.head = node;
        }
        else if (this.head.data > val) {
            node.next = this.head;
            this.head = node;
        }
        else {
            let prev = null, curr = this.head;
            while(curr !== null && curr.data < val){
                prev = curr;
                curr = curr.next;
            }
            node.next = curr;
            prev.next = node;
        }
        return node
    }
    delete(val){
        if(this.head === null){console.log('list is empty');return;}
        if(this.head.data === val){
            this.head = this.head.next;
        }
        else{
            let prev = null, curr = this.head;
            while(curr.next !== null && curr.data !== val){
                prev = curr;
                curr = curr.next;
            }
            prev.next = curr.next
        }
    }
    display() {
        let temp = this.head
        let arr = [];
        while (temp !== null) {
            arr.push(temp.data);
            temp = temp.next;
        }
        console.log(arr)
    }
}
let ol = new orderedList();
ol.addNode(21);
ol.addNode(2);
ol.addNode(22);
ol.addNode(78);
ol.addNode(9);
ol.addNode(42);
ol.display();
ol.delete(42);
ol.display();
