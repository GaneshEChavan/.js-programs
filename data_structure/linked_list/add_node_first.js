class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class Linked_list {
    constructor(){
        this.head = null
    }
    Add_node(val){
        let node = new Node(val);
        if(this.head === null){
            this.head = node;
        } 
        else {
            let temp = this.head;
            while(temp.next !== null){
                temp = temp.next;
            }
            temp.next = node;
        }
    }
    Display(){
        let temp = this.head;
        let str = [];
        while(temp != null){
            str.push(temp.data);
            temp = temp.next;
        }
        console.log(str);
    }
    Add_at_specific_pos(val, pos = 0){
        let node = new Node(val);
        if(this.head === null || pos === 0){
            node.next = this.head;
            this.head = node;
        } else {
            let prev = null, curr = this.head, count = 0;
            while(curr !== null && pos !== count){
                prev = curr;
                curr = curr.next;
                count++;
            }
            node.next = curr;
            prev.next = node;
        }
    }
    Delete_at_specific_pos(pos){
        if(this.head === null){ console.log('linked list empty');return;}
        if(pos === 0){
            console.log("deleted node -----> ", (this.head.data))
            this.head = this.head.next;
        } else {
            let prev = null, curr = this.head, count = 0;
            while(curr !== null && pos !== count){
                prev = curr;
                curr = curr.next;
                count++;
            }
            console.log("deleted node -----> ", ((curr || {}).data || null))
            prev.next = (curr|| {}).next || null;
        }
    }
    Delete_specific_val(val){
        if(this.head === null){ console.log('linked list empty');return;}
        if(this.head.data === val){
            console.log("deleted node -----> ", (this.head.data))
            this.head = this.head.next;
        } else {
            let prev = null, curr = this.head;
            while(curr !== null && curr.data !== val){
                prev = curr;
                curr = curr.next;
            }
            console.log("deleted node -----> ", ((curr || {}).data || null))
            prev.next = (curr|| {}).next || null;
        }
    }
}

let ll = new linked_list();
/*ll.delete_specific_val(10)
ll.add_node(10);
ll.add_node(20);
ll.add_node(30);
ll.add_node(40);
ll.add_node(50);
ll.display();
ll.add_at_specific_pos(25, 2);
ll.display();
ll.delete_at_specific_pos(2);
ll.display();
ll.delete_specific_val(10);
ll.display();
ll.add_at_specific_pos(10, 0);
ll.display();
ll.delete_specific_val(40);
ll.display();
ll.delete_specific_val(60);
ll.display();
ll.delete_at_specific_pos(10);
ll.display();*/