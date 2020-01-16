var longestCommonPrefix = function( strs ) {
    let longestPrefix = "";
    if( strs.length > 0 ){
        longestPrefix = strs[0];
        for( let i = 0; i < strs.length; i++ ) {
            for( let j = 0; j < strs[0].length; j++ ) {
                if( strs[i][j] != longestPrefix[j] ){
                    longestPrefix = longestPrefix.slice( 0, j );
                    break;
                }
            }
        }
    }
    return longestPrefix;
};