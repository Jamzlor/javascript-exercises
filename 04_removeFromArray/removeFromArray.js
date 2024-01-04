const removeFromArray = function(arr, ...nums) {
    for(let i = 0; i < nums.length; i++){
        let indexOfNum = arr.indexOf(nums[i]);
        if(indexOfNum >= 0){
            arr.splice(indexOfNum, 1);
        }  
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
