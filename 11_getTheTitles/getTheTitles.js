const getTheTitles = function(arrOfBooks) {
    let result = [];
    for(let i = 0; i < arrOfBooks.length; i++){
        result.push(arrOfBooks[i].title);
    }
    return result;
};

// Do not edit below this line
module.exports = getTheTitles;
