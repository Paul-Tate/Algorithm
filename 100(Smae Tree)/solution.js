var isSameTree = function(p, q) {
    if (p === null && q === null) return true;
    if (p === null || q === null) return false;
    if ((p.val === q.val) && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)) {
        return true
    } else {
        return false;
    }
};