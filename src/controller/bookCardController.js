import { displayCart } from "../view/cartView.js"

export function setBookState(book) {
    let state = book? true : false;
    return state
}

//ce n'est pas logique de mettre displayCart() ici
// car c'est du view et pas du controller. Mais il faut bien
// que le displayCart() soit déclenché par le bohton,
// c'est chelou de mettre un état sur le bouton et de lancer
//la fonction depuis script avec une condition??

export function addToCart(book, cart) {
    console.log("cart : ",cart)
    console.log("book : ",book)
    cart.push(book);
}

