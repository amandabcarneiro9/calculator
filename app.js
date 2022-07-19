const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator__keys");

keys.addEventListener("click", (e) => {
  const key = e.target;
  const action = key.dataset.action;
  if (e.target.matches("button")) {
  }
  if (!action) {
    console.log("number key!");
  }
  if (
    action === "add" ||
    action === "subtract" ||
    action === "multiply" ||
    action === "divide"
  ) {
    console.log("operator key!");
  }
});
