class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class unorderedList {
    constructor() {
        this.head = null;
    }
    search(val) {
        if (this.head === null) { console.log('list is empty'); return; }
        let prev = null, curr = this.head;
      while ( curr.next !== null  && curr.data !== val) {
            prev = curr;
            curr = curr.next;
        }
        return (curr.data === val) ? true : false;

    }
    display() {
        let temp = this.head;
        let str = [];
        while (temp != null) {
            str.push(temp.data);
            temp = temp.next;
        }
        console.log(str);
        return str;
    }
    delete(val) {
        if (this.head === null) { console.log('list is empty'); return; }
        let prev = null, curr = this.head;
        while (curr.data !== val && curr !== null) {
            prev = curr;
            curr = curr.next;
        }
        prev.next = curr.next;
        curr.next = null;
    }

    addNode(val) {
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
}

let fs = require('fs');
const readline = require('readline').createInterface(process.stdin, process.stdout);
fs.readFile('readfile.txt', 'utf8', (err, data) => {
    let nodeList = []

    if (err) { throw error; }
    let array = data.split(' ');
    let ll = new unorderedList();
    array.forEach((element) => {
        nodeList.push((ll.addNode(element)));

    });
     console.log(nodeList.length);
    console.log(ll.display());

    readline.question('Enter the word to be searched from nodelist  >', userValue => {
        searchWord = userValue;
        if (ll.search(searchWord) === true) {
            ll.delete(searchWord);
        }
        else {
            ll.addNode(searchWord)
        };
        ll.display()
        readline.close();
    })
});
