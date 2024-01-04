const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arrOfNum) {
  let result = 0;
	for(let i = 0; i < arrOfNum.length; i++){
    result += arrOfNum[i];
  }
  return result;
};

const multiply = function(arrOfNum) {
  let result = 1;
  for (let i = 0; i < arrOfNum.length; i++){
    result *= arrOfNum[i];
  } 
  return result;
};

const power = function(num, pow) {
	return Math.pow(num, pow);
};

const factorial = function(num) {
  let result = 1;
  for (let i = num; i > 0; i--){
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
