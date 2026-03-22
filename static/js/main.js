const btn = document.getElementById("theme-toggle");
const body = document.body;

// Cargar preferencia guardada
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    body.classList.add(savedTheme);
}

// Cambiar tema
btn.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        btn.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        btn.textContent = "🌙";
    }
});