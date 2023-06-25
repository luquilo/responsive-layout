// make the drawer appear
const drawerElement = document.querySelector('#drawer');
const hamburgerButtonElement = document.querySelector('#hamburger');
const mainElement = document.querySelector('main');

// make the drawer appearence
hamburgerButtonElement.addEventListener('click', event => {
    drawerElement.classList.toggle('open');
    event.stopPropagation();
})

// make the drawer disappear
mainElement.addEventListener('click', event => {
    drawerElement.classList.toggle('close');
    drawerElement.classList.remove('open');
    event.stopPropagation();
})

mainElement.addEventListener('click', event => {
    setTimeout(() => {
        drawerElement.classList.remove('close');
        event.stopPropagation()
    }, 500);
})