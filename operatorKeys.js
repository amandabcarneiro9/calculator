function apllyOperatorKeys(calculator, display, calculatorState) {
  const keys = calculator.querySelector(".calculator__keys");
  const operators = keys.querySelectorAll(".key--operator");
  operators.forEach((operatorButton) =>
    operatorButton.addEventListener("click", pressOperator)
  );

  function pressOperator(e) {
    const operatorKey = e.currentTarget;
    const action = operatorKey.dataset.action;
    console.log(action);

    if (calculatorState.savedNumber !== null) {
      display.textContent = calculatorState.operationToExecute(
        calculatorState.savedNumber,
        parseFloat(display.textContent)
      );
    }
    if (action === "add") {
      calculatorState.operationToExecute = sum;
      calculatorState.shouldCleanUpVisor = true;
    }
    calculatorState.savedNumber = parseFloat(display.textContent);
  }
}
