class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class HashTable {
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
            while(curr!==null && curr.data < val){
                prev = curr;
                curr = curr.next;
            }
            node.next = curr;
            prev.next = node;
        }
        return node
    }
    delete(val) {
        if (this.head === null) { console.log('hash table is empty'); return; }
        if (this.head.data === val) {
            this.head=this.head.next;
        }
        else {
            let prev = null, curr = this.head;
            while (curr.next !== null && curr.data !== val) {
                prev = curr;
                curr = curr.next;
            }
            prev.next = curr.next;
        }
    }
    search(val) {
        if (this.head === null) { console.log('Hash table is empty'); return; }
        else if (this.head.data === val) { 
            return true; }
        else {
            let temp = this.head;
            while (temp.next!== null && temp.data!==val) {
                temp = temp.next;
            }
            return (temp.data === val) ? true : false;
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

function main() {
    let arr = [], len = 10, test_arr = [21, 12, 15, 4, 13, 6, 7, 8, 9, 10, 1, 2, 5, 11, 3];
    for (let i = 0; i < len; i++) {
        arr.push(new HashTable());
    }

    test_arr.forEach((element) => {
        let hash = element % len;
        arr[hash].addNode(element);
    })
    arr.forEach(node => {
        node.display();
    })
    let user_input = 21;
    let hash = user_input % len;
    if (arr[hash].search(user_input) === true) {
   
        arr[hash].delete(user_input);
    }
    else{
        arr[hash].addNode(user_input); 
    }
    console.log(arr[hash]);
    arr.forEach(node => {
        node.display();
    })

}
main();





