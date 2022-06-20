var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
    if(currentNumber === 0) return 0;
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}