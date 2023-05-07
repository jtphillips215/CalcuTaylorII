"use strict";

// variables needed for functionality of site
const calculation = {
  firstNumber: "",
  secondNumber: "",
  operator: "",
  result: "",
};
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
  calculation.firstNumber = "";
  calculation.secondNumber = "";
  calculation.result = "";
  return;
}

// calculate called by on click listener for equals sign
function calculate(calculation) {
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
  updateUI(calculation);
  return;
}

// function for number click events as it's a reusable and repeatable event
function numberClickEvent(calculation, button) {
  console.log(button);
  if (calculation.operator == "") {
    calculation.firstNumber += `${button}`;
  } else {
    calculation.secondNumber += `${button}`;
  }
  updateUI(calculation);
  return;
}

// function for operator signs as it's a reusable and repeatable event
function operatorClickEvent(calculation, button) {
  console.log(button);
  if (calculation.operator == "") {
    calculation.operator = `${button}`;
  } else {
    calculation.operator = `${button}`;
  }
  updateUI(calculation);
  return;
}

function flipSignClickEvent(calculation) {
  if (calculation.operator == "") {
    //
  } else {
    //
  }
}

function decimalClickEvent(calculation) {
  //
}

function updateUI(calculation) {
  if (calculation.operator == "") {
    txtOutput.textContent = `${calculation.firstNumber}`;
  }
  if (calculation.operator != "") {
    txtOutput.textContent += ` ${calculation.operator}`;
  }
  if (calculation.secondNumber != "") {
    txtOutput.textContent += ` ${calculation.secondNumber}`;
  }
  if (calculation.result != "") {
    txtOutput.textContent += ` ${calculation.result}`;
  }
}

// creating programatic access to on screen elemets
// on click listener for those elements
const txtOutput = document.querySelector("#output");

// number buttons
const btnZero = document.querySelector("#zero");
btnZero.addEventListener("click", () => numberClickEvent(calculation, "0"));
const btnOne = document.querySelector("#one");
btnOne.addEventListener("click", () => numberClickEvent(calculation, "1"));
const btnTwo = document.querySelector("#two");
btnTwo.addEventListener("click", () => numberClickEvent(calculation, "2"));
const btnThree = document.querySelector("#three");
btnThree.addEventListener("click", () => numberClickEvent(calculation, "3"));
const btnFour = document.querySelector("#four");
btnFour.addEventListener("click", () => numberClickEvent(calculation, "4"));
const btnFive = document.querySelector("#five");
btnFive.addEventListener("click", () => numberClickEvent(calculation, "5"));
const btnSix = document.querySelector("#six");
btnSix.addEventListener("click", () => numberClickEvent(calculation, "6"));
const btnSeven = document.querySelector("#seven");
btnSeven.addEventListener("click", () => numberClickEvent(calculation, "7"));
const btnEight = document.querySelector("#eight");
btnEight.addEventListener("click", () => numberClickEvent(calculation, "8"));
const btnNine = document.querySelector("#nine");
btnNine.addEventListener("click", () => numberClickEvent(calculation, "9"));

// operator buttons
const btnPct = document.querySelector("#percentage");
btnPct.addEventListener("click", () => operatorClickEvent(calculation, "%"));
const btnDivide = document.querySelector("#divide");
btnDivide.addEventListener("click", () => operatorClickEvent(calculation, "/"));
const btnMultiply = document.querySelector("#multiply");
btnMultiply.addEventListener("click", () =>
  operatorClickEvent(calculation, "*")
);
const btnSubtract = document.querySelector("#subtract");
btnSubtract.addEventListener("click", () =>
  operatorClickEvent(calculation, "-")
);
const btnAdd = document.querySelector("#add");
btnAdd.addEventListener("click", () => operatorClickEvent(calculation, "+"));

// misc buttons
const btnClear = document.querySelector("#clear");
btnClear.addEventListener("click", () => {
  stateReset(calculation);
  updateUI(calculation);
});
const btnFlipSign = document.querySelector("#flip-sign");
btnFlipSign.addEventListener("click", () => flipSignClickEvent(calculation));
const btnDecimal = document.querySelector("#decimal");
btnDecimal.addEventListener("click", () => decimalClickEvent(calculation));
const btnEquals = document.querySelector("#btn-equal");
btnEquals.addEventListener("click", () => {
  if (calculation.firstNumber != "" && calculation.secondNumber != "") {
    calculate(calculation);
    updateUI(calculation);
  }
});
