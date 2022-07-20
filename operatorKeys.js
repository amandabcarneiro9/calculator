function apllyOperatorKeys(display, calculatorState, keys) {
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
    if (action === "subtract") {
      calculatorState.operationToExecute = subtract;
      calculatorState.shouldCleanUpVisor = true;
    }
    if (action === "multiply") {
      calculatorState.operationToExecute = multiply;
      calculatorState.shouldCleanUpVisor = true;
    }
    if (action === "divide") {
      calculatorState.operationToExecute = divide;
      calculatorState.shouldCleanUpVisor = true;
    }
    // if (action === "calculate") {
    //   calculatorState.shouldCleanUpVisor = true;
    //   display.textContent = calculatorState.savedNumber;
    //   console.log("equal key!");
    // }
    calculatorState.savedNumber = parseFloat(display.textContent);
  }
}
