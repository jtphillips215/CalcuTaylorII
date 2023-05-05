"use strict";

// variables needed for functionality of site
let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let displayValue = "0";

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
      break;
  }
  return result;
}
