const sobreMiItem = document.getElementById("sobre-mi-item");
const proyectosItem = document.getElementById("proyectos-item");
const curriculumItem = document.getElementById("curriculum-item");
const contactoItem = document.getElementById("contacto-item");
const navItems = [sobreMiItem, proyectosItem, curriculumItem, contactoItem];

const logo = document.getElementById("logo");

function hideMenuItems() {
  navItems.forEach((item) => {
    item.style.display = "none";
  });
}

function showMenuItems() {
  navItems.forEach((item) => {
    item.style.display = "block"; 
  });
}

function checkScreenSize() {
  if (window.innerWidth <= 700) {
    hideMenuItems();
  } else {
    showMenuItems();
  }
}

window.addEventListener("load", checkScreenSize);
window.addEventListener("resize", checkScreenSize);
