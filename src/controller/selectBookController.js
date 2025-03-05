import { selectedBook, displayCart } from "../script.js"
import { displayCart, displayItem } from "../view/cart.js"
//display




//affiche nom du livre selectionné ainsi que le bouton pour l'ajouter au panier
export function createBookCard(book){
    document.getElementById("selectedBookTitle").innerHTML = `<h3>${book.title}</h3>`;
    document.getElementById("buyBook").style.display = "block";

    //Le bouton addCart gère l'ajout du livre au panier et affiche le panier.
    document.getElementById("addCart").addEventListener("click", event => {
        event.preventDefault();
        cart.push(selectedBook);
        displayCart()
    })
}

