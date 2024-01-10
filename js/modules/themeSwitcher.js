let root = document.documentElement;

export default function switchTheme () {
    if (document.body.dataset.theme === "dark") {
        root.style.setProperty('--body-color', '#fff');
        root.style.setProperty('--wrapper-color', '#c9c5c5');
        root.style.setProperty('--font-color', '#000');

        document.body.dataset.theme = "light";
    } else {
        root.style.setProperty('--body-color', '#262626');
        root.style.setProperty('--wrapper-color', '#313131');
        root.style.setProperty('--font-color', '#fffafa');

        document.body.dataset.theme = "dark";
    }
}

