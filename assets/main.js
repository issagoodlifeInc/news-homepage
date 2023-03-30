const menu = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav--list");

menu.addEventListener("click", () => {
  menu.classList.toggle("open");
  navlinks.classList.toggle("addnav");
});
