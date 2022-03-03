//OPERATION FUNCTION
const operate = function(name, a, b) {
  switch(name) {
    case 'addition':
      console.log(add(a, b));
      break;
    case 'subtraction':
      console.log(subtract(a, b));
      break;
    case 'multiplication':
      console.log(multiply(a, b));
      break;
    case 'division':
      console.log(divide(a, b));
      break;
  }
};

//BASIC MATH OPERATION FUNCTIONS
const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const multiply = function(a, b) {
  return a * b;
};

const divide = function(a, b) {
  return a / b;
};