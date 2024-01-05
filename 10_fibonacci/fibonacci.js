const fibonacci = function(num) {
    let a = 1;
    let b = 0;
    let temp;
    if(num >= 0){
        for(let i = 1; i <= num; i++){
            temp = a;
            a = a + b;
            b = temp;
        }
        return b;
    } else {
        return 'OOPS';
    }
    
};

// Do not edit below this line
module.exports = fibonacci;
