const display = document.getElementById("Numbers");
const buttons = document.querySelectorAll(".button");
const clearBtn = document.getElementById("DE");

let expression = "";

// Handle button clicks
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "=") {
      calculate();
      return;
    }

    if (value === "DE") {
      clearAll();
      return;
    }

    addToExpression(value);
  });
});

// Handle Enter key
display.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    calculate();
  }
});

function addToExpression(value) {
  const operators = ["+", "-", "*", "÷"];
  const lastChar = expression.slice(-1);

  if (operators.includes(value) && operators.includes(lastChar)) {
    return;
  }

  expression += value;
  display.value = expression;
}

function calculate() {
  try {
    const safeExpression = expression.replace(/÷/g, "/");
    const result = eval(safeExpression);

    display.value = result;
    expression = result.toString();
  } catch {
    display.value = "Error";
    expression = "";
  }
}

function clearAll() {
  expression = "";
  display.value = "";
}
