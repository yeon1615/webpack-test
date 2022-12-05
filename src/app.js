import { plus } from './plus.js';
import './style.css';
import tiger from './images/tiger.png';

console.log(plus(3, 7));

let env;
if (process.env.NODE_ENV === 'development') {
  env = dev;
} else {
  env = pro;
}
console.log('제대로 나올까? ' + env);
document.addEventListener('DOMContentLoaded', () => {
  document.body.innerHTML = `<img src=${tiger}>`;
});

console.log('여기는 app.js : ' + pw);
