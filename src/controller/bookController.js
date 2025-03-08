


export function setBookState(book) {
    let state = book? true : false;
    return state
}

export function addToCart(book, cart) {
    console.log("cart : ",cart)
    console.log("book : ",book)
    cart.push(book);
}


