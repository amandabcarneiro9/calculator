document.addEventListener("DOMContentLoaded", function () {
  createCalculator();
});

function createCalculator() {
  const calculator = document.querySelector(".calculator");
  const keys = calculator.querySelector(".calculator__keys");
  const display = document.querySelector(".calculator__display");

  const calculatorState = {
    operationToExecute: null,
    shouldCleanUpVisor: false,
    savedNumber: null,
  };

  applyNumberKeys(calculator, display, calculatorState);

  apllyOperatorKeys(calculator, display, calculatorState);

  // const operators = keys.querySelectorAll(".key--operator");
  // operators.forEach((operatorButton) =>
  //   operatorButton.addEventListener("click", pressOperator)
  // );

  // function pressOperator(e) {
  //   const operatorKey = e.currentTarget;
  //   const action = operatorKey.dataset.action;
  //   console.log(action);

  //   if (calculatorState.savedNumber !== null) {
  //     display.textContent = calculatorState.operationToExecute(
  //       calculatorState.savedNumber,
  //       parseFloat(display.textContent)
  //     );
  //   }
  //   if (action === "add") {
  //     calculatorState.operationToExecute = sum;
  //     calculatorState.shouldCleanUpVisor = true;
  //   }
  //   calculatorState.savedNumber = parseFloat(display.textContent);
  // }

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

    if (action === "calculate") {
      console.log("equal key!");
    }
  });
}

// action === "subtract" ||
// action === "multiply" ||
// action === "divide"
