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
    equalPressed: false,
  };

  const checkError = () => {
    if (display.textContent.includes("error")) {
      calculatorState.operationToExecute = null;
      calculatorState.shouldCleanUpVisor = true;
      calculatorState.savedNumber = null;
      calculatorState.equalPressed = false;
    }
  };

  applyNumberKeys(calculator, display, calculatorState);
  apllyOperatorKeys(display, calculatorState, keys, checkError);
  const equal = equalKey(calculator, calculatorState, display, checkError);
  decimalKey(calculator, calculatorState, display);
  const clear = clearKey(calculator, calculatorState, display);

  document.body.addEventListener("keydown", (event) => {
    console.log(event);
    if (event.key === "Enter") return equal();
    if (["Backspace", "Escape"].includes(event.key)) return clear();
  });
}
