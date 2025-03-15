import { removeItem, getTotal } from "../controller/cartController.js"
import { displayCheapestCart, undisplayCheapestCart } from "../view/cheapestCartView.js"

export function displayCart(book, cart) {
    const cartCard = document.getElementById("cartCard");
    const index = cart.indexOf(book);
    displayElement(cartCard)
    displayItemCard(book, cart, index)
}


export function displayFinalTotal(cart, element, offers) {
    displayElement(element); // l'espace où s'affiche le total
    displayTotal(cart, element);
    displayCheapestCart(cart, offers);
}




export function displayElement(el) {
    if (el.style.display === "none") {
        el.style.display = "block";
    }
}

export function undisplayCart() {
    const items = document.getElementById("items")
    const cartCard = document.getElementById("cartCard")
    items.innerHTML = "";
    cartCard.style.display = "none";
    undisplayCheapestCart();
}




function displayItemCard(book, cart, index) {
    const li = document.createElement("li");
    li.classList.add("py-2");

    const infoContainer = displayItemInfos(li, book);
    displayRemoveButton(infoContainer, index, cart, book);
    
    items.appendChild(li);
}


function displayItemInfos(line, book) {
    const container = document.createElement("div");
    container.classList.add("flex", "items-center", "justify-between", "gap-x-4");

    const title = document.createElement("span");
    title.innerHTML = `${book.title}`;
    title.classList.add("block", "w-full", "underline");
    line.appendChild(title);

    const price = document.createElement("span");
    price.innerHTML = `Prix : ${book.price}€`;
    price.classList.add("block", "text-gray-400");
    container.appendChild(price);

    line.appendChild(container);
    return container;
}







// Ici, on a un appel à removeItem() qui devrait être dans le controller, mais vu que 
//l'archi n'est pas un MVC ou un médiateur strict, tant pis
function displayRemoveButton(container, index, cart) {
    const remove = document.createElement("button");
    remove.classList.add(
        "inline-block", "rounded-full", "border", "border-fuchsia-600", 
        "p-3", "text-fuchsia-600", "hover:border-red-600", "hover:text-red-600", 
        "focus:ring-3", "focus:outline-hidden"
    );
    remove.id = "remove";
    remove.innerText = 'Retirer';

    remove.addEventListener("click", (event) => {
        event.preventDefault();

        // Récupérer le parent <li> et le supprimer
        const li = container.closest("li"); // Trouve le <li> parent
        removeItem(li, index, cart);
        undisplayItem(li); // Supprime toute la ligne
    });

    container.appendChild(remove);
}




function undisplayItem(line) {
    line.remove();
}


function displayTotal(cart, element) {
    let total = getTotal(cart);
    element.innerHTML = `Total : ${total}€`
}

