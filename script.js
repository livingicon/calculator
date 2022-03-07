//decimal point ().tofixed(20);)?
//keyboard friendly

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

function useKeys(e) {
  if (e.key >= 0 && e.key <= 9) {
    display(e);
  }
}

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

function display(e) {
  if (displayNum.includes('.') === true && e.target.innerHTML === '.') {
    return;
  } else {
    const displayContent = document.querySelector('#displayContent');
    //displayNum.push(e.key);
    displayNum.push(e.target.innerHTML);
    displayContent.textContent = displayNum.join('');
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

function equals() {
  b = Number(displayNum.join(''));
  evaluation.push(b);
  operate(func, a, b);
  evaluation.length = 0;
  displayNum.length = 0;
  displayNum.push(displayContent.textContent);
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
    if (b === 0) {
      return 'To INFINITY and BEYOND!';
    } else {
      return a / b;
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
    displayNum.pop();
    displayContent.textContent = displayNum.join('');
  }

  function clearEntry() {
    const displayContent = document.querySelector('#displayContent');
    displayNum.length = 0;
    displayContent.textContent = displayNum.join('');
  }

  function refresh() {
    reload = location.reload();
  }