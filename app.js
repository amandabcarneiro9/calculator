document.addEventListener("DOMContentLoaded", function () {
  createCalculator();
});

function createCalculator() {
  const calculator = document.querySelector(".calculator");
  const display = document.querySelector(".calculator__display");
  const keys = calculator.querySelector(".calculator__keys");
  const calculatorState = {
    operationToExecute: null,
    shouldCleanUpVisor: false,
    savedNumber: null,
  };

  applyNumberKeys(calculator, display, calculatorState);

  apllyOperatorKeys(display, calculatorState, keys);

  equalKey(calculator, calculatorState, display);

  decimalKey(calculator, calculatorState, display);

  clearKey(calculator, calculatorState, display);
}

// action === "subtract" ||
// action === "multiply" ||
// action === "divide"
