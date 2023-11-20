let memory = 0;
let currentDisplay = "0";

alert("C pra limpar, W pra M+, E pra M-, R pra MR");

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

document.addEventListener("keydown", function(event) {
    const key = event.key;

    if (key >= '0' && key <= '9') {
        insert(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        insert(key);
    } else if (key === 'w') {
        addToMemory();
    } else if (key === 'e') {
        subtractFromMemory();
    } else if (key === 'r') {
        recallMemory();
    } else if (key === 'c') {
        clean();
    } else if (key === 'q') {
        clearMemory();
    } else if (key === 'Enter') {
        calcular();
    }
});
