// Navigation bar - small screen hamburger functions
const navList = document.querySelector(".nav-link-list")
const hamburger = document.querySelector(".hamburger-sm")

hamburger.addEventListener("click", () => {
  navList.classList.toggle("nav-link-list--open")
  hamburger.classList.toggle("hamburger-sm--open")
})

navList.addEventListener("click", () => {
  navList.classList.remove("nav-link-list--open")
  hamburger.classList.remove("hamburger-sm--open")
})

// Booking form submission