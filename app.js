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

  applyNumberKeys(calculator, display, calculatorState);
  apllyOperatorKeys(display, calculatorState, keys);
  const equal = equalKey(calculator, calculatorState, display);
  decimalKey(calculator, calculatorState, display);
  const clear = clearKey(calculator, calculatorState, display);

  document.body.addEventListener("keydown", (event) => {
    console.log(event);
    if (event.key === "Enter") return equal();
    if (["Backspace", "Escape"].includes(event.key)) return clear();
  });
}
