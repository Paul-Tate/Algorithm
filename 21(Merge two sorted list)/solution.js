var mergeTwoLists = function(l1, l2) {
    let initialNode = {val: 0, next : null};
    let temp = initialNode;
    while( l1 && l2 ){
        if(l1.val > l2.val) {
            temp.next = l2;
            l2 = l2.next;
        } else {
            temp.next = l1;
            l1 = l1.next;
        }
        temp = temp.next;
    }
    temp.next = l1 || l2;
    return initialNode.next;
};