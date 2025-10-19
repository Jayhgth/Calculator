const display = document.getElementById("display");
const numberButtons = document.getElementsByClassName("number");
let num1;
let operator;
let pressed = false;

document.addEventListener(`keydown`, () => {
  if (event.key === "Backspace") {
    reduceDisplay();
  }
});

Array.from(numberButtons).forEach((button) => {
  button.addEventListener("click", () => {
    if (display.value < 99999999) {
      appendToDisplay(button.innerText);
    }
  });
});

function appendToDisplay(value) {
  if (display.value === "0" || display.value === "NaN") {
    display.value = value;
  } else {
    display.value += value;
  }
}
function reduceDisplay() {
  display.value = display.value.slice(0, -1);
}
function clearScreen() {
  display.value = "0";
}

function clearAll() {
  display.value = "0";
  num1 = undefined;
}

function switchSign() {
  display.value = Number(display.value) * -1;
}

function decimalPoint() {
  if (!display.value.includes(".")) {
    display.value += ".";
  }
}

function operatorClick(op) {
  num1 = Number(display.value);
  display.value = "0";
  pressed = true;
  operator = op;
}

function calculate() {
  if (pressed) {
    switch (operator) {
      case "add":
        showResult(num1 + Number(display.value));
        break;
      case "subtract":
        showResult(num1 - Number(display.value));
        break;
      case "multiply":
        showResult(num1 * Number(display.value));
        break;
      case "divide":
        showResult(num1 / Number(display.value));
        break;
    }
    pressed = false;
  }
}

function showResult(input) {
  if (input < 99999999) {
    display.value = input;
  } else {
    display.value = "Too Large";
  }
}
