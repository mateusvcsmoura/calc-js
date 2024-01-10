const screen = document.querySelector('#screenInput');

export default function calculate () {
    const result = eval(screen.value);
    screen.value = result;
}
