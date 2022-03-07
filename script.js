//1. buttons add numerals to numbers pushing them to an array that is joined and stores the number when operation is pushed
//2. operation is stored with number in an array and display is cleared
//3. buttons add numerals to numbers pushing them to an array that is joined and runs the math when equal is pushed displaying value
//4. That value is stored as the first number in the array again if another operation is pushed

one.addEventListener('click', display);

const one = document.querySelector('#1');
const displayContent = document.querySelector('#displayContent');

displayContent.textContent = `${displayValueA}`;

// function display(e) {
//     const displayValueA = [];
//     const displayValueB = [];
//     if() {
//         displayValueA.push();
//     } else {
//         displayValueB.push();
//     }
// }


//const storage = [];//not in right place (conceptual)

//OPERATION FUNCTION
const operate = function(func, a, b) {
    // const a = storage[0];
    // const func = storage[1];
    // const b = storage[2];
    switch(func) {
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

  //store a, func, b in an array (always indexed the same to be called)