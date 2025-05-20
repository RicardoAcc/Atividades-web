  const toggleThemeBtn = document.getElementById("toggle-theme");
  const menuToggleBtn = document.getElementById("menu-toggle");
  const navbarLinks = document.getElementById("navbar-links");

  toggleThemeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    toggleThemeBtn.textContent = document.body.classList.contains("dark-theme") ? "☀️" : "🌙";
  });

  menuToggleBtn.addEventListener("click", () => {
    navbarLinks.classList.toggle("show");
  });