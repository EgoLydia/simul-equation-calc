let numbers = document.getElementsByClassName("numbers");
let clearItem = document.getElementById("clearItem");
let finalResult = document.getElementById("finalResult");
let x1Input = document.getElementById("x1");
let y1Input = document.getElementById("y1");
let c1Input = document.getElementById("c1");
let x2Input = document.getElementById("x2");
let y2Input = document.getElementById("y2");
let c2Input = document.getElementById("c2");
let solve = document.getElementById("solve");
let dot = document.getElementById("dot");
let decimalAdded = false;
let activeInput = undefined;
let sign = document.getElementById("sign");

x1Input.addEventListener("focus", onFocus);
y1Input.addEventListener("focus", onFocus);
c1Input.addEventListener("focus", onFocus);
x2Input.addEventListener("focus", onFocus);
y2Input.addEventListener("focus", onFocus);
c2Input.addEventListener("focus", onFocus);
sign.addEventListener("click", switchSign);
solve.addEventListener("click", solveEquation);
clearItem.addEventListener("click", clear);
dot.addEventListener("click", dotNum);
function solveEquation() {
  let x1 = parseFloat(x1Input.value);
  let y1 = parseFloat(y1Input.value);
  let c1 = parseFloat(c1Input.value);
  let x2 = parseFloat(x2Input.value);
  let y2 = parseFloat(y2Input.value);
  let c2 = parseFloat(c2Input.value);
  if (
    isNaN(x1) ||
    isNaN(y1) ||
    isNaN(c1) ||
    isNaN(x2) ||
    isNaN(y2) ||
    isNaN(c2)
  ) {
    finalResult.innerHTML = "some invalid inputs";
    return;
  }
  let x = (c2 * y1 - c1 * y2) / (y1 * x2 - x1 * y2);
  let y = (c1 * x2 - c2 * x1) / (y1 * x2 - x1 * y2);
  finalResult.innerHTML = "x =" + x + " y=" + y;
}
function onFocus(e) {
  activeInput = e.target;
}

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", (e) => {
    if (!activeInput) return;

    activeInput.value += e.target.innerHTML;
  });
}

function switchSign() {
  if (!activeInput) return;

  activeInput.value =
    activeInput.value.charAt(0) === "-"
      ? activeInput.value.slice(1)
      : `-${activeInput.value}`;
}

function clear() {
  x1Input.value = "";
  y1Input.value = "";
  c1Input.value = "";
  x2Input.value = "";
  y2Input.value = "";
  c2Input.value = "";
  finalResult.innerHTML = "";
}

function dotNum(e) {
  if (!activeInput) return;

  if (activeInput.value.indexOf(".") === -1) {
    activeInput.value += e.target.innerHTML;
  }
}
