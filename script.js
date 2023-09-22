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
    return a / b;
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
    };
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
    lValue = 0;
    rValue = 0;
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

let lValue;
let operator;
let rValue;
let displayValue = 0;

screen.textContent = '  ';

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
        lValue = displayValue;
        displayValue = 0;
        operator = e.target.textContent;
        screen.textContent += `${e.target.textContent}`;
    });
});
equals.addEventListener('click', () => {
    rValue = displayValue;
    operate(lValue, operator, rValue);
    screen.textContent = `${operate(lValue, operator, rValue)}`;

})

