let keys = document.querySelectorAll('.key');
let display = document.querySelector('.display');
let clear = document.querySelector('.clear');
let space = document.querySelector('.space');
display.textContent = '';

for (let key of keys) {
    key.onclick = function() {
        display.textContent += key.textContent;
    }
}

clear.onclick = function() {
    display.textContent = '';
}
space.onclick = function() {
    display.textContent += ' ';
}