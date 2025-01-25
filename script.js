let ismenuopen = 0;
let menuIcon = document.getElementsByClassName("menu-icon")[0];
let bxmenu = document.getElementsByClassName("bx-menu")[0];
let list = document.getElementsByClassName("list")[0];
function openMenu() {
  if (ismenuopen === 0) {
    menuIcon.classList.add("active-menu-icon");
    list.classList.add("active-list");
    ismenuopen = 1;
  } else if (ismenuopen === 1) {
    menuIcon.classList.remove("active-menu-icon");
    list.classList.remove("active-list");
    ismenuopen = 0;
  }
}
bxmenu.addEventListener("click", openMenu);