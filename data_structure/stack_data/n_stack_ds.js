let fs = require('fs');
fs.readFile('expression.txt','utf8', function read(err,data){
    if(err){throw error;}
    let arr = data.split('');
    let result = [];
    let sds = new stack();
    for(let i=0;i<arr.length;i++){
        if(arr[i] ==='('){
            sds.push('(');
        }
        else if(arr[i]===')'){
            sds.pop();
        }
        sds.display();
    }   
    sds.check_Exp();
})
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class stack {
    constructor() {
        this.head = null;
        this.cnt = 0;
    }
    push(val) {
        let node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.cnt++;
        }
        else {
            let temp = this.head;
            while (temp.next !== null) {
                temp = temp.next;
            }
            temp.next = node;
            this.cnt++;
        }
        return (node);
    }
    pop() {
        let prev = null, temp = this.head;
        if (this.head === null) { this.cnt--; }
        else if(this.head.next===null){
            this.head = null;
            this.cnt--;
        }
        else {
            while (temp.next !== null) {
                prev = temp;
                temp = temp.next;
            }
            prev.next = null;
            this.cnt--;
        }
    }
    peek() {
        let prev = null, peek, temp = this.head;
        if (this.head === null) { console.log('stack is empty'); return; }
        else {
            while (temp !== null) {
                prev = temp;
                temp = temp.next;
            }
            peek = prev.data;
        }
        return console.log(peek)
    }
    isEmpty() {
        return (this.head === null) ? true : false;
    }
    size() {
        let temp = this.head, count = 0;
        while (temp.next !== null) {
            temp = temp.next;
            count++;
        }
        console.log(count);
    }
    display() {
        let temp = this.head, str = [];
        if (this.head === null) { return; }
        while (temp !== null) {
            str.push(temp.data);
            temp = temp.next;
        }
        console.log(str);
    }

    check_Exp(){
        if(this.cnt === 0){
            console.log("Arithmatic expression is balanced");
        }else{
            console.log('Expression is unbalanced');
        }
    }
}

/*let array = [1, 2, 3, 4, 5, 6, 7];
let arr = [];
array.forEach((element) => {
    arr.push(sds.push(element));
})
console.log(arr);
let sds = new stack();
sds.push(1);
sds.display();
sds.push(7);
sds.display();
sds.push(9);
sds.display();
sds.push(4);
sds.display();
sds.push(5);
sds.display();
sds.push(2);
sds.display();
sds.pop();
sds.display();
sds.pop();
sds.display();
sds.pop();
sds.display();
sds.pop();
sds.display();
sds.peek();*/



