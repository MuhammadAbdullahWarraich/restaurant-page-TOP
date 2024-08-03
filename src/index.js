
import './style.css';
import home from './scripts/home.js';
import menu from './scripts/menu.js';
import contactUs from './scripts/contact-us.js';

const navbar = document.querySelector('nav');
navbar.querySelector('#home').addEventListener('click', home);
navbar.querySelector('#menu').addEventListener('click', menu);
navbar.querySelector('#contact-us').addEventListener('click', contactUs);
home();