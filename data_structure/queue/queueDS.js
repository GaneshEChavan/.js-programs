class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.head = null;
    }
    enqueue(val) {
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
    }
    dequeue() {
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
    display() {
        let temp = this.head;
        let str = [];
        while (temp !== null) {
            str.push(temp.data)
            temp = temp.next;
        }
        console.log(str);
    }
}

const readline = require('readline').createInterface(process.stdin, process.stdout);

readline.question('Enter the Queue Limit', userValue => {
    limit = parseInt(userValue);
    let que = new Queue();
    for (let j = 1; j <= limit; j++) {
        que.enqueue(j);
        que.display();
    }

    let bankBalance = 0;
    for (let i = 0; i <= limit; i++) {
        readline.question('You want to deposit the money Y/N', userValue => {
            choice = userValue;
            if (choice === 'y') {
                readline.question('Enter the amount you want to deposit', userValue => {
                    amount = parseInt(userValue);
                    bankBalance += amount;
                    que.dequeue();
                    que.display();
                    console.log(bankBalance);
                })
            }
            else if (choice === 'n') {
                readline.question('Enter the amount you want to Withdraw', userValue => {
                    require = parseInt(userValue);
                    if (require > bankBalance) {
                        console.log(`${bankBalance}rs are available`)
                        readline.close();
                    }
                    else {
                        bankBalance -= require;
                        que.dequeue();
                        que.display();
                       console.log(bankBalance);
                    }
                })
            }

        })
    }
    readline.close();
    console.log(bankBalance);
})

/*let que = new Queue();
que.enqueue(1);
que.display();
que.enqueue(2);
que.display();
que.enqueue(3);
que.display();
que.enqueue(4);
que.display();
que.dequeue();
que.display();
que.dequeue();
que.display();*/

