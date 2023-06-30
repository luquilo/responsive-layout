import 'regenerator-runtime'; /* for async await transpile */

// import css
import '../styles/main.css';
import '../styles/small.css';
import '../styles/medium.css';
import '../styles/large.css';
import '../styles/x-large.css';


// import gambar
const heroImageElement = document.getElementsByClassName('hero-image')[0];
import heroImageUrl from '../public/images/hero-image_2.jpg';
console.log(heroImageUrl)
console.log(heroImageElement)

heroImageElement.setAttribute('src', heroImageUrl);







import '../scripts/drawer-script.js';


// this is comment

console.log('Hello Coders! :)');
