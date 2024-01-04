const sumAll = function(startNum, endNum) {
    let result = 0;
    if(startNum >= 0 && endNum >= 0){
        if(typeof startNum === 'number' && typeof endNum === 'number'){
            if (startNum <= endNum) { 
                for(let i = startNum; i <= endNum; i++){
                result += i;
                }
            } else if(startNum > endNum){
                for(let i = startNum; i >=endNum; i--){
                    result += i;
                }
            }
        } else {
            return 'ERROR';
        }     
    } else {
        return 'ERROR';
    }
  
    
    return result;
};

// Do not edit below this line
module.exports = sumAll;
