
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtTail(head, data) {
    let node  = new LinkedListNode(data);
 //   console.log(node)
    if(head == null){
          head = node
        return head
    }
  
    let curr = head;
    while(curr.next != null){
        curr = curr.next
    }
    curr.next = node;
    
    return head
}

