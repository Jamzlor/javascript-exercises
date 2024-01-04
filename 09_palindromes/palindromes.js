const palindromes = function (string) {
    let mutatedStr = string.replace(/[\W]/g,'').toLowerCase();
    let reverseStr = mutatedStr.split('').reverse().join('');
    return (reverseStr === mutatedStr) ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
