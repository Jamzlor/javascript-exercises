const reverseString = function(str) {
    let strArr = [];
    for(i = str.length-1; i >= 0; i--){
        strArr.push(str[i])
    }
    return strArr.join('');
};

// Do not edit below this line
module.exports = reverseString;
