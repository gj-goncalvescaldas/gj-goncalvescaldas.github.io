document.addEventListener("DOMContentLoaded", function() {
    const welcomeButton = document.getElementById("welcome-button");
    const themeToggle = document.getElementById("theme-toggle");

    welcomeButton.addEventListener("click", function() {
        alert("¡Bienvenidos a mi perfil profesional!");
    });

    themeToggle.addEventListener("change", function() {
        if (themeToggle.checked) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    });
});
