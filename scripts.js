"use strict";

// variables needed for functionality of site
let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let displayValue = "0";
let calcHistory = [];

// mathmatic operations
function addition(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

function subtraction(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}

function multiplication(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

function division(firstNumber, secondNumber) {
  return firstNumber / secondNumber;
}

function percentage(firstNumber, secondNumber) {
  return (firstNumber / 100) * secondNumber;
}

// clearing data between calculations
function stateReset(operator, firstNumber, secondNumber) {
  operator = "";
  firstNumber = "";
  secondNumber = "";
  return;
}

// calculate called by on click listener for equals sign
function calculate(operator, firstNumber, secondNumber) {
  let result;
  switch (operator) {
    case "+":
      result = addition(firstNumber, secondNumber);
      break;
    case "-":
      result = subtraction(firstNumber, secondNumber);
      break;
    case "*":
      result = multiplication(firstNumber, secondNumber);
      break;
    case "/":
      if (secondNumber != 0) {
        result = division(firstNumber, secondNumber);
        break;
      } else {
        result = "Div by Zero Error";
      }
    case "%":
      result = percentage(firstNumber, secondNumber);
      break;
    default:
      console.error("An Error occured:", firstNumber, operator, secondNumber);
      break;
  }
  const calculation = {
    firstNumber: firstNumber,
    operator: operator,
    secondNumber: secondNumber,
    result: result,
  };
  calcHistory.push(calculation);
  console.table(calcHistory);
  return result;
}

// creating programatic access to on screen elemets
const txtOutput = document.querySelector("#output");
const btnZero = document.querySelector("#zero");
const btnOne = document.querySelector("#one");
const btnTwo = document.querySelector("#two");
const btnThree = document.querySelector("#three");
const btnFour = document.querySelector("#four");
const btnFive = document.querySelector("#five");
const btnSix = document.querySelector("#six");
const btnSeven = document.querySelector("#seven");
const btnEight = document.querySelector("#eight");
const btnNine = document.querySelector("#nine");
const btnFlipSign = document.querySelector("#flip-sign");
const btnPct = document.querySelector("#percentage");
const btnDivide = document.querySelector("#divide");
const btnDecimal = document.querySelector("#decimal");
const btnMultiply = document.querySelector("#multiply");
const btnSubtract = document.querySelector("#subtract");
const btnAdd = document.querySelector("#add");
const btnEquals = document.querySelector("#btn-equal");
