function equalKey(calculator, calculatorState, display) {
  const buttonEqual = calculator.querySelector(".key--equal");
  buttonEqual.addEventListener("click", () => {
    if (calculatorState.operationToExecute) {
      const lastNumber = parseFloat(display.textContent);
      display.textContent = calculatorState.operationToExecute(
        calculatorState.savedNumber,
        lastNumber
      );
      calculatorState.savedNumber = lastNumber;
      calculatorState.shouldCleanUpVisor = true;
    }
  });
}
