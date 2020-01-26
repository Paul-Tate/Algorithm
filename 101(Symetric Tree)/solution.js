var isSymmetric = function(root) {
   return isSameTree(root, root);
};
var isSameTree = function(p, q) {
    if (p === null && q === null) return true;
    if (p === null || q === null) return false;
    if ((p.val === q.val) && isSameTree(p.right, q.left) && isSameTree(p.left, q.right)) {
        return true
    } else {
        return false;
    }
};