var climbStairs = function(n) {
    var array = [1, 1];
    if( n > 1 ) {
        for( let i = 2; i <= n ; i++ ) {
            array[i] = array[i-1] + array[i-2];
        }
    }
    return array[array.length-1];
};