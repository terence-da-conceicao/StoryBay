export function setBookState(book) {
    let state = book? true : false;
    return state
}

export function addToCart(book, cart) {
    cart.push(book);
}


