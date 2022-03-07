//Need to figure out how to string together problems before equals
//Need to clear evaluation and make first number solution number?

//NUMBER BUTTONS
zero.addEventListener('click', display);
one.addEventListener('click', display);
two.addEventListener('click', display);
three.addEventListener('click', display);
four.addEventListener('click', display);
five.addEventListener('click', display);
six.addEventListener('click', display);
seven.addEventListener('click', display);
eight.addEventListener('click', display);
nine.addEventListener('click', display);

//OPERATION BUTTONS
addition.addEventListener('click', storeOperate);
subtraction.addEventListener('click', storeOperate);
multiplication.addEventListener('click', storeOperate);
division.addEventListener('click', storeOperate);
equal.addEventListener('click', equals)

const displayNum = [];
const evaluation = [];

function display(e) {
  const displayContent = document.querySelector('#displayContent');
  displayNum.push(e.target.innerHTML);
  displayContent.textContent = `${displayNum.join('')}`;
}

function storeOperate(e) {
  const numOne = displayNum.join('');
  evaluation.push(e.target.id);
  evaluation.push(numOne);
  displayNum.length = 0;
  displayContent.textContent = e.target.innerHTML;
  console.log(evaluation);
}

function equals() {
  const numTwo = displayNum.join('');
  evaluation.push(numTwo);
  console.log(numTwo);
  console.log(evaluation);
  operate(evaluation[0], Number(evaluation[1]), Number(evaluation[2]));
}
//OPERATION FUNCTION
const operate = function(func, a, b) {
    switch(func) {
      case 'addition':
        displayContent.textContent = add(a, b);
        break;
      case 'subtraction':
        displayContent.textContent = subtract(a, b);
        break;
      case 'multiplication':
        displayContent.textContent = multiply(a, b);
        break;
      case 'division':
        displayContent.textContent = divide(a, b);
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