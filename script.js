// Get references to the display input fields
const result = document.getElementById("result");
const ansResult = document.getElementById("ans_result");

// Get the container of all buttons for event delegation
const buttonsContainer = document.querySelector(".buttons");

// Add event listener on buttons container for click events
buttonsContainer.addEventListener("click", (event) => {
  // Find the closest button element from the clicked target
  const btn = event.target.closest("button");
  if (!btn) return; // If clicked outside a button, do nothing

  // Get the data-value attribute of the clicked button
  const value = btn.getAttribute("data-value");

  // Handle button actions based on the value
  if (value === "AC") {
    clearResult(); // Clear all inputs
  } else if (value === "C") {
    removeLastValue(); // Remove last character
  } else if (value === "=") {
    calculateResult(); // Calculate and show result
  } else {
    appendValue(value); // Append clicked button value to input
  }
});

// Append a value (number/operator) to the main display
function appendValue(value) {
  // Replace initial zero unless input is decimal point
  if (result.value === "0" && value !== ".") {
    result.value = "";
  }
  result.value += value;
}

// Clear main display input fields
function clearResult() {
  result.value = "";
}

// Remove the last character from the main display
function removeLastValue() {
  result.value = result.value.slice(0, -1);
}

// Calculate the expression in the main display and show the result
function calculateResult() {
  if (!result.value) {
    result.value = "0"; // If empty input, default to zero
    return;
  }
  // Evaluate the mathematical expression
  const evalResult = eval(result.value);
  result.value = evalResult;
  ansResult.value = `Ans = ${evalResult}`;
}
