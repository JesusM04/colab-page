// DOM Elements
const themeToggle = document.getElementById("themeToggle")
const mobileMenuToggle = document.getElementById("mobileMenuToggle")
const mobileMenu = document.getElementById("mobileMenu")
const backToTopBtn = document.getElementById("backToTop")
const currentYearElements = document.querySelectorAll("#currentYear")

// Theme Toggle
function toggleTheme() {
  if (document.body.classList.contains("dark-theme")) {
    document.body.classList.remove("dark-theme")
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>'
    localStorage.setItem("theme", "light")
  } else {
    document.body.classList.add("dark-theme")
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>'
    localStorage.setItem("theme", "dark")
  }
}

// Check for saved theme preference
function loadTheme() {
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme")
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>'
  }
}

// Mobile Menu Toggle
function toggleMobileMenu() {
  mobileMenuToggle.classList.toggle("active")
  mobileMenu.classList.toggle("active")
}

// Back to Top Button
function handleScroll() {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("visible")
  } else {
    backToTopBtn.classList.remove("visible")
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

// Set Current Year in Footer
function setCurrentYear() {
  const year = new Date().getFullYear()
  currentYearElements.forEach((element) => {
    element.textContent = year
  })
}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  loadTheme()
  setCurrentYear()

  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme)
  }

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", toggleMobileMenu)
  }

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", scrollToTop)
    window.addEventListener("scroll", handleScroll)
  }
})
