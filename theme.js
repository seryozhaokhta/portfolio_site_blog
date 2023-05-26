const themeSwitch = document.getElementById('theme');

themeSwitch.addEventListener('change', function () {
    const body = document.body;
    if (themeSwitch.checked) {
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
    } else {
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
    }
});
