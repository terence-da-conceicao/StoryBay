
// import { displayBookState } from "../view/formView.js"




//cette fonction 'na rien à faire là, mais je vois pas comment la gérer autrement
//car il faut appeler cette condition lors du submit. (ou utiliser async await???)
export function setBookState(book) {
    let state = book? true : false;
    return state
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

