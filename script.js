function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    let result = a / b;
    if (Math.floor(result) !== result) {
        result = result.toFixed(2);
    }
    if (rValue === 0) {
        return 'don\'t do that';
    }
    return result;
}

function operate(a, operand, b) {
    switch (operand) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            console.error('Invalid operand');
    }; //there has to be a better way to do this
}

function displayPressedKeys(toAdd) {
    displayValue = displayValue * 10 + toAdd;
    screen.textContent += toAdd;
}

function updateValues(newVal) {
    displayValue = newVal;
    screen.textContent = displayValue;
}

function clear() {
    lValue = null;
    rValue = null;
    operator = '';
    displayValue = 0;
    screen.textContent = '';
}

const screen = document.querySelector('.screen');
const numbers = document.querySelectorAll('.number');
const cl = document.querySelector('.clear');
const del = document.querySelector('.del');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');

let lValue = null;
let operator = null;
let rValue = null;
let displayValue = 0;

screen.textContent = '';

numbers.forEach((number) => {
    number.addEventListener('click', (event) => {
        if (displayValue.toString().length > 15) return;
        displayPressedKeys(+event.target.textContent);
    })
});

cl.addEventListener('click', () => { clear(); });

del.addEventListener('click', () => { updateValues(Math.floor(displayValue / 10)); });
window.addEventListener('keydown', (e) => {
    if (e.key = 'Backspace') updateValues(Math.floor(displayValue / 10));
}); //gonna need to to something like this for all keys

operators.forEach((op) => {
    op.addEventListener('click', (e) => {
        operator = e.target.textContent; //need to make it so when you press operator again it changes to said operator
        if (lValue === null) {
            lValue = displayValue;
        } else {
            lValue = operate(lValue, operator, displayValue);
        }
        displayValue = 0;
        screen.textContent = `${lValue}${e.target.textContent}`;
    });
});

equals.addEventListener('click', () => {
    rValue = displayValue;
    if (rValue === null || lValue === null) {
        return;
    }
    operate(lValue, operator, rValue);
    screen.textContent = `${operate(lValue, operator, rValue)}`;

})
//need to fix the gotcha-s 
//help :(

