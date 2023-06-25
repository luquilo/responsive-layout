// make the drawer appear
const drawerElement = document.querySelector('#drawer');
const hamburgerButtonElement = document.querySelector('#hamburger');

hamburgerButtonElement.addEventListener('click', event => {
    drawerElement.classList.toggle('open');
    event.stopPropagation();
})

// make the drawer disappear
const mainElement = document.querySelector('main')

mainElement.addEventListener('click', event => {
    drawerElement.classList.remove('open');
    event.stopPropagation();
})