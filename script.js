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
decimal.addEventListener('click', display);
numberSigns.addEventListener('click', negative);
window.addEventListener('keydown', useKeys);

//OPERATION BUTTONS
addition.addEventListener('click', storeOperate);
subtraction.addEventListener('click', storeOperate);
multiplication.addEventListener('click', storeOperate);
division.addEventListener('click', storeOperate);
equal.addEventListener('click', equals)

//REMOVE BUTTONS
ce.addEventListener('click', clearEntry);
c.addEventListener('click', refresh);
del.addEventListener('click', backspace);

const displayNum = [];
let evaluation = [];
let a = '';
let b = '';
let func = '';
let equalsArray = '';

//GENERAL FUNCTIONS
function display(e) {
  if (displayNum.includes('.') === true && e.target.innerHTML === '.') {
    return;
  } else if (displayNum.length < 11) {
    const displayContent = document.querySelector('#displayContent');
    displayNum.push(e.target.innerHTML);
    displayContent.textContent = displayNum.join('');
  }
}

function displayKey(e) {
  if (displayNum.includes('.') === true && e.key === '.') {
    return;
  } else if (displayNum.length < 11) {
    const displayContent = document.querySelector('#displayContent');
    displayNum.push(e.key);
    displayContent.textContent = displayNum.join('');
  }
}

function useKeys(e) {
  if (e.key >= 0 && e.key <= 9 || e.key === '.') {
    displayKey(e);
  } if (e.key === "-" || e.key === '+' || e.key === '*' || e.key === '/') {
    storeOperateKey(e);
  } if (e.key === 'Enter') {
    equals(e);
  } if (e.key === 'Backspace') {
    backspace(e);
  }
}

function storeOperate(e) {
  if (displayNum.length === 0 && e.target.id === "subtraction") {
    const displayContent = document.querySelector('#displayContent');
    displayNum.push("-");
    displayContent.textContent = displayNum.join('');
  } else if (evaluation.length === 0) {
    a = Number(displayContent.textContent);
    evaluation.push(a);
    func = e.target.id;
    evaluation.push(func);
    displayContent.textContent = e.target.innerHTML;
    displayNum.length = 0;
  } else if (evaluation.length === 2) {
    b = Number(displayNum.join(''));
    operate(func, a, b);
    evaluation.length = 0;
    a = Number(displayContent.textContent);
    evaluation.push(a);
    func = e.target.id;
    evaluation.push(func);
    displayNum.length = 0;
  }
}

function storeOperateKey(e) {
  if (displayNum.length === 0 && e.code === 'NumpadSubtract') {
    const displayContent = document.querySelector('#displayContent');
    displayNum.push("-");
    displayContent.textContent = displayNum.join('');
  } else if (evaluation.length === 0) {
    a = Number(displayContent.textContent);
    evaluation.push(a);
    func = e.code;
    evaluation.push(func);
    displayContent.textContent = e.key;
    displayNum.length = 0;
  } else if (evaluation.length === 2) {
    b = Number(displayNum.join(''));
    operate(func, a, b);
    evaluation.length = 0;
    a = Number(displayContent.textContent);
    evaluation.push(a);
    func = e.code;
    evaluation.push(func);
    displayNum.length = 0;
  }
}

function equals() {
  b = Number(displayNum.join(''));
  evaluation.push(b);
  operate(func, a, b);
  evaluation.length = 0;
  displayNum.length = 0;
}

const operate = function(func, a, b) {
  switch(func) {
    case 'addition':
    case 'NumpadAdd':
      displayContent.textContent = add(a, b);
      break;
    case 'subtraction':
    case 'NumpadSubtract':
      displayContent.textContent = subtract(a, b);
      break;
    case 'multiplication':
    case 'NumpadMultiply':
      displayContent.textContent = multiply(a, b);
      break;
    case 'division':
    case 'NumpadDivide':
      displayContent.textContent = divide(a, b);
      break;
  }
};

function roundAnswer(number) {
  if (number.toString().split('').length > 11 
  && number.toString().split('')[0] === '-' 
  && number.toString().split('').includes('.') === false) {
    return number.toExponential(5);
  } else if (number.toString().split('').length > 11 
  && number.toString().split('').includes('.') === false) {
    return number.toExponential(6);
  } else if ((Math.round(number * 100000000000) / 100000000000)
  .toString().split('').length > 11) {
    return number.toExponential(6);
  } else {
    return Math.round(number * 100000000000) / 100000000000;
  }
}
  
//BASIC MATH OPERATION FUNCTIONS
const add = function(a, b) {
  return roundAnswer(a + b);
};
const subtract = function(a, b) {
  return roundAnswer(a - b);
};
const multiply = function(a, b) {
  return roundAnswer(a * b);
};
const divide = function(a, b) {
  if (b === 0) {
    return 'NOPE!';
  } else {
    return roundAnswer(a / b);
  }
};

//POSITIVE and NEGATIVE BUTTON FUNCTION
function negative() {
  if (Number(displayNum.join('')) > 0) {
    const displayContent = document.querySelector('#displayContent');
    displayNum.unshift("-");
    displayContent.textContent = displayNum.join(''); 
  } else {
    const displayContent = document.querySelector('#displayContent');
    displayNum.shift();
    displayContent.textContent = displayNum.join('');
  }
}

//REMOVE BUTTON FUNCTIONS
function backspace() {
  const displayContent = document.querySelector('#displayContent');
  equalsArray = displayContent.textContent.split('');
  if (displayNum[0] > 9) {
    equalsArray.pop();
    displayContent.textContent = equalsArray.join('');
  } else {
    displayNum.pop();
    displayContent.textContent = displayNum.join('');
  }
}

function clearEntry() {
  const displayContent = document.querySelector('#displayContent');
  displayNum.length = 0;
  displayContent.textContent = displayNum.join('');
}

function refresh() {
  reload = location.reload();
}