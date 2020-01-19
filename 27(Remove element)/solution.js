var removeElement = function(nums, val) {
    let i = 0;
    let strlen = nums.length;
    while (nums[i] != null){
         if(nums[i] == val){
            nums.splice(i, 1);
             i--;
             strlen--;
         }
         i++;
     }
    return strlen;
};