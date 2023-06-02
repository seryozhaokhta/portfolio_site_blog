const themeSwitch = document.getElementById('theme');

document.addEventListener('DOMContentLoaded', (event) => {
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.body.classList.add(currentTheme);
        themeSwitch.checked = currentTheme === 'light-theme';
        updateIconColors(currentTheme);
    } else {
        document.body.classList.add('light-theme');
        localStorage.setItem('theme', 'light-theme');
        updateIconColors('light-theme');
    }

    const expandIcons = document.querySelectorAll('.expand-icon');
    const collapseIcons = document.querySelectorAll('.collapse-icon');
    const descriptions = document.querySelectorAll('.description');

    expandIcons.forEach((icon, index) => {
        icon.addEventListener('click', () => {
            descriptions.forEach((description, descriptionIndex) => {
                if (description.style.maxHeight === '100px') {
                    description.style.maxHeight = '0';
                    expandIcons[descriptionIndex].style.display = 'block';
                    collapseIcons[descriptionIndex].style.display = 'none';
                }
            });

            descriptions[index].style.maxHeight = '100px';
            icon.style.display = 'none';
            collapseIcons[index].style.display = 'block';
        });
    });

    collapseIcons.forEach((icon, index) => {
        icon.addEventListener('click', () => {
            descriptions[index].style.maxHeight = '0';
            icon.style.display = 'none';
            expandIcons[index].style.display = 'block';
        });
    });
});

themeSwitch.addEventListener('change', function () {
    const body = document.body;
    if (themeSwitch.checked) {
        body.classList.replace('dark-theme', 'light-theme');
        localStorage.setItem('theme', 'light-theme');
        updateIconColors('light-theme');
    } else {
        body.classList.replace('light-theme', 'dark-theme');
        localStorage.setItem('theme', 'dark-theme');
        updateIconColors('dark-theme');
    }
});

function copyToClipboard(email) {
    navigator.clipboard.writeText(email).then(function () {
        let emailText = document.getElementById("email-text");
        emailText.textContent = "copy!";
        setTimeout(function () {
            emailText.textContent = email;
        }, 2000);
    }, function () {
        console.error("Failed to copy text to clipboard.");
    });
}

function updateIconColors(theme) {
    const iconColor = theme === 'light-theme' ? '#000000' : '#ffffff';
    const icons = document.querySelectorAll('.icon, .expand-icon, .collapse-icon');
    icons.forEach(icon => {
        icon.style.fill = iconColor;
    });
}
