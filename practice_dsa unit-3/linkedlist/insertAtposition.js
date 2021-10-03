
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtPosition(head, data, position) {
 let node  = new  LinkedListNode(data);
 if(head == null){
     head = node;
     return head
 }
 if(position == 0){
     let temp = node;
     temp.next = head;
     head = temp;
     return head
 }
 else{
 let curr = null;
 let prev = null;
 let count = 0
 for(curr = head; curr != null; prev = curr,curr = curr.next){
     if(position == count){
         prev.next = node;
         node.next = curr;
     }
     count++;
 }
 return head
 }
}
