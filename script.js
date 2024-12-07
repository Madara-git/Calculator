let display = document.getElementById("display");
let currentCalcValue = document.querySelector(".curren-calc");
let goBack = document.querySelector(".back");
function appendToDisPlay(input) {
  resetDelete();
  display.value += input;
}
function remove() {
  display.value = display.value.slice(0, -1);
}
function clearDisplay() {
  display.value = "";
  currentCalcValue.innerHTML = "";
  resetDelete();
}

function resetDelete() {
  if (goBack.hasAttribute("disabled")) {
    goBack.disabled = false;
    goBack.style.backgroundColor = "hsl(0, 0%, 30%)";
  }
}
function calculate() {
  try {
    let theValue = eval(display.value);
    currentCalc(display.value);
    goBack.disabled = true;
    goBack.style.backgroundColor = "rgb(255, 255, 255, 0.599)";
    if (theValue === Infinity || theValue === -Infinity) {
      display.value = 0;
    } else {
      display.value = theValue;
    }
  } catch (er) {
    if (er.message === "Unexpected end of input") return;
  }
}

function currentCalc(currenCalc) {
  currentCalcValue.innerHTML = currenCalc;
}
