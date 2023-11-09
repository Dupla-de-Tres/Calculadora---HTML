let memory = 0;
let currentDisplay = "0";

function clearMemory() {
    memory = 0;
}

function recallMemory() {
    currentDisplay = memory.toString();
    updateDisplay();
}

function addToMemory() {
    const currentValue = parseFloat(currentDisplay);
    memory += currentValue;
}

function subtractFromMemory() {
    const currentValue = parseFloat(currentDisplay);
    memory -= currentValue;
}

function insert(num) {
    if (currentDisplay === "0" && num !== ".") {
        currentDisplay = num;
    } else {
        currentDisplay += num;
    }
    updateDisplay();
}

function clean() {
    currentDisplay = "0";
    updateDisplay();
}

function calcular() {
    try {
        currentDisplay = eval(currentDisplay);
    } catch (error) {
        currentDisplay = "Erro";
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("resultado").innerHTML = currentDisplay;
}

function inverteUltimoNumero() {
  const currentValue = parseFloat(currentDisplay);
  currentDisplay = currentValue * -1;
  updateDisplay();
}

document.querySelector("#±").addEventListener("click", inverteUltimoNumero);