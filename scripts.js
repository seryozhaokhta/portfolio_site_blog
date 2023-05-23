function copyToClipboard(text) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}


const enRuToggle = document.getElementById('enRuToggle');

enRuToggle.addEventListener('change', function () {
    if (enRuToggle.checked) {
        // Выполните действия при переключении на английский язык
    } else {
        // Выполните действия при переключении на русский язык
    }
});


function copyToClipboard(email) {
    navigator.clipboard.writeText(email).then(function () {
        // success
        let emailText = document.getElementById("email-text");
        emailText.textContent = "copy!";
        setTimeout(function () {
            emailText.textContent = email;
        }, 2000); // изменение текста восстанавливается через 2 секунды
    }, function () {
        // error
        console.error("Failed to copy text to clipboard.");
    });
}

