var reverse = function(x) {
    var rev = 0;
    if( x < Math.pow(2, 31) * (-1) || x > Math.pow(2,31)-1 ){
        return 0;
    }
    if(x < 0) {
        rev = -Number(String(Math.abs(x)).split("").reverse().join(""));
    } else{
        rev = Number(String(x).split("").reverse().join(""));
    }
    if( rev < Math.pow(2, 31)*(-1) || rev > Math.pow(2, 31)-1 ){
        return 0;
    }
    return rev;
};