
let currentOperation = '';
let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    document.getElementById('result').value = currentInput;
}

function operate(operator) {
    if (currentInput !== '') {
        currentOperation += currentInput + ' ' + operator + ' ';
        currentInput = '';
        document.getElementById('result').value = '';
    }
}

function calculate() {
    if (currentInput !== '') {
        currentOperation += currentInput;
        let result = eval(currentOperation);
        document.getElementById('result').value = result;
        currentInput = result;
        currentOperation = '';
    }
}

function clearResult() {
    currentInput = '';
    currentOperation = '';
    document.getElementById('result').value = '';
}
//Code explanation:

//HTML: we use a simple interface with buttons for numbers, operations and a text box to display the results.
//JavaScript:
//appendNumber: to add a number to the current input.
//operate: to add the calculation and variables to the current process string.
//calculate: to calculate the result using the eval function (it evaluates the string as JavaScript code).
//clearResult: to clear all data.
