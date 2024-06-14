document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Comprobar si el tema oscuro está habilitado en localStorage
    if (localStorage.getItem("dark-mode") === "true") {
        body.classList.add("dark-mode");
        themeToggle.checked = true;
    }

    themeToggle.addEventListener("change", function() {
        body.classList.toggle("dark-mode");
        // Guardar la preferencia en localStorage
        localStorage.setItem("dark-mode", body.classList.contains("dark-mode"));
    });
});
