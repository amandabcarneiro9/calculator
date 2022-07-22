function clearKey(calculator, calculatorState, display) {
  const pressedClearKey = calculator.querySelector(".key--clear");
  const clear = () => {
    display.textContent = "0";
    calculatorState.operationToExecute = null;
    calculatorState.shouldCleanUpVisor = false;
    calculatorState.savedNumber = null;
    calculatorState.equalPressed = false;
    console.log("clear");
  };
  pressedClearKey.addEventListener("click", clear);
  return clear;
}
