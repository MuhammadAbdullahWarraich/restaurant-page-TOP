const categories = [
    "main dishes",
    "sides",
    "beverages"
];
class Item {
    constructor(title, desc, cost, category) {
        this.title = title;
        this.desc = desc;
        this.cost = cost;
        this.category = category;
    }
}
let menu = [
   new Item(
    "Honey Tea",
    "A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!",
    "$2",
    2
   ),
   new Item(
    "Beary Tea",
    "A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.",
    "$3",
    2
   ),
   new Item(
    "Toast and Jam",
    "A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.",
    "$1",
    1
   ),
   new Item(
    "Fresh Fruit",
    "A small bowl of fresh fruit, whatever we find at the market for the day.",
    "$3",
    1
   ),
   new Item(
    "Pancakes",
    "A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.",
    "$4",
    0
   ),
   new Item(
    "French Toast",
    "Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.",
    "$5",
    0
   ),
];

menu.sort((a, b) => a.category > b.category ? 1 : -1);
export {
    categories,
    menu
}