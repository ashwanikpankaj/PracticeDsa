
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
}

// Complete the function below

function reverse(head) {
 
 if(head == null){
     return null;
 }
 let curr = head;
 let prev = null;
 let next = null;

while(curr!=null){
  next = curr.next;
  curr.next = prev;
  prev = curr;
  curr = next;
}
 head = prev;
 return head
}