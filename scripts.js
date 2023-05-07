"use strict";

// variables needed for functionality of site
let calculation = {
  firstNumber: "0",
  secondNumber: "0",
  operator: "",
  result: "0",
};
let displayValue = "0";
let calcHistory = [];

// mathmatic operations
function addition(calculation) {
  calculation.result =
    Number(calculation.firstNumber) + Number(calculation.secondNumber);
  return;
}

function subtraction(calculation) {
  calculation.result =
    Number(calculation.firstNumber) - Number(calculation.secondNumber);
  return;
}

function multiplication(calculation) {
  calculation.result =
    Number(calculation.firstNumber) * Number(calculation.secondNumber);
  return;
}

function division(calculation) {
  calculation.result =
    Number(calculation.firstNumber) / Number(calculation.secondNumber);
  return;
}

function percentage(calculation) {
  calculation.result =
    (Number(calculation.firstNumber) / 100) * Number(calculation.secondNumber);
  return;
}

// clearing data between calculations
function stateReset(calculation) {
  calculation.operator = "";
  calculation.firstNumber = "0";
  calculation.secondNumber = "0";
  calculation.result = "0";
  return;
}

// calculate called by on click listener for equals sign
function calculate(calculation) {
  let result;
  switch (calculation.operator) {
    case "+":
      addition(calculation);
      break;
    case "-":
      subtraction(calculation);
      break;
    case "*":
      multiplication(calculation);
      break;
    case "/":
      if (secondNumber != 0) {
        division(calculation);
        break;
      } else {
        calculation.result = "Div by Zero Error";
      }
    case "%":
      percentage(calculation);
      break;
    default:
      console.error(
        "An Error occured:",
        calculation.firstNumber,
        calculation.operator,
        calculation.secondNumber
      );
      break;
  }

  calcHistory.push(calculation);
  console.table(calcHistory);
  stateReset(calculation);
  return result;
}

// creating programatic access to on screen elemets
const txtOutput = document.querySelector("#output");
const btnZero = document.querySelector("#zero");
if (calculation.operator == "") {
  calculation.firstNumber += "0";
}
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
