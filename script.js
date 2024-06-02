let menuitem = document.getElementById("menuitem");
let nav = document.getElementById("nav");
function openmenu() {
  menuitem.style.height = "40vh";
  // signin.style.display = "flex";
  btn.style.display = "block";

  //   alert("you clicked open");
}
function closemenu() {
  menuitem.style.height = "0";
  btn.style.display = "none";

  // alert("you clicked open");
}
// if (window.scrollY > 200) {
//   nav.classList.add("fixednav");
// } else nav.classList.add(".nav-container");
