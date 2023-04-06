const calculatorScreen = document.querySelector('.calculator-screen')

function updateScreen(number) {
    calculatorScreen.value = number;
}

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener("click",(event) => {
        updateScreen(event.target.value);
    })
})

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

function inputNumber(number) {
    currentNumber = number;
}1

numbers.forEach((number) => {
    number.addEventListener("click",(event) =>{
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    })
})

function inputNumber(number) {
    if (currentNumber === '0') {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
}

function inputOperator(operator) {
    prevNumber = currentNumber;
    calculationOperator = operator;
    currentNumber = '';
}

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
    operator.addEventListener("click", (event) =>{
        event.preventDefault();
        inputOperator(event.target.value);
        console.log(event.target.value);
    })
})

function calculate() {
    let result = '';
    switch (calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        default:
            return;
    }
    currentNumber = result;
    calculationOperator = '';
    console.log(result)
}

const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener('click', ()=>{
    calculate();
    updateScreen(currentNumber);
})

function clearAll() {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';
}

const clearBtn = document.querySelector('.all-clear');

clearBtn.addEventListener('click',() => {
    clearAll();
    updateScreen(currentNumber);
})

inputDecimal = (dot) => {
    currentNumber += dot
}

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click',(event) => {
    console.log("decimal");
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
})

const percentage = document.querySelector ('.percentage');

percentage.addEventListener ('click',() => {
    calculatePercentage ();
}) ;

const calculatePercentage = () => {
    let result = parseFloat (currentNumber) / 100;
    updateScreen (result);11
}