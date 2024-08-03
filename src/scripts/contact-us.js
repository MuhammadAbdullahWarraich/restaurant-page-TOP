import contacts from "./contact-us-items.js";

export default function init() {
    const content = document.getElementById('content');
    content.innerHTML = "";
    content.appendChild(component('h1', "Contact Us"));
    for (const contact of contacts) {
        content.appendChild(makeCard(contact));
    }
}
function component(tag, content) {
    const el = document.createElement(tag);
    el.innerHTML = content;
    return el;
}
function makeCard(item) {
    const {title, post, telephone, email} = item;
    const card = document.createElement('div');
    card.classList.add('menu-card');

    card.appendChild(component('h3', title));
    card.appendChild(component('p', post));
    card.appendChild(component('p', telephone));
    card.appendChild(component('p', email));

    return card;
}