import { removeItem, getTotal } from "../controller/cartController.js"
import { displayCheapestCart, undisplayCheapestCart } from "../view/cheapestCartView.js"


export function displayCart(book, cart) {
    const cartCard = document.getElementById("cartCard");
    const items = document.getElementById("items");
    displayElement(items);
    const index = cart.indexOf(book);
    displayElement(cartCard)
    displayItemCard(book, cart, index)
}


export function displayFinalTotal(cart, element, offers) {
    document.getElementById("finalCart").style.display = "block";
    displayElement(element); // l'espace où s'affiche le total
    displayTotal(cart, element);
    displayCheapestCart(cart, offers);
}

export function updateTotalButton(cart, checkoutButton) {
    let total = getTotal(cart);
    console.log("updateTotalButton. total: ",total, " , ", typeof total)
    checkoutButton.innerHTML = "Valider le panier"; //réinitialisation
    if (total > 0) {
    checkoutButton.innerHTML = `Valider le panier (${total})€`;
    }
}


function displayTotal(cart, element) {
    let total = getTotal(cart);
    console.log("displayTotal. total :", total, " , ", typeof total)
    element.innerHTML = `Total : ${total}€`;
}


/* <div id="finalCart">
            <h3 id="displayTotalEl" style="display:none"></h3>
            <h3 id="calcul"></h3>
            <h4 id="discount1Message"></h4>
            <ul id="discountBooks"></ul>
            <p id="discount1&3Message"></p>
            <h3 id="discountTotalMessage"></h3>
            <h4 id="saved"></h4>
        </div>*/

export function displayElement(el) {
    if (el.style.display === "none") {
        el.style.display = "block";
    }
}

export function undisplayCart() {
    const items = document.getElementById("items")
    // const cartCard = document.getElementById("cartCard")
    items.innerHTML = "";
    // cartCard.style.display = "none";
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
    container.id = "container";
    container.classList.add("flex", "items-start", "justify-between", "gap-x-4"); // items-start pour aligner en haut

    const textContainer = document.createElement("div"); 
    textContainer.classList.add("flex", "flex-col"); // Permet d'aligner title et price correctement

    const title = document.createElement("span");
    title.innerHTML = book.title;
    title.classList.add("block", "w-full", "underline");

    const price = document.createElement("span");
    price.innerHTML = `Prix : ${book.price}€`;
    price.classList.add("block", "text-gray-400");

    textContainer.appendChild(title);
    textContainer.appendChild(price);
    container.appendChild(textContainer);
    
    line.appendChild(container);
    return container;
}






function displayRemoveButton(container, index, cart) {
    const remove = document.createElement("button");
    remove.classList.add(
        "inline-block", "rounded-full", "border", "border-fuchsia-600", 
        "p-3", "text-fuchsia-600", "hover:border-fuchsia-900", "hover:text-fuchsia-900", 
        "focus:ring-3", "focus:outline-hidden"
    );
    remove.id = "remove";
    remove.innerText = 'Retirer';

    remove.addEventListener("click", (event) => {
        event.preventDefault();
        const li = container.closest("li");
        removeItem(li, index, cart);
        undisplayItem(li);
        let checkoutButton = document.getElementById("checkoutButton");
        updateTotalButton(cart, checkoutButton);
    });

    container.appendChild(remove);
}



function undisplayItem(line) {
    line.remove();
}



