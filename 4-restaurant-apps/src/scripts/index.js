import 'regenerator-runtime'; /* for async await transpile */
import '../scripts/drawer-script.js';

// import css
import '../styles/main.css';
import '../styles/small.css';
import '../styles/medium.css';
import '../styles/large.css';
import '../styles/x-large.css';


// import gambar
const heroImageElement = document.getElementsByClassName('hero-image')[0];
import heroImageUrl from '../public/images/hero-image_2.jpg';

heroImageElement.setAttribute('src', heroImageUrl);