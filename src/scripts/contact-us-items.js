const contacts = [
    new Contact(
        "Terry Davis",
        "Chef",
        "000-111-222-3333",
        "terryisdavis@templeos.com"
    ),
    new Contact(
        "George Hotz",
        "Manager",
        "123-098-7654",
        "yourehackednow@gmail.com",
    ),
    new Contact(
        "Carson Gross",
        "Waiter",
        "765-412-3098",
        "iamfrontendofthisrestaurant@gmail.com",
    )
];
export default contacts;
function Contact(title, post, telephone, email) {
    this.title = title;
    this.post = post;
    this.telephone = telephone;
    this.email = email;
}