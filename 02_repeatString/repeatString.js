const repeatString = function(string, num) {

    let stringArr = [];
    if (num < 0){
        return 'ERROR';
    } else {
        for(let i = 0; i < num; i++){
            stringArr.push(string);
        }
        return stringArr.join('');
    }
};

// Do not edit below this line
module.exports = repeatString;
