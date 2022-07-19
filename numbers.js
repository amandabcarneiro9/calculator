function applyNumberKeys(calculator, display, calculatorState) {
  const numberKeys = calculator.querySelectorAll(".calculator__keys .__number");
  numberKeys.forEach((numberButton) =>
    numberButton.addEventListener("click", pressNumber)
  );

  function pressNumber(e) {
    const key = e.currentTarget;
    const keyContent = key.textContent;

    if (display.textContent === "0" || calculatorState.shouldCleanUpVisor) {
      display.textContent = keyContent;
      calculatorState.shouldCleanUpVisor = false;
    } else {
      display.textContent += keyContent;
    }
  }
}
