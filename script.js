import { getSelectedBook } from "./src/controller/formController.js"
import { createDatalist } from "./src/view/formView.js"
import { addToCart, setBookState } from "./src/controller/bookController.js"
import { displayBookCard } from "./src/view/bookView.js"
import { displayCart, displayFinalTotal } from "./src/view/cartView.js"
import { getData } from "./src/controller/dataController.js"

const booksList = await getData('src/model/booksList.json')  //récupération des models booksList et offers.//idéalement il faudrait les passer avec des arguemnts, non?
const offers = await getData("src/model/offers.json");

console.log("location: ",window.location.href)
let cart = [];
let isBookAvailable = false;
let selectedBook;

const form = document.querySelector("form");
export let addButton = document.getElementById("addToCart");
let checkoutButton = document.getElementById("checkoutButton");
let displayTotalEl = document.getElementById("displayTotalEl");

// console.log("offers : ", offers)
// console.log("booksList : ", booksList)

createDatalist(booksList) //affichage du model booksList sous la forme d'une datalist

//soumettre le livre choisi par le user
form.addEventListener("submit", (event) => {
    event.preventDefault(), 
    updateBook()
    displayBookCard(isBookAvailable, selectedBook, addButton) // on affiche la bookCard (titre + bouton d'ajout)
})

//ajouter au panier
addButton.addEventListener("click", (event) => {
    event.preventDefault();
    addToCart(selectedBook, cart)
    displayCart(selectedBook, cart)/* change le style none de l'espace cart en block et ajoute une ligne par livre choisi */
});

//Valider le panier
checkoutButton.addEventListener("click", (event) => {
    event.preventDefault();
    displayFinalTotal(cart, displayTotalEl, offers);
});


//update les infos du book choisi, update son état
function updateBook() {
    selectedBook = getSelectedBook(selectedBook, booksList)
    isBookAvailable = setBookState(selectedBook) //on modifie l'état du livre
}

