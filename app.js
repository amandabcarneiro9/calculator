const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator__keys");
const display = document.querySelector(".calculator__display");
// const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

keys.addEventListener("click", (e) => {
  const key = e.target;
  const action = key.dataset.action;
  const keyContent = key.textContent;
  const displayedNum = display.textContent;

  if (e.target.matches("button")) {
  }
  if (!action) {
    if (displayedNum === "0") {
      display.textContent = keyContent;
    } else {
      display.textContent = displayedNum + keyContent;
    }
  }
  if (
    action === "add" ||
    action === "subtract" ||
    action === "multiply" ||
    action === "divide"
  ) {
    console.log("operator key!");
  }
  if (action === "decimal") {
    console.log("decimal key!");
  }

  if (action === "clear") {
    console.log("clear key!");
  }

  if (action === "calculate") {
    console.log("equal key!");
  }
});
