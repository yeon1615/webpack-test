import { plus } from './plus.js';
import './style.css';
import tiger from './images/tiger.png';

console.log(plus(3, 7));

document.addEventListener('DOMContentLoaded', () => {
  document.body.innerHTML = `<img src=${tiger}>`;
});
