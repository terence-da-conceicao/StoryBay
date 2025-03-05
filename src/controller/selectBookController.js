// import { selectedBook, displayCart } from "../script.js"
// import { displayCart, displayItem } from "../view/cart.js"
import { setBookState } from "../controller/formController.js"
import { displayBookState } from "../view/formView.js"


//display

//cette fonction 'na rien à faire là, mais je vois pas comment la gérer autrement
//car il faut appeler cette condition lors du submit. (ou utiliser async await???)
export function bookState(book, state) {
    if (book) {
        setBookState(state);
        displayBookState(state)
        console.log("selectedBook : ",book)
        console.log("isBookAvailable : ",state)
    }
}

//affiche nom du livre selectionné ainsi que le bouton pour l'ajouter au panier
// export function createBookCard(book){
//     document.getElementById("selectedBookTitle").innerHTML = `<h3>${book.title}</h3>`;
//     document.getElementById("buyBook").style.display = "block";

//     //Le bouton addCart gère l'ajout du livre au panier et affiche le panier.
//     document.getElementById("addCart").addEventListener("click", event => {
//         event.preventDefault();
//         cart.push(selectedBook);
//         displayCart()
//     })
// }

