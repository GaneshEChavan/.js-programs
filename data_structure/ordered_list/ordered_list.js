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
        else {
            let temp = this.head;
            while (temp.next !== null) {
                temp = temp.next;
            }
            temp.next = node;
        }
        return node
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
let fs = require('fs');
fs.readFile('numberlist.txt', 'utf8', function (err, data) {
    if (err) { throw error; }
    let num = data.split(' ').map((element) => {
        return parseInt(element);
    })
    let ol = new orderedList();
    //let nodeList = []
    //num.forEach((element) => {
    //    nodeList.push((ol.addNode(element)));
    //});
    let temporary = 0;
    for (let o = 0; o < num.length; o++) {
        ol.addNode(num[o]);
    }
    let curr = ol.head;
    ol.display();
    for (let i = 0; i < num.length; i++) {
        curr = ol.head;
        for (let j = 0; j < num.length; j++) {
            while (curr.next !== null) {
                if (curr.data > curr.next.data) {
                    temporary = curr.data;
                    curr.data = curr.next.data;
                    curr.next.data = temporary;
                }
                curr = curr.next;
            }
     
        }
    }
    ol.display();

})
