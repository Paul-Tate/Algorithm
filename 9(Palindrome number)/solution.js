var isPalindrome = function(x) {
    if( x < 0) return false;
    else{
        if( x == Number(String(x).split("").reverse().join(""))) return true;
        else return false;
    }
};