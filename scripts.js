"use strict";

// variables needed for functionality of site
let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";
let display = "";
let calcHistory = [];

// mathmatic operations
function addition() {
  return Number(firstNumber) + Number(secondNumber);
}

function subtraction() {
  return Number(firstNumber) - Number(secondNumber);
}

function multiplication() {
  return Number(firstNumber) * Number(secondNumber);
}

function division() {
  return Number(firstNumber) / Number(secondNumber);
}

function percentage() {
  return (Number(firstNumber) / 100) * Number(secondNumber);
}

// clearing data between calculations
function stateReset() {
  operator = "";
  firstNumber = "";
  secondNumber = "";
  result = "";
  return;
}

// calculate called by on click listener for equals sign
function calculate() {
  switch (operator) {
    case "+":
      result = addition();
      break;
    case "-":
      result = subtraction();
      break;
    case "*":
      result = multiplication();
      break;
    case "/":
      if (secondNumber != 0) {
        result = division();
        break;
      } else {
        result = "Can't Div by 0";
        break;
      }
    case "%":
      result = percentage();
      break;
    default:
      console.error(
        "An Error occured:",
        firstNumber,
        operator,
        secondNumber,
        result
      );
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
  updateUI();
  stateReset();
  return;
}

// function for number click events as it's a reusable and repeatable event
function numberClickEvent(button) {
  if (operator == "") {
    if (firstNumber.length < 9) {
      firstNumber += `${button}`;
    }
  } else {
    if (secondNumber.length < 9) {
      secondNumber += `${button}`;
    }
  }
  updateUI();
  return;
}

// function for operator signs as it's a reusable and repeatable event
function operatorClickEvent(button) {
  operator = `${button}`;
  updateUI();
  return;
}

// function for adding decimal to number
function decimalClickEvent() {
  if (operator != "") {
    if (secondNumber.includes(".")) {
      return;
    } else {
      if (secondNumber == "") {
        secondNumber += "0";
      }
      secondNumber += ".";
      updateUI();
      return;
    }
  }
  if (firstNumber.includes(".")) {
    retrun;
  } else {
    if (firstNumber == "") {
      firstNumber += "0";
    }
    firstNumber += ".";
    updateUI();
    return;
  }
}

// function for deleting single number. Acts as clear after calculation is completed
function deleteClickEvent() {
  if (firstNumber == "" && secondNumber == "") {
    updateUI();
    return;
  } else if (secondNumber != "") {
    const replacementString = secondNumber.substring(
      0,
      secondNumber.length - 1
    );
    secondNumber = replacementString;
    updateUI();
    return;
  } else {
    const replacementString = firstNumber.substring(0, firstNumber.length - 1);
    firstNumber = replacementString;
    updateUI();
    return;
  }
}

// function updates the UI after each user interaction
function updateUI() {
  display = `${firstNumber} ${operator}<br/>${secondNumber}`;
  if (result != "") {
    display += ` =</br>${result}`;
  }
  txtOutput.innerHTML = display;
}

// creating programatic access to on screen elemets
// on click listener for those elements
const txtOutput = document.querySelector("#output");

// number buttons
const btnZero = document.querySelector("#zero");
btnZero.addEventListener("click", () => numberClickEvent("0"));
const btnOne = document.querySelector("#one");
btnOne.addEventListener("click", () => numberClickEvent("1"));
const btnTwo = document.querySelector("#two");
btnTwo.addEventListener("click", () => numberClickEvent("2"));
const btnThree = document.querySelector("#three");
btnThree.addEventListener("click", () => numberClickEvent("3"));
const btnFour = document.querySelector("#four");
btnFour.addEventListener("click", () => numberClickEvent("4"));
const btnFive = document.querySelector("#five");
btnFive.addEventListener("click", () => numberClickEvent("5"));
const btnSix = document.querySelector("#six");
btnSix.addEventListener("click", () => numberClickEvent("6"));
const btnSeven = document.querySelector("#seven");
btnSeven.addEventListener("click", () => numberClickEvent("7"));
const btnEight = document.querySelector("#eight");
btnEight.addEventListener("click", () => numberClickEvent("8"));
const btnNine = document.querySelector("#nine");
btnNine.addEventListener("click", () => numberClickEvent("9"));

// operator buttons
const btnPct = document.querySelector("#percentage");
btnPct.addEventListener("click", () => operatorClickEvent("%"));
const btnDivide = document.querySelector("#divide");
btnDivide.addEventListener("click", () => operatorClickEvent("/"));
const btnMultiply = document.querySelector("#multiply");
btnMultiply.addEventListener("click", () => operatorClickEvent("*"));
const btnSubtract = document.querySelector("#subtract");
btnSubtract.addEventListener("click", () => operatorClickEvent("-"));
const btnAdd = document.querySelector("#add");
btnAdd.addEventListener("click", () => operatorClickEvent("+"));

// misc buttons
const btnClear = document.querySelector("#clear");
btnClear.addEventListener("click", () => {
  stateReset();
  updateUI();
});
const btnDelete = document.querySelector("#delete");
btnDelete.addEventListener("click", () => deleteClickEvent());
const btnDecimal = document.querySelector("#decimal");
btnDecimal.addEventListener("click", () => decimalClickEvent());
const btnEquals = document.querySelector("#btn-equal");
btnEquals.addEventListener("click", () => {
  if (secondNumber != "") {
    calculate();
  }
});
