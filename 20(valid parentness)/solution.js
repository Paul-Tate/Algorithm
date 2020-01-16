var isValid = function(s) {
    let chr = [ '(', ')', '{', '}', '[', ']'];
    let temp = [];
    let currentIndex;
    for( let i = 0; i < s.length ; i++ ) {
        currentIndex = chr.indexOf( s[i] );
        if( s[i] == '(' || s[i] == '{' || s[i] == '['){
            temp.push( s[i] );
        } else {
            let last = temp.pop();
            let lastIndex = chr.indexOf(last);
            if(currentIndex - lastIndex != 1){
                return false;
            }
        }
    }
    if(temp.length != 0) {
        return false;
    } else {
        return true;
    }
};