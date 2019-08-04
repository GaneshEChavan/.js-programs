class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class dequeue {
    constructor() {
        this.head = null;
    }
    addFront(val) {
        let node = new Node(val);
        if (this.head === null) {
            this.head = node;
        }
        else {
            node.next = this.head;
            this.head = node;
        }
    }
    addLast(val) {
        let node = new Node(val);
        if (this.head === null) {
            this.head = node;
        }
        else {
            let temp = this.head;
            while (temp.next !== null) {
                temp = temp.next
            }
            temp.next = node;
        }
        return node;
    }
    removeFront() {
        let temp = this.head;
        if (this.head === null) { console.log('queue is empty'); return; }
        if (this.head.next === null) {
            this.head === null;
        }
        else {
            this.head = temp.next;
            temp = null;
        }
    }
    removeLast() {
        let prev = null, temp = this.head;
        if (this.head === null) { console.log('stack is empty'); return; }
        else {
            while (temp.next !== null) {
                prev = temp;
                temp = temp.next;
            }
            prev.next = null;
        }
    }
    display() {
        let temp = this.head;
        let arr = [];
        while (temp !== null) {
            arr.push(temp.data);
            temp = temp.next;
        }
        console.log(arr);
    }
    check(){
        if (this.head === null || this.head.next === null) { return; }
        else {return true;}
    }
}

let check = 'faaf';
let str = check.split('');
//let arr = [];
let dq = new dequeue();
//str.forEach((ele)=>{
//arr.push(ele); 
//})
for (let u = 0; u < str.length; u++) {
    dq.addLast(str[u]);
}
dq.display();
let k = 0, j = str.length-1;
for (let i = 0; i < str.length; i++) {
        if (str[k] === str[j]) {
            dq.removeLast();
            dq.removeFront();
            dq.display();
            j--;k++;
            i+=2;
        }
        else {
            console.log('not palindrome');
            break;
        }
}
if(!dq.check()){
    console.log('is a palindrome');
}


/*let dq = new dequeue();
dq.addFront(1);
dq.display();
dq.addFront(2);
dq.display();
dq.addFront(3);
dq.display();
dq.addLast(4);
dq.display();
dq.addLast(5);
dq.display();
dq.removeFront();
dq.display();
dq.removeFront();
dq.display();
dq.removeLast();
dq.display();*/