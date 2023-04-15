const menu = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav--list");
const body = document.querySelector("body");
const overlay = document.querySelector("#overlay");

menu.addEventListener("click", () => {
  menu.classList.toggle("open");
  navlinks.classList.toggle("addnav");
  body.classList.toggle("lock-scroll");
  overlay.classList.toggle("overlay-on");
});
