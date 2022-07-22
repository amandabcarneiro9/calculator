function decimalKey(calculator, calculatorState, display) {
  const pressedDecimal = calculator.querySelector(".key--decimal");
  pressedDecimal.addEventListener("click", () => {
    if (!display.textContent.includes(".")) {
      display.textContent += ".";
    }

    if (calculatorState.shouldCleanUpVisor) {
      calculatorState.shouldCleanUpVisor = false;
      display.textContent = "0.";
    }
    calculatorState.equalPressed = false;
  });
}
