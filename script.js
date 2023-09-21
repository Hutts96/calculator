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
    screen.textContent = displayValue;
}

function updateValues(newVal) {
    displayValue = newVal;
    screen.textContent = displayValue;
}



const screen = document.querySelector('.screen');
const numbers = document.querySelectorAll('.number');
const clear = document.querySelector('.clear');
const del = document.querySelector('.del');

let a;
let operand;
let b;
let displayValue = 0;

screen.textContent = '0';

numbers.forEach((number) => {
    number.addEventListener('click', (event) => {
        if (displayValue.toString().length > 15) return;
        displayPressedKeys(+event.target.textContent);
    })
});
clear.addEventListener('click', () => { displayValue = 0; screen.textContent = '0'; });
del.addEventListener('click', () => { updateValues(Math.floor(displayValue / 10)); });
window.addEventListener('keydown', (e) => {
    if (e.key = 'Backspace') updateValues(Math.floor(displayValue / 10));
}); //gonna need to to something like this for all keys

