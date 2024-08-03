import {categories, menu} from "./menu-items.js";
export default function init() {
    const content = document.getElementById('content');
    content.innerHTML = "";
    content.appendChild(component('h1', "Menu"));
    let i = -1;
    for (const item of menu) {
        if (i === -1 || item.category !== i) {
            i++;
            content.appendChild(component('h2', categories[i]));
        }
        const itemEl = makeCard(item);
        content.appendChild(itemEl);
    }
}
function makeCard(item) {
    const {title, desc, cost} = item;
    const card = document.createElement('div');
    card.classList.add('menu-card');

    card.appendChild(component('h3', title));
    card.appendChild(component('span', cost));
    card.appendChild(component('p', desc));

    return card;
}
function component(tag, content) {
    const el = document.createElement(tag);
    el.innerHTML = content;
    return el;
}