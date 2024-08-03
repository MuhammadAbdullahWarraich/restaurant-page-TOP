
import RestaurantImage from '../media/restaurant.jpg';

export default function initialLoad() {
    const children = [];

    children.push(component('h1', 'Welcome to the best restaurant!'));
    children.push(component('p', "We're not joking! Just ask our customers."));

    children.push((function() {
        const image = component('img');
        image.src = RestaurantImage;
        image.classList.add('image');
        return image;
    })());

    const hours = component('ul', (function() {
        let str = '';
        const timings = [
            'Monday to Thursday - 6 am to 10pm',
            'Weekends (Fri - Sun) - 8am to 12am',
        ];
        for (const el of timings) {
            str += `<li>${el}</li>`;
        }
        return str;
    })());
    children.push(hours);

    const content = document.getElementById('content');
    for (const child of children) {
        content.appendChild(child);
    }
}

function component(tag, content) {
    const el = document.createElement(tag);
    if (content !== undefined) el.innerHTML = content;
    return el;
}