class Node{
    constructor(data){
   this.data = data;
   this.next = null;
   this.prev = null;
    }
}
class reversedll{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    add(val){
        let node = new Node(val);
        if(this.head === null){
            this.head = node;
            this.tail = node;
        }
        else{
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = this.tail.next;
            
        }
        return node;
    }
    addAtSpecificPosition(val,pos){
        let node = new Node(val);
        if(this.head === null || pos ===0){
            this.head = node;
            this.tail = node;
        }
        else{
            let prev = null, curr=this.head,next=this.head.next, count = 0;
            while (count !== pos){
              prev = curr;
              curr = curr.next;
            }
            prev.next=node;
            node.prev=prev;
            node.next=next;
            next.prev=node;
        }
    }
    display(){
          let temp = this.head;
          let str = [];
          while(temp !== null){
         str.push(temp.data);
         temp = temp.next;
          }
          console.log(str);
    }
}
/*let dll = new reversedll();
let array = [10,20,30,40,50,60];
let arr = [];
let midTerm = array.length/2;
for (let i=(array.length-1); i>midTerm-1; i--){
    arr.push(dll.add(array[i]));
}reversedll
for(let j=0;j<midTerm+1;j++){
    arr.push(dll.add(array[j]));
}
console.log(arr)*/
let dll = new reversedll();
let array = [10,20,30,40,50,60];
let arr = [];
let a = []
array.forEach((ele)=>{
arr.push(dll.add(ele));
})
console.log(arr);
let midterm = arr.length/2;
for (let i=arr.length-1;i>midterm-1;i--){
  
}