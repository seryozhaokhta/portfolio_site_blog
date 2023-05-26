const themeSwitch = document.getElementById('theme');

document.addEventListener('DOMContentLoaded', (event) => {
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.body.classList.add(currentTheme);

        themeSwitch.checked = currentTheme === 'light-theme';
    } else {

        document.body.classList.add('light-theme');
        localStorage.setItem('theme', 'light-theme');
    }
});

themeSwitch.addEventListener('change', function () {
    const body = document.body;
    if (themeSwitch.checked) {
        body.classList.replace('dark-theme', 'light-theme');
        localStorage.setItem('theme', 'light-theme');
    } else {
        body.classList.replace('light-theme', 'dark-theme');
        localStorage.setItem('theme', 'dark-theme');
    }
});

function copyToClipboard(email) {
    navigator.clipboard.writeText(email).then(function () {

        let emailText = document.getElementById("email-text");
        emailText.textContent = "copy!";
        setTimeout(function () {
            emailText.textContent = email;}, 2000);
    }, function () {
        console.error("Failed to copy text to clipboard.");
    });
}