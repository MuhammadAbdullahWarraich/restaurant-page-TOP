
import RestaurantImage from '../media/restaurant-portrait.jpg';

export default function init() {
    const children = [];

    children.push(component('h1', 'Welcome to the best restaurant!'));
    children.push(component('p', "We're not joking! Just ask our customers."));

    children.push((function() {
        const image = component('img');
        image.src = RestaurantImage;
        image.classList.add('image');
        return image;
    })());

    children.push(component('h2', "Hours"));
    const hours = listComponent('ul', [
        'Monday to Thursday - 6 am to 10pm',
        'Weekends (Fri - Sun) - 8am to 12am',
    ]);
    children.push(hours);

    children.push(component('h2', "Locations"));
    children.push(listComponent('ol', [
        "123 Programmer Street,  Alpha Colony, Goofy Country",
        "321-A xyz Street, Beta Town, Awesome City, Earth"
    ]));

    const content = document.getElementById('content');
    for (const child of children) {
        content.appendChild(child);
    }
}
function listComponent(tag, items) {
    let str = "";
    for (const li of items) {
        str += `<li>${li}</li>`;
    }
    return component(tag, str);
}
function component(tag, content) {
    const el = document.createElement(tag);
    if (content !== undefined) el.innerHTML = content;
    return el;
}