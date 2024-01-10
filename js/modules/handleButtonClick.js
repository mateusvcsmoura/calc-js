const screen = document.querySelector('#screenInput');

export default function handleClick (button) {
    button.addEventListener('click', () => {
        screen.value += button.dataset.value;
    });
}
