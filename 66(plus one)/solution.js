var plusOne = function(digits) {
    let plus = 1;
    for( let i = digits.length ; i > 0; i--){
        digits[i-1] += plus;     
        plus = 0;
        if( digits[i-1] == 10){
            digits[i-1]=0;
            plus = 1;
        }       
    }
    if(digits[0] == 0 ) {
        digits.unshift(1);
    }
    return digits;
};