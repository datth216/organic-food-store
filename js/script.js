const openNavbar = document.querySelector(".nav--open");
const closeNavbar = document.querySelector(".nav--close");
const navbar = document.querySelector(".nav");
const loader = document.querySelector(".loader");

window.addEventListener("load", function () {
  loader.classList.add("hidden");
});

openNavbar.addEventListener("click", function () {
  navbar.classList.add("right-0");
});

closeNavbar.addEventListener("click", function () {
  navbar.classList.remove("right-0");
});
