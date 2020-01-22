var addBinary = function(a, b) {
    let array1 = a.split("").reverse();
    let array2 = b.split("").reverse();
    let res = [];
    let plus = 0;
    let length;
    if(array1.length > array2.length) {
        length = array1.length;
    } else {
        length = array2.length;
        let temp = array1;
        array1 = array2;
        array2 = temp;
    }
    console.log(length);
    for( let i = 0; i < length ; i++) {
        if(array2[i]) {
            res[i] = Number(array1[i]) + Number(array2[i]) + plus;    
        } else {
            res[i] = Number(array1[i])  + plus;
        }
        if(res[i] == 2 || res[i] == 3){
            res[i] -= 2;
            plus = 1
        } else {
            plus = 0;
        }
    }
    if(plus == 1){
        res[length] = 1;
    }
    return res.reverse().join("");
    
};