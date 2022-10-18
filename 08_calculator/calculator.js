const add = function(num1,num2) {
	result = num1 + num2;

  return result;
};

const subtract = function(num1,num2) {
	result = num1 - num2;

  return result;
};

const sum = function(array) {
	result = array.reduce((total,value) => total + value,0);

  return result;
};

const multiply = function(array) {
  result = array.reduce((total,value) => total * value);

  return result;
};

const power = function(num1, num2) {
	result = Math.pow(num1,num2);

  return result;
};

const factorial = function(num) {
	if(num ===0){
    result = 1;

    return result;
  }

  else{
    fact = 1;
    for(i = 1; i <= num; i++){
      fact *= i;
    }
    return fact;
  }
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
