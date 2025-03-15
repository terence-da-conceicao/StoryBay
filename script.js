import { getSelectedBook } from "./src/controller/formController.js"
import { createDatalist } from "./src/view/formView.js"
import { addToCart, setBookState } from "./src/controller/bookController.js"
import { displayBookCard } from "./src/view/bookView.js"
import { displayCart, displayFinalTotal, undisplayCart } from "./src/view/cartView.js"
import { getData } from "./src/controller/dataController.js"
import { toClear } from "./src/controller/cartController.js"
import { updateTotalButton } from "./src/view/cartView.js"



const booksList = await getData('src/model/booksList.json')  //récupération des models booksList et offers.//idéalement il faudrait les passer avec des arguemnts, non?
const offers = await getData("src/model/offers.json");

let cart = [];
let isBookAvailable = false;
let selectedBook;
export let addButton = document.getElementById("addToCart");
const form = document.querySelector("form");
let checkoutButton = document.getElementById("checkoutButton");
let displayTotalEl = document.getElementById("displayTotalEl");
const clear = document.getElementById("clearCart");

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
    updateTotalButton(cart, checkoutButton);
});

//Valider le panier
checkoutButton.addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById("items").style.display = "none";
    displayFinalTotal(cart, displayTotalEl, offers);
});

clear.addEventListener("click", (event) => {
    event.preventDefault();
    // document.getElementById("selectedBookTitle").innerHTML = "";
    // document.getElementById("bookCard").style.display = "none";
    toClear(cart);
    undisplayCart();
    console.log(cart)
    updateTotalButton(cart, checkoutButton);
    // selectedBook = "";
});


//update les infos du book choisi, update son état
function updateBook() {
    selectedBook = getSelectedBook(selectedBook, booksList)
    isBookAvailable = setBookState(selectedBook) //on modifie l'état du livre
}

