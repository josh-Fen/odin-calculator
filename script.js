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

function operate(opFirst, opFunction, opSecond) {
    switch (opFunction) {
        case 'add':
            first = add(opFirst, opSecond);
            break;
        case 'subtract':
            first = subtract(opFirst, opSecond);
            break;
        case 'multiply':
            first = multiply(opFirst, opSecond);
            break;
        case 'divide':
            first = divide(opFirst, opSecond);
            break;
    }
    if (first > 9999999999) {
        displayNumber(String('NaN'));
        first = null;
    } else {
        if (first % 1 > 0) {
            first = +first.toFixed(5);
        }
        displayNumber(String(first));
    }
    displayNum = '';
    second = null;
    operator = null;
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
    displayNumber('0');
});

functions.forEach((func) => {
    func.addEventListener('click', (e) => {
        //debugger;
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
    console.log(`First is ${first} Second is ${second} and Operator is ${operator}`);
    if (first && second && operator) {
        operate(+first, operator, +second);
    } else if (first && displayNum && operator) {
        operate(+first, operator, +displayNum);
    }
});

