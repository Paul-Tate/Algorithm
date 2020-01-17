var removeDuplicates = function(nums) {
    let current = nums[0];
    let i = 1;
     while (nums[i] != null){
         if(nums[i] == current){
            nums.splice(i, 1);
             i--;
         } else {
             current = nums[i];
         }
         i++;
     }
};