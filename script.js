const display = document.querySelector('.calcuator.input');
const keys = document.querySelector(`.calculator-keys`);

let displayValue = '0';

updateDisplay();

function updateDisplay(){
    display.value = displayValue;
}

keys.addEventListener(`click`, function(e){
    const element = e.target;

    if(!element.matches(`button`)) return;

    if()
    console.log(element);
});