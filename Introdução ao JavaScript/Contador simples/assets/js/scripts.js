var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;
var mensagemWrapper = document.getElementById("mensagem");
var mensagem = 0


document.getElementById("adicionar").addEventListener("click", increment);



function increment() {
    if (currentNumber < 120) {
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
}

function decrement() {
    if (currentNumber > -3) {
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
}
