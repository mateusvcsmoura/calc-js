import handleClick from './modules/handleButtonClick.js';
import clearScreen from './modules/clearScreen.js';
import calculate from './modules/calculate.js';
import switchTheme from './modules/themeSwitcher.js';

const charKey = document.querySelectorAll('.char-key');
const clearBtn = document.getElementById('clear');
const equalBtn = document.getElementById('equal');
const themeSwitcher = document.querySelector('#themeSwitcher');

const allowedKeys = ["(", ")", "/", "*", "-", "+", ".", "%", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const input = document.getElementById('screenInput');

document.querySelectorAll(".charKey").forEach((charKey) => {
    charKey.addEventListener('click', () => {
        input.value += charKey.dataset.value;
    });
});

input.addEventListener('keydown', (ev) => {
    ev.preventDefault();

    if (allowedKeys.includes(ev.key)) {
        input.value += ev.key;
    }

    if (ev.key === "Enter") {
        if (input.value === "") {
            alert('Error! Type something.');
        } else {
            calculate();
        }
    }

    if (ev.key === "Backspace") {
        input.value = input.value.slice(0, -1);
    }
})

charKey.forEach((button) => {
    button.addEventListener('click', handleClick(button));
});
clearBtn.addEventListener('click', clearScreen);
equalBtn.addEventListener('click', calculate);
themeSwitcher.addEventListener('click', switchTheme);

