
import './style.css';
import home from './scripts/home.js';
import menu from './scripts/menu.js';

const navbar = document.querySelector('nav');
navbar.querySelector('#home').addEventListener('click', home);
navbar.querySelector('#menu').addEventListener('click', menu);
home();