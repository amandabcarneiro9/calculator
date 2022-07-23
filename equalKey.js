function equalKey(calculator, calculatorState, display, checkError) {
  const buttonEqual = calculator.querySelector(".key--equal");
  const equal = () => {
    if (calculatorState.operationToExecute) {
      const lastNumber = parseFloat(display.textContent);
      display.textContent = calculatorState.operationToExecute(
        calculatorState.savedNumber,
        lastNumber
      );
      calculatorState.savedNumber = lastNumber;
      calculatorState.shouldCleanUpVisor = true;
      calculatorState.equalPressed = true;
      checkError();
    }
  };
  buttonEqual.addEventListener("click", equal);
  return equal;
}
