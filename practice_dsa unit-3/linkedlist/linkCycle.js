
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
//Complete the function below
var hasCycle = function(head) {
   
  if(head == null){
      return false
  }
   let slow = head;
   let fast = head;
   let flag = 0;
   while(slow!=null && fast != null && fast.next!=null){
       slow = slow.next;
       fast = fast.next.next;
       
       if(slow === fast){
           flag = 1;
           break;
       }
   }
if(flag == 1){
    return true;
}
else{
    return false
}
};
