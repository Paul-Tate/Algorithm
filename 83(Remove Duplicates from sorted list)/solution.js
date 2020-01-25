var deleteDuplicates = function(head) {
    if(!head) {
        return head;
    } 
    // let initialNode = {val: 0, next : null};
    let current = head;
    while (current.next != null) {
        let next = current.next;
        if(current.val == next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return head;
};
