// make the drawer appear
const drawerElement = document.querySelector("#drawer");
const hamburgerButtonElement = document.querySelector("#hamburger");
const mainElement = document.querySelector("main");

// make the drawer appear
hamburgerButtonElement.addEventListener("click", (event) => {
  drawerElement.classList.toggle("open");
  event.stopPropagation();
});

// make the drawer disappear
mainElement.addEventListener("click", (event) => {
  drawerElement.classList.toggle("close");
  drawerElement.classList.remove("open");
  event.stopPropagation();
});

// membuat fungsi sementara untuk menerapkan style ease-out css pada drawer
mainElement.addEventListener("click", (event) => {
  setTimeout(() => {
    drawerElement.classList.remove("close");
    event.stopPropagation();
  }, 500);
});
