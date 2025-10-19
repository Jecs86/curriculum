window.addEventListener("scroll", function() {
    const body = document.body;
    if (window.scrollY > 50) {
        body.classList.add("scrolled");
    } else {
        body.classList.remove("scrolled");
    }
});

const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    menuToggle.textContent = nav.classList.contains("active") ? "✕" : "☰";
});