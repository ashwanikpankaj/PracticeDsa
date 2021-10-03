const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

function nth_node(head,n){
 if(head == null){
     return null
 }
 let length = 0;
 let curr = head;
 while(curr!=null){
     length++;
     curr = curr.next
 }
 //console.log(length)
 let curr1 = head
 for(i = 0; i < length-n; i++){
    curr1 = curr1.next
 }
 return curr1.data
}
