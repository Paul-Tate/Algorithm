var countAndSay = function(n) {
    if (n == 1) {
        return "1";
    }
    if(n > 1) {
        let res = [];
        let recur = countAndSay(n-1);        
        let temp = recur.split("");
        let compare = temp[0];
        let rep = 0, i = 0, j = 0;
        while(j < 1){
            
            if(temp[i] == compare){
                rep ++;
                i++;
            }
            else {res.push(rep);
            res.push(compare);
            rep = 1;
            i++;
            compare = temp[i-1];}
             if(!temp[i-1]) break;           
        }
        return res.join("");
    }
};