var lengthOfLastWord = function(s) {
    let word = s.split(" ");
    for( let i = word.length-1; i > 0 ; i-- ) {
        if(word[i] != "") {
            return word[i].length;
        }
    }
    return word[0].length;
};