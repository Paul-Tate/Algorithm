var romanToInt = function(s) {
    const symbol = ["I", "V" ,"X", "L", "C", "D", "M"];
    const value = [1, 5, 10, 50, 100, 500, 1000];
    const array = s.split("");
    
    let res = 0;
    let current;
    let next;
    
    for( let i = 0; i < array.length ; i++ ) {
        current = symbol.indexOf(array[i]);
        next = symbol.indexOf(array[i+1]);
        if( current < next ) 
            res -= value[current];
        else
            res += value[current];        
    }
    return res;
};