import { removeItem, getTotal } from "../controller/cartController.js"
import { displayCheapestCart } from "../view/cheapestCartView.js"

export function displayCart(book, cart) {
    const cartCard = document.getElementById("cartCard");
    const index = cart.indexOf(book);
    displayElement(cartCard)
    displayItemCard(book, cart, index)
}


export function displayFinalTotal(cart, element, offers) {
    console.log(offers)
    displayElement(element); // l'espace où s'affiche le total
    displayTotal(cart, element);
    displayCheapestCart(cart, offers);
}




export function displayElement(el) {
    if (el.style.display === "none") {
        el.style.display = "block";
    }
}




function displayItemCard(book, cart, index) {
    const li = document.createElement("li");
    displayItemInfos(li, book);
    displayRemoveButton(li, index, cart, book)
    items.appendChild(li);
}


function displayItemInfos(line, book) {
    line.innerHTML = `${book.title}, ${book.price}€`;
}


// Ici, on a un appel à removeItem() qui devrait être dans le controller, mais vu que 
//l'archi n'est pas un MVC ou un médiateur strict, tant pis
function displayRemoveButton(line, index, cart){
    const remove = document.createElement("button");
    remove.id = "remove"
    remove.innerText = 'Retirer';
    remove.addEventListener("click", (event) => {
        event.preventDefault();
        removeItem(line, index, cart);
        undisplayItem(line);
    });
    line.appendChild(remove);
}


function undisplayItem(line) {
    line.remove();
}


function displayTotal(cart, element) {
    let total = getTotal(cart);
    element.innerHTML = `Total : ${total}€`
}

