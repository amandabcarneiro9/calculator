function clearKey(calculator, calculatorState, display) {
  const pressedClearKey = calculator.querySelector(".key--clear");
  pressedClearKey.addEventListener("click", () => {
    display.textContent = "0";
    calculatorState.operationToExecute = null;
    calculatorState.shouldCleanUpVisor = false;
    calculatorState.savedNumber = null;
    console.log("clear");
  });
}
