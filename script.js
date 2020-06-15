let keysLine = document.querySelector('.keys-line')
let display = document.querySelector('.display');
let clearButton = document.querySelector('.clear');
let space = document.querySelector('.space');
for (let key of keysLine) {
    key.onclick = function() {
        display.textContent += key.textContent;
    }
}
space.onclick = function() {

    console.log('click');
}