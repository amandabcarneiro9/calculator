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

  keys.addEventListener("click", (e) => {
    console.log("aqui");
    const key = e.target;
    const action = key.dataset.action;

    const displayedNum = display.textContent;

    if (!e.target.matches("button")) return;

    if (!action) {
      return;
    }

    if (action === "decimal") {
      console.log("decimal key!");
      display.textContent = displayedNum + ".";
    }

    if (action === "clear") {
      console.log("clear key!");
    }
  });
}

// action === "subtract" ||
// action === "multiply" ||
// action === "divide"
