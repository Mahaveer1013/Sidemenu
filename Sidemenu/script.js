const menu = document.querySelector(".menu");
const menuList = document.querySelector("ul");
menu.addEventListener("click", () => {
  menuList.classList.toggle("showMenu");
});
