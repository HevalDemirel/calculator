let currentInput = '0';
let currentOperator = '';
let isOperatorClicked = false;

const display = document.getElementById('output');
const clearButton = document.getElementById('clear');
const toggleSignButton = document.querySelector('.toggle-sign-button');
const percentageButton = document.querySelector('.percentage-button');
const divideButton = document.getElementById('divide');
const sevenButton = document.querySelector('.number-seven');
const eightButton = document.querySelector('.number-eight');
const nineButton = document.querySelector('.number-nine');
const multiplyButton = document.getElementById('multiply');
const fourButton = document.querySelector('.number-four');
const fiveButton = document.querySelector('.number-five');
const sixButton = document.querySelector('.number-six');
const subtractButton = document.getElementById('subtract');
const oneButton = document.querySelector('.number-one');
const twoButton = document.querySelector('.number-two');
const threeButton = document.querySelector('.number-three');
const addButton = document.getElementById('add');
const zeroButton = document.querySelector('.zero-button');
const decimalButton = document.querySelector('.decimal-button');
const equalsButton = document.getElementById('equals');

clearButton.addEventListener('click', handleClear);
toggleSignButton.addEventListener('click', handleToggleSign);
percentageButton.addEventListener('click', handlePercentage);
divideButton.addEventListener('click', () => handleOperator('/'));
multiplyButton.addEventListener('click', () => handleOperator('*'));
subtractButton.addEventListener('click', () => handleOperator('-'));
addButton.addEventListener('click', () => handleOperator('+'));
equalsButton.addEventListener('click', handleEquals);
decimalButton.addEventListener('click', handleDecimal);

sevenButton.addEventListener('click', () => handleNumberClick('7'));
eightButton.addEventListener('click', () => handleNumberClick('8'));
nineButton.addEventListener('click', () => handleNumberClick('9'));
fourButton.addEventListener('click', () => handleNumberClick('4'));
fiveButton.addEventListener('click', () => handleNumberClick('5'));
sixButton.addEventListener('click', () => handleNumberClick('6'));
oneButton.addEventListener('click', () => handleNumberClick('1'));
twoButton.addEventListener('click', () => handleNumberClick('2'));
threeButton.addEventListener('click', () => handleNumberClick('3'));
zeroButton.addEventListener('click', () => handleNumberClick('0'));

function handleClear() {
    currentInput = '0';
    currentOperator = '';
    isOperatorClicked = false;
    updateDisplay();
}

function handleToggleSign() {
    if (currentInput !== '0') {
        currentInput = (parseFloat(currentInput) * -1).toString();
        updateDisplay();
    }
}

function handlePercentage() {
    if (currentInput !== '0') {
        currentInput = (parseFloat(currentInput) / 100).toString();
        updateDisplay();
    }
}

function handleNumberClick(number) {
    if (currentInput === '0' || isOperatorClicked) {
        currentInput = number;
        isOperatorClicked = false;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function handleOperator(operator) {
    if (currentInput !== '0') {
        if (currentOperator !== '') {
            handleEquals();
        }

        currentOperator = operator;
        isOperatorClicked = true;
    }
}

function handleEquals() {
    if (currentInput !== '0' && currentOperator !== '') {
        const operand2 = parseFloat(currentInput);
        const operand1 = parseFloat(display.textContent);

        switch (currentOperator) {
            case '+':
                currentInput = (operand1 + operand2).toString();
                break;
            case '-':
                currentInput = (operand1 - operand2).toString();
                break;
            case '*':
                currentInput = (operand1 * operand2).toString();
                break;
            case '/':
                if (operand2 !== 0) {
                    currentInput = (operand1 / operand2).toString();
                } else {
                    currentInput = 'Error: Division by zero';
                }
                break;
            default:
                break;
        }

        currentOperator = '';
        isOperatorClicked = false;
        updateDisplay();
    }
}

function handleDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

function updateDisplay() {
    display.textContent = currentInput;
}
