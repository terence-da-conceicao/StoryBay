import { getData, getOffers } from "./src/controller/dataController.js"
import { getSearchedBook } from "./src/controller/formController.js"
import { addToCart, setBookState } from "./src/controller/bookController.js"
import { displayBookCard } from "./src/view/bookView.js"
import { toClear } from "./src/controller/cartController.js"
import { displayCart, displayFinalTotal, undisplayCart, updateTotalButton } from "./src/view/cartView.js"


const offers = await getOffers("src/model/offers.json");

let cart = [];
let selectedBook = "";
let searchedValue = "";
let isBookAvailable = false;
const form = document.querySelector("form");
let checkoutButton = document.getElementById("checkoutButton");
let displayTotalEl = document.getElementById("displayTotalEl");
const clear = document.getElementById("clearCart");
export let addButton = document.getElementById("addToCart");



form.addEventListener("submit", async (event) => {
    event.preventDefault(); 
    searchedValue = getSearchedBook();
    selectedBook = await getData(searchedValue);
    updateBook();
    displayBookCard(isBookAvailable, selectedBook, addButton);
})



addButton.addEventListener("click", (event) => {
    event.preventDefault();
    addToCart(selectedBook, cart);
    displayCart(selectedBook, cart);
    updateTotalButton(cart, checkoutButton);
});



checkoutButton.addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById("items").style.display = "none";
    displayFinalTotal(cart, displayTotalEl, offers);
});


clear.addEventListener("click", (event) => {
    event.preventDefault();
    toClear(cart);
    undisplayCart();
    console.log(cart)
    updateTotalButton(cart, checkoutButton);

});


//update les infos du book choisi, update son état
function updateBook() {
    isBookAvailable = setBookState(selectedBook);
}

