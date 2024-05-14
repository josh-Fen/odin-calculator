let first = null;
let second = null;
let operator = null;
let displayNum = '';


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

function operate(first, operator, second) {
    switch (operator) {
        case 'add':
            add(first, second);
            break;
        case 'subtract':
            subtract(first, second);
            break;
        case 'multiply':
            multiply(first, second);
            break;
        case 'divide':
            divide(first, second);
            break;

    }
}

const display = document.querySelector('.result');
const numbers = document.querySelectorAll('.num');
const functions = document.querySelectorAll('.func');
const clear = document.querySelector('.clear');
const equals = document.querySelector('.equals');


numbers.forEach((num) => {
    num.addEventListener('click', (e) => {
        //console.log(e.currentTarget.textContent);
        if (displayNum.length < 10) {
            displayNum += e.currentTarget.textContent;
        }
        console.log(`n is equal to ${displayNum}`);
        displayNumber(displayNum);
    });
});

function displayNumber(str) {
    if (str.length <= 10) {
        display.textContent = str;
    } else {
        display.textContent = str.slice(0, 10);
    }
}

clear.addEventListener('click', (e) => {
    displayNum = '';
    first = '';
    second = '';
    operator = null;
    displayNumber(displayNum);
});

functions.forEach((func) => {
    func.addEventListener('click', (e) => {
        operator = e.currentTarget.id;
        if (first) {
            second = displayNum;
        } else {
            first = displayNum;
        }
        displayNum = '';
        console.log(`First is ${first} and Second is ${second}`);
    });
});

equals.addEventListener('click', (e) => {
    console.log('check');
});

