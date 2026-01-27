const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".mobile-overlay");

function openMenu() {
  sidebar.classList.add("active");
  overlay.classList.add("active");
  menuToggle.classList.add("active");
}

function closeMenu() {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
  menuToggle.classList.remove("active");
}

menuToggle.addEventListener("click", () => {
  const isOpen = sidebar.classList.contains("active");
  isOpen ? closeMenu() : openMenu();
});

overlay.addEventListener("click", closeMenu);

/* fecha menu ao trocar de página */
document.querySelectorAll(".sidebar-nav a").forEach(link => {
  link.addEventListener("click", closeMenu);
});